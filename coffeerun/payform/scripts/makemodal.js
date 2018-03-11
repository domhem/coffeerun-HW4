(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function ModalBox(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  ModalBox.prototype.addModal = function(name) {
    // Create a new instance of a modal, using the username info
    var modalElement = new Modal(name);

    // Add the new modal instance's $element property to the Modal
    this.$element.append(modalElement.$element);
  };

  //creating
  //<div id="ex1" class="modal">
  //    <p>Thank you for your payment, name.title + " " + name.username + "."</p>
  //    <a href="#" rel="modal:close">Close</a>
  //</div>
  //with jQuery
  function Modal(name) {
    var $div = $("<div></div>", {
      "id": "ex1",
      "class": "modal"
    });

    var $p = $("<p></p>");

    var $a = $("<a></a>", {
      "href": "#",
      "rel": "modal.close"
    });

    var description = "Thank you for your payment, ";
    if (name.title) {
      description += name.title + " ";
    }
    description += name.username + ".";

    $p.append(description);
    $div.append($p);
    $div.append($a);

    this.$element = $div;
  }

  App.ModalBox = ModalBox;
  window.App = App;
})(window);
