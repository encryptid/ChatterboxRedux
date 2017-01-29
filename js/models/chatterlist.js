let ChatModel = require('./chatterbox');

module.exports = Backbone.Collection.extend({

  model: ChatModel,

  createNew: function (userName) {
      console.log('creating a new model');
      const newMsg = new ChatModel();
      newMsg.set('from', userName);
      this.add(newMsg);
  },
});