// Code your solution in this file!

function  distanceFromHqInBlocks(clientLocation){
    const hqLocation = 42
    return Math.abs(clientLocation - hqLocation) 
}
distanceFromHqInBlocks(50)

function distanceFromHqInFeet(clientLocation,hqLocation){
    let blocks = distanceFromHqInBlocks(clientLocation)
    let distanceinFeet = blocks * 264
    return distanceinFeet
}
distanceFromHqInFeet(60,42)

function distanceTravelledInFeet(start, destination){
    const feet = 264;
    let blocks = Math.abs(destination - start)
    return blocks * feet

}
distanceTravelledInFeet(43, 48)


function calculatesFarePrice(start, destination){
    let distanceinFeet = Math.abs(destination -  start) * 264;

    if(distanceinFeet < 400){
        return 0
    }

    else if(distanceinFeet >= 400 && distanceinFeet < 2000){
        return ((distanceinFeet - 400) * 2) / 100
    }

    else if(distanceinFeet > 2000 && distanceinFeet < 2500){
        return 25
    }

    else {
        return 'cannot travel that far'
    }
}