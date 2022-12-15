import { LitElement, html, unsafeCSS, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './SimpleGreeting.css';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {

  static styles =[unsafeCSS(styles)]

  // static styles = css`
  //   .test {
  //     color: red;
  //   }
  // `;
  // @property()
  name?: string = '';

  override render() {
    return html`<p class="test">Hello!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-greeting': SimpleGreeting;
  }
}
