define(["config",
        "app/app",
        "ember"], function(config, App, Ember) {
  "use strict";

  App.GroupsNewController = Ember.Controller.extend({
    errors: null,

    actions: {
      create: function() {
        var that = this

        this.set('errors', null)

        var group = this.store.createRecord('group', {
          username: this.get('username'),
          screenName: this.get('screenName') })

        group.save()
          .then(function(result) {
            that.transitionToRoute('timeline.index', that.get('username'))
          }, function(err) {
            that.set('errors', JSON.parse(err.responseText).err)
          })
      }
    }
  })
})
