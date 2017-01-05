// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialze: function () {
    // this.fetch();
    // this.collection('click', function (e) {

    // });
    console.log(this);
  }

  // fetch: function () {
  //   $.ajax({
  //     url: '',
  //     type: 'GET',
  //     contentType: 'application/json',
  //     success: function (data) {
       
  //     },
  //     error: function () {}
  //   });
  // }
});