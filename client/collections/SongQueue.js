// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
      console.log(this.models);
    });

    this.on('ended', function () {
      this.remove();
      if (this.length >= 1) {
        console.log(this.models[0]);
        this.playFirst();
      }
    });

    this.on('dequeue', function () {
      this.remove();
    });

  },

  playFirst: function () {
    // console.log(this.models);
    this.models[0].play();
  },

  remove: function () {
    // console.log(this.models);
    this.models = this.models.slice(1);
    // console.log('sliced', this.models);
    this.length --;
  }
});