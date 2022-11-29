//Dropdown
document.addEventListener("click", e =>{
    const isDropdownButton = e.target.matches("[data-dropdown-button")
    //Ignore if the click is not on a data-dropdown-button
    if (!isDropdownButton && e.target.closest('[data-dropdown') != null) return

    //Open the dropdown if the click is on a dara-dropdown-button
    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    //Close the all the active dropdown except for the last one
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

//Threats Hidden information
function showDF(){
    document.getElementById("DF").setAttribute("style","display: block;");
}
function showOE(){
    document.getElementById("OE").setAttribute("style","display: block;");
}
function showOP(){
    document.getElementById("OP").setAttribute("style","display: block;");
}
function showAir(){
    document.getElementById("air").setAttribute("style","display: block;");
}
function showWater(){
    document.getElementById("water").setAttribute("style","display: block;");
}
function showLand(){
    document.getElementById("land").setAttribute("style","display: block;");
}

//Solutions Hidden information
function showSave(){
    document.getElementById("save").setAttribute("style","display: block;");
}
function showPlant(){
    document.getElementById("plant").setAttribute("style","display: block;");
}
function showRecycle(){
    document.getElementById("recycle").setAttribute("style","display: block;");
}
function showCompost(){
    document.getElementById("compost").setAttribute("style","display: block;");
}
function showEco(){
    document.getElementById("eco").setAttribute("style","display: block;");
}
function showFood(){
    document.getElementById("food").setAttribute("style","display: block;");
}

//Login Success
function login(){
    alert('Welcome Back!')
}

//Submission Success
function contact(){
    alert('Thoughts Received!')
}

//Password Validation
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    if (password.value.length > 6 && password.value.match(/[A-Z]/) && password.value.match(/[a-z]/) && password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\?\>\<\.\,]/) && password.value.match(/[0-9]/)){
        alert('Success!')
    }
    else{
        e.preventDefault()
        alert('Invalid Password: Password need to be longer than 6 character, contains 1 Number, 1 Uppercase Letter, 1 Lowercase Letter and a Special Character.')
    }
})
