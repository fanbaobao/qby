angular.module('starter.controllers', [])
.controller('DashCtrl', function($scope,Dash,$window,$ionicSlideBoxDelegate,$rootScope,$ionicScrollDelegate) {
  $scope.$on('$ionicView.enter', function () {
    // 显示 tabs
    $rootScope.hideTabs = false;
  })
  Dash.bannerTop().then(
    function (result) {
      $ionicSlideBoxDelegate.update();
      $ionicSlideBoxDelegate.loop(true);
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
  if(localStorage.getItem('id')!=null){
    $scope.showuser=function(){
      return true;
    }
    $scope.showlogin=function () {
      return false;
    }
  }else{
    $scope.showuser=function(){
      return false;
    }
    $scope.showlogin=function () {
      return true;
    }
  }
  $scope.goLogin=function () {
    console.log(localStorage.getItem('id'));
    if(localStorage.getItem('id')!=null){
      $window.location.href='http://localhost:8100/#/tab/mine';
    }else{
      $window.location.href='http://localhost:8100/#/tab/mine/login';
    }
  }
  //回到顶部
  $scope.gotop=function ($event) {
    $ionicScrollDelegate.scrollTop();
  }

  $scope.bannerDesc=function (id) {
    switch (id){
      case 1:
        $window.location.href='http://localhost:8100/#/tab/dash/start';
        break;
      case 2:
        $window.location.href='http://localhost:8100/#/tab/dash/brave';
        break;
      case 3:
        $window.location.href='http://localhost:8100/#/tab/dash/rouse';
        break;
    }
  }
  //点击不同的分类时进入不同的类别
  $scope.goThisclass=function (title) {
    switch (title){
      case '鲜花':
        $window.location.href='http://localhost:8100/#/tab/chats/xianhua';
        break;
      case '永生花':
        $window.location.href='http://localhost:8100/#/tab/chats/flowers';
        break;
      case '蛋糕':
        $window.location.href='http://localhost:8100/#/tab/chats/dangao';
        break;
      case '礼品':
        $window.location.href='http://localhost:8100/#/tab/chats/teselipin';
        break;
      case '巧克力':
        $window.location.href='http://localhost:8100/#/tab/chats/qiaokeli';
        break;
    }
  }
  //点击加载更多
  $scope.goMore=function () {
  }

  //点击进入该商品详情
  $scope.sale=function (id) {
    $scope.Id = id.id;
    $window.location.href='#/tab/dash/dashdetail/'+$scope.Id;
  }
})
.controller('DashStart',function($scope,Dash) {
  //头部轮播

  })
//客户评论
  .controller('KehuComment',function($scope,Dash,$ionicHistory) {
    $scope.go=function () {
      $ionicHistory.goBack();
      parent.location.reload();
    }
    $scope.n=0;
    $scope.getmore=function () {
      $scope.n++;
      Dash.getallcomment($scope.n).then(function (res) {
        $scope.commentdata=res;
        console.log(res)
        if($scope.n==parseInt(res.length/6)+1){
          console.log( angular.element(document.getElementsByClassName('pstart')));
          angular.element(document.getElementById('GengDuo'))[0].children[0].innerHTML='加载完毕';
          angular.element(document.getElementById('GengDuo'))[0].children[0].style.color='orange';
          angular.element(document.getElementById('GengDuo'))[0].children[1].style.background='url(http://m.hua.com/images/icon2b.png) -158px -40px no-repeat';
        }
        // for(var j=0;j<res.length;j++){
        //
        // }
      })
    }

    Dash.getallcomment($scope.n).then(function (res) {
      $scope.commentdata=res;
     // for(var i=0;i<res.length;i++){
     //   switch (res[i].start){
     //     case 1:
     //       $scope.startclass1=function () {
     //         return true;
     //       }
     //       break;
     //     case 2:
     //       $scope.startclass2=function () {
     //         return true;
     //       }
     //       break;
     //   }
     // }
    })
    $scope.startclass1=function (start) {
      if(start==1){
        return true;
      }
    }
    $scope.startclass2=function (start) {
      if(start==2){
        return true;
      }
    }
    $scope.startclass3=function (start) {
      if(start==3){
        return true;
      }
    }
    $scope.startclass4=function (start) {
      if(start==4){
        return true;
      }
    }
    $scope.startclass5=function (start) {
      if(start==5){
        return true;
      }
    }

    $scope.usershow=function (str) {
      if(str>=3){
        return str.substring(0,3)+'...';
      }
      return str;
    }
    $scope.usershow();

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
      // console.log($scope.alldata);
    }
  );
  // $scope.xianhua=

})
//1.1永生花分类列表
.controller('FlowersCtrl', function($scope,Flowers,$ionicHistory) {
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
    $scope.go=function () {
            $ionicHistory.goBack();
          }
      Flowers.getalldata().then(
            function (result) {
              if(result.data.success){
                  $scope.alldata=result.data.data;
                }
            });
  Flowers.yongshenghuafenlei().then(
       function (result) {
            if(result.data.success){
                $scope.yongshenghuafenlei=result.data.data;
              }
         });
   Flowers.yongshenghuajiage().then(
        function (result) {
           if(result.data.success){
                $scope.yongshenghuajiage=result.data.data;
                console.log($scope.alldata);
             }
         });
    Flowers.yongshenghuazonghe().then(
       function (result) {
           if(result.data.success){
                $scope.yongshenghuazonghe=result.data.data;
                console.log($scope.alldata);
              }
          });
  Flowers.yongshenghuaxiaoliang().then(
        function (result) {
            if(result.data.success){
                $scope.yongshenghuaxiaoliang=result.data.data;
                console.log($scope.alldata);
              }
          });
    })
