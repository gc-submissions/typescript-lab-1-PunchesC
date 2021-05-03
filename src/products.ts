export interface Product {
  name: string;
  price: number;
}

// let products: Product[] = [
//   { name: 'apple', price: 5 },
//   { name: 'oranges', price: 5 },
//   { name: 'mangos', price: 11 },
// ];

export function calcAverageProductPrice(array: Product[]): number {
  let total: number = 0;

  for (let fruit of array) {
    total += fruit.price;
  }

  if (array.length === 0) {
    return 0;
  } else {
    // console.log('total: ' + total + 'array.length: ' + array.length);
    return total / array.length;
  }
}
