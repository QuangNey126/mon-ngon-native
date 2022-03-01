import React from 'react'
import { View , FlatList , Text } from 'react-native'
import { useSelector } from 'react-redux'

import styles from './styles'
import { FlatProduct } from '../../components'
import { PRODUCTS } from '../../data'

const SeenScreen = ({navigation}) => {
    const viewed = useSelector(state => state.viewed.items)
    const products = viewed.map(itemID => PRODUCTS.find(item => item.id === itemID))

    const renderGridProduct = ({item}) => {
        return (
            <FlatProduct 
                heart
                id={item.id}
                title={item.title}
                thumb={item.thumb}
                navigation={navigation}
            />
        )
    }

    const renderEmpty = () => {
        return ( 
            <View>
                <Text>Danh sách món ăn đang rỗng!</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
             <FlatList 
                data={products}
                renderItem={renderGridProduct}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    )
}

export default SeenScreen
