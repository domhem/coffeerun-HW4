(function(window) {
  "use strict";
  var $ = window.jQuery;
  var FORM_SELECTOR = "[payment-order-form=\"form\"]";
  var App = window.App || {};
  var Payment = App.Payment;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var ModalBox = App.ModalBox;
  var myPayment = new Payment("person", new DataStore());
  window.myPayment = myPayment;
  var modalbox = new ModalBox(FORM_SELECTOR);
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myPayment.createPayment.call(myPayment, data);
    modalbox.addModal.call(modalbox, data);
    //call the modal dialog box created from modalbox.addModal
    $("#ex1").modal();
  });
})(window);
