import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '../headline/headline';
//import cardStyles from "./card.scss";

class Card extends PolymerElement {
  static get template() {
    return html([`
      
      <div class="box">
        <headline-element text="Die neue Mercedes-AMG E 53 4MATIC+ Limousine."></headline-element>
        <p>
          Before they sold out typewriter meggings, poutine cloud bread lo-fi health goth. Drinking vinegar schlitz paleo skateboard cred, pitchfork tumeric. Yr kitsch next level heirloom, pitchfork wolf fashion axe. Yuccie YOLO twee forage jianbing prism, chicharrones edison bulb mustache brunch pok pok tbh swag thundercats. Bespoke you probably haven't heard of them typewriter leggings yuccie.
        </p>
      </div>
    `]);
  }
}

// Register the element with the browser.
customElements.define('card-element', Card);
