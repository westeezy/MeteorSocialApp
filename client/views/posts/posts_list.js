Template.postsList.helpers({
  postsWithRank: function() {
    this.posts.rewind();
    return this.posts.map(function(post, index, cursor) {
      post._rank = index;
      return post;
    });
  },
  hasMorePosts: function(){
    this.posts.rewind();
    return Router.current().limit() == this.posts.fetch().length;
  }
});
