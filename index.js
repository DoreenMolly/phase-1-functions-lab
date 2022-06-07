// Code your solution in this file!

const distanceFromHqInBlocks = (value) => Math.abs(42 - value);
const distanceFromHqInFeet = (number) => 264 * distanceFromHqInBlocks(number);
const distanceTravelledInFeet = (begin, end) => Math.abs(begin - end) * 264;
const calculatesFarePrice = (begin, end) => {
    let distance = distanceTravelledInFeet(begin, end);
    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if(distance > 2000 && distance < 2500){
        return 25;
    }else if(distance >= 2500){
        return "cannot travel that far";
    }
}

console.log(calculatesFarePrice(20, 54));

