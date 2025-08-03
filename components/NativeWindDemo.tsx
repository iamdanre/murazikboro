import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function NativeWindDemo() {
  return (
    <ThemedView className="p-4 mx-4 my-2 rounded-lg bg-blue-50 dark:bg-blue-900">
      <ThemedText type="title" className="text-center text-blue-700 dark:text-blue-300 mb-4">
        NativeWind Demo
      </ThemedText>
      <ThemedView className="flex-row justify-between items-center mb-3">
        <ThemedText className="font-semibold">Flex Layout:</ThemedText>
        <ThemedText className="text-green-600 dark:text-green-400">✅ Working</ThemedText>
      </ThemedView>
      <ThemedView className="space-y-2">
        <ThemedText className="text-red-500 dark:text-red-400">Red text</ThemedText>
        <ThemedText className="text-blue-500 dark:text-blue-400">Blue text</ThemedText>
        <ThemedText className="text-green-500 dark:text-green-400">Green text</ThemedText>
      </ThemedView>
      <ThemedView className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded">
        <ThemedText className="text-xs text-gray-600 dark:text-gray-400">
          This component demonstrates NativeWind Tailwind CSS classes working with the existing themed components.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}