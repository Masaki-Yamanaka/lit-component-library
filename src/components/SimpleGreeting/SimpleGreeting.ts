import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './SimpleGreeting.scss';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = [unsafeCSS(styles)];

  @property({ type: String }) text: string = '';
  constructor() {
    super();
  }

  render() {
    return html`<p class="test">${this.text}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-greeting': SimpleGreeting;
  }
}
