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
    this.img = "https://mario.wiki.gallery/images/thumb/7/7f/Question_Block_-_Nintendo_JP_website.png/1200px-Question_Block_-_Nintendo_JP_website.png";
    this.para = "Interesting text goes here.";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        background-color: lightskyblue;
        height: 500px;
        width: 400px;
        padding: 10px;
        margin: 10px;
        border: 5px solid black;
      }

      img {
        height: 50%;
        width: 90%;
        border: 5px white; 
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 0px 8px;
      }

      p {
        font-size: 20px;
        font-family: georgia;
        padding: 0px 0px 0px 0px;
        margin: 32px 0px 16px 8px;
        color: white;
      }

      span {
        color: white;
        font-size: 40px;
        font-family: Georgia;
        height: 50px;
        width: 250px;
        padding: 0px 0px 0px 8px;
        margin: 0px 0px 0px 0px;
      }

      span:hover {
        background-color: yellow;
        border: 1px black;

      }

    `;
  }

  render() {
    return html` <a href="${this.link}">
    <span>${this.title}</span>
    <p>${this.para}</p>
    <img src="${this.img}"></img>
    </a>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      img: { type: String },
      para: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
