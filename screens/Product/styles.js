import { StyleSheet , Dimensions } from 'react-native';

const width = Dimensions.get('screen').width

import { COLORS } from '../../contains'

const styles = StyleSheet.create({
    background : {
        flex : 1,
        position : 'absolute',
        opacity : 0.8
    },
    product : {
        flex : 1
    },
    productImg : {
        flex : 1,
        width : '100%',
    },
    img : {
        width : '100%',
        height : '100%',
        resizeMode : 'cover'
    },
    productImgIcon : {
        backgroundColor : COLORS.second,
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        bottom : 0,
        flexDirection : 'row',
        width : width/3.5,
        height : 50
    },
    productImgIconLeft : {
        borderTopRightRadius : 30,
        left : 0,
    },
    productImgIconRight : {
        backgroundColor : COLORS.second,
        borderTopLeftRadius : 30,
        right : 0,
    },
    productContent : {
        flex : 2,
        paddingHorizontal : 15,
    },
    text : {
        fontSize : 14
    },
    textTitle : {
        fontWeight : 'bold',
        fontSize : 16,
        color : COLORS.title
    },
    productContentText : {
        marginTop : 23,
        marginBottom : 20
    },
    productContentBox : {
        marginVertical : 20,
        alignItems : 'center'
    },
    productContentBoxTitle : {
        width : 167,
        height : 35,
        backgroundColor : COLORS.second,
        borderTopRightRadius : 30,
        borderTopLeftRadius : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    productContentBoxContent : {
        paddingVertical : 20,
        paddingHorizontal : 15,
        backgroundColor : COLORS.second,
        width : '100%'
    }

})

export default styles;