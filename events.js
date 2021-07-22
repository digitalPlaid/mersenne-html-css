console.log('in events.js');
// THE INCANTATION
$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    // set up event listener
    $('#addBtn').on('click', addToList);


}

function addToList() {
    
}