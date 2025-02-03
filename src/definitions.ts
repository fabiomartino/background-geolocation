/**
 * @file definitions.ts
 * This file contains the definitions for a custom Capacitor plugin named BackgroundGeolocationPlugin.
 */
import { Plugin } from '@capacitor/core'

/**
 * Options for configuring a watcher for background execution.
 */
export interface WatcherOptions {
  /**
   * The message to be displayed in the notification bar.
   */
  backgroundMessage?: string;

  /**
   * The title of the notification bar.
   */
  backgroundTitle?: string;

  /**
   * Flag indicating whether or not to request location permissions.
   */
  requestPermissions?: boolean;

  /**
   * if "true", stale locations may be delivered while the device obtains a GPS fix. 
   * You are responsible for checking the "time"
   */
  stale?: boolean;

  /**
   * The minimum distance (in meters) the device must move horizontally before receiving an update.
   */
  distanceFilter?: number;
}

/**
 * Represents the location information obtained from the device.
 */
export interface Location {
  /**
   * The latitude of the device's location in degrees.
   */
  latitude: number;

  /**
   * The longitude of the device's location in degrees.
   */
  longitude: number;

  /**
   * The accuracy of the location data in meters, with 68% confidence..
   */
  accuracy: number;

  /**
   * The altitude of the device's location in meters, or null if not available.
   */
  altitude: number | null;

  /**
   * The accuracy of the altitude data in meters, with 68% confidence, or null if not available.
   */
  altitudeAccuracy: number | null;

  /**
   * Indicates whether the location is simulated by software, rather than GPS..
   */
  simulated: boolean;

  /**
   * The bearing (direction) of the device deviation from true north in degrees, or null if not available.
   */
  bearing: number | null;

  /**
   * The speed of the device in meters per second, or null if not available.
   */
  speed: number | null;

  /**
   * The timestamp when the location data was obtained, in milliseconds since the unix epoch, or null if not available.
   */
  time: number | null;
}

/**
 * Represents an error callback with optional error code.
 */
export interface CallbackError extends Error {
  /**
   * An optional error code associated with the error.
   */
  code?: string;
}

/**
 * Interface representing the Capacitor BackgroundGeolocation Plugin.
 * Extends the Capacitor Plugin interface.
 */
export interface BackgroundGeolocationPlugin extends Plugin {

  /**
     * Adds a watcher for background execution with the specified options and callback.
     * @param options - Configuration options for the watcher.
     * @param callback - Callback function to handle location updates or errors.
     * @returns A promise resolving to a unique identifier for the watcher.
     *
     * @since 1.0.0
     */
  addWatcher(
    options: WatcherOptions,
    callback: (
      position?: Location,
      error?: CallbackError
    ) => void
  ): Promise<string>;

  /**
   * Removes a watcher with the specified identifier.
   * @param options - An object containing the `id` property representing the watcher's identifier.
   * @returns A promise resolving when the watcher is successfully removed.
   *
   * @since 1.0.0
   */
  removeWatcher(options: {
    id: string;
  }): Promise<void>;

  /**
   * Opens the device settings for the application, allowing the user to configure necessary permissions.
   * @returns A promise resolving when the settings are successfully opened.
   *
   * @since 1.0.0
   */
  openSettings(): Promise<void>;

}