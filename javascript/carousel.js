
const changeCarouselA = (e) =>{
    /** Get identifier of clicked slider */
    let clickedSlide = e.target.parentElement;
    sliderData = clickedSlide.dataset;
    newCarPicIndex = parseInt(sliderData.carouselSlideTo);

    /** locate Current Active Carousel Image */
    activeCarPic = document.getElementsByClassName("active")[0]
    activeCarPicIndex = parseInt(activeCarPic.dataset.carPosition)
    console.log("active car = ", activeCarPicIndex)
    carouselPics = document.getElementsByClassName("carousel-item")

    carouselGrid = carouselPics[0].parentElement;
    console.log("carouselGrid = ",carouselGrid)
    /** Toggle Off Active CarPic */
    if(newCarPicIndex > activeCarPicIndex){
        /** Selected thumb to right of active carPics */
        /** Toggle on Active class for selected carPic */
        /** toggle grid shift left to activate transition 
        /**  then revert carousel to initial state when done*/
        carouselPics[newCarPicIndex].classList.toggle('active')
        carouselGrid.classList.toggle("shift-carousel-left");
        setTimeout(function(){
            activeCarPic.classList.toggle("active");
            carouselGrid.classList.toggle("shift-carousel-left")
        },1000)

    }else if(newCarPicIndex < activeCarPicIndex) {
        /** Selected thumb to Left of Active carPic */
        /** Toggle on Active class for selected carPic */
        /** toggle grid shift right to activate transition 
        /**  then revert carousel to initial state when done*/
        carouselPics[newCarPicIndex].classList.toggle('active')
        carouselGrid.classList.toggle("place-carousel-left")
        carouselGrid.classList.toggle("shift-carousel-right")
        setTimeout(function(){
            activeCarPic.classList.toggle("active");
            carouselGrid.classList.toggle("shift-carousel-right")
            carouselGrid.classList.toggle("place-carousel-left")
        },1000)
        
        
        /*
        carouselGrid.classList.toggle("shift-carousel-right");
        setTimeout(function(){
            activeCarPic.classList.toggle("active");
            carouselGrid.classList.toggle("shift-carousel-right")
        },2000)

        */
    }else{
        // Active Slider clicked
        // Do nothing
    }
    
    
    


    

}  


const sliderPics = document.getElementsByClassName("slider-pic");
console.log("sliderPics HTML Collection => ", sliderPics);

x = sliderPics.length;
console.log("numSliderPics = ", x)
for(i=0; i<x; i++){
    sliderPics[i].addEventListener("click", changeCarouselA)
    /* console.log("added eventListener to => ",sliderPics[i])*/
}
