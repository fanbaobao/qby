// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
  .directive('showTabs', function ($rootScope) {
    return {
      restrict: 'A',
      link: function ($scope, $el) {
        $rootScope.hideTabs = false;
      }
    };
  })
  .directive('hideTabs', function ($rootScope) {
  return {
    restrict: 'A',
    link: function ($scope, $el) {
      $rootScope.hideTabs = true;
    }
  };
})
  .directive("mystarselect", function () {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        level: '=',
      },
      template: '<div id="mystarselect"></div>',
      link: function (scope) {
        function star5(starid) {
          src = "../img/detail/";
          this.star_on_left = src + "icon_collect_pressed.png";
          this.star_off_left = src + "icon_collect.png";
          this.star_on_right = src + "icon_collect_pressed.png";
          this.star_off_right = src + "icon_collect.png";
          this.id = starid;
          this.point = 0;

          this.initial = starInitial;
          this.redraw = starRedraw;
          this.attach = starAttach;
          this.deattach = starDeAttach;
          this.doall = starDoall;
        }

        function starDoall(point) {
          this.initial();
          this.attach();
          this.redraw(point);
        }

        function starInitial() {
          var html = "<div style='float:left'>" +
            "<img id='star" + this.id + "_1' point='1' src='" + this.star_off_right + "'>&nbsp;";
          html += "<img id='star" + this.id + "_2' point='2' src='" + this.star_off_right + "'>&nbsp;";
          html += "<img id='star" + this.id + "_3' point='3' src='" + this.star_off_right + "'>&nbsp;";
          html += "<img id='star" + this.id + "_4' point='4' src='" + this.star_off_right + "'>&nbsp;";
          html += "<img id='star" + this.id + "_5' point='5' src='" + this.star_off_right + "'>" + "</div>";
          //document.write(html);
          document.getElementById("mystarselect").innerHTML = html;
        }

        function starAttach() {
          for (var i = 1; i < 6; i++) {
            document.getElementById("star" + this.id + "_" + i).style.cursor = "pointer";
            document.getElementById("star" + this.id + "_" + i).onmouseover = moveStarPoint;
            document.getElementById("star" + this.id + "_" + i).onmouseout = outStarPoint;
            document.getElementById("star" + this.id + "_" + i).starid = this.id;
            document.getElementById("star" + this.id + "_" + i).onclick = setStarPoint;
          }
        }

        function starDeAttach() {
          for (var i = 1; i < 6; i++) {
            document.getElementById("star" + this.id + "_" + i).style.cursor = "default";
            document.getElementById("star" + this.id + "_" + i).onmouseover = null;
            document.getElementById("star" + this.id + "_" + i).onmouseout = null;
            document.getElementById("star" + this.id + "_" + i).onclick = null;
          }
        }

        function starRedraw(point) {
          for (var i = 1; i < 6; i++) {
            if (i <= point)
              if (parseInt(i / 2) * 2 == i)
                document.getElementById("star" + this.id + "_" + i).src = this.star_on_right;
              else
                document.getElementById("star" + this.id + "_" + i).src = this.star_on_left;
            else if (parseInt(i / 2) * 2 == i)
              document.getElementById("star" + this.id + "_" + i).src = this.star_off_right;
            else
              document.getElementById("star" + this.id + "_" + i).src = this.star_off_left;
          }
        }

        function moveStarPoint(evt) {
          var pstar = evt ? evt.target : event.toElement;
          var point = pstar.getAttribute("point");
          var starobj = new star5(pstar.starid);
          starobj.redraw(point);
        }

        function outStarPoint(evt) {
          var pstar = evt ? evt.target : event.srcElement;
          var starobj = new star5(pstar.starid);
          starobj.redraw(0);
        }

        function setStarPoint(evt) {
          var pstar = evt ? evt.target : event.srcElement;
          var starobj = new star5(pstar.starid);
          starobj.deattach();
          var n = pstar.getAttribute("point");
          console.log("选择的等级:" + n);
          scope.level = n;
          starobj.doall(n);
        }

        var star = new star5("point");
        star.doall(5);
      }
    };
  })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider,$stateProvider, $urlRouterProvider) {
  $ionicConfigProvider.platform.android.tabs.position('bottom');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  //
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
    .state('tab.dash-detail', {
      cache:false,
      url: '/dash/dashdetail/:dashId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/dash-detail.html',
          controller: 'dashDetailCtrl'
        }
      }
    })
    .state('tab.dash-detail-order', {
      cache:false,
      url: '/dash/detailorder/:gId',
      views: {
        'tab-dash': {
          templateUrl: 'templates/detail-order.html',
          controller: 'dashDetailorderCtrl'
        }
      }
    })
  // 1.1永生花
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chats-flowers', {
      url: '/chats/flowers',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-flowers.html',
          controller: 'FlowersCtrl'
        }
      }
    })
    // 1.2鲜花
    .state('tab.chats-xianhua', {
      url: '/chats/xianhua',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-xianhua.html',
          controller: 'XianhuaCtrl'
        }
      }
    })
    //1.3品牌公仔
    .state('tab.chats-pinpaigongzai', {
      url: '/chats/pinpaigongzai',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-pinpaigongzai.html',
          controller: 'PpgzCtrl'
        }
      }
    })
    //1.4蛋糕
    .state('tab.chats-dangao', {
      cache:false,
      url: '/chats/dangao',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-dangao.html',
          controller: 'DangaoCtrl'
        }
      }
    })
    //1.5商务鲜花
    .state('tab.chats-shangwuxianhua', {
      url: '/chats/shangwuxianhua',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-shangwuxianhua.html',
          controller: 'ShangwuxianhuaCtrl'
        }
      }
    })
    //1.6礼篮
    .state('tab.chats-lilan', {
      url: '/chats/lilan',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-lilan.html',
          controller: 'LilanCtrl'
        }
      }
    })
    //1.7特色礼品
    .state('tab.chats-teselipin', {
      url: '/chats/teselipin',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-teselipin.html',
          controller: 'TeselipinCtrl'
        }
      }
    })
    //1.8巧克力
    .state('tab.chats-qiaokeli', {
      url: '/chats/qiaokeli',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-qiaokeli.html',
          controller: 'QiaokeliCtrl'
        }
      }
    })
    //1.9绿植花卉
    .state('tab.chats-lvzhihuahui', {
      url: '/chats/lvzhihuahui',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-rmtj-lvzhihuahui.html',
          controller: 'LvzhihuahuiCtrl'
        }
      }
    })


    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    cache:false,
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
//  我的
  .state('tab.mine', {
    cache:false,
    url: '/mine',
    views: {
      'tab-mine': {
        templateUrl: 'templates/tab-mine.html',
        controller: 'MineCtrl'
      }
    }
  })
    .state('tab.mine-login',{
      url: '/mine/login',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-login.html',
          controller: 'MineLoginCtrl'
        }
      }
    })
      .state('tab.mine-allorder', {
      cache:false,
      url: '/mine/allorder',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-allorders.html',
          controller: 'MineallorderCtrl'
        }
      }
    })
    .state('tab.mine-orderpinglun', {
      cache:false,
      url: '/mine/pinglun/:order_number',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-pinglun.html',
          controller: 'pinglunCtrl'
        }
      }
    })
    .state('tab.mine-collect', {
      cache:false,
      url: '/mine/collect',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-collect.html',
          controller: 'MinecollectCtrl'
        }
      }
    })
    .state('tab.mine-dpj', {
      cache:false,
      url: '/mine/dpj',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-dpj.html',
          controller: 'MinedpjCtrl'
        }
      }
    })
    .state('tab.mine-allorder-orderdetails', {
      cache:false,
      url: '/mine/orderdetails/:order_number',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-allorders-orderdetails.html',
          controller: 'MineorderdetailsCtrl'
        }
      }
    })
    .state('tab.mine-Payment', {
      cache:false,
      url: '/mine/Payment',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-Payment.html',
          controller: 'MinePaymentCtrl'
        }
      }
    })
    .state('tab.mine-Payment-pay', {
      cache:false,
      url: '/mine/Payment/:order_number',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-Payment-pay.html',
          controller: 'MinePaymentDetailCtrl'
        }
      }
    })
    .state('tab.mine-slogin', {
      url: '/mine/slogin',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-slogin.html',
          controller: 'MineSloginCtrl'
        }
      }
    })
    .state('tab.mine-login-forget', {
      url: '/mine/login/forget',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-login-forget.html',
          controller: 'MineFloginCtrl'
        }
      }
    })
    .state('tab.mine-login-user', {
      url: '/mine/ulogin',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-login-user.html',
          controller: 'MineloginUserCtrl'
        }
      }
    })
    .state('tab.mine-login-user-alter', {
      url: '/mine/ualogin',
      views: {
        'tab-mine': {
          templateUrl: 'templates/mine-login-user-alter.html',
          controller: 'MineloginUserAlterCtrl'
        }
      }
    })
  //星座
    .state('tab.dash-start',{
      url:'/dash/start',
      views:{
        'tab-dash':{
          templateUrl:'templates/dash-start.html',
          controller:'DashStart'
        }
      }
    })
  //客户评价
    .state('tab.dash-kehucomment',{
      url:'/dash/kehucomment',
      views:{
        'tab-dash':{
          templateUrl:'templates/dash-kehucomment.html',
          controller:'KehuComment'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
