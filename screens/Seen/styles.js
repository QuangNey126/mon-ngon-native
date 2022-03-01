import { StyleSheet , Dimensions} from 'react-native';
import { COLORS } from '../../contains'

const height = Dimensions.get('window').height - 180

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        paddingHorizontal : 15,
        paddingTop : 24,
        backgroundColor : COLORS.background
    },
})

export default styles;