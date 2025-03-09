import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function TabThreeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
            headerImage={<Animated.Image source={require('@/assets/images/mem_dodge.png')} style={styles.headerImage} resizeMode="contain" />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Contact</ThemedText>
            </ThemedView>
        </ParallaxScrollView>
    )
}
const styles = StyleSheet.create({
    headerImage: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
})
