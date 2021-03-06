import { Cordova, Plugin } from './plugin';


/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```typescript
 * import { LocalNotifications } from 'ionic-native';
 *
 *
 * // Schedule a single notification
 * LocalNotifications.schedule({
 *   id: 1,
 *   text: 'Single Notification',
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * LocalNotifications.schedule([{
 *    id: 1,
 *    text: 'Multi Notification 1',
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: 'Local Notification Example',
 *    text: 'Multi Notification 2',
 *    icon: 'http://example.com/icon.png'
 * }]);
 *
 *
 * // Schedule delayed notification
 * LocalNotifications.schedule({
 *    text: 'Delayed Notification',
 *    at: new Date(new Date().getTime() + 3600),
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 *
 */
@Plugin({
  pluginName: 'LocalNotifications',
  plugin: 'de.appplant.cordova.plugin.local-notification',
  pluginRef: 'cordova.plugins.notification.local',
  repo: 'https://github.com/katzer/cordova-plugin-local-notifications'
})
export class LocalNotifications {

  /**
   * Schedules a single or multiple notifications
   * @param options
   */
  @Cordova({
    sync: true
  })
  static schedule(options?: Notification | Array<Notification>): void { }

  /**
   * Updates a previously scheduled notification. Must include the id in the options parameter.
   * @param options
   */
  @Cordova({
    sync: true
  })
  static update(options?: Notification): void { }

  /**
   * Clears single or multiple notifications
   * @param notificationId A single notification id, or an array of notification ids.
   * @returns {Promise} Returns a promise when the notification had been cleared
   */
  @Cordova()
  static clear(notificationId: any): Promise<any> { return; }

  /**
   * Clears all notifications
   * @returns {Promise} Returns a promise when all notifications have cleared
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2
  })
  static clearAll(): Promise<any> { return; }

  /**
   * Cancels single or multiple notifications
   * @param notificationId A single notification id, or an array of notification ids.
   * @returns {Promise} Returns a promise when the notification is canceled
   */
  @Cordova()
  static cancel(notificationId: any): Promise<any> { return; }

  /**
   * Cancels all notifications
   * @returns {Promise} Returns a promise when all notifications are canceled
   */
  @Cordova({
    successIndex: 0,
    errorIndex: 2
  })
  static cancelAll(): Promise<any> { return; }

  /**
   * Checks presence of a notification
   * @param notificationId
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static isPresent(notificationId: number): Promise<boolean> { return; }

  /**
   * Checks is a notification is scheduled
   * @param notificationId
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static isScheduled(notificationId: number): Promise<boolean> { return; }

  /**
   * Checks if a notification is triggered
   * @param notificationId
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static isTriggered(notificationId: number): Promise<boolean> { return; }

  /**
   * Get all the notification ids
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getAllIds(): Promise<Array<number>> { return; }

  /**
   * Get the ids of triggered notifications
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getTriggeredIds(): Promise<Array<number>> { return; }

  /**
   * Get the ids of scheduled notifications
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getScheduledIds(): Promise<Array<number>> { return; }

  /**
   * Get a notification object
   * @param notificationId The id of the notification to get
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static get(notificationId: any): Promise<Notification> { return; }

  /**
   * Get a scheduled notification object
   * @param notificationId The id of the notification to get
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getScheduled(notificationId: any): Promise<Notification> { return; }

  /**
   * Get a triggered notification object
   * @param notificationId The id of the notification to get
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getTriggered(notificationId: any): Promise<Notification> { return; }

  /**
   * Get all notification objects
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getAll(): Promise<Array<Notification>> { return; }

  /**
   * Get all scheduled notification objects
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getAllScheduled(): Promise<Array<Notification>> { return; }

  /**
   * Get all triggered notification objects
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static getAllTriggered(): Promise<Array<Notification>> { return; }

  /**
   * Register permission to show notifications if not already granted.
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static registerPermission(): Promise<boolean> { return; }

  /**
   * Informs if the app has the permission to show notifications.
   * @returns {Promise} Returns a promise
   */
  @Cordova()
  static hasPermission(): Promise<boolean> { return; }


  /**
   * Sets a callback for a specific event
   * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
   * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
   */
  @Cordova({
    sync: true
  })
  static on(eventName: string, callback: any): void { }


}

export interface Notification {

  /**
   * A unique identifier required to clear, cancel, update or retrieve the local notification in the future
   * Default: 0
   */
  id?: number;

  /**
   * First row of the notification
   * Default: Empty string (iOS) or the app name (Android)
   */
  title?: string;

  /**
   * Second row of the notification
   * Default: Empty string
   */
  text?: string;

  /**
   * The interval at which to reschedule the local notification. That can be a value of second, minute, hour, day, week, month or year
   * Default: 0 (which means that the system triggers the local notification once)
   */
  every?: string;

  /**
   * The date and time when the system should deliver the local notification. If the specified value is nil or is a date in the past, the local notification is delivered immediately.
   * Default: now ~ new Date()
   */
  at?: any;
  firstAt?: any;

  /**
   * The number currently set as the badge of the app icon in Springboard (iOS) or at the right-hand side of the local notification (Android)
   * Default: 0 (which means don't show a number)
   */
  badge?: number;

  /**
   * Uri of the file containing the sound to play when an alert is displayed
   * Default: res://platform_default
   */
  sound?: string;

  /**
   * Arbitrary data, objects will be encoded to JSON string
   * Default: null
   */
  data?: any;

  /**
   * ANDROID ONLY
   * Uri of the icon that is shown in the ticker and notification
   * Default: res://icon
   */
  icon?: string;

  /**
   * ANDROID ONLY
   * Uri of the resource (only res://) to use in the notification layouts. Different classes of devices may return different sizes
   * Default: res://ic_popup_reminder
   */
  smallIcon?: string;


  /**
   * ANDROID ONLY
   * Ongoing notifications differ from regular notifications in the following ways:
   * - They are sorted above the regular notifications in the notification panel
   * - They do not have an 'X' close button, and are not affected by the "Clear all" button
   * Default: false
   */
  ongoing?: boolean;

  /**
   * ANDROID ONLY
   * ARGB value that you would like the LED on the device to blink
   * Default: FFFFFF
   */
  led?: string;
}
