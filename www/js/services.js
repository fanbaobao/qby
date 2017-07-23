angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Dash', function($http) {
    return {
      bannerTop:function () {
        return $http.get('http://192.168.3.147:3000/banner').then(
          function (res) {return res;}
        )},
      tehui:function () {
        return $http.get('http://192.168.3.147:3000/goods').then(
          function (res) {return res;}
        )},
      jingxuan:function () {
        return $http.get('http://192.168.3.147:3000/xhjx').then(
          function (res) { return res;}
        )},
      bannerBot:function () {
        return $http.get('http://192.168.3.147:3000/banner').then(
          function (res) {return res;}
        )},
      jingxuanlist:function () {
        return $http.get('http://192.168.3.147:3000/jingxuan').then(
          function (res) {return res;}
        )},
      Dashdetail:function(id){
        return $http.get('http://192.168.3.147:3000/detail/'+id).then(
          function(res){
            return res.data.data;
        })
      },
      Dashdetaildesc:function(id){
        return $http.get('http://192.168.3.147:3000/detaildesc/'+id).then(
          function(res){
            return res.data.data;
          })
      },
    }
  })
//  登陆
.factory('Login', function($http) {
    return{
      panduanLogin:function(id,pwd){
        return $http.post('http://192.168.3.147:3000/login',{id:id,password:pwd}).then(function(res){
            return res.data;
        })
      },
      Zhuce:function(id,nama,pwd){
        return $http.post('http://192.168.3.147:3000/newuser',{id:id,name:name,password:pwd}).then(function(res){
          console.log(res.data);
          return res.data;
        })
      },
      Alter:function(id,oldpwd,newpwd){
        return $http.put('http://192.168.3.147:3000/alert',{id:id,oldpwd:oldpwd,newpwd:newpwd}).then(function(res){
          return res.data;
        })
      }
    }
  })
//  代付款
.factory('PaymentPay', function($http) {
    return{
      payment:function(id){
        return $http.get('http://192.168.3.147:3000/Payment/'+ id).then(function(res){
          return res.data.data;
        })
      },
      paymentpay:function(ordernumber){
        return $http.get('http://192.168.3.147:3000/PaymentPay/'+ ordernumber).then(function(res){
          return res.data.data;
        })
      },
      paycancel:function(ordernumber){
        return $http.delete('http://192.168.3.147:3000/paycancel/'+ ordernumber).then(function(res){
         return res.data;
        })
      },
      pay:function(ordernumber){
        return $http.put('http://192.168.3.147:3000/pay',{id:ordernumber}).then(function(res){
          return res.data;
        })
      }
    }

  })
//  全部订单
.factory('Order', function($http) {
  return {
    orders: function (id) {
      return $http.get('http://192.168.3.147:3000/Order/' + id).then(function (res) {
        return res.data.data;
      })
    },
    deleteorders: function (id) {
      console.log(id);
      return $http.delete('http://192.168.3.147:3000/deleteorder/' + id).then(function (res) {
        return res.data;
      })
    },
    orderdetails:function(id){
      // console.log(id);
      return $http.get('http://192.168.3.147:3000/orderdetails/' + id).then(function (res) {
        return res.data.data;
      })
    }
  }

})
//评价
.factory('Comment', function($http) {
  return {
   all:function(id){
     return $http.get('http://192.168.3.147:3000/allcomment/'+id).then(function(res){
       return res.data.data;
     })
   }
  }

})
