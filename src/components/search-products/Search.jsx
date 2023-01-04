import React, { useEffect,useState } from 'react'
import './style.css';
import SearchResult from './SearchResult';
import productApis from '../../api/products.js';


export default function Search() {
  const [ result, setResult ] = useState([]);
  const [ product, setProduct ] = useState([]);
  const [ show, setShow ] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      const response = await productApis.getProductList();

      if(componentMounted) {
        setProduct(response);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProduct();
  }, [])
  
  const handleSearch = (e) => {
    let searchInp = e.target.value;
    let search = product.filter(item => item.name.toLowerCase().includes(searchInp))
    if(search) setResult(search);
    if(searchInp !== '') setShow(true);
  }
  
  const handleBlur = (e) => {
    if(e.target.value !== "") {
      e.target.value = "Search for Products"; 
      setShow(false);
    } e.target.value = "Search for Products";
  }

  return (
    <div className="search_box">
      <form>
        <input
          type="text"
          defaultValue="Search for Products"
          onFocus={(e) => e.target.value = ""}
          onBlur={handleBlur}
          onChange={handleSearch}
        />
        <input
          type="submit"
          value={"search"}
          style={{ textTransform: "uppercase" }}
        />
      </form>
    {show && <SearchResult result={result} />}
    </div>
  )
}
