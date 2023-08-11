//Speed Detector
//write a function that satisfies the speedlimit
let speed;
function speedLimit(speed){
    
    if (speed < 70){
        console.log("Ok");
    }
    else{
        return speed;
    }
}

//write a functin for speed detector
function speedDetector(speed){
    let speedo = speedLimit(speed);
    if (speedo < 70){
        console.log("Ok");
    }
    else if(speedo > 70){
        let extra = Math.round((speedo -70)/5)
        if (extra <= 12){
            console.log(`Points: ${extra}`);
        }
        else{
            console.log("License suspended");
        }
    }


}
console.log(speedDetector(76));