import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme, ScrollView } from 'react-native'
import * as Clipboard from 'expo-clipboard'
import { IconSymbol } from './ui/IconSymbol'
import { Colors } from '@/constants/Colors'

interface CodeSnippetProps {
    code: string
    language?: string
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'javascript' }) => {
    const formattedCode = code // trim whitespace
        .split('\n')
        .map(line => line.trimStart())
        .join('\n')
        .trim()

    const [copied, setCopied] = useState(false)
    const colorScheme = useColorScheme()
    const isDarkMode = colorScheme === 'dark'

    const copyCode = async () => {
        await Clipboard.setStringAsync(formattedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const containerBackgroundColor = isDarkMode ? Colors.dark.background : '#f6f8fa';
    const containerBorderColor = isDarkMode ? '#30363d' : '#d0d7de';
    const codeTextColor = isDarkMode ? Colors.dark.text : '#24292f';
    const buttonBackgroundColor = isDarkMode ? '#238636' : '#2ea44f';
    const buttonCopiedBackgroundColor = '#1f6feb';


    return (
        <View style={[styles.container, { backgroundColor: containerBackgroundColor, borderColor: containerBorderColor }]}>
            <TouchableOpacity
                onPress={copyCode}
                style={[
                    styles.button,
                    { backgroundColor: buttonBackgroundColor },
                    copied && { backgroundColor: buttonCopiedBackgroundColor }
                ]}
                accessibilityLabel="Copy code to clipboard"
            >
                <IconSymbol
                    name={copied ? "checkmark" : "doc.on.doc"}
                    size={16}
                    color="white"
                />
            </TouchableOpacity>

            <ScrollView
                horizontal={true}
                style={styles.scrollContainer}
                showsHorizontalScrollIndicator={true}
            >
                <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={true}
                    style={styles.verticalScroll}
                >
                    <Text style={[styles.codeText, { color: codeTextColor }]}>
                        {formattedCode}
                    </Text>
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 8,
        borderWidth: 1,
        overflow: 'hidden',
        minHeight: 50,
        maxHeight: 300
    },
    scrollContainer: {
        padding: 16,
        paddingTop: 16,
        paddingRight: 40,
        paddingBottom: 16
    },
    verticalScroll: {
        maxHeight: 268
    },
    codeText: {
        fontFamily: 'GeistMono',
        fontSize: 14,
    },
    button: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 10,
        borderRadius: 6,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
})

export default CodeSnippet