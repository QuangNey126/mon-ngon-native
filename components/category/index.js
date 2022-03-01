import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './styles'

const Category = ({title,thumb,onPress}) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.productWrap}>
            <View style={styles.product}>
                <View style={styles.productBoxImg}>
                    <Image style={styles.productImg} source={thumb} />
                </View>
                <Text style={styles.productText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Category
