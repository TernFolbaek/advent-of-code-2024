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

let levels = []


const splitIntoRows = (data) => {
    const reports = data.trim().split('\n'); 
    for(let i = 0; i < reports.length; i++){
        levels[i] = reports[i].split(' ').map(Number)
    }
}

splitIntoRows(input)


let isIncreasing = null;
let totalSafeReports = 0;
let diff = 0;


const getSafeReports = () => {
    for(let i = 0; i < levels.length; i ++){
        let isSafe = true;
        isIncreasing = null;
        for(let j = 0; j < levels[i].length - 1; j++){
            diff = levels[i][j] - levels[i][j+1]
            if(Math.abs(diff) < 1 || Math.abs(diff) > 3){
                isSafe = false;
                break;
            }
            if(diff < 0){
                if(isIncreasing == false){
                    isSafe = false;
                    break;
                }
                isIncreasing = true;
            }else{
                if(isIncreasing){
                    isSafe = false;
                    break;
                }
                isIncreasing = false;
            }
        }

        if(isSafe){
            totalSafeReports += 1;
        }
        
    }

    return totalSafeReports;
}

const getSafeReportsFlexible = () => {
    let totalSafeReports = 0;

    for(let i = 0; i < levels.length; i++){
        let isSafe = true;
        let isIncreasing = null;
        let oneAnswerError = 0;
        for(let j = 0; j < levels[i].length - 1; j++){
            diff = levels[i][j] - levels[i][j + 1]
            if(Math.abs(diff) < 1 || Math.abs(diff) > 3){
                if(oneAnswerError > 0){
                    isSafe = false;
                    break;
                }
                oneAnswerError += 1;
            }
            if(diff < 0){
                if(isIncreasing == false){
                    if(oneAnswerError > 0){
                        isSafe = false;
                        break;
                    }
                    oneAnswerError += 1

                }
                isIncreasing= true;
            }else{
                if(isIncreasing){
                    if(oneAnswerError < 0){
                        isSafe = false;
                        break;
                    }
                    oneAnswerError += 1;

                }
                isIncreasing = false;
            }
        }
        if(isSafe){
            totalSafeReports += 1;
        }
    }

    return totalSafeReports;
}


console.log(getSafeReportsFlexible())


 



