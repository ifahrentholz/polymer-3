import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings';
import page from "./templates/page.html";
import "./components/card/card";

class StartPolymer3 extends PolymerElement {
  static get properties () {
    return {
      message: {
        type: String,
        value: ''
      }
    };
  }

  constructor() {
    super();
    // Resolve warning about scroll performance
    // See https://developers.google.com/web/updates/2016/06/passive-event-listeners
    setPassiveTouchGestures(true);
    this.message = 'Hello World! I\'m a Polymer element :)';
  }

  ready(){
    super.ready();
  }

  static get template () {
    return html([`${page}`]);
  }
}

// Register the element with the browser.
customElements.define('start-polymer3', StartPolymer3);
