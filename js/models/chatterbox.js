module.exports = Backbone.Model.extend({
    default: {
        from: 'Phil I. Buster', //starting info. Generally a placeholder. The properties as follows:
        message: "clip clop, I'm a horse", // these are the properties we will need to get values for from the server
        id: null,
        timestamp: null,
    },
    updateMsg: function(name, msg) {   // create a function in the model with two parameters
        console.log(name + ' and ' + msg + ' are logging thru updateMsg in the model');
        this.set('from:', name);  //set the "from" property to the parameter passed thru
        this.set('message:', msg);
        console.log(this.default.from + this.default.message);
        //this.save();    //save/commit change to Model. This is for AJAX requests
        
    },
});