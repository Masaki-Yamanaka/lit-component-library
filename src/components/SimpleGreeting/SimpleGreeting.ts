import { LitElement, html, unsafeCSS,css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './SimpleGreeting.scss';
console.log(styles)
@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  
  static styles =[unsafeCSS(styles)]
    

  //   static styles = css`
  //   .test {
  //     color: blue;
  //   }
  // `;
  // @property()
  // name?: string = 'World';

  override render() {
    return html`<p class="test">Hello!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-greeting': SimpleGreeting;
  }
}
