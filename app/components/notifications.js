import Component from '@glimmer/component';
import {service} from "@ember/service";

export default class NotificationsComponent extends Component {
  @service notifications;
}
