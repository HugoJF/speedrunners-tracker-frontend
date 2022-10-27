import Component from '@glimmer/component';

export default class PortalComponent extends Component {
  get root() {
    const root = document.getElementById('portal');
    const element = document.createElement('div');

    return root.appendChild(element);
  }
}
