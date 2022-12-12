import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './SimpleGreeting.scss';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static override styles = [unsafeCSS(styles)];

  // Declare reactive properties
  @property()
  name?: string = 'World';

  // Render the UI as a function of component state
  override render() {
    return html`<p class="test">Hello, ${this.name}!</p>`;
  }
}
