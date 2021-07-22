console.log('in events.js');
// THE INCANTATION
$(document).ready(onReady);

function onReady() {
    console.log('so ready!');

    // Handle add to list button events
    // set up event listener
    // event handler
    // event registration
    // all equivalent terms, broadly
    $('#addBtn').on('click', addToList);
    // or
    // $(document).on('click', '#addBtn', addToList);


    // Handle Delete button events
    // won't work because deleteBtn doesn't exist yet
    // console.log($('.deleteBtn'))
    // $('.deleteBtn').on('click', deleteItem);

    // "Event delegation"
    $(document).on('click', '.deleteBtn', deleteItem);

}

function addToList() {
    console.log('button got clicked!');
    let inputArea = $('#aboutYou')
    let userInput = inputArea.val();
    if (userInput.length > 0) {
        $('#outputArea').append(`<li>
                                    User Input: ${userInput}
                                    <button class="deleteBtn">Delete Me</button>
                                </li>`);
        inputArea.val('');
    }
}

function deleteItem() {
    // $(this).remove()
    console.log('in delete item');
    $(this).parent().remove();
}