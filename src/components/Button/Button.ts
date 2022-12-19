import { html, css, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

import styles from "./Button.scss";

@customElement("button-component")
export class ButtonComponent extends LitElement {
  static styles = [unsafeCSS(styles)];

  @property({ type: String }) label: string = "";

  constructor() {
    super();
  }

  render() {
    return html`
      <button class="button-component">
        <span> ${this.label} </span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "button-component": ButtonComponent;
  }
}
