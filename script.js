console.log('getting ready to jQuery $$');

// The incantation
// Wait for the DOM to load (because scripts are loaded first often)
$(document).ready(onReady); // when it is ready, call the function inside of the ready(someFunc)
    // this is called a 'callback'. 
// Function to call when the DOm is loaded
function onReady() {
    console.log('so ready');
    // jquery(aka '$') is a function
    // the input is a selector (string)
    // the output is an 'element'
    let h1 = $('h1');
    console.log('h1: ', h1);
    h1.text('Jquery FTW');
    h1.css('transform', 'rotate(180deg)');
    h1.css('color', 'green');

    // Grab by id
    let yoloImg = $('#yoloImg');
    console.log('yolo image: ', yoloImg);

    // Grab by class name
    let fancyImages = $('.fancy');
    console.log('fancy images: ', fancyImages);
    // fade in animate
    fancyImages.hide().fadeIn(4000);

    // Complex selectors
    // just like css
    let lotsOfThings = $('li > button, th');
    lotsOfThings.css('background', 'lightblue');

    let yoloDiv = $('#yoloDiv');
    yoloDiv.hide().slideDown(2000);
    yoloDiv.css('font-size', '40px');

    // Traverse the DOM
    let em = yoloDiv.find('em');
    em.text('You only linguini once'); // setter
    let input = em.parent().siblings('input');
    console.log('input', input);

    let emText = em.text(); // getter
    if (emText === 'You Only Levitate Once') {
        em.slideUp();
    } else {
        em.css('font-size', '100px');
    }

    let seeTwo = $('#yoloDiv').parent().find('table > tbody > tr > td').siblings('td').slice(1,2).hide().fadeIn(8000).css('color', 'blue');
    // the siblings('td') thing does nothing
    console.log(seeTwo);

    // Traverse the DOM
    input = em.parent().siblings('input');
    console.log('input', input);

    let inputText = input.val('hai');
    console.log('inputText', inputText);

    // Add a new list item
    $('ul').append(`
    <li>
        Item D
        <button>Click me!</button>
    </li>`);

    // Add a bunch of items to the list
    let items = [
        {name: 'Item A'},
        {name: 'Item B'},
        {name: 'Item C'},
        {name: 'Item D'},
        {name: 'Item E'},
        {name: 'Item F'},
    ];
    $('ul').empty()
    console.log($('ul'));
    for (let item of items) {
        $('ul').append(
            `<li>
                ${item.name}
                <button>Click me!</button>
            </li>`
        )
    }
    
}