//1.2鲜花分类列表
.controller('XianhuaCtrl', function($scope,Xianhua,$ionicHistory) {
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
     $scope.go=function () {
            $ionicHistory.goBack();
          }
      Xianhua.getalldata().then(
            function (result) {
        if(result.data.success){
                    $scope.alldata=result.data.data;
                  }
            });
    Xianhua.xianhuafenlei().then(
        function (result) {
            if(result.data.success){
                $scope.xianhuafenlei=result.data.data;
              }
         });
   Xianhua.xianhuahuajiage().then(
       function (result) {
            if(result.data.success){
                $scope.xianhuahuajiage=result.data.data;
             }
          });
   Xianhua.xianhuazonghe().then(
        function (result) {
            if(result.data.success){
                $scope.xianhuazonghe=result.data.data;
              }
          });
    Xianhua.xianhuaxiaoliang().then(
        function (result) {
            if(result.data.success){
                $scope.xianhuaxiaoliang=result.data.data;
                console.log($scope.xianhuaxiaoliang);
              }
          });
    })
//1.3品牌公仔
 .controller('PpgzCtrl', function($scope,Ppgz,$ionicHistory) {
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
     $scope.go=function () {
            $ionicHistory.goBack();
          }
        Ppgz.getalldata().then(
            function (result) {
               if(result.data.success){
                    $scope.alldata=result.data.data;
                  }
              });
      Ppgz.pinpaigongzaifenlei().then(
          function (result) {
              if(result.data.success){
                  $scope.pinpaigongzaifenlei=result.data.data;
                }
           });
     Ppgz.pinpaigongzaijiage().then(
         function (result) {
             if(result.data.success){
                  $scope.pinpaigongzaijiage=result.data.data;
                }
            });
      Ppgz.pinpaigongzaizonghe().then(
          function (result) {
              if(result.data.success){
                  $scope.pinpaigongzaizonghe=result.data.data;
                }
            });
      Ppgz.pinpaigongzaixiaoliang().then(
          function (result) {
              if(result.data.success){
                  $scope.pinpaigongzaixiaoliang=result.data.data;
                }
            });
    })
  //  1.4蛋糕
 .controller('DangaoCtrl', function($scope,Dangao,$ionicHistory) {
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
      $scope.go=function () {
            $ionicHistory.goBack();
          }
        Dangao.getalldata().then(
            function (result) {
                if(result.data.success){
                    $scope.alldata=result.data.data;
                  }
              });
      Dangao.dangaofenlei().then(
          function (result) {
              if(result.data.success){
                  $scope.dangaofenlei=result.data.data;
                }
           });
      Dangao.dangaojiage().then(
         function (result) {
              if(result.data.success){
                  $scope.dangaojiage=result.data.data;
               }
            });
     Dangao.dangaozonghe().then(
          function (result) {
              if(result.data.success){
                  $scope.dangaozonghe=result.data.data;
                }
            });
      Dangao.dangaoxiaoliang().then(
          function (result) {
              if(result.data.success){
                 $scope.dangaoxiaoliang=result.data.data;
                }
            });
    })
 //1.5商务鲜花
  .controller('ShangwuxianhuaCtrl', function($scope,Shangwuxianhua,$ionicHistory) {
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
      $scope.go=function () {
            $ionicHistory.goBack();
          }
        Shangwuxianhua.getalldata().then(
            function (result) {
                if(result.data.success){
                   $scope.alldata=result.data.data;
                  }
              });
      Shangwuxianhua.shangwuxianhuafenlei().then(
          function (result) {
              if(result.data.success) {
                  $scope.shangwuxianhuafenlei = result.data.data;
                }
            });
      Shangwuxianhua.shangwuxianhuajiage().then(
          function (result) {
              if(result.data.success){
                  $scope.shangwuxianhuajiage=result.data.data;
                }
            });
      Shangwuxianhua.shangwuxianhuazonghe().then(
         function (result) {
              if(result.data.success){
                  $scope.shangwuxianhuazonghe=result.data.data;
                }
            });
      Shangwuxianhua.shangwuxianhuaxiaoliang().then(
          function (result) {
              if(result.data.success){
                 $scope.shangwuxianhuaxiaoliang=result.data.data;
                }
           });
    })
 //1.6礼篮
 .controller('LilanCtrl', function($scope,Lilan,$ionicHistory) {
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
  $scope.go=function () {
      $ionicHistory.goBack();
      }
     Lilan.getalldata().then(
      function (result) {
        if(result.data.success){
          $scope.alldata=result.data.data;
        }
        });
  Lilan.lilanfenlei().then(
    function (result) {
      if(result.data.success){
        $scope.lilanfenlei=result.data.data;
        }
      });
  Lilan.lilanjiage().then(
    function (result) {
      if(result.data.success){
         $scope.lilanjiage=result.data.data;
        }
      });
  Lilan.lilanzonghe().then(
    function (result) {
      if(result.data.success){
        $scope.lilanzonghe=result.data.data;
        }
      });
  Lilan.lilanxiaoliang().then(
    function (result) {
      if(result.data.success){
        $scope.lilanxiaoliang=result.data.data;
         console.log($scope.xianhuaxiaoliang);
          }
       });
 })
