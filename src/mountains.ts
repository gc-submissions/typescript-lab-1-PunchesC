export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: 'Kilmanjaro', height: 19341 },
  { name: 'Everest', height: 29029 },
  { name: 'Denali', height: 20310 },
];

export function findNameOfTallestMountain(array: Mountain[]): string {
  let highest: number = array[0].height;
  let highestName: string = array[0].name;
  for (let mountain of array) {
    if (mountain.height > highest) {
      highest = mountain.height;
      highestName = mountain.name;
    }
  }
  return highestName;
}
// console.log(findNameOfTallestMountain(mountains));
// {

// for (let hill of array){
//   console.log(hill);
//   if (hill[0].height > hill[1].height ){
//    if(hill[0].height >hill[2].height)
//   {
//   return hill[0].name;
//   }
