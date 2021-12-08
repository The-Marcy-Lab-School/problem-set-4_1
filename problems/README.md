# Problem Set 4-1
## Coding Challenge

1. Create a function factory called , `makeFriendList()`, which returns an object that mutates a private array. 

The object should have a private data property `_friends` which should be initialized to an empty array.

The object should have three methods - `addFriend()`, `removeFriend()`, `displayFriends`.
  * `addFriend()` takes a name (string) argument and adds that argument to the private array. `addFriend()` should return `"<<friend>> successfully added."`. 
  * `removeFriend()`  takes a name and remove that name from the private friend array. If found, it should return `"<<friend>> successfully removed."`. If not found, it should return `"<<friend>> not found."`. 
  * Lastly, `displayFriends()` should return a single string of your friends, comma seperated like so:
  ```js
  // If there is only one friend 
    ['Ann'] => 'Ann is your friend.' 
  // If there are two friends:
    ['Maya', 'Reuben'] => 'Maya and Reuben are your friends.'
  //If there are three or more friends:
    ['Carmen', 'Cielo', 'Steph'] => 'Carmen, Cielo, and Steph are your friends.'
  //If there are no friends:
    [] => 'You have not added any friends.'
  ```

Here's an example of method calls and what they would return:
```js
  const mayasFriends = makeFriendList(); // create a new object with a property of an empty array
  
  mayasFriends.displayFriends()        // 'You have not added any friends.'

  mayasFriends.addFriend('Reuben')     // 'Reuben successfully added.'
  mayasFriends.displayFriends()        // 'Reuben is your friend.'

  mayasFriends.addFriend('JuanPablo')  // 'JuanPablo successfully added.'
  mayasFriends.displayFriends()        // 'Reuben and JuanPablo are your friends.'

  mayasFriends.addFriend('Ann')        // 'Ann successfully added.'
  mayasFriends.displayFriends()        // 'Reuben, JuanPablo, and Ann are your friends.'

  mayasFriends.removeFriend('Reuben')  // 'Reuben successfully removed.'
  mayasFriends.displayFriends()        // 'JuanPablo and Ann are your friends.'

  mayasFriends.removeFriend('Steph')   // 'Steph not found.'
  mayasFriends.displayFriends()        // 'JuanPablo and Ann are your friends.'
```
