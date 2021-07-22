console.log('in events.js');
// THE INCANTATION
$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    // set up event listener
    // event handler
    // event registration
    // all equivalent terms, broadly
    $('#addBtn').on('click', addToList);


}

function addToList() {
    console.log('button got clicked!');
    let inputArea = $('#aboutYou')
    let userInput = inputArea.val();
    if (userInput.length > 0) {
        $('ul').append(`<li>
                            User Input: ${userInput}
                        </li>`);
        inputArea.val('');
    }
}
