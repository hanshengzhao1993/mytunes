// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add', function () {
      this.render();
      // this.model.enqueue;
      // this.remove();
    }, this);

  },

  render: function() {

    // this.collection.map(function (song) {
    //   var newSong = new SongQueueEntryView({model: song}).render();
    //   return newSong;
    // });
    // console.log('song queue view:', this);
    // console.log('hi');

    // return this.$el;
    // console.log(this.$el.html('<th>Song Queue</th>'));

    console.log('Song Queue VIEW', this.collection);

    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
