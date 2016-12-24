var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
})

socket.on('disconnect',function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
    var li = $('<li></li>');
    li.text(`${from}: ${message.text}`);

    jQuery('#messages').append(li);
})



socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi'
}, function (data) {
    console.log('Got it', data);
});


$('#message-form').on('submit', function (e) {
   e.preventDefault();

   socket.emit('createMessage', {
       from: 'User',
       text: $('[name=message]').val()
   }, function () {

   })
});