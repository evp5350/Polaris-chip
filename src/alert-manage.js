import { LitElement, html, css } from 'lit';

export class AlertManage extends LitElement {

    static get tag() {
      return 'alert-manage';
    }

    constructor() {
        super();
        this.month = "1";
        this.day = "1";
        this.year = "2000";
        this.alertMessage = "THIS IS A TEST ALERT MESSAGE.";
        this.alertLogo = "https://cdn-icons-png.flaticon.com/512/607/607870.png";
        this.alertDetails = "WEE WOO WEE WOO WEE WOO";



    }

    static get styles() {
        return css`
        :host {
            display: inline-flex;
            background-color: white;
            text-align: center;
            border: 5px solid black;
            padding: 8px;
            margin: 8px;
        }

    `;
    }

    render() {
        return html`
        <div>

        </div>
        `;
    }
    static get properties() {
        return {
            
        };
    }
}

globalThis.customElements.define(AlertManage.tag, AlertManage);