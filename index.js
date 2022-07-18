function distanceFromHqInBlocks(someValue){
   return Math.abs(42-someValue)
}

function distanceFromHqInFeet(someValue){
    // if(someValue<42){
    //     return(42-someValue)*264
    // }else{
    //     return (someValue-42)*264
    // }
    return distanceFromHqInBlocks(someValue) *264
}

function distanceTravelledInFeet(start,end){
    return Math.abs(start-end)*264
}

function calculatesFarePrice(start, destination){
    // if((Math.abs(start-destination)*264)<=400){
    //     return 0
    // } else if((Math.abs(start-destination)*264)>400 && (Math.abs(start-destination)*264)<=2000){
    //     return ((Math.abs(start-destination)*264)-400) * .02
    // } else if((Math.abs(start-destination)*264)>2000 &&(Math.abs(start-destination)*264)<=2500 ){
    //     return 25
    // } else if((Math.abs(start-destination)*264)>2500){
    //     return 'cannot travel that far'
    // }

    let distance = distanceTravelledInFeet(start,destination);
    if (distance > 2500){
        return 'cannot travel that far';
    } else if (distance >2000){
        return 25;
    } else if (distance > 400){
        return((distance-400)*.02);
    } else {
        return 0;
    };
}