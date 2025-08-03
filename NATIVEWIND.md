# NativeWind Implementation

This project now uses NativeWind for styling, which brings Tailwind CSS utility classes to React Native.

## What Changed

✅ **NativeWind Integration**: Added NativeWind for Tailwind CSS styling
✅ **Backward Compatibility**: Existing `style` props still work alongside new `className` props
✅ **Theme Support**: Dark/light mode theming is preserved and enhanced
✅ **Component Updates**: ThemedText and ThemedView components now support `className` prop

## Key Features

- **Tailwind Utility Classes**: Use familiar Tailwind classes like `flex-row`, `items-center`, `text-lg`, etc.
- **Responsive Design**: Built-in responsive design capabilities
- **Dark Mode**: Classes like `dark:text-white` automatically adapt to the color scheme
- **Type Safety**: Full TypeScript support with NativeWind types

## Usage Examples

### ThemedView with NativeWind
```tsx
<ThemedView className="flex-row items-center gap-2 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
  <ThemedText>Styled with NativeWind!</ThemedText>
</ThemedView>
```

### ThemedText with NativeWind
```tsx
<ThemedText type="title" className="text-center text-blue-700 dark:text-blue-300 mb-4">
  Responsive Title
</ThemedText>
```

### Mixing style and className
```tsx
<ThemedText 
  style={{ fontFamily: 'SpaceMono' }} 
  className="text-lg font-bold text-green-600"
>
  Mixed styling approach
</ThemedText>
```

## Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `babel.config.js` - Babel plugin for NativeWind
- `global.css` - Tailwind CSS imports
- `nativewind-env.d.ts` - TypeScript declarations
- `jest.config.js` - Jest configuration for testing with NativeWind

## Common Tailwind Classes for React Native

- **Layout**: `flex`, `flex-row`, `flex-col`, `items-center`, `justify-between`
- **Spacing**: `p-4`, `m-2`, `gap-2`, `mb-4`
- **Typography**: `text-lg`, `font-bold`, `text-center`
- **Colors**: `text-blue-500`, `bg-red-100`, `dark:text-white`
- **Borders**: `rounded`, `rounded-lg`, `border`, `border-gray-300`

## Development

All existing development commands work as before:
- `npm start` - Start Expo development server
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run web` - Start web development server

The implementation maintains full compatibility with existing React Native styling while adding the power and convenience of Tailwind CSS utility classes.