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
        this.setHeight = '300px';
        this.wrapperStatus = 'false';

        const statusDetails = localStorage.getItem('alertStatus');
        if (statusDetails === 'Closed') {
            this.style.setProperty('--al-height', '120px');
            this.style.setProperty('--details-vision','0')
        }
    }

    static get styles() {
        return css`
        :host {
            background-color: navy;
            display: flex;
            height: var(--al-height, 200px);
            overflow: hidden;
            transition: all 0.3s ease;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
    
        }

        :host([priority="WW"]) {
            background-color: lightblue;
        }

        :host([priority="M"]) {
            background-color: orange;
        }
        
        :host([priority="H"]) {
            background-color: #800020;
        }


        .time-wrapper {
            background-color: darkslateblue;
            height: 75px;
            width: 200px;
            padding: 8px;
            margin: 8px;
        }

        .message-wrapper {
            height: 500px;
            width: 500px;
            padding: 8px;
            margin: 8px;
        }

        .logo-wrapper {
            padding: 8px;
            margin: 8px;
        }

        .alertDate {
            font-family: georgia;
            font-size: 15px;
            color: white;
            margin: 0px;
            padding: 0px;
            text-align: left;

        }

        .alertTime {
            font-family: georgia;
            font-size: 15px;
            color: white;
            margin: 0px;
            padding: 0px;
            text-align: left;
        }

        .alertMessage {
            font-family: georgia;
            color: white;
            margin: 0px;
            padding: 0px;
            text-align: left;
        }

        .alertDetails {
            font-family: helvetica;
            font-size: 15px;
            color: white;
            margin: 0px;
            padding: 0px;
            opacity: var(--details-vision, 1);
            transition: all 0.3s ease-in-out;
        }

        .alertLogo {
            width: 85px;
            height: 75px;
            margin: 8px;
            padding: 8px;
        }

        .cButton {
            background-color: transparent;
            border: transparent;
            text-align: center;
            height: 50px;
            width: 50px;
            margin: 4px;
            padding: 4px;
            color: white;
            font-size: 15px;
            font-family: Georgia;
            position: absolute;
            top: 10%;
            right: 40%;
            bottom: 20%;
            left: 95%;
        }

        .cButton:focus,
        .cButton:hover {
            background-color: lightgray;
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

            .cButton {
                right: 10%;
            }

        }

    `;
    }

    toggleAlert() {
        this.wrapperStatus = !this.wrapperStatus;

        if(!this.wrapperStatus) {
            this.style.setProperty('--al-height', '120px');
            this.style.setProperty('--details-vision','0')
            localStorage.setItem('alertStatus', 'Closed');
        }

        else {
            this.style.removeProperty('--al-height');
            this.style.removeProperty('--details-vision');
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

        <img class="alertLogo" src="${this.alertLogo}"></img>


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