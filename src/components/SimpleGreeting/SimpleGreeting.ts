import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './SimpleGreeting.scss';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static override styles = [unsafeCSS(styles)];

  @property()
  name?: string = 'World';

  override render() {
    return html`<p class="test">Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-greeting': SimpleGreeting;
  }
}
