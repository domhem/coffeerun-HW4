(function(window) {
  "use strict";
  var App = window.App || {};

  function Payment(payId, db) {
    this.payId = payId;
    this.db = db;
  }

  Payment.prototype.createPayment = function(payment) {
    console.log("Adding payment for " + payment.username);
    this.db.add(payment.username, payment);
  };

  App.Payment = Payment;
  window.App = App;

})(window);
