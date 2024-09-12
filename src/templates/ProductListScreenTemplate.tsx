import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import ProductList from '../organisms/ProductList';

interface ProductListScreenTemplateProps {
  inputValue: string;
  onInputChange: (text: string) => void;
  onAddProduct: () => void;
}

const ProductListScreenTemplate: React.FC<ProductListScreenTemplateProps> = ({ inputValue, onInputChange, onAddProduct }) => {
  return (
    <View style={styles.container}>
      <InputField value={inputValue} onChangeText={onInputChange} placeholder="Enter product name" />
      <Button onPress={onAddProduct} title="Add Product" color="#28A745" />
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
});

export default ProductListScreenTemplate;
