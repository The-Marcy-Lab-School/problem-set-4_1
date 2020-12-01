// Question 1
function makeFriendList(){
  return {
    _friends: [],
    addFriend: function(name){
      this._friends.push(name)
      return `${name} successfully added.`
    },
    removeFriend: function(name){
      let index = this._friends.indexOf(name)
      if (index === -1) {
        return `${name} not found.`
      }
      this._friends = this._friends.filter(friend => friend !== name)
      return `${name} successfully removed.`
    },
    displayFriends: function(){
      if(this._friends.length === 0){
        return "You have not added any friends."
      }else if(this._friends.length === 1){
        return `${this._friends[0]} is your friend.`
      }else if(this._friends.length === 2){
        return `${this._friends[0]} and ${this._friends[1]} are your friends.`
      }
      let str = ''
      this._friends.forEach((el, index, arr) => {
        if(index === arr.length - 1){
          str += `and ${el} `
        }else{
          str += `${el}, `
        }
      })
      str += "are your friends."
      return str;
    },
  }
}

module.exports = {
  makeFriendList
};