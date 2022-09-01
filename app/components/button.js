import Component from '@glimmer/component';

export default class ButtonComponent extends Component {
  base = 'border rounded';
  color = {
    primary: 'text-white bg-blue-500 hover:bg-blue-600 border-blue-500',
    dark: 'bg-gray-800 hover:bg-gray-700 border-gray-700',
  };
  size = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-md',
  };

  get classes() {
    const color = this.color[this.args.color ?? 'default'];
    const size = this.size[this.args.size ?? 'md'];

    return [this.base, color, size].filter(Boolean).join(' ');
  }
}
