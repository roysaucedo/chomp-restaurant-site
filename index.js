
// VARAIABLES

// const burgersToggleBtn = document.querySelector('#burgersBtn');
// const sidesToggleBtn = document.querySelector('#sidesBtn');
// const drinkToggleBtn = document.querySelector('#drinksBtn');

// const burgersMenuItems = document.querySelector('#burgersList');
// const sidesMenuItems = document.querySelector('#sidesList');
// const drinkssMenuItems = document.querySelector('#drinksList');


// BURGER BTN FUNCTION
// burgersToggleBtn.addEventListener('click',() => {
//     if(burgersMenuItems.style.display === 'block') {
//         burgersMenuItems.style.display = 'none';
//     } else {
//         burgersMenuItems.style.display = 'block';
//     }
// });

function burgerBtnClick() {
    if(document.querySelector('#burgersList').style.display = 'none') {
        document.querySelector('#burgersList').style.display = 'block';
        document.querySelector('#sidesList').style.display = 'none';
        document.querySelector('#drinksList').style.display = 'none';
        document.querySelector('#burgersBtn').style.background = '#5FA5F9';
        document.querySelector('#burgersBtn').style.color = '#FFFFFF';
        document.querySelector('#sidesBtn').style.background = '#EFF6FF';
        document.querySelector('#sidesBtn').style.color = '#5FA5F9';
        document.querySelector('#drinksBtn').style.background = '#EFF6FF';
        document.querySelector('#drinksBtn').style.color = '#5FA5F9';
    } 
    else {
        document.querySelector('#burgersList').style.display = 'block';
    }
    
}


function sidesBtnClick() {
    if(document.querySelector('#sidesList').style.display = 'none') {
        document.querySelector('#sidesList').style.display = 'block';
        document.querySelector('#burgersList').style.display = 'none';
        document.querySelector('#drinksList').style.display = 'none';
        document.querySelector('#sidesBtn').style.background = '#5FA5F9';
        document.querySelector('#sidesBtn').style.color = '#FFFFFF';
        document.querySelector('#burgersBtn').style.background = '#EFF6FF';
        document.querySelector('#burgersBtn').style.color = '#5FA5F9';
        document.querySelector('#drinksBtn').style.background = '#EFF6FF';
        document.querySelector('#drinksBtn').style.color = '#5FA5F9';
    } 
    else {
        document.querySelector('#sidesList').style.display = 'block';
    }
    
}


function drinksBtnClick() {
    if(document.querySelector('#drinksList').style.display = 'none') {
        document.querySelector('#drinksList').style.display = 'block';
        document.querySelector('#burgersList').style.display = 'none';
        document.querySelector('#sidesList').style.display = 'none';
        document.querySelector('#drinksBtn').style.background = '#5FA5F9';
        document.querySelector('#drinksBtn').style.color = '#FFFFFF';
        document.querySelector('#burgersBtn').style.background = '#EFF6FF';
        document.querySelector('#burgersBtn').style.color = '#5FA5F9';
        document.querySelector('#sidesBtn').style.background = '#EFF6FF';
        document.querySelector('#sidesBtn').style.color = '#5FA5F9';
    } 
    else {
        document.querySelector('#drinksList').style.display = 'block';
    }
    
}