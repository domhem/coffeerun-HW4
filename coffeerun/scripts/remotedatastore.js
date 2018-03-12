(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    //get the order ID
    $.get(this.serverUrl, function(serverResponse) {
      var id;
      //iterate through the orders until you get the specified order/email
      for (var i = 0; i < serverResponse.length; i++) {
        if (serverResponse[i].emailAddress == key) {
          //set the id to the correct order id
          id = serverResponse[i].id;
        }
      }
      $.get(this.url + "/" + id, function(serverResponse) {
        console.log(serverResponse);
        cb(serverResponse);
      });
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    //get the order ID
    $.get(this.serverUrl, function(serverResponse) {
      var id;
      //iterate through the orders until you get the specified order/email
      for (var i = 0; i < serverResponse.length; i++) {
        if (serverResponse[i].emailAddress == key) {
          //set the id to the correct order id
          id = serverResponse[i].id;
        }
      }
      console.log(id);
      $.ajax(this.url + "/" + id, {
        type: "DELETE"
      });
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);
