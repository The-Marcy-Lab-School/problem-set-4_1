const solutions = require('./exercises');

test('Question 1: has a private data properties of friends', () => {
  const reubsFriends = solutions.makeFriendList();
  expect(reubsFriends._friends).toEqual([]);
});

test('Question 1: addFriends works', () => {
  const reubsFriends = solutions.makeFriendList();
  expect(reubsFriends.addFriend('Maya')).toBe('Maya successfully added.');
  expect(reubsFriends._friends).toEqual(['Maya']);
  expect(reubsFriends.addFriend('Juan Pablo')).toBe('Juan Pablo successfully added.');
  expect(reubsFriends._friends).toEqual(['Maya', 'Juan Pablo']);
});

test('Question 1: removeFriends works', () => {
  const mayasFriends = solutions.makeFriendList();
  expect(mayasFriends.addFriend('Reuben')).toBe('Reuben successfully added.');
  expect(mayasFriends.addFriend('Juan Pablo')).toBe('Juan Pablo successfully added.');
  expect(mayasFriends.addFriend('Bronthie')).toBe('Bronthie successfully added.');
  expect(mayasFriends.removeFriend('Bronthie')).toBe('Bronthie successfully removed.');
  expect(mayasFriends._friends).toEqual(['Reuben', 'Juan Pablo']);
  expect(mayasFriends.removeFriend('Reuben')).toBe('Reuben successfully removed.');
  expect(mayasFriends._friends).toEqual(['Juan Pablo']);
  expect(mayasFriends.removeFriend('Ann')).toBe('Ann not found.');
});

test('Question 1: displayFriends works', () => {
  const annsFriends = solutions.makeFriendList();
  expect(annsFriends.displayFriends()).toEqual('You have not added any friends.');
  expect(annsFriends.addFriend('Maya')).toBe('Maya successfully added.');
  expect(annsFriends.displayFriends()).toEqual('Maya is your friend.');
  expect(annsFriends.addFriend('Juan Pablo')).toBe('Juan Pablo successfully added.');
  expect(annsFriends.displayFriends()).toEqual('Maya and Juan Pablo are your friends.');
  expect(annsFriends.addFriend('Bronthie')).toBe('Bronthie successfully added.');
  expect(annsFriends.displayFriends()).toEqual('Maya, Juan Pablo, and Bronthie are your friends.');
  expect(annsFriends.addFriend('Reuben')).toBe('Reuben successfully added.');
  expect(annsFriends.displayFriends()).toEqual('Maya, Juan Pablo, Bronthie, and Reuben are your friends.');
  expect(annsFriends.removeFriend('Bronthie')).toBe('Bronthie successfully removed.');
  expect(annsFriends.displayFriends()).toEqual('Maya, Juan Pablo, and Reuben are your friends.');
});


