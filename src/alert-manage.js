import { LitElement, html, css } from 'lit';

export class AlertManage extends LitElement {

    static get tag() {
      return 'alert-manage';
    }

    constructor() {
        super();
        this.alertDate = "January 1, 2000";
        this.alertTime = "00:00 A.M.";
        this.alertMessage = "THIS IS A TEST ALERT MESSAGE.";
        this.alertLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/White_alert_icon.svg/308px-White_alert_icon.svg.png";
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

        .time-wrapper {
            background-color: darkslateblue;
            padding: 8px;
            margin: 8px;
        }

        .message-wrapper {
            padding: 8px;
            margin: 8px;
        }

        .logo-wrapper {
            padding: 8px;
            margin: 8px;
        }

        .alertDate {
            font-family: georgia;
            font-size: 20px;
            color: white;
            margin: 4px;
            padding: 4px;
            text-align: left;

        }

        .alertTime {
            font-family: georgia;
            font-size: 20px;
            color: white;
            margin: 4px;
            padding: 4px;
            text-align: left;
        }

        .alertMessage {
            font-family: georgia;
            color: white;
            margin: 4px;
            padding: 4px;
            text-align: left;
        }

        .alertDetails {
            font-family: georgia;
            font-size: 20px;
            color: white;
            margin: 4px;
            padding: 4px;
        }

        .alertLogo {
            width: 100px;
            height: 100px;
            margin: 8px;
            padding: 8px;
        }

        .sticky {
            position: fixed;
            top: 0;
            width: 100%;
        }

        .close-button {
            background-color: gray;
            height: 30px;
            width: auto;
            color: white;
            font-size: 15px;
            font-family: georgia;
            padding: 4px;
            margin: 4px;
        }


        @media only screen and (max-width: 800px) {
            .time-wrapper {
                height: auto;
                width: auto;
            }

            .message-wrapper {
                height: auto;
                width: auto;
            }

            .logo-wrapper {
                height: auto;
                width: auto;
            }
        }

    `;
    }
    

    render() {
        return html`
        
        <div class="time-wrapper">
            <div class="alertTime">
                <p>${this.alertDate}</p>
                <p>${this.alertTime}</p>
            </div>
        </div>
        
        <div class="logo-wrapper">
            <img class="alertLogo" src="${this.alertLogo}"><img>
        </div>

        <div class="message-wrapper">
            <div class="alertMessage">
                <h2>${this.alertMessage}</h2>
                <details>
                <p class="alertDetails">${this.alertDetails}</p>
                </details>
            </div>
        </div>

        <button class="close-button">X Close</button>

        `;
    }


    static get properties() {
        return {
            alertDate: { type: String },
            alertTime: { type: String },
            alertMessage: { type: String },
            alertDetails: { type: String },
            alertLogo: { type: String },

            
        };
    }
}

globalThis.customElements.define(AlertManage.tag, AlertManage);