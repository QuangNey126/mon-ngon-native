import { StyleSheet , Dimensions } from 'react-native';

const height = Dimensions.get('window').height - 180
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    productBox :{
        height : height/4,
        flexDirection : 'row',
        marginBottom : 30
    },
    product : {
        width : '85%',
    },
    productBoxImage : {
        flex : 3
    },
    productImage : {
        width : '100%',
        height : '100%',
        resizeMode : 'cover'
    },
    productBoxTitle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : COLORS.second,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    title : {
        color : COLORS.title,
        fontSize : 16,
        fontWeight : 'bold'
    },
    icon : {
        width : '15%',
    },
    iconBox : {
        paddingHorizontal : 8,
        paddingVertical : 10,
        backgroundColor : COLORS.second,
        marginBottom : 10,
        borderTopEndRadius : 30,
        borderBottomEndRadius : 30,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default styles;