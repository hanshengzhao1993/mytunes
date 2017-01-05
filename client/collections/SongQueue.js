// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // on add
    // on ended
    // on dequeue

  },

  play1st: function () {
    this.models[0].play();
  },

  remove: function () {}

});