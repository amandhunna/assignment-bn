import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchProduct, resetProductList } from '../actions';


const Home = (props) => {

  const { count, product, dispatch } = props;
  console.log(props); //{ count: 0, dispatch }

  const onResetClick = () => {
    dispatch(resetProductList());
  }

  const onFetchProduct = () => {
    dispatch(fetchProduct());
  }

  const Product = ({id}) => {
    if(!id) {
      return "NO PRODUCT Found";
    }
    const productList = Object.entries(product[id]);
    return productList.map(([key, value]) => {
      const liKey = `${key}${value}`
      return <li key={liKey}><span>{key}</span>:<strong>{value}</strong></li>
    });
  }

  const pageCount = () => {
    if(!count) return "No product selected click next product"
    return count;
  }

  return (
    <div>
    <section>
      <button onClick={onResetClick}>Reset</button>
      <button onClick={onFetchProduct} disable={count > 10}>Next Product</button>
    </section>
    <p>
     Product id: {pageCount()}
    </p>
    <p>
     <Product id={count}/>
    </p>
    <Link to="/users">All products</Link>
    </div>
  );
};

function mapStateToProps(state) {
  return state
}

export default {
  component: connect(mapStateToProps)(Home)
};
