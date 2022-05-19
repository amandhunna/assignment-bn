import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
function ProductList(props) {
  const { count, product } = props;
  
  const Product = ({id}) => {
    const productList = Object.entries(product[id]);
    return productList.map(([key, value]) => {
      const liKey = `${key}${value}`
      return <li key={liKey}><span>{key}</span>:<strong>{value}</strong></li>
    });
  }

  const ProductList = () => {
    console.log(count, !count)
    if(!count) {
      return <h1>No product loaded</h1>
    }
    const items = Object.values(product);
    return items.map(({id}) => <Product key={`product-${id}`} id={id} />)
  }

  return (
    <section>
      <span>All fetch products</span>
      <p>
        <ProductList />
      </p>
      <Link to="/">Home</Link>
    </section>);
}

function mapStateToProps(state) {
  return { product: state.product, count: state.count };
}

export default {
  component: connect(mapStateToProps)(ProductList)
};
