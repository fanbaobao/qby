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
    }
  })
