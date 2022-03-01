import { StyleSheet , Dimensions } from 'react-native';

const height = Dimensions.get('window').height - 180

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    productWrap : {
        height : height/3,
        backgroundColor : COLORS.second,
        borderRadius : 20,
        alignItems : 'center',
        marginBottom : 22
    },
    product : {
        flex : 1,
        width : '100%',
        alignItems : 'center'
    },
    productBoxImg : {
        width : '100%',
        height : '50%',
        marginBottom : 14
    },
    productImg : {
        width : '100%',
        height : '100%',
        resizeMode : 'cover',
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20
    },
    productIcon : {
        flexDirection : 'row'
    },
    productText : {
        color : COLORS.title,
        marginBottom : 14,
        fontWeight : 'bold',
        fontSize : 16,
        textAlign : 'center'
    },
    icon : {
        marginRight : 20
    },
   
})

export default styles;