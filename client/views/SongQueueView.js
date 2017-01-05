// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table1',

  initialize: function() {
    this.render();
    this.collection.on('add', function () {
      this.remove();
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

    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
