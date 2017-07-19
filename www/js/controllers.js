angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Dash,$window) {
  $scope.bannerT=Dash.bannerTop();
  $scope.good=Dash.tehui();
  Dash.jingxuan().then(function(result){
    $scope.xianhua=result.data;
  });
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

})
//我的
  .controller('MineCtrl', function($scope) {
    $scope.notes_id = localStorage.getItem('id');
    $scope.notes_name = localStorage.getItem('name');
    console.log($scope.notes_id);
    console.log($scope.notes_name);
  })
  .controller('MineLoginCtrl', function($scope,$ionicHistory,Login,$window) {
    $scope.info = '登陆'
    $scope.go = function(){
      $ionicHistory.goBack();
    }
    $scope.Login = function(user){
      $scope.info = '正在登陆...'
      Login.panduanLogin(user.name,user.pwd)
        .then(function(result){
          console.log(result);
          if (result.success){
            $scope.info = '登陆成功';
            localStorage.setItem('name',result.name);
            localStorage.setItem('id',result.id);
            $window.location.href='#/tab/mine';
          }
        });
    }
  })
  .controller('MineSloginCtrl', function($scope,$ionicHistory,newuser,$window) {
    $scope.info = '注册';
    $scope.go = function(){
      $ionicHistory.goBack();
    }
    $scope.zhuce = function(user){
      $scope.info = '正在注册，请稍后..';
      console.log(user);
      newuser.Zhuce(user.id,user.name,user.pwd)
        .then(function(result){
          console.log(result);
          if (result.success){
            $scope.info = '注册成功';
            $window.location.href='#/tab/mine/login';
          }
        })
    }
  })
  .controller('MineloginUserCtrl', function($scope,$ionicHistory) {
    $scope.go = function(){
      $ionicHistory.goBack();
    }
  })




