/**
 * @file index.ts
 * This file exports the BackgroundGeolocationPlugin and registers it with Capacitor.
 * It acts as the main entry point for accessing the plugin's functionality
 * across different platforms, including web.
 */

import { registerPlugin } from '@capacitor/core';

import type { BackgroundGeolocationPlugin } from './definitions';

/**
 * BackgroundGeolocationPlugin instance for use in Capacitor applications.
 * This instance is registered with Capacitor using the `registerPlugin` function,
 * making it accessible through the Capacitor runtime. It dynamically loads the
 * web implementation when needed.
 */
const BackgroundGeolocation = registerPlugin<BackgroundGeolocationPlugin>('BackgroundGeolocation', {
  /**
   * Dynamically imports the web implementation of the plugin.
   * The `web` option provides a fallback for web environments,
   * ensuring platform-specific implementations can be used seamlessly.
   *
   * @returns A promise resolving to the web implementation of the plugin.
   */
  web: () => import('./web').then((m) => new m.BackgroundGeolocationWeb()),
});

// Export the definitions from 'definitions.ts' for external use.
// These exports allow users to directly use the types and interfaces
// defined for the BackgroundGeolocationPlugin.
export * from './definitions';

// Export the registered BackgroundGeolocationPlugin instance.
// This makes the plugin instance available for import in other modules.
export { BackgroundGeolocation };
