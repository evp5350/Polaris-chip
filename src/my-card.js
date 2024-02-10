import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. Replicate codepen card to here.
 * 2. Headers, images, parargraph, and details button.
 * 3. W.i.P.: other functional buttons
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Defualt Card";
    this.link = "https://www.psu.edu/";
    this.cardImg = "https://free-icon-rainbow.com/i/icon_00201/icon_002010_256.png";
    this.para = "Interesting text goes here.";
    this.fancy = false;

  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        background-color: lightskyblue;
        border: 5px solid black;
        overflow: auto;
      }
      :host([fancy]) {
      display: inline-flex;
        color: white;
        background-color: navy;
        border: 5px solid gold;
        box-shadow: 10px 5px 5px black;
        overflow: auto;
      }


      .cardlist {
        display: flex;
      }
      

      /*---image---*/
      .cardImg {
        width: 90%;
        height: auto;
        border: 1px solid black;
        margin: 8px;
        padding: 0px;
      }


      /*----header---- */
      .title {
        font-size: 30px;
        font-family: Georgia;
        padding: 0px;
        margin: 8px;
        color: white;
      }

      /*---para---*/
      .para {
        font-size: 15px;
        font-family: Georgia;
        padding: 10px;
        margin: 10px;
      }
      

      .change-color {
        background-color: purple;
      }
      .restore-color {
        background-color: lightskyblue;

      }
      
      
      
      /*---button---*/
      .det {
        background-color: blue;
        color: white;
        font-size: 20px;
        font-family: Georgia;
        padding: 16px 16px 16px 16px;
        margin: 4px 4px 4px 144px;


      }
      /*---button-hover---*/
      .det:focus,
      .det:hover {
        background-color: gray;
      }


      /* fancy event */
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px;
        font-family: Georgia;
        color: white;
      }
      details[open] summary {
        font-weight: bold;
        font-family: Georgia;
      }
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        margin: 8px;
        height: 70px;
        overflow: auto;
        background-color: #485470;
        font-style: italic;
        font-size: 15px;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div>
      <h1 class="title">${this.title}</h1>
      <img class="cardImg" src="${this.cardImg}"><img>
      <!-- <p class="para">${this.para}</p> -->
      <!-- Fancy card-->
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
      <div>
        <slot>${this.para}</slot>
      </div>
      </details>

      <a href="${this.link}"><button class="det">Details</button></a>

    </div>


    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      cardImg: { type: String },
      para: { type: String },
      fancy : { type: Boolean, reflect: true },

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
