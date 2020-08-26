function productExceptSelf(arr) {
  const products = [];

  for (let i = 0; i < arr.length; i++) {
    let numProduct = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        numProduct *= arr[j];
      }
    }

    products.push(numProduct);
  }

  return products;
}

let arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));

arr = [2, 3, 4, 5, 6];
console.log(productExceptSelf(arr));
