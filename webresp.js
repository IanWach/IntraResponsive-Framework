               
    function changescreenElement(){
        var windowSize = window.innerWidth;   
        console.log("We have " +windowSize);
        return windowSize;
        }
        window.onresize = () => {
        
            changescreenElement()
            var windowSize = window.innerWidth;
            }
    //This is the declaration of Variables using IDs
    var windowSize = changescreenElement()
    var nav = document.getElementById('navbar');
    
    //This is the Declaration of variables through Class Names
    var hideIcon = document.getElementsByClassName('webresp-hide')
   /*
   This is Conditional Statement to detect the window size of the Screen
   and then edit some styles depending on the screen size
   */

    if(windowSize <= 480){
        hideIcon[0].style.display = "block !important";
        
    }
    else if(windowSize > 480 && windowSize<= 767){
        hideIcon[0].style.display = "block";
        nav.style.display = "none";
    }
    else{
        alert('This Is It ' + windowSize)
        hideIcon[0].style.display = "none !important";
    }
    // //Function to reload screen when there is a Resize

    function changeScreenElement1(){
        var screenSize = window.innerWidth;
        return screenSize
    }
        window.onresize = function(){
            changeScreenElement1()
        }
//Function for an Event Listener when the Menu Bar in the Navbar is clicked.
function showNavbar(screenSize){
    //Variable Decalrtions   
    var screenSize = changeScreenElement1()
    let nav1 = document.getElementById('navbar');
    let navList1 = document.getElementById('nav-list');
    /* 
    Code to determine the screen size the add specific classes for 
    the Navbar. This after the event of a button click on the Navbar
    */
    //Mobile Screen
    if (screenSize <= 480) {
        alert('A Screen Size is : ' +screenSize);
        nav1.classList.add("mbresp-navbar");
        navList1.classList.add ("mbresp-navlist");
        
    }
    //Tablet Screen
    else if(screenSize > 480 && screenSize <= 767){
        alert('This Screen Size is : '+ screenSize);
        nav1.style.display = 'block';
        navList1.classList.add ("tbresp-navlist");
        nav1.classList.add ("tbresp-logo");
        
    }
    //Normal Screen
    else{
        alert('Screen Size is : ' +screenSize);
    }
   
}
//Function to detect change in screen size of the code
    window.onresize = () => {
    location.reload();
    }