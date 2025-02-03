/**
 * @file web.ts
 * This file contains the web implementation of the BackgroundGeolocationPlugin.
 * It defines a class that extends the WebPlugin class and implements the
 * BackgroundGeolocationPlugin interface, providing the required functionality for web platforms.
 */
import { CapacitorException, ExceptionCode, WebPlugin } from '@capacitor/core';

import type { BackgroundGeolocationPlugin, WatcherOptions } from './definitions';

/**
 * Class representing the web implementation of the BackgroundGeolocationPlugin.
 * This class extends the WebPlugin class and implements the BackgroundGeolocationPlugin interface.
 * It provides a base implementation for web-based functionality of the plugin.
 */
export class BackgroundGeolocationWeb extends WebPlugin implements BackgroundGeolocationPlugin {

  addWatcher(options: WatcherOptions): Promise<string>  {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnimplementedError();
  }

  removeWatcher(options: { id: string }): Promise<void> {
        // Always throw an error since the feature is unavailable in this context.
        throw this.createUnimplementedError();
  }

  openSettings(): Promise<void> {
    // Always throw an error since the feature is unavailable in this context.
    throw this.createUnimplementedError();
  }

  /**
   * Creates an exception indicating that a method is not implemented on the current platform.
   * This utility method standardizes the error creation process for unimplemented methods.
   *
   * @returns {CapacitorException} An exception with the `Unimplemented` code and an appropriate message.
   */
  private createUnimplementedError(): CapacitorException {
    return new CapacitorException(
      'This plugin method is not implemented on this platform.',
      ExceptionCode.Unimplemented,
    );
  }
}
