import Service from '@ember/service';
import {TrackedObject} from "tracked-built-ins";

let uid = 0;

export default class NotificationsService extends Service {
  notifications = new TrackedObject();

  info(message, duration = 5000) {
    const id = uid++;

    this.notifications[id] = message;
    setTimeout(() => {
      delete this.notifications[id];
    }, duration);
  }
}
