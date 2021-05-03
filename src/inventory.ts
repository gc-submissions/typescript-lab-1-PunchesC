import { Product } from "../src/products";

export interface InventoryItem{
  product : Product;
  quantity: number;
}



export let inventory: InventoryItem[]=[
  {product: {name: "motor", price: 10.00}, quantity: 10},
  {product: {name: "sensor", price: 12.50}, quantity: 4},
  {product: {name: "LED", price: 1.00}, quantity: 20},
];

export function calcInventoryValue (inventoryItems: InventoryItem[]):number{
  let value = 0;
  for(let items of inventoryItems){
    value +=(items.product.price * items.quantity);
  }
  if (inventoryItems.length ===0){
    return 0;
  }
return value;

}