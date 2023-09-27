import { View, Text } from 'react-native'
import * as react from 'react'
import { FlatList } from 'react-native'
import { products } from '../Products'
import ProductCard from './ProductCard'



const ProductsList = () => {
    return (
        <FlatList
            data={products}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) => <ProductCard {...item} />}
            contentContainerStyle={{ paddingHorizontal: 15 }}
        />


    )
}
export default ProductsList