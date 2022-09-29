//Importing Datasets
import jsonAttributes from '../framework/Admin/classIdDataset.json' assert {type: 'json'};
function changescreenElement(){
var windowSize = window.innerWidth;   
return windowSize;
}
    window.onresize = () => {

        changescreenElement()
        }
    //Variable to check the device
    let detailsOnDevice = navigator.userAgent;

    //Variable Check if the Device is a Mobile
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(detailsOnDevice);
    console.log(isMobileDevice)
    console.log(detailsOnDevice)
    //Variable Check if the Device is a Tablet
    let regexp2  = /Tablet|iPad/i;
    let isTabletDevice = regexp2.test(detailsOnDevice);
    //Access the Website Attributes
    jsonAttributes.map((Item, index) =>{
    var elementAttributes = document.getElementsByClassName(Item.previousClass);
    var windowSize = changescreenElement()

    console.log(Item.tabletId)
    console.log(elementAttributes)
    /*
    This code entails A Conditional Statement to detect the window Size 
    and then it adds Class name to the declared variables above
    */
    if(windowSize <= 480 ||isMobileDevice ){
        for (let i = 0; i < elementAttributes.length; i++) {
            elementAttributes.item(i).classList.add(Item.mobileClass);
            }
        }
    else if(windowSize > 480 && windowSize<= 767 || isTabletDevice ){  
        for (let i = 0; i < elementAttributes.length; i++) {
            elementAttributes.item(i).classList.add(Item.tabletClass);
        }
    }
    else{
       console.log("This is the Desktop Screen i.e Laptop") 
    }
  });
  window.onresize = () => {
    location.reload();
    }