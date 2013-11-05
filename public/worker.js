self.addEventListener('message', function(event) {  
    setTimeout(function(){
        self.postMessage('Finish job')
    }, event.data);
    self.postMessage('Start job');
})
