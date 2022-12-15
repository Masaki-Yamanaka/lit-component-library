import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('button-component')
export class ButtonComponent extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: #5fe1ee;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  @property({ type: String }) label: string = '';

  constructor() {
    super();
  }

  render() {
    return html` <button>${this.label}</button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'button-component': ButtonComponent;
  }
}
