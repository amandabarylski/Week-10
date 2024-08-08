// Coding Steps:

//     Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
//         A Bootstrap styled table representing your choice of data.
//         A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

//Before starting, I realized that to create validation I would need to reference the input values.
//I made them into variables so that I would only have to use document.getElementById once for each.
//For good measure, I also gave the button a variable name.
//These were based on an example website our instructor showed us in class this week,
//and the const submitBtn was copied directly from his example.
let titleInput = document.getElementById('gameTitle')
let hoursPlayedInput = document.getElementById('hoursPlayed')
let ratingInput = document.getElementById('dropdownRating')
const submitBtn = document.querySelector("button")
//I also wanted created rows to appear top to bottom in the order they were created, so I created a variable
//to increment after a submission. I started at 1 since the table header should be at position 0.
let rowNumber = 1

submitBtn.addEventListener('click', () => {
    //Looking it up, I found that what was stopping it from working was the form submission default.
    //Adding event.preventDefault() fixed the problem.
    //Though it shows event as deprecated, it functions (I do have jquery linked in my HTML so perhaps that's why).
    event.preventDefault()
    //After testing with console.log and checking with the alert, I added variables at the top of the function.
    
    //I temporarily logged the inputs to the console on click to check that it was correctly taking them in.
    //The second shows that the click itself is working, though it won't print the values for some reason.
    console.log({Title: titleInput.value, HoursPlayed: hoursPlayedInput.value, Rating: ratingInput.value})
    console.log('Click working!')
    //Next was to check to see if I could throw an error if either of the first two inputs were blank,
    //or if the second was not a number.
    //This worked, and when the alert was active the printing to the console was visible.
    //However, as soon as I closed the alert the object printed to the console disappeared.
    if (titleInput.value == '' || isNaN(hoursPlayedInput.value) || hoursPlayedInput.value == '') {
        alert('Please enter a valid title and number of hours played!')
    } else {
        //I typed all the below out, and it worked to create a row, but only for a second before it disappeared.
        //It basically manifested as a screen flicker, which is confusing.
        //I guess this is why the console.log didn't work, the data vanishes immediately.
        //After my fixes, it works perfectly! It adds the second input below the first, which is what I wanted.
        let table = document.querySelector('table')
        let row = table.insertRow(rowNumber)
        row.insertCell(0).innerHTML = titleInput.value
        row.insertCell(1).innerHTML = hoursPlayedInput.value
        row.insertCell(2).innerHTML = ratingInput.value
        rowNumber++
    }
    //It wasn't resetting the original inputs, so I added the section below.
    titleInput.value = ''
    hoursPlayedInput.value = ''
    ratingInput.value = 1
})