import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  className?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Combine type-based classes with custom className
  const typeClass = {
    default: 'text-base leading-6',
    title: 'text-3xl font-bold leading-8',
    defaultSemiBold: 'text-base leading-6 font-semibold',
    subtitle: 'text-xl font-bold',
    link: 'text-base leading-7 text-blue-600',
  }[type];

  const combinedClassName = [typeClass, className].filter(Boolean).join(' ');

  return (
    <Text
      style={[{ color }, style]}
      className={combinedClassName}
      {...rest}
    />
  );
}

// Keep legacy styles for fallback
const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
