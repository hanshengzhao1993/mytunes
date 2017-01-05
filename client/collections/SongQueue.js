// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function () {
      this.remove();
      if (this.length >= 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function () {
      this.remove();
    });

  },

  playFirst: function () {
    this.models[0].play();
  },

  remove: function () {
    this.models.shift();
    this.length --;
  }
});