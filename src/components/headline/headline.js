import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

//import headlineStyles from "./headline.scss";

class Headline extends PolymerElement {
  static get properties() {
    return {
      text: {
        type: String,
        value: "TODO"
      }
    }
  }

  static get template() {
    return html([`
      
      <h1>[[text]]</h1>
    `]);
  }
}

// Register the element with the browser.
customElements.define('headline-element', Headline);
