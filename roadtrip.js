const trip = {
    name: `Jake's Great Shakes`,
    speedLimits: [
        {
            distance: 100,
            speedLimit: 75
        },
        {
            distance: 84,
            speedLimit: 70
        },
        {
            distance: 20,
            speedLimit: 75
        }
    ],
    traffic: 30
}


const tripTime = (arr) => {
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }

    let totalTime = arr.reduce((acc, curr) => {

        let segmentDistance = curr.speedLimits.reduce((speedAcc, obj) => {
            return speedAcc += obj.distance
        }, 0)

        let avgSpeedLimit = 0
        let segmentTime = 0

        curr.speedLimits.forEach(obj => {
            avgSpeedLimit += Math.round(obj.speedLimit * (obj.distance / segmentDistance))
            let objTime = Math.round((obj.distance * (obj.speedLimit / 60)) /60) + obj.traffic
            segmentTime += objTime
        })
        
        segmentTime = Math.round(segmentTime)
        result.segmentTimes.push(segmentTime)
        acc += segmentTime

        result.avgSpeedLimits.push(avgSpeedLimit)
        return acc
    }, 0)

    result.totalTime = totalTime

    return result
}

tripTime(trip)