// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    this.fetch();
  },

  fetch: function () {
    let context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      method: 'GET',
      contentType: 'application/json',
      success: function (data) {
        // console.log(context.model);
        data.results.forEach(function (song) {
          var newSongModel = new context.model({
            artist: song.artist,
            url: song.url,
            title: song.title
          });
          context.models.push(newSongModel);
          // console.dir(newSongModel);
        });
        console.log(context.models);
        // console.log('data.results:' , data.results)
        // context.models = data.results;
        // console.log('context.model:',  context.models);
        // console.log(context.models);
        // console.log(context.models.length)
        // console.log('this: ', this)
        context.trigger('fetchedIt', this);
      },
      error: function () {
        console.log('error');
      }
    });
  }
});