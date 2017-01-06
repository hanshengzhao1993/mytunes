// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  // initialize: function () {
  //   this.render();
  // },
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.render();
    }
  },

  render: function() {
    console.log('getting into render');
    return this.$el.html(this.template(this.model.attributes));
  }

});
