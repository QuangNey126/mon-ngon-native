import React from 'react'
import { FlatList, View } from 'react-native'

import styles from './styles'
import { FlatCategory } from '../../components'
import { PRODUCTS } from '../../data'

const CategoryScreen = ({navigation,route}) => {

    const { categoryId , categoryName } = route.params
    const productData = PRODUCTS.filter(item => item.categoryId === categoryId)

    const renderGridProduct =({item}) => {
        return (
            <FlatCategory 
                id={item.id}
                title={item.title}
                thumb={item.thumb}
                view={item.view}
                favorite={item.favorite}
                onPress={() => {
                    navigation.push('ProductScreen',{
                        productID : item.id,
                        productName : item.title
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
              <FlatList
                    data={productData}
                    renderItem={renderGridProduct}
                    keyExtractor={item => item.id}
                /> 
        </View>
    )
}

export default CategoryScreen
