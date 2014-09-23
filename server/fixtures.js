// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  var westinId = Meteor.users.insert({
    profile: { name: 'westin' }
  });
  var westin = Meteor.users.findOne(westinId);
  
  var welcomeId = Posts.insert({
    title: 'Work in Progress here.',
    userId: westin._id,
    author: westin.profile.name,
    url: 'http://github.com/westeezy',
    submitted: now,
    commentsCount: 0,
    upvoters: [], votes: 0
  });

 Comments.insert({
    postId: welcomeId,
    userId: westin._id,
    author: westin.profile.name,
    submitted: now,
    body: 'Nothing to see here!'
  });
  
 }
