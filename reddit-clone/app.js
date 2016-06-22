var app = angular.module('cloneApp', []);
app.controller('CloneController', CloneController);

function CloneController($scope) {
  $scope.vm = {};
  $scope.vm.hidden = false;
  $scope.vm.voteUp = '\u2191';
  $scope.vm.voteDown= '\u2193';
  $scope.vm.sortBy = '';

  $scope.vm.hiddenComment = false;
  $scope.vm.hiddenCommentForm = false;

  $scope.vm.showForm = function() {
    $scope.vm.hidden = !$scope.vm.hidden;
  }

  $scope.vm.showCommentForm = function(post) {
    post.hiddenCommentForm = !post.hiddenCommentForm;
  }

  $scope.vm.showComments = function(post) {
    post.hiddenComment = !post.hiddenComment;
  }

// add empty array for comments
  $scope.vm.posts = [
    {
      image: 'https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&fit=crop&fm=jpg&h=725&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375',
      title: 'Excellent Vacation Spot!',
      author: 'Jenni Bradstreet',
      description: 'This is some placeholder info so I can make sure things appear as I want them to. Time to add some Chuck Norris facts! CNN was originally created as the "Chuck Norris Network" to update Americans with on-the-spot ass kicking in real-time.',
      votes: 0,
      comments: [
        {
          author: 'Kimmy Schmidt',
          text: 'Awww snap, that was dope!'
        }
      ],
      date: new Date()
    },
  ]

  $scope.vm.newPostData = {
    image: '',
    title: '',
    author: '',
    description: '',
    votes: 0,
    comments: [],
    date: ''
  }

  $scope.vm.newPost = function() {
    var copiedPostData = {};

    angular.copy($scope.vm.newPostData, copiedPostData);
    //need to add a current date to the date field when user hits submit.
    copiedPostData.date = new Date();
    $scope.vm.posts.push(copiedPostData);
    $scope.vm.newPostData.image = '';
    $scope.vm.newPostData.title = '';
    $scope.vm.newPostData.author = '';
    $scope.vm.newPostData.description = '';
    $scope.vm.newPostData.votes = 0;
    $scope.vm.newPostData.comments = [];
    $scope.vm.newPostData.date = '';
  }

  $scope.vm.trackUpVotes = function(post) {
    post.votes++;
  }

  $scope.vm.trackDownVotes = function(post) {
    post.votes--;
  }

  $scope.vm.comments = [
    {
      author: 'Kimmy Schmidt',
      text: 'Awww snap, that was dope!'
    }
  ]

  $scope.vm.newCommentData = {
    author: '',
    text: ''
  }

// add post as a parameter to access the comments array
// use post instead of vm to target specific post data
  $scope.vm.newComment = function(post) {
    var copiedCommentData = {};
    angular.copy(post.newComment, copiedCommentData);
    post.comments.push(copiedCommentData);
    post.newComment.author = '';
    post.newComment.text = '';
  }

  $scope.$watch('vm.comments[0].vm.newCommentData.author', function( newValue, oldValue ) {
    console.log('text changed from', oldValue, 'to', newValue);
  });

console.log($scope);

}
