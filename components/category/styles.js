import { StyleSheet , Dimensions } from 'react-native';

import { COLORS } from '../../contains'

const width = Dimensions.get('window').width - 30

const styles = StyleSheet.create({
    productWrap : {
        width : width/2,
        paddingHorizontal : 10,
    },
    product : {
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 24,
    },
    productBoxImg : {
        width : '100%',
        height : 120,
        borderRadius : 10,
        marginBottom : 12
    },
    productImg : {
        width : '100%',
        height : '100%',
        borderRadius : 10,
        resizeMode : 'cover'
    },
    productText : {
        color : COLORS.title,
        textAlign : 'center',
        fontSize : 16,
        fontWeight : 'bold'
    }
})

export default styles;