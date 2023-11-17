import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'

const CircleButton = ({ onPress }) => {

  return (
      <View style={ styles.circleButtonContainer }>
        <TouchableOpacity 
          activeOpacity={0.6}
          style={ styles.circleButton }
          onPress={ () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            onPress()
          } }
        >
          <MaterialIcons name='add' size={38} color='#25292e'/>
        </TouchableOpacity>
      </View>
    )
  }

export default CircleButton

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  }
})
