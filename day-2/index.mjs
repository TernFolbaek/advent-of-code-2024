import got from 'got';

async function getInput  () {
const url = 'https://adventofcode.com/2024/day/2/input';
try {
    const response = await got.get(url, {
        headers: {
            cookie: "_ga=GA1.2.672951892.1732722902; _gid=GA1.2.830249891.1733071479; session=53616c7465645f5f2be3f5caf58560d77c16e3bc07358f1f4e560a8d20584319f34f25f5f3a245b388075069ac90cb2bf095b130cba752816da3c0f3340dc474; _ga_MHSNPJKWC7=GS1.2.1733126964.6.1.1733128357.0.0.0",
        },
    });

    let input = response.body; 
    return input;

} catch (error) {
    console.error(error);
    return;
}
}

const input = await getInput()

let levels = [[]]

const splitIntoRows = (data) => {
    const reports = data.trim().split('\n'); 
    for(let i = 0; i < reports.length; i++){
        levels[i] = reports[i].split(' ').map(Number)
    }
}

splitIntoRows(input)


let isIncreasing = false;
let isDescreasing = false;
let totalSafeReports = 0;



console.log(getSafeReports())


 



