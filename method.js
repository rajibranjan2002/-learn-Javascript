// map, filter, reduce.

const arr  =[ 2,3,4,5,6,7];
 const output = arr.map((x) => x.toString(2));
 console.log(output);
 // output: [ '10', '11', '100', '101', '110', '111' ]

 // filter odd values
 const odd = arr.filter((x) => x % 2 != 0);
 console.log(odd);
// output: [ 3, 5, 7 ]
 //reduce

 const sum = arr.reduce((acc,curr) => acc = acc + curr);
 console.log(sum);
 // output: 27

 const max = arr.reduce(function(acc,curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
 }, 0);
     
  console.log(max); // 7

  const users = [
    {firstName:"Rajib", lastNmae:" Sahooo", age:"22"},
    {firstName:"Virat", lastNmae:" Kohli", age:"38"},
    {firstName:"Rohit", lastNmae:" Sharma", age:"42"},
    {firstName:"Jasprit", lastNmae:"Bhumra", age:"38"},
  ];

  const userDetail = users.map((x) => x.firstName +" "+x.lastNmae);
  console.log(userDetail);
  // output:  [ 'Rajib  Sahooo', 'Virat  Kohli', 'Rohit  Sharma', 'Jasprit Bhumra' ]   

  const ageCount = users.reduce((acc,curr) => {
      if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
      }else{
        acc[curr.age] = 1;
      }
      return acc;
  }, {});

  console.log(ageCount);
  // output:  { '22': 1, '38': 2, '42': 1 }

  const belowForty = users.reduce((acc, curr) => {
    if (curr.age < 40) {
      acc.push(curr.firstName);
    }
    return acc;
  }, [])
  console.log(belowForty)