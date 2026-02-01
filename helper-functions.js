let posts = [];
let apiCallTimes = [];


export async function fetchPosts() {
    console.log("loading posts...")
    const startTime = Date.now()
    const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const endTime = Date.now()
    const timeDuration = (endTime - startTime)
    posts.push(data.json())
    apiCallTimes.push(timeDuration)
    console.log(`fetched succede with ${apiCallTimes.length} posts`)
}


export function displayApiPerformance() {
    if (apiCallTimes.length === 0) {
        throw new Error("no api's calls has been made")
    }
    const numOfApiCallMade = apiCallTimes.length
    const totalDurationForApiCall = apiCallTimes.reduce((total, time) => total + time, 0)
    const avarage = totalDurationForApiCall/numOfApiCallMade
    const sortedArrayAsc = apiCallTimes.sort((a, b) => a-b) 
    const slowestPerformence = sortedArrayAsc[-1]
    const fastestPerformence = sortedArrayAsc[0]
    console.log(`the amount of api's calls that has been made: ${numOfApiCallMade}`)
    console.log(`the avarage of time duration for all api's calls (in milliseconds): ${avarage}`)
    console.log(`the fastest api call time: ${fastestPerformence}`)
    console.log(`the slowest api call time: ${slowestPerformence}`)
}