//1.7特色礼品
.controller('TeselipinCtrl', function($scope,Teselipin,$ionicHistory) {
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
  $scope.go=function () {
      $ionicHistory.goBack();
      }
  Teselipin.getalldata().then(
      function (result) {
        if(result.data.success){
           $scope.alldata=result.data.data;
          }
        });
  Teselipin.teselipinfenlei().then(
    function (result) {
      if(result.data.success){
        $scope.teselipinfenlei=result.data.data;
        }
      });
  Teselipin.teselipinjiage().then(
    function (result) {
      if(result.data.success){
        $scope.teselipinjiage=result.data.data;
        }
      });
  Teselipin.teselipinzonghe().then(
     function (result) {
      if(result.data.success){
         $scope.teselipinzonghe=result.data.data;
         }
      });
  Teselipin.teselipinxiaoliang().then(
    function (result) {
      if(result.data.success){
        $scope.teselipinxiaoliang=result.data.data;
        }
      });
 })
 //1.8巧克力
.controller('QiaokeliCtrl', function($scope,Qiaokeli,$ionicHistory) {
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
  $scope.go=function () {
      $ionicHistory.goBack();
  }
  Qiaokeli.getalldata().then(
      function (result) {
        if(result.data.success){
          $scope.alldata=result.data.data;
          }
      });
  Qiaokeli.qiaokelifenlei().then(
    function (result) {
      if(result.data.success){
        $scope.qiaokelifenlei=result.data.data;
      }
    });
  Qiaokeli.qiaokelijiage().then(
    function (result) {
      if(result.data.success){
        $scope.qiaokelijiage=result.data.data;
      }
  });
  Qiaokeli.qiaokelizonghe().then(
    function (result) {
      if(result.data.success){
        $scope.qiaokelizonghe=result.data.data;
      }
    });
   Qiaokeli.qiaokelixiaoliang().then(
    function (result) {
      if(result.data.success){
         $scope.qiaokelixiaoliang=result.data.data;
      }
    });
 })
  //1.9绿植花卉
 .controller('LvzhihuahuiCtrl', function($scope,Lvzhihuahui,$ionicHistory) {
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
     $scope.go=function () {
           $ionicHistory.goBack();
          }
     Lvzhihuahui.getalldata().then(
       function (result) {
         if(result.data.success){
           $scope.alldata=result.data.data;
         }
       });
     Lvzhihuahui.lvzhihuahuifenlei().then(
       function (result) {
         if(result.data.success){
           $scope.lvzhihuahuifenlei=result.data.data;
         }
       });
     Lvzhihuahui.lvzhihuahuijiage().then(
       function (result) {
         if(result.data.success){
           $scope.lvzhihuahuijiage=result.data.data;
          }
       });
     Lvzhihuahui.lvzhihuahuizonghe().then(
         function (result) {
             if(result.data.success){
               $scope.lvzhihuahuizonghe=result.data.data;
             }
        });
    Lvzhihuahui.lvzhihuahuixiaoliang().then(
      function (result) {
        if(result.data.success){
          $scope.lvzhihuahuixiaoliang=result.data.data;
        }
      });
  })
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

