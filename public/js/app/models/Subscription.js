define(["app/app"], function(App) {
  "use strict";

  App.Subscription = DS.Model.extend({
    name: DS.attr('string'),
    user: DS.belongsTo('subscriber'),

    isPosts: function() {
      return this.get('name') === 'Posts'
    }.property()
  })
})
