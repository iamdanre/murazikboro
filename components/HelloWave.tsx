import { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated'

import { ThemedText } from '@/components/ThemedText'

export function HelloWave({ reverse = false, iterations = 5 }: { reverse?: boolean, iterations?: number | 'infinite' } = {}) {
    const rotationAnimation = useSharedValue(0)

    const handEmoji = reverse ? '🖕' : '✌️'

    useEffect(() => {
        rotationAnimation.value = withRepeat(
            withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
            iterations === 'infinite' ? -1 : iterations // -1 for infinite loop in Reanimated
        )
    }, [rotationAnimation, iterations])

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotationAnimation.value}deg` }],
    }))

    return (
        <Animated.View style={animatedStyle}>
            <ThemedText style={styles.text}>{handEmoji}</ThemedText>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        lineHeight: 32,
        marginTop: -6,
    },
})
