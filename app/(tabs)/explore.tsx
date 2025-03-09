import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import CodeSnippet from '@/components/CodeSnippet';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <Image source={require('@/assets/images/icon.png')} style={styles.smallerImg} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
        <ThemedText type='defaultSemiBold' style={styles.fontLabel}>geist mono 👻 </ThemedText>
        <ThemedText style={{ fontFamily: 'GeistMono' }}>
          {fontTest}
          <i>{fontTestItalic}</i>
        </ThemedText>
        <ThemedText type='defaultSemiBold' style={styles.fontLabel}>monospace neon 👽</ThemedText>
        <ThemedText style={{ fontFamily: 'MonaspaceNeon' }}>
          {fontTest}
          <i>{fontTestItalic}</i>
        </ThemedText>
        <ThemedText type='defaultSemiBold' style={styles.fontLabel}>default ✌️</ThemedText>
        <ThemedText>
          {fontTest}
          <i>{fontTestItalic}</i>
        </ThemedText>
      </Collapsible>
      <Collapsible title="code snippets">
        <CodeSnippet
          code={`
            let x = 1
            let y = 2
            let z = x + y
            console.info("if x is " + x + " and y is " + y + ", then z is " + z)
            `}
        />
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  fontLabel: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 8,
  },
  smallerImg: {
    alignSelf: 'center',
    transform: [{ scale: 3 }],
    width: 100,
    height: 100,
  },
});

const fontTest = `
the affluent office staff ffucking finally figured out an efficient workflow
= == === != !== .= += -= -> <-> -< >- </> < <= <| {| <=> <==> |} |> >= > <>
* ** *** {} {{}} o O 0 S $ i I l L @ # ## $123,456.78 €6.9 £ ¥ ₹ ₩ ₽
% ^ & && - -- + ++ | || / // ~- ~ ~~ -~ &= ? ! !! ' " ; : :: ][ [] , .
áéíóú àèìòù äëïöü âêîôû ãõñç ©®™ /** */ <!--x-->
AV Ta Te To Ty Wa Wo Ya Yo f) f. f, f- f' f" gy
`;
const fontTestItalic = `fi fl ff ffi ffl fj tf ft øå∂¨–•®ºœª¡!∞§¶≠“πß∂ƒ©˙∆˚¬…æΩ≈ç√∫˜µ≤≥÷ ⁄€‹›ﬂ‡·ˇ°‚Œ¨Á˝Ç˛ PÚ\n
`;