import React from 'react'
import { TouchableOpacity , Alert} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux'

import styles from './styles'
import { COLORS } from '../../contains'
import { removeAllProduct } from '../../store/slices/favorite'
import { removeAllProductView } from '../../store/slices/viewed'

const IconHeader = ({seen,data}) => {
    const dispatch = useDispatch()
    const trashAllProduct = () => {
      if( data.length !== 0 ) {
        Alert.alert(
          "Thông báo !",
          "Bạn có chắc chắn muốn xoá tất cả ?",
          [
            {
              text: "Huỷ",
              style: "cancel"
            },
            { 
                text: "Đồng ý", 
                onPress: () => {
                  seen
                  ? dispatch(removeAllProductView())
                  : dispatch(removeAllProduct())
                }
            }
          ]
        );
      }else {
        alert ( 'Chưa có sản phẩm nào !!!')
      }
        
    }


   return (
    <TouchableOpacity onPress={trashAllProduct} style={styles.container}>
        <FontAwesome name={'trash'} size={30} color={COLORS.second} />
    </TouchableOpacity>
   )
}

export default IconHeader
