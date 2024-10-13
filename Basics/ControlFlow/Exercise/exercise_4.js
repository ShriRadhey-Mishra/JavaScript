// Speed limit = 70
// for every 5kmph above the speed limit -> 1 point
// from 12 points -> License suspended

function speedCheck(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) console.log('Ok');
    else {
        const points = Math.floor((speed - speedLimit)/ kmPerPoint);
        if (points >= 12) console.log('License Suspended');
        else console.log(`Points: ${points}`);
    }
}

speedCheck(129);
