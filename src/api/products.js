const productApis = {
  getProductList: async () => {
    const response = await fetch('http://localhost:3400/products')
    const data = await response.json();
    return data;
  }
}

export default productApis;