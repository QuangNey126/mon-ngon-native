import React from 'react'
import { Alert, View, Text,Image, TouchableOpacity } from 'react-native'
import { useDispatch , useSelector } from 'react-redux'

import Icon from '../Icon'
import styles from './styles'
import { removeProductFavorite , toggleFavorite } from '../../store/slices/favorite'
import { removeProductView } from '../../store/slices/viewed'

const FlatProduct = ({id,title,thumb,heart,navigation}) => {
    const dispatch = useDispatch()

    const favorites     = useSelector((state) => state.favorite.items);
    const isFavorite    = favorites.includes(id);
    const iconFavorite  = isFavorite ? "heart" : "heart-o";

    const trashProduct = () => {
        Alert.alert(
            "Thông báo !",
            "Bạn có chắc chắn muốn xoá ?",
            [
              {
                text: "Huỷ",
                style: "cancel"
              },
              { 
                  text: "Đồng ý", 
                  onPress: () => {
                    heart
                    ? dispatch(removeProductView({id}))
                    : dispatch(removeProductFavorite({id}))
                  }
              }
            ]
          );
        
    }

    const onFavorite = () => {
        dispatch(toggleFavorite({id}));
    }

    const changeScreenProduct = () => {
        navigation.navigate('ProductScreen',{
            productID : id,
            productName : title
        })
    }

    return (
        <TouchableOpacity onPress={changeScreenProduct} style={styles.productBox} >
            <View style={styles.product}>
                <View style={styles.productBoxImage}>
                    <Image style={styles.productImage} source={thumb} />
                </View>
                <View style={styles.productBoxTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <View style={styles.icon}>
                {
                    heart
                    ? ( <TouchableOpacity onPress={onFavorite} style={styles.iconBox}>
                            <Icon name={iconFavorite} />
                        </TouchableOpacity>)
                    : <View />
                }
                <TouchableOpacity onPress={trashProduct} style={styles.iconBox}>
                    <Icon name={'trash'} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default FlatProduct
