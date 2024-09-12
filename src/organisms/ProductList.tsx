import React, { useMemo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../molecules/ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const productCards = useMemo(() => 
    products.map(product => (
      <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} />
    )), [products]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {productCards}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
    },
  });

export default ProductList;
