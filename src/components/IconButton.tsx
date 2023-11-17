import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics'

const IconButton = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity 
      activeOpacity={0.6} 
      style={ styles.iconButton } 
      onPress={ () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        onPress()
      } }
    >
      <MaterialIcons name={ icon } size={ 28 } color='#fff' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#5151519d',
    padding: 12,
    borderRadius: 28
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  }
})

export default IconButton
