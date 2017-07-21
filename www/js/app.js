// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
    .state('tab.mine-login', {
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

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
