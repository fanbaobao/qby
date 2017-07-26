angular.module('starter.services', [])

.factory('Chats', function($http) {
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
    },
    getalldata:function () {
      return $http.get('http://localhost:3000/all').then(
        function (res) {return res;}
     )},
  };
})
  //  1,永生花
.factory('Flowers',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      yongshenghuafenlei:function () {
        return $http.get('http://192.168.3.147:3000/yongshenghuafenlei').then(
          function (res) {return res;}
        )},
      yongshenghuajiage:function () {
        return $http.get('http://192.168.3.147:3000/yongshenghuajiage').then(
          function (res) {return res;}
        )},
      yongshenghuazonghe:function () {
        return $http.get('http://192.168.3.147:3000/yongshenghuazonghe').then(
          function (res) {return res;}
        )},
      yongshenghuaxiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/yongshenghuaxiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  //  2.鲜花
.factory('Xianhua',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      xianhuafenlei:function () {
        return $http.get('http://192.168.3.147:3000/xianhuafenlei').then(
          function (res) {return res;}
        )},
      xianhuahuajiage:function () {
        return $http.get('http://192.168.3.147:3000/xianhuajiage').then(
          function (res) {return res;}
        )},
      xianhuazonghe:function () {
        return $http.get('http://192.168.3.147:3000/xianhuazonghe').then(
          function (res) {return res;}
        )},
      xianhuaxiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/xianhuaxiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  // ,3，品牌公仔
.factory('Ppgz',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      pinpaigongzaifenlei:function () {
        return $http.get('http://192.168.3.147:3000/pinpaigongzaifenlei').then(
          function (res) {return res;}
        )},
      pinpaigongzaijiage:function () {
        return $http.get('http://192.168.3.147:3000/pinpaigongzaijiage').then(
          function (res) {return res;}
        )},
      pinpaigongzaizonghe:function () {
        return $http.get('http://192.168.3.147:3000/pinpaigongzaizonghe').then(
          function (res) {return res;}
        )},
      pinpaigongzaixiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/pinpaigongzaixiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  //4，蛋糕
  .factory('Dangao',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      dangaofenlei:function () {
        return $http.get('http://192.168.3.147:3000/dangaofenlei').then(
          function (res) {return res;}
        )},
      dangaojiage:function () {
        return $http.get('http://192.168.3.147:3000/dangaojiage').then(
          function (res) {return res;}
        )},
      dangaozonghe:function () {
        return $http.get('http://192.168.3.147:3000/dangaozonghe').then(
          function (res) {return res;}
        )},
      dangaoxiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/dangaoxiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  //  5,商务鲜花
  .factory('Shangwuxianhua',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      shangwuxianhuafenlei:function () {
        return $http.get('http://192.168.3.147:3000/shangwuxianhuafenlei').then(
          function (res) {return res;}
        )},
      shangwuxianhuajiage:function () {
        return $http.get('http://192.168.3.147:3000/shangwuxianhuajiage').then(
          function (res) {return res;}
        )},
      shangwuxianhuazonghe:function () {
        return $http.get('http://192.168.3.147:3000/shangwuxianhuazonghe').then(
          function (res) {return res;}
        )},
      shangwuxianhuaxiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/shangwuxianhuaxiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  //  6.礼篮
  .factory('Lilan',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      lilanfenlei:function () {
        return $http.get('http://192.168.3.147:3000/lilanfenlei').then(
          function (res) {return res;}
        )},
      lilanjiage:function () {
        return $http.get('http://192.168.3.147:3000/lilanjiage').then(
          function (res) {return res;}
        )},
      lilanzonghe:function () {
        return $http.get('http://192.168.3.147:3000/lilanzonghe').then(
          function (res) {return res;}
        )},
      lilanxiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/lilanxiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  // 7，特色礼品
  .factory('Teselipin',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
     teselipinfenlei:function () {
        return $http.get('http://192.168.3.147:3000/teselipinfenlei').then(
          function (res) {return res;}
        )},
      teselipinjiage:function () {
        return $http.get('http://192.168.3.147:3000/teselipinjiage').then(
          function (res) {return res;}
        )},
      teselipinzonghe:function () {
        return $http.get('http://192.168.3.147:3000/teselipinzonghe').then(
          function (res) {return res;}
        )},
      teselipinxiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/teselipinxiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  //8，巧克力
  .factory('Qiaokeli',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      qiaokelifenlei:function () {
        return $http.get('http://192.168.3.147:3000/qiaokelifenlei').then(
          function (res) {return res;}
        )},
      qiaokelijiage:function () {
        return $http.get('http://192.168.3.147:3000/qiaokelijiage').then(
          function (res) {return res;}
        )},
      qiaokelizonghe:function () {
        return $http.get('http://192.168.3.147:3000/qiaokelizonghe').then(
          function (res) {return res;}
        )},
      qiaokelixiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/qiaokelixiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
  //9，绿植花卉
  .factory('Lvzhihuahui',function ($http) {
    return {
      getalldata:function () {
        return $http.get('http://192.168.3.147:3000/all').then(
          function (res) {return res;}
        )},
      lvzhihuahuifenlei:function () {
        return $http.get('http://192.168.3.147:3000/lvzhihuahuifenlei').then(
          function (res) {return res;}
        )},
      lvzhihuahuijiage:function () {
        return $http.get('http://192.168.3.147:3000/lvzhihuahuijiage').then(
          function (res) {return res;}
        )},
      lvzhihuahuizonghe:function () {
        return $http.get('http://192.168.3.147:3000/lvzhihuahuizonghe').then(
          function (res) {return res;}
        )},
      lvzhihuahuixiaoliang:function () {
        return $http.get('http://192.168.3.147:3000/lvzhihuahuixiaoliang').then(
          function (res) {return res;}
        )},
    };
  })
.factory('Dash', function($http) {
    return {
      bannerTop:function () {
        return $http.get('http://localhost:3000/banner').then(
          function (res) {return res;}
        )},
      tehui:function () {
        return $http.get('http://localhost:3000/goods').then(
          function (res) {return res;}
        )},
      jingxuan:function () {
        return $http.get('http://localhost:3000/xhjx').then(
          function (res) { return res;}
        )},
      bannerBot:function () {
        return $http.get('http://localhost:3000/banner').then(
          function (res) {return res;}
        )},
      jingxuanlist:function () {
        return $http.get('http://localhost:3000/jingxuan').then(
          function (res) {return res;}
        )},
      Dashdetail:function(id){
        return $http.get('http://localhost:3000/detail/'+id).then(
          function(res){
            return res.data.data;
        })
      },
      Dashdetaildesc:function(id){
        return $http.get('http://192.168.3.147:3000/detaildesc/'+id).then(
          function(res){
            // console.log(res);
            return res.data.data;
          })
      },
      MoreDetail:function(id){
        return $http.get('http://192.168.3.147:3000/moredetail/'+id).then(
          function(res){
            return res.data.data;
          })
      },
      getallcomment:function (n) {
        console.log(n);
        return $http.get('http://localhost:3000/getallcomment/'+n).then(
          function (res) {
            return res.data.data;
          }
        )
      }
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
      Zhuce:function(user){
        console.log(user)
        return $http.post('http://192.168.3.147:3000/newuser',user).then(function(res){
          console.log(res.data);
          return res.data;
        })
      },
      Alter:function(id,oldpwd,newpwd){
        return $http.put('http://192.168.3.147:3000/alert',{id:id,oldpwd:oldpwd,newpwd:newpwd}).then(function(res){
          return res.data;
        })
      },
      forget:function (user) {
        return $http.put('http://192.168.3.147:3000/forget',user).then(function(res){
          return res.data;
        })
      }
    }
  })
//  代付款
.factory('PaymentPay', function($http){
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
      },
      addpay:function(order){
        return $http.post('http://192.168.3.147:3000/addpay',order).then(function(res){
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
//  评价
.factory('Comment', function($http) {
  return {
   all:function(id){
     return $http.get('http://192.168.3.147:3000/allcomment/'+id).then(function(res){
       return res.data.data;
     })
   },
    pingjia:function(xinxi){
     console.log(xinxi);
     return $http.post('http://192.168.3.147:3000/pinglun',xinxi).then(function(res){
       return res.data;
     })
    },
    updataispj:function(id,ispj){
      console.log(id,ispj)
      return $http.put('http://192.168.3.147:3000/updataispj',{id:id,ispj:ispj}).then(function (res) {
        return res.data;
      })
    }
  }

})
// 购物车
  .factory('Car',function ($http) {
    return {
      addcar:function(xinxi){
        return $http.post('http://192.168.3.147:3000/addcar',xinxi).then(function(res){
          return res.data;
        })
      },
      getdata:function (id) {
          console.log(id);
          return $http.get('http://localhost:3000/allcar/'+id).then(function (res) {
            return res.data.data;
          })
        },
      removedata:function (id,u_id) {
        console.log(id,u_id);
        return $http.delete('http://localhost:3000/deletecar?g_id='+id+'&u_id='+u_id).then(
          function (res) {
            console.log(res);
            return res.data.data;
          }
        )
      },
      updatedata:function (g_id,num,u_id) {
          // console.log(g_id,u_id,num);
        return $http.put('http://localhost:3000/updatecar?g_id='+g_id+'&number='+num+'&u_id='+u_id).then(function (res) {
          return res.data.data;
        })
      }
//  收藏夹
.factory('Collect',function ($http) {
  return {
    addcollect:function(xinxi){
      console.log(xinxi)
        return $http.post('http://192.168.3.147:3000/addcollect',xinxi).then(function(res){
          return res.data;
        })
      },
    removecollect:function(xinxi){
      return $http.delete('http://192.168.3.147:3000/removecollect?u_id='+xinxi.u_id+'&g_id='+xinxi.g_id).then(function(res){
        return res.data;
      })
    },
    allcollect:function(xinxi){
      return $http.get('http://192.168.3.147:3000/allcollect?g_id='+xinxi.g_id +'&u_id='+xinxi.u_id).then(function(res){
        return res.data;
      })
    },
    collect:function(user){
      return $http.get('http://192.168.3.147:3000/collect/'+ user).then(function(res){
        return res.data;
      })
    }
  }
})

