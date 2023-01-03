const topBrandApis = {
  getTopBrandList: async () => {
    const response = await fetch('http://localhost:3100/top_brand')
    const data = await response.json();
    return data;
  }
}

export default topBrandApis;