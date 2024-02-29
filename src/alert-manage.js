import { LitElement, html, css } from 'lit';

export class AlertManage extends LitElement {

    static get tag() {
      return 'alert-manage';
    }

    constructor() {
        super();
        this.priority = "L";
        this.alertDate = "January 1, 2000";
        this.alertTime = "00:00 A.M.";
        this.alertMessage = "THIS IS A TEST ALERT MESSAGE.";
        this.alertLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/White_alert_icon.svg/308px-White_alert_icon.svg.png";
        this.alertDetails = "WEE WOO WEE WOO WEE WOO";
        this.setHeight = '150px';
        this.wrapperStatus = 'false';

        const statusDetails = localStorage.getItem('alertStatus');
        if (statusDetails === 'Closed') {
            this.style.setProperty('--al-height', '50px');
        }



    }

    static get styles() {
        return css`
        :host {
            background-color: navy;
            display: flex;
            height: var(--al-height, 100px);
            overflow: hidden;
            transition: all 0.3s ease;
            text-align: center;
            position: sticky;
            border: 3px solid black;
            top: 0;
            z-index: 1000;
    
        }
        :host([priority="M"]) {
            background-color: orange;
        }

        :host([priority="H"]) {
            background-color: #800020;
        }

        :host([open]) {
            max-height: var(--al-height, 150px);

        }

        .time-wrapper {
            background-color: darkslateblue;
            height: auto;
            width: auto;
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
            font-family: helvetica;
            font-size: 15px;
            color: white;
            margin: 16px;
            padding: 4px;
        }

        .alertLogo {
            width: 100px;
            height: 100px;
            margin: 8px;
            padding: 8px;
        }

        .cButton {
            text-align: center;
            height: 40px;
            width: 40px;
            color: black;
            font-size: 10px;
            font-family: Georgia;
            padding: 4px;
            margin: 4px;
        }

        .cButton:focus,
        .cButton:hover {
            background-color: lightgray;
        }

/*
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
*/

    `;
    }

    toggleAlert() {
        this.wrapperStatus = !this.wrapperStatus;

        if(!this.wrapperStatus) {
            this.style.setProperty('--al-height', '50px');
            localStorage.setItem('alertStatus', 'Closed');
        }

        else {
            this.style.removeProperty('--al-height');
            localStorage.removeItem('alertStatus');
        }
    }
    

    render() {
        return html`
        <div class="time-wrapper">
            <div class="alertTime">
                <p>${this.alertDate}</p>
                <p>${this.alertTime}</p>
            </div>
        </div>


        <div class="message-wrapper">
            <div class="alertMessage">
                <h2>${this.alertMessage}</h2>    
                <p class="alertDetails">${this.alertDetails}</p>
            </div>
        </div>

        <button class="cButton" @click="${this.toggleAlert}">
            ${this.wrapperStatus ? 'Close' : 'Open'}
        </button>

        `;
    }


    static get properties() {
        return {
            priority: { type: String },
            alertDate: { type: String, attribute: "alert-date" },
            alertTime: { type: String, attribute: "alert-time" },
            alertMessage: { type: String, attribute: "alert-message" },
            alertDetails: { type: String, attribute: "alert-details" },
            alertLogo: { type: String, attribute: "alert-logo" },
            wrapperStatus: { type: Boolean, reflect: true },
            

            
        };
    }
}

globalThis.customElements.define(AlertManage.tag, AlertManage);