/**
  The modal for when rogera hacks around

  @class RogeraController
  @extends Discourse.Controller
  @namespace Discourse
  @uses Discourse.ModalFunctionality
  @module Discourse
**/
Discourse.RogeraController = Discourse.Controller.extend(Discourse.ModalFunctionality, {

  // You need a value in the field to submit it.
  submitDisabled: function() {
    return this.blank('accountEmailOrUsername');
  }.property('accountEmailOrUsername'),

  submit: function() {

//    Discourse.ajax("/session/forgot_password", {
//      data: { login: this.get('accountEmailOrUsername') },
//      type: 'POST'
//    });

    // don't tell people what happened, this keeps it more secure (ensure same on server)
    this.flash('rogera received ' + this.get('accountEmailOrUsername'));
    return false;
  }

});
