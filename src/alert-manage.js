import { LitElement, html, css } from 'lit';

export class AlertManage extends LitElement {

    static get tag() {
      return 'alert-manage';
    }

    constructor() {
        super();
        this.priority = "L";
        this.alertDate = "JANUARY 1, 2000";
        this.alertTime = "00:00 A.M.";
        this.alertMessage = "THIS IS A TEST ALERT MESSAGE.";
        this.alertLogo = "https://static.thenounproject.com/png/10890-200.png";
        this.alertDetails = "WEE WOO WEE WOO WEE WOO";
        this.wrapperStatus = 'false';
        this.sticky = "NS";

        const statusDetails = localStorage.getItem('alertStatus');
        if (statusDetails === 'Close') {
            this.style.setProperty('--al-height', '110px');
            this.style.setProperty('--details-vision','0')
        }
    }

    static get styles() {
        return css`
        :host {
            background-color: #bd2d02;
            display: flex;
            height: var(--al-height, 200px);
            overflow: hidden;
            align-content: center;
            position: sticky;
            top: 0;
            z-index: 1000;
    
        }


        :host([priority="WW"]) {
            background-color: lightblue;
        }

        :host([priority="WW"]) .message-wrapper {
            background-color: white;
        }

        :host([priority="WW"]) .message-tri {
            border-right: 100px solid white;
        }


        :host([priority="M"]) {
            background-color: orange;
        }

        :host([priority="M"]) .message-wrapper {
            background-color: gold;
        }

        :host([priority="M"]) .message-tri {
            border-right: 100px solid gold;
        }
        

        :host([priority="H"]) {
            background-color: #881726;
        }

        :host([priority="H"]) .message-wrapper {
            background-color: #cc0000;
        }

        :host([priority="H"]) .message-tri {
            border-right: 100px solid #cc0000;
        }


        .time-wrapper {
            background-color: transparent;
            height: 75px;
            width: 200px;
            padding: 8px;
            margin: 8px;
            opacity: var(--details-vision, 1);
            position: sticky;
            top: 25%;
            left: 2%;
            
        }

        .message-wrapper {
            height: auto;
            width: 60%;
            padding: 0px;
            margin: 0px;
            background-color: orange;
            transform: skewX(10deg);
	        transform-origin: top;
	        justify-content: center;
	        align-items: center;
            
        }

        .message-wrapper > span {
	        transform: skewX(-10deg);
        }

        .alertDate {
            font-family: arial;
            font-size: 16px;
            color: black;
            margin: 0px;
            padding: 0px;
            text-align: left;
            font-weight: bold;
            opacity: var(--details-vision, 1);

        }

        .alertTime {
            font-family: arial;
            font-size: 16px;
            color: black;
            margin: 0px;
            padding: 0px;
            text-align: left;
            font-weight: bold;
            opacity: var(--details-vision, 1);
        }

        .alertMessage {
            font-family: arial;
            color: black;
            margin: 32px;
            padding: 0px;
            text-align: left;
            font-style: italic;
        
        }

        .alertDetails {
            font-family: arial;
            font-size: 15px;
            color: black;
            margin: 0px;
            padding: 0px;
            opacity: var(--details-vision, 1);
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
            color: black;
            font-size: 15px;
            font-family: arial;
            font-weight: bold;
            position: sticky;
            left: 95%;
            
        }

        .message-tri {
            position: sticky;
            top: 50%;
            left: 22%;
            margin: 0px;
            padding: 0px; 
            width: 0;
            height: 0;
            border-top: 50px solid transparent;
            border-right: 100px solid orange;
            border-bottom: 50px solid transparent;
            rotate: -30deg;
            z-index: -1;
            opacity: var(--details-vision, 1);
        }

        .cButton:focus,
        .cButton:hover {
            background-color: lightgray;
        }

        @media only screen and (max-width: 800px) {

            .message-wrapper {
                height: auto;
                width: 400px;
            }

            .message-tri {
                position: sticky;
                top: 50%;
                left: 30%;
            }

            .logo-wrapper {
                height: auto;
                width: auto;
            }


        }
    `;
    }

    toggleAlert() {
        this.wrapperStatus = !this.wrapperStatus;

        if(!this.wrapperStatus) {
            this.style.setProperty('--al-height', '110px');
            this.style.setProperty('--details-vision','0');
            localStorage.setItem('alertStatus', 'Close');
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

        
        <img class="alertLogo" src="${this.alertLogo}" alt="alert-logo"></img>

        <div class="message-tri"></div>
        <div class="message-wrapper"><span>
            <div class="alertMessage">
                <h2>${this.alertMessage}</h2>    
                <slot><p class="alertDetails">${this.alertDetails}<a href="https://www.psu.edu/news"> Penn State News</a></p></slot>
            </div>
            
        </span></div>

        <button class="cButton" @click="${this.toggleAlert}">
            ${this.wrapperStatus ? 'Close' : 'V'}
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
            sticky: { type: String },
            

            
        };
    }
}

globalThis.customElements.define(AlertManage.tag, AlertManage);