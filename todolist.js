$(document).ready(function() {
let ulTasks = $('#ulTasks')
let bttnAdd = $('#bttnAdd')
let bttnClear = $('#bttnClear')
let bttnReset =$("#bttnReset")
let New_Task = $('#New_Task')
let bttnSort = $("#bttnSort")
function addItem(){
    let listitem = $('<li>',{
        'class' : 'list-group-item',
//Adding a class allows you to style the element using CSS. In this case, list-group-item is a common Bootstrap class that styles the list item with specific visual properties.
// .val() is a jQuery method that gets the current value of the input element.
// New_Task.val() fetches whatever the user has typed in the input field, and this text is used as the content of the new li element.

        text : New_Task.val()
    })
    ulTasks.append(listitem)
    New_Task.val('')
    listitem.click(() => {
    listitem.toggleClass('done');

    })
}
/* function sortList(){
    let items = ulTasks.children('li').get();
    items.sort((a,b)=>{
        let textA = $(a).text().toUpperCase();
        let textB = $(b).text().toUpperCase();
        return(textA > textB) ? -1 : (textA < textB) ? 1 : 0; 
}); 
// this is the another way to sort list using function 
// $.each is built in function ia jquery that is used here to select the elements of the array 'items'
// format of .each is  $.each(collection, function(index, element) {
    // Function body
//});
//function(index, element): This is the function that gets executed for each element in the collection.
    $.each(items,(idx,itm) => {
        ulTasks.append(itm)
    })
} */
function sortList(){
    $('#ulTasks .done').appendTo(ulTasks);
}
New_Task.keypress((e) => {
    if(e.which == 13) addItem()
})
bttnAdd.click(addItem)
// .which property are used with keydown, keyup, and keypress event handlers.
/*Whether the listitem already has the done class depends on the current state of the HTML element at the moment the user interacts with it. 
The toggleClass('done') method dynamically changes the class based on the interaction, so it doesn't have a static state until the user clicks it. */

bttnClear.click(()=> {
    New_Task.val('')
});

bttnReset.click(()=>{
    ulTasks.empty(); // I was doing a mistake here as i was vacating the listitem but we have to empty the ulTasks
})
bttnSort.click(sortList)
});