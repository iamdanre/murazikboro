// Mock CSS imports
jest.mock('react-native-css-interop', () => {
  return {
    createInteropElement: () => 'View',
  };
});

import 'react-native-gesture-handler/jestSetup';