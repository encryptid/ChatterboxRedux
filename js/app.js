let ChatModel = require('./models/chatterbox.js');
let ChatList = require('./models/chatterlist.js');
let ChatView = require('./views/chatterbox.js');

// Backbone.sync = function (method, model) {
//     // Somewhere in our code we're trying to save changes to the server.
//     if (method === 'create' || method === 'update') {
//         const request = new XMLHttpRequest();
//         request.open('POST', 'http://eventurl');
        
//         let message = {
//             name: model.get('name'),
//             attendees: model.get('attendees'),
//         };

//         request.send(JSON.stringify(message));

// OR

// Backbone.sync = function(method, model) {
//     /**
//      * Creating new object or updating an existing one; this will be the value
//      * of 'method' whenever you save().
//      */
//     if (method === 'create' || method === 'update') {
//         const req = new XMLHttpRequest();
//         req.open('POST', 'http://nowhere.org');
//         req.addEventListener('load', function () {
//             const response = JSON.parse(req.responseText);
//             /**
//              * Update the turn number and guess information now that we have the 
//              * latest from the server. 
//              */
//             model.set('turn', response.turn);
//             model.set('guesses', response.guesses);
//             /* Triggering the change event will make your view re-render. */
//             model.trigger('change');
//         });
//         req.send();
//         model.set('turn', 1);
//     }


window.addEventListener('load', function () {
    console.log('ready to rock');
    const chatModel = new ChatModel();
    
    const view = new ChatView({
        el: document.querySelector('body'),
        model: chatModel,
    });
});