import {gql, useQuery} from '@apollo/client';
import {Banner} from '@shopify/polaris';
import React from 'react';
import {ProductsList} from "./ProductsList";
import {Loading} from '@shopify/app-bridge-react';

const PRODUCTS_QUERY = gql`{
  products(first: 10) {
    edges {
      cursor
      node {
        id,
        title,
        onlineStoreUrl
      }
    }
  }
}`;


function ProductsPage() {
    const {loading, error, data} = useQuery(PRODUCTS_QUERY);

    if (loading) return (
        <Loading/>
    );

    if (error) return (
        <Banner status="critical">
            There was an issue loading products.
        </Banner>
    );

    return <ProductsList data={data}/>;
}

export default ProductsPage;
