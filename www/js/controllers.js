angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Dash,$window) {
  $scope.bannerT=Dash.bannerTop();

  $scope.good=Dash.tehui();

  $scope.xianhua=Dash.jingxuan();

  $scope.classlist=[
    {title:'鲜花',src:'../img/dash/xianhua_icon.png'},
    {title:'永生花',src:'../img/dash/yongshenghua_icon.png'},
    {title:'蛋糕',src:'../img/dash/cake_icon.png'},
    {title:'礼品',src:'../img/dash/gift_icon.png'},
    {title:'巧克力',src:'../img/dash/choclate_icon.png'}
  ];
  // console.log($scope.bannerT);
  //搜索框获取焦点时，处理跳转到分类页面
  $scope.goClass=function () {
    $window.location.href='../templates/tab-chats.html';
  }
  //点击登录时，处理跳转到登录页面
  $scope.goLogin=function () {

  }
  //点击不同的分类时进入不同的类别
  $scope.goThisclass=function (page) {

  }

  //点击进入该商品的卖场
  $scope.sale=function (id) {

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



