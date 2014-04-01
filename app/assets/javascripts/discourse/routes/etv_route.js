/**
  This route handles requests for topics

  @class TopicRoute
  @extends Discourse.Route
  @namespace Discourse
  @module Discourse
**/
Discourse.EtvRoute = Discourse.Route.extend({

  actions: {
    // Modals that can pop up within a topic
    showPosterExpansion: function(post) {
      this.controllerFor('posterExpansion').show(post);
    },

      showHistory: function(post) {
      Discourse.Route.showModal(this, 'history', post);
      this.controllerFor('history').refresh(post.get("id"), post.get("version"));
      this.controllerFor('modal').set('modalClass', 'history-modal');
    },

  },

  model: {
      content: 'eins etv hack'
  }


});
