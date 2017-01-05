// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.collection.on('add', function () {
      this.remove();
    });

  },

  render: function() {

    this.collection.map(function (song) {
      var newSong = new SongQueueEntryView({model: song}).render();
      return newSong;
    });

    return this.$el;
  }

});
