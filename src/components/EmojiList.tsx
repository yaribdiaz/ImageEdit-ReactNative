import { StyleSheet, FlatList, Platform, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'

const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([
    'https://emojiisland.com/cdn/shop/products/Rolling_Eyes_Emoji_Icon_d5a8401c-e785-4a6f-975d-856eadfd95de_large.png?v=1571606093',
    'https://imageio.forbes.com/specials-images/imageserve/63efaa7702c6b4c4adb8d5b0/Shaking-face-emoji-in-iOS-16-4-/960x0.png?height=711&width=711&fit=bounds',
    'https://imageio.forbes.com/specials-images/imageserve/602c09ecb13c8ac2bc56acc1/Face-exhaling---a-new-Apple-emoji-/960x0.png?height=711&width=711&fit=bounds',
    'https://imageio.forbes.com/specials-images/imageserve/602c09c9135a060af5e1a8f4/Face-with-Spiral-Eyes---a-new-Apple-emoji-/960x0.png?format=png&width=960',
    'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Blushed-Smiling-Emoji-Free-Download-IOS-Emojis.png',
    'https://emojiisland.com/cdn/shop/products/Tears_Emoji_Icon_2_large.png?v=1571606092',
    ])
  
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={ Platform.OS === 'web' }
      data={ emoji }
      contentContainerStyle={ styles.listContainer }
      renderItem={({ item, index }) => {
        return(
          <TouchableOpacity
            activeOpacity={ 0.6 }
            onPress={ () => {
              onSelect(item)
              onCloseModal()
            } }
          >
            <Image source={{ uri: item }} key={ index } style={ styles.image }/>
          </TouchableOpacity>
        )
      }}
    >
      
    </FlatList>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
})

export default EmojiList