angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Dash,$window) {
  $scope.bannerT=[];//头部轮播
  Dash.bannerTop().then(
    function (result) {
      $scope.bannerT=[];
      if(result.data.success){
        for(var i=0;i<result.data.data.length;i++){
          if(result.data.data[i].flag==0){
            $scope.bannerT.push(result.data.data[i]);
          }
        }
      }
      // console.log($scope.bannerT);
      return ($scope.bannerT);
    }
  );
  Dash.tehui().then(
    function (result) {
      if(result.data.success){
        $scope.good=result.data.data;
      }
    }
  );
  Dash.jingxuan().then(
    function (result) {
      console.log(result.data.data);
      if(result.data.success){
        $scope.xianhua=result.data.data;
      }
    }
  );
  Dash.bannerBot().then(
    function (result) {
      $scope.bannerB=[];
      if(result.data.success){
        for(var i=0;i<result.data.data.length;i++){
          if(result.data.data[i].flag==1){
            $scope.bannerB.push(result.data.data[i]);
          }
        }
      }
      // console.log($scope.bannerB);
      return ($scope.bannerB);
    }
  );
  Dash.jingxuanlist().then(
    function (result) {
      $scope.ysh=[],$scope.dg=[],$scope.lp=[];
      console.log(result.data);
      if(result.data.success){
        $scope.jxlist=result.data.data;
        for(var i=0;i<result.data.data.length;i++){
          if(result.data.data[i].name=='永生花'){
            $scope.ysh.push(result.data.data[i]);
          }else if(result.data.data[i].name=='蛋糕'){
            $scope.dg.push(result.data.data[i]);
          }else if(result.data.data[i].name=='礼品'){
            $scope.lp.push(result.data.data[i]);
          }
        }
      }
    }
  );

  $scope.classlist=[
    {title:'鲜花',src:'../img/dash/xianhua_icon.png'},
    {title:'永生花',src:'../img/dash/yongshenghua_icon.png'},
    {title:'蛋糕',src:'../img/dash/cake_icon.png'},
    {title:'礼品',src:'../img/dash/gift_icon.png'},
    {title:'巧克力',src:'../img/dash/choclate_icon.png'}
  ];
  $scope.culturelist=[
    {title:'行业龙头',src:'../img/dash/brand_icon01.png'},
    {title:'品牌理念',src:'../img/dash/brand_icon02.png'},
    {title:'3小时送达',src:'../img/dash/brand_icon03.png'},
    {title:'送钱实拍',src:'../img/dash/brand_icon04.png'}
  ];
  $scope.jlist=[
    {src:'http://img02.hua.com/slider/teji_banner_yongshenghua.jpg',flag:'ysh'},
    {src:'http://img02.hua.com/m/icon/cake_banner.jpg',flag:'dg'},
    {src:'http://img02.hua.com/slider/banner_gift01.png',flag:'lp'}
  ];
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
  //点击加载更多
  $scope.goMore=function () {

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
  .controller('MineloginUserCtrl', function($scope,$ionicHistory,$window) {
    $scope.go = function(){
      $ionicHistory.goBack();
    }
    $scope.exit = function(){
      localStorage.removeItem('name');
      localStorage.removeItem('id');
      $window.location.href='#/tab/mine';
    }
  })
  .controller('MineloginUserAlterCtrl', function($scope,$ionicHistory,alert) {
    $scope.notes_name = localStorage.getItem('name');
    $scope.notes_id = localStorage.getItem('id');
    $scope.suc = true;
      $scope.go = function(){
        $ionicHistory.goBack();
      }
      $scope.pwdUpdate = function(user){
        alert.Alter($scope.notes_id,user.oldpwd,user.newpwd)
          .then(function(result){
            $scope.suc = result.success;
            console.log($scope.suc);
          })
      }

  })



