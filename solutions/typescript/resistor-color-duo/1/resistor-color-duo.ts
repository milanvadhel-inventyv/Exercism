export function decodedValue(color:string[]) {
const res:Record<string,number>={
  black: 0,
brown: 1,
red: 2,
orange: 3,
yellow: 4,
green: 5,
blue: 6,
violet: 7,
grey: 8,
white: 9,
}

let ans:number=0;
for(let i=0;i<Math.min(color.length,2);i++)
  {
    ans=ans*10+res[color[i]];
  }
  console.log(ans)
  return ans
  
}
