angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Dash,$window) {
  $scope.bannerT=Dash.bannerTop();
  console.log($scope.bannerT);
  //搜索框获取焦点时，处理跳转到分类页面
  $scope.goClass=function () {
    $window.location.href='../templates/tab-chats.html';
  }
  //点击登录时，处理跳转到登录页面
  $scope.geLogin=function () {

  }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  // console.log( $scope.chats);
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})
//我的
  .controller('MineCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    }
  })



