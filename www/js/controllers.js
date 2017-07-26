angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope,Dash,$window,$ionicSlideBoxDelegate,$rootScope) {
  $scope.$on('$ionicView.enter', function () {
    // 显示 tabs
    $rootScope.hideTabs = false;
  })
  $scope.bannerT=[];//头部轮播
  Dash.bannerTop().then(
    function (result) {
      $ionicSlideBoxDelegate.update();
      $scope.bannerT=[];
      if(result.data.success){
        for(var i=0;i<result.data.data.length;i++){
          if(result.data.data[i].flag==0){
            $scope.bannerT.push(result.data.data[i]);
          }
        }
      }
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
    $window.location.href='http://localhost:8100/#/tab/chats';
  }
  //点击登录时，处理跳转到登录页面
  $scope.goLogin=function () {
    $window.location.href='http://localhost:8100/#/tab/mine/login';
  }
  //点击不同的分类时进入不同的类别
  $scope.goThisclass=function (page) {

  }
  //点击加载更多
  $scope.goMore=function () {

  }

  //点击进入该商品详情
  $scope.sale=function (id) {
    $scope.Id = id.id
    $window.location.href='#/tab/dash/dashdetail/'+$scope.Id;
  }
})

.controller('ChatsCtrl', function($scope, Chats,$window) {

//  点击搜索显示搜索出来的内容
  $scope.searchRes=function () {

  };
  $scope.activeShow=function ($event) {
    var a = [];
    var p = $event.target.parentNode.parentNode.children;
    for(var i =0,pl= p.length;i<pl;i++) {
      if(p[i] !== $event.target) a.push(p[i]);
    }
    for(var j=0,al=a.length;j<al;j++){
      a[j].className='';
    }
    $event.target.parentNode.className='titleCur';
  };
  $scope.tiao=function (name) {
    switch (name){
      case '永生花':
        $window.location.href='http://localhost:8100/#/tab/chats/flowers';
        break;
      case '鲜花':
      case '全部鲜花':
        $window.location.href='http://localhost:8100/#/tab/chats/xianhua';
        break;
      case '品牌公仔':
        $window.location.href='http://localhost:8100/#/tab/chats/pinpaigongzai';
        break;
      case '蛋糕':
        $window.location.href='http://localhost:8100/#/tab/chats/dangao';
        break;
      case '商务鲜花':
        $window.location.href='http://localhost:8100/#/tab/chats/shangwuxianhua';
        break;
      case '特色礼品':
        $window.location.href='http://localhost:8100/#/tab/chats/teselipin';
        break;
      case '礼篮':
        $window.location.href='http://localhost:8100/#/tab/chats/lilan';
        break;
      case '巧克力':
        $window.location.href='http://localhost:8100/#/tab/chats/qiaokeli';
        break;
      case '绿植花卉':
        $window.location.href='http://localhost:8100/#/tab/chats/lvzhihuahui';
        break;
    }
  }
  //根据价格跳转页面
  $scope.jiagetiao=function (now_price) {
    if(now_price<200){
      $window.location.href='http://localhost:8100/#/tab/chats/xianhua/jiageLow200';
    }else{
      $window.location.href='http://localhost:8100/#/tab/chats/xianhua/jiageH200';
    }
  }
  Chats.getalldata().then(
    function (result) {
      if(result.data.success){
        $scope.rmtjlist=[];
        $scope.xianhualist=[];
        var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0,n7=0,n8=0,n9=0,n10=0;
        $scope.alldata=result.data.data;
        for(var i=0;i<result.data.data.length;i++){
          if(result.data.data[i].name=='鲜花'){
            n1++;
            if(n1==1){ $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='商务鲜花'){
            n2++;
            if(n2==1){  $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='永生花'){
            n3++;
            if(n3==1){ $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='蛋糕'){
            n4++;
            if(n4==1){  $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='巧克力'){
            n5++;
            if(n5==1){  $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='特色礼品'){
            n6++;
            if(n6==1){  $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='品牌公仔'){
            n7++;
            if(n7==1){  $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='礼篮'){
            n8++;
            if(n8==1){  $scope.rmtjlist.push(result.data.data[i]);}
          }else if(result.data.data[i].name=='绿植花卉'){
            n9++;
            if(n9==1){  $scope.rmtjlist.push(result.data.data[i]);}
          }
        }
      }
      console.log($scope.alldata);
    }
  );
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

//商品详情
.controller('dashDetailCtrl', function($scope,Dash,$stateParams,Comment,Car,Collect,$window) {
    $scope.notes_name = localStorage.getItem('name');
    $scope.id = localStorage.getItem('id');
    $scope.detail = [];
    $scope.moredetail=[];
    //判断是否登录
    $scope.Href = function(href){
      if($scope.notes_name){
        $window.location.href = href;
      }else{
        $window.location.href= '#/tab/mine/login'
      }
    }
    $scope.collectxinxi = {
      u_id:$scope.id,
      g_id:$stateParams.dashId
    }
    //判断是符登录
    Collect.allcollect($scope.collectxinxi).then(function(result){
      $scope.isShow = result.success;
    })
    //判断购物车长度
    Car.getdata($scope.id).then(function(result){
      console.log(result)
      $scope.carnum = result.length;
    })
    $scope.addsc= function(){
      if ($scope.notes_name){
        $scope.isShow = false;
        Collect.addcollect($scope.collectxinxi)
      }else{
        $window.location.href= '#/tab/mine/login'
      }
    }
    //移除收藏
    $scope.removesc= function(){
      $scope.isShow = true;
      Collect.removecollect($scope.collectxinxi)
    }
    Dash.Dashdetail($stateParams.dashId).then(function(result){
      console.log(result);
      for (var i = 0;i<result.length;i++){
        if (i<4){
          $scope.detail.push(result[i]);
        }
        $scope.moredetail.push(result[i]);
      }
      console.log($scope.detail)
      console.log($scope.moredetail)
    })
    Dash.Dashdetaildesc($stateParams.dashId).then(function(result){
      $scope.detaildesc = result[0];
      $scope.url = "#/tab/dash/detailorder/"+$scope.detaildesc.id;
    })
    Comment.all($stateParams.dashId).then(function(result){
      $scope.comment = result;
      $scope.length = result.length;
    })
    //  加入购物和车
    $scope.addaccount = function(){
      $scope.xinxi = {
        u_id:localStorage.getItem('id'),
        g_id:$stateParams.dashId,
        number:1
      }
      if ($scope.notes_name){
        Car.addcar($scope.xinxi).then(function(result){
          if (result.success){
            alert('成功加入购物车！');
            $scope.carnum = $scope.carnum + 1;
          }
        })
      }else{
        $window.location.href= '#/tab/mine/login';
      }
    }
  })
//下订单
.controller('dashDetailorderCtrl', function($scope,Dash,$stateParams,PaymentPay,$ionicHistory) {
    console.log($stateParams.gId);
    //获取单价
    Dash.Dashdetaildesc($stateParams.gId).then(function(result){
      $scope.price = result[0].now_price;
      console.log($scope.price)
    })
    $scope.data = [
      {value:'--08:00-09:00--'},
      {value:'--09:00-10:00--'},
      {value:'--10:00-11:00--'},
      {value:'--11:00-12:00--'},
      {value:'--12:00-13:00--'},
      {value:'--13:00-14:00--'},
      {value:'--14:00-15:00--'},
      {value:'--15:00-16:00--'},
      {value:'--16:00-17:00--'},
      {value:'--17:00-18:00--'},
    ];
    $scope.order_number = Date.now();
    $scope.paymoney = function (order) {
      console.log(order);
      $scope.orders = {
        u_id:localStorage.getItem('id'),
        g_id:$stateParams.gId,
        number:order.number,
        order_number:$scope.order_number,
        isSure:1,
        amount:order.number*$scope.price,
        consignee:order.consignee,
        pstime:order.pstime,
        psaddress:order.psaddress,
        psphone:order.psphone,
        psshijian:order.psshijian.value,
        psdesc:order.psdesc,
      }
      console.log($scope.orders);
      PaymentPay.addpay($scope.orders).then(function(result){
        console.log(result);
        if(result.success){
          alert('购买成功！')
          $ionicHistory.goBack();
        }
      })
    }
  })
//我的
.controller('MineCtrl', function($scope,$window,$rootScope) {
  $scope.$on('$ionicView.enter', function () {
    // 显示 tabs
    $rootScope.hideTabs = false;
  })
  $scope.notes_name = localStorage.getItem('name');
 $scope.Href = function(href){
   if($scope.notes_name){
     $window.location.href = href;
   }else{
     $window.location.href= '#/tab/mine/login'
   }
 }

})
//登录成功
.controller('MineLoginCtrl', function($scope,Login,$window) {
  $scope.suc='true';
  $scope.info = '登陆';
  $scope.Login = function(user){
    $scope.info = '正在登陆...'
    console.log(user);
     Login.panduanLogin(user.name,user.pwd).then(function(result){
         console.log(result);
         if (result.success){
           $scope.info = '登陆成功';
           localStorage.setItem('name',result.name);
           localStorage.setItem('id',result.id);
           $window.location.href='#/tab/mine';
         }else{
           $scope.info = '登陆';
           $scope.suc=result.success;
         }
     });
  }
})
//注册用户
.controller('MineSloginCtrl', function($scope,Login,$window) {
  $scope.info = '注册';
  $scope.zhuce = function(user){
    $scope.info = '正在注册，请稍后..';
    console.log(user);
    Login.Zhuce(user)
      .then(function(result){
        console.log(result);
        if (result.success){
          $scope.user={};
          $scope.info = '注册成功';
          alert($scope.info);
          user='';
          $window.location.href='#/tab/mine/login';
        }
      })
  }
})
//退出登录
.controller('MineloginUserCtrl', function($scope,$window) {
  $scope.exit = function(){
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    $window.location.href='#/tab/mine';
  }
})
// 忘记密码
.controller('MineFloginCtrl', function($scope,Login,$window) {
  $scope.pwdUpdate = function(user){
    Login.forget(user)
    .then(function(result){
      if (result.success){
        $window.location.href='#/tab/mine/login';
      }
    })
  }
})
//修改密码
.controller('MineloginUserAlterCtrl', function($scope,Login,$window) {
  $scope.notes_name = localStorage.getItem('name');
  $scope.notes_id = localStorage.getItem('id');
  $scope.suc = true;
    $scope.pwdUpdate = function(user){
      Login.Alter($scope.notes_id,user.oldpwd,user.newpwd)
        .then(function(result){
          $scope.suc = result.success;
          localStorage.removeItem('name');
          localStorage.removeItem('id');
          $window.location.href='#/tab/mine';
        })
    }

})
//我的收藏
.controller('MinecollectCtrl', function($scope,Collect) {
    Collect.collect(localStorage.getItem('id')).then(function(result){
      $scope.arr=[];
      if (result.success){
        if (result.data.length == 0){
          $scope.suc = true;
        }else{
          $scope.xinxi = result.data;
          for (var i = 0; i<$scope.xinxi.length;i++){
            $scope.arr.push($scope.xinxi[i]);
          }
        }
      }
    })

    $scope.deletecollect = function(payment){
      console.log(payment);
      $scope.xinxi = {
        u_id:localStorage.getItem('id'),
        g_id:payment.g_id
      }
      Collect.removecollect($scope.xinxi).then(function(result){
        $scope.arr.splice($scope.arr.indexOf(payment),1);
      })
    }

  })
//代付款页面
.controller('MinePaymentCtrl', function($scope,PaymentPay) {
  PaymentPay.payment(localStorage.getItem('id')).then(function(result){
    console.log(result);
    if (result.length == 0){
      $scope.suc=true;
    }else{
      $scope.paymentList = result;
      console.log( $scope.paymentList)
    }
  })
})
//代付款订单详情
.controller('MinePaymentDetailCtrl', function($scope,$stateParams,PaymentPay,$window) {
  PaymentPay.paymentpay($stateParams.order_number).then(function(result){
      $scope.paymentList = result;
      console.log($scope.paymentList)
  })
  $scope.cancel = function(){
   if (confirm('确定要取消此订单吗？')){
     PaymentPay.paycancel($stateParams.order_number).then(function(result){
       console.log(result.success)
       if (result.success){
         $window.location.href='#/tab/mine/Payment';
       }
     })}
  }
  $scope.pay = function(){
    PaymentPay.pay($stateParams.order_number).then(function(result){
      console.log(result.success)
      if (result.success){
        alert('支付成功！')
        $window.location.href='#/tab/mine/Payment';
      }
    })
  }
})
//全部订单
.controller('MineallorderCtrl', function($scope,$stateParams,Order) {
    $scope.paymentList = [];
    Order.orders(localStorage.getItem('id')).then(function(result){
      console.log(result);
      if (result.length == 0){
        $scope.suc=true;
      }else{
        for (var i = 0;i<result.length;i++){
          $scope.paymentList.push(result[i]);
        }
      }
      console.log($scope.paymentList);
    })
    $scope.deleteorder = function(id){
      console.log(id);
      $scope.id = id.order_number;
      console.log($scope.paymentList.indexOf(id));
      Order.deleteorders($scope.id).then(function(result){
        if (result.success){
          $scope.paymentList.splice($scope.paymentList.indexOf(id),1);
        }
      })
    }
})
//全部订单详情
.controller('MineorderdetailsCtrl', function($scope,$stateParams,Order,$window) {
    Order.orderdetails($stateParams.order_number).then(function(result){
        $scope.suc = result[0].ispj;
      $scope.paymentList = result;
    })
    $scope.pinglun = function(){
      $window.location.href = '#/tab/mine/pinglun/' + $stateParams.order_number;
    }
  })
//待评价
.controller('MinedpjCtrl', function($scope,$stateParams,Order) {
    $scope.paymentList = [];
    Order.orders(localStorage.getItem('id')).then(function(result){
      console.log(result);
      for (var i = 0;i<result.length;i++){
        console.log(result[i].ispj);
        if(result[i].ispj == 0){
          $scope.paymentList.push(result[i]);
        }
      }
      if ($scope.paymentList.length == 0){
        $scope.suc=true;
      }
    })
    $scope.deleteorder = function(id){
      console.log(id);
      $scope.id = id.order_number;
      console.log($scope.paymentList.indexOf(id));
      Order.deleteorders($scope.id).then(function(result){
        if (result.success){
          $scope.paymentList.splice($scope.paymentList.indexOf(id),1);
        }
      })
    }
  })
// 评价页面
.controller('pinglunCtrl', function($scope,$stateParams,Order,Comment,$ionicHistory) {
  console.log($stateParams.order_number);
  Order.orderdetails($stateParams.order_number).then(function(result){
    $scope.xinxi = result[0];
  })
  $scope.addpj = function(order,start){
      $scope.suc = false;
      if (start){
        $scope.start = start;
      }else{
        $scope.start = 5;
      }
      $scope.pjxx = {
        id:$stateParams.order_number,
        u_id:localStorage.getItem('id'),
        g_id:$scope.xinxi.id,
        content:order,
        start:$scope.start,
      }
      Comment.pingjia($scope.pjxx).then(function(res){
        console.log(res);
        if (res.success) {
          Comment.updataispj($stateParams.order_number,1).then(function(result){
            console.log(result);
            if (result.success){
              $ionicHistory.goBack();
            }
          })
        }
      })
    }
})

