// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    this.fetch();
  },

  url: 'https://api.parse.com/1/classes/songs',

  parse: function(response) {
    this.trigger('fetchedIt', this);
    // console.log(response.results);
    // console.log(this.models);
    return response.results;
  },
  // fetch: function () {
  //   let context = this;
  //   $.ajax({
  //     url: 'https://api.parse.com/1/classes/songs',
  //     method: 'GET',
  //     contentType: 'application/json',
  //     success: function (data) {
  //       var array = [];
  //       // console.log(context.model);
  //       data.results.forEach(function (song) {
  //         var newSongModel = new context.model({
  //           artist: song.artist,
  //           url: song.url,
  //           title: song.title
  //         });
  //         array.push(newSongModel);
  //         // console.dir(newSongModel);
  //       });
  //       context.models = array;
  //       console.log(context.models);
  //       // console.log(context.models);
  //       // console.log('data.results:' , data.results)
  //       // context.models = data.results;
  //       // console.log('context.model:',  context.models);
  //       // console.log(context.models);
  //       // console.log(context.models.length)
  //       // console.log('this: ', this)
  //       context.trigger('fetchedIt', this);
  //     },
  //     error: function () {
  //       console.log('error');
  //     }
  //   });
  // }
});