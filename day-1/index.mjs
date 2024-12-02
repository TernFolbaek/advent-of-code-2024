import got from 'got';

async function getInput() {
    const url = 'https://adventofcode.com/2024/day/1/input';
    let input;
    try {
        const response = await got.get(url, {
            headers: {
                cookie: "_ga=GA1.2.672951892.1732722902; _gid=GA1.2.830249891.1733071479; session=53616c7465645f5f2be3f5caf58560d77c16e3bc07358f1f4e560a8d20584319f34f25f5f3a245b388075069ac90cb2bf095b130cba752816da3c0f3340dc474; _gat=1; _ga_MHSNPJKWC7=GS1.2.1733081879.3.1.1733082678.0.0.0",
            },
        });

        input =  response.body; 


        return input;

    } catch (error) {
        console.error(error);
        return;
    }
  }

  const input = await getInput();


  const splitIntoColumns = (data) => {
    const lines = data.trim().split('\n'); 
    const col1 = [];
    const col2 = [];
    
    lines.forEach(line => {
        const [first, second] = line.trim().split(/\s+/); 
        col1.push(first); 
        col2.push(second);
    });

    return { col1, col2 };
  };

  
  

  let {col1, col2} = splitIntoColumns(input);
  col1 = col1.map(x => parseInt(x))
  col2 = col2.map(x => parseInt(x))

  

  let totalDistance = 0;
  let flag = true;
  let smallestNumber1 = [0, 0]
  let smallestNumber2 = [0, 0]

  while(col1.length > 0 && col2.length > 0){
    smallestNumber1[0] = Number.MAX_SAFE_INTEGER;
    smallestNumber2[0] = Number.MAX_SAFE_INTEGER;


    for(let i = 0; i < col1.length; i ++){
      if(col1[i] < smallestNumber1[0]){
        smallestNumber1 = [col1[i], i]
      }
    }


    for(let j = 0; j < col2.length; j ++){
      if(col2[j] < smallestNumber2[0]){
        smallestNumber2 = [col2[j], j]
      }
    }

    
    totalDistance += Math.abs(smallestNumber1[0] - smallestNumber2[0])

    col1.splice(smallestNumber1[1],1)
    col2.splice(smallestNumber2[1],1)

}
console.log(totalDistance);

({col1, col2} = splitIntoColumns(input))


let nrOfDupplicates = 0;
let totalSimiliarity = 0;
for(let i = 0; i < col1.length; i++){
  nrOfDupplicates = 0;
  for(let j = 0; j < col2.length; j++){
      if(col1[i] == col2[j]){
        nrOfDupplicates += 1;
      }
  }
  totalSimiliarity += col1[i] * nrOfDupplicates;
}

console.log(totalSimiliarity)




