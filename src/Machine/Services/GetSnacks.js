import { Products } from "../../MockData";

export const getSnacks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(Products);
  }, 1000);
});
