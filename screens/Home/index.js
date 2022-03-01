import React from 'react'
import { View , FlatList } from 'react-native'

import { Category } from '../../components'
import styles from './styles'
import { CATEGORIES } from '../../data'

const HomeScreen = ({navigation}) => {
    const renderGridCategory = ({item}) => {
        return (
            <Category 
                title={item.title}
                thumb={item.thumb}
                onPress={() => {
                    navigation.push('CategoryScreen',{
                        categoryId : item.id,
                        categoryName : item.title
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
              <FlatList
                    data={CATEGORIES}
                    renderItem={renderGridCategory}
                    numColumns={2}
                    keyExtractor={item => item.id}
                /> 
        </View>
    )
}

export default HomeScreen
