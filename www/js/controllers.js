angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
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

//头部banner轮播
  .controller('SliderCtrl', function($scope,$ionicSlideBoxDelegate) {
    $scope.settings = {
      enableFriends: true
    }
    $scope.model = {
      activeIndex: "2",
    };
    /**
     * 单击分页器，跳到指定的幻灯片
     */
    $scope.toSlideIndex = function(index) {
      $scope.model.activeIndex = index;
    };
    /**
     * 第一次轻击幻灯片，停止轮播
     * 第二次轻击幻灯片，开始轮播
     * 依次循环
     */
    $scope.even = 0;
    $scope.stopOrStart = function() {
      if($scope.even == 0) {
        $ionicSlideBoxDelegate.stop();
        $scope.even=1;
      } else {
        $ionicSlideBoxDelegate.start();
        $scope.even=0;
      }
    }
})

//我的
  .controller('MineCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    }
  })



