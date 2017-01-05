// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    this.fetch();
    // console.dir(this.model);

  },

  fetch: function () {
    let context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        // console.log(data.results);
        context.trigger('fetchedIt', this);
      },
      error: function () {
        console.log('error');
      }
    });
  }
});