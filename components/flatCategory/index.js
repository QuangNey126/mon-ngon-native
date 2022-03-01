import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import { toggleFavorite } from '../../store/slices/favorite'
import Icon from '../Icon'
import styles from './styles'

const FlatCategory = ({id,title,thumb,view,favorite,onPress}) => {
    const dispatch = useDispatch()
    const favoriteData = useSelector(state => state.favorite.items)

    const isFavorite = favoriteData.includes(id);
    const iconFavorite = isFavorite ? "heart" : "heart-o"
    const numberFavorite = isFavorite ? favorite + 1 : favorite


    const changeFavorite = () => {
        dispatch(toggleFavorite({id}))
    }

   
    return (
        <TouchableOpacity onPress={onPress} style={styles.productWrap}>
        <View style={styles.product}>
            <View style={styles.productBoxImg}>
                <Image style={styles.productImg} source={thumb} />
            </View>
            <Text style={styles.productText}>{title}</Text>
            <View style={styles.productIcon}>
                <TouchableOpacity onPress={changeFavorite} style={styles.icon}>
                    <Icon name={iconFavorite} number={numberFavorite} />
                </TouchableOpacity>
                <View style={styles.icon}>
                    <Icon name={'eye'} number={view}/>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default FlatCategory
