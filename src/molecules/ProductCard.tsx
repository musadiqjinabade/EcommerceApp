import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/productsSlice';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteProduct(id));
  }, [dispatch, id]);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Button onPress={handleDelete} title="Delete" color="#FF3B30" />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    color: '#888',
    fontSize: 16,
  },
});

export default ProductCard;