//  购物车
.controller('AccountCtrl', function($scope,Car) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.cardata;
  $scope.num;
  var amount=0;
  $scope.ss=localStorage.getItem('id');
  Car.getdata($scope.ss).then(
    function (res) {
      $scope.cardata=res;
      if(res.length==0){
        $scope.show=function () {
          return true;
        }
        $scope.showdata=function () {
          return false;
        }
      }else{
        $scope.show=function () {
          return false;
        }
        $scope.showdata=function () {
          return true;
        }
      }
      $scope.num=res.length;
      for(var i=0;i<res.length;i++){
        amount=(res[i].number)*(res[i].now_price)+amount;
      }
      angular.element(document.getElementById('amount')).html(amount);
    }
  )
  var amount;
  $scope.add=function ($event,g_id,price,num) {
    val = parseInt($event.target.parentNode.children[2].innerHTML);
    val++;
    console.log(val,price);
    amount=amount+price;
    $event.target.parentNode.children[2].innerHTML=val;
    Car.updatedata(g_id,val,localStorage.getItem('id')).then(function (res) {
    })
    angular.element(document.getElementById('amount')).html(amount);
  }
  $scope.divi=function ($event,g_id,price,num) {
    amount=amount-price;
    val = parseInt($event.target.parentNode.children[2].innerHTML);
    val--;
    if(val<1){
      val=1;
      return;
    }
    angular.element(document.getElementById('amount')).html(amount);
    $event.target.parentNode.children[2].innerHTML=val;
    Car.updatedata(g_id,val,localStorage.getItem('id')).then(function (res) {
    })
  }

  $scope.remove=function ($event,id) {
    Car.removedata(id,localStorage.getItem('id')).then(function (res) {
      return res;

    })
    $event.target.parentNode.parentNode.remove();
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
      console.log(result);
      $scope.isShow = result.success;
    })
    console.log('qqqqqqqqqqq'+$scope.isShow)
    //判断购物车长度
    Car.getdata($scope.id).then(function(result){
      // console.log(result)
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
      // console.log(result);
      for (var i = 0;i<result.length;i++){
        if (i<4){
          $scope.detail.push(result[i]);
        }
        $scope.moredetail.push(result[i]);
      }
      // console.log($scope.detail)
      // console.log($scope.moredetail)
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
    Login.Zhuce(user).then(function(result){
        console.log(result);
        if (result.success){
          $scope.user={};
          $scope.info = '注册成功';
          alert($scope.info);
          user='';
          $window.location.href='#/tab/mine/login';
        }else{
          alert('手机号已被注册！');
          $scope.info = '注册'; 
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
      if (result.length == 0){
        $scope.suc=true;
      }else{
        for (var i = 0;i<result.length;i++){
          $scope.paymentList.push(result[i]);
        }
      }
    })
    $scope.deleteorder = function(id){
      $scope.id = id.order_number;
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



