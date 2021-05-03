import { Product } from "../src/products";

interface InventoryItem{
  product : Product;
  quantity: number;
}



let inventory: InventoryItem[]=[
  {  product: new Product(){},price:10.00,quantity:10 },
];