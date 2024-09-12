import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import ProductListScreenTemplate from '../templates/ProductListScreenTemplate';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsSlice';

const ProductListPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleAddProduct = useCallback(() => {
    if (!inputValue.trim()) {
      Alert.alert('Error', 'Product name cannot be empty');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: inputValue,
      price: Math.random() * 2000,
    };

    dispatch(addProduct(newProduct));
    setInputValue('');
  }, [inputValue, dispatch]);

  return (
    <View style={styles.container}>
      <ProductListScreenTemplate 
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAddProduct={handleAddProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
});

export default ProductListPage;
