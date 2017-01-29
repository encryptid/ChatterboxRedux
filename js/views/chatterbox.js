module.exports = Backbone.View.extend({
    // initialize: function() {
    //     //this.model.on('change', this.render, this);
    // },

    events: {
        'click #post': 'postMsg', //create a click event listener for the queryselctor "post" at which time, we run
        // updateName
    },

    postMsg: function () {   //updateName is a property and a function
        console.log('postMsg in the view runs'); // first, console.log a message
        const enterName = this.el.querySelector('#name').value; // create a variable (constant) called enterMsg.
                // refer to the value of the textbox "name"
        const enterMsg = this.el.querySelector('#message').value;
        this.model.updateMsg(enterName, enterMsg);    //refer to the model and run "updateMsg" with enterName and
        // enterMsg as parameters
        console.log(enterMsg + ' is logging in the message box');
    },
    render: function() {    // render is a non-keyword that is also a function.
        console.log('rendering');   // first console log to ensure it's running
        const name = this.el.querySelector('#msgDeets p'); // create a constant called name that is a p under msgDeets.
        name.textContent = this.model.get('from');  // change "from" to the content of name
    },
});