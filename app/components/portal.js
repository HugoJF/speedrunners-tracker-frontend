import Component from '@glimmer/component';

export default class PortalComponent extends Component {
  get root() {
    return document.getElementById('portal');
  }
}
