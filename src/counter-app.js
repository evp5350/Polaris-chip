import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
      return 'counter-app';
    }

    constructor() {
        super();
        this.counterTitle = "Learn to Count";
        this.display = 0;
        this.counterMin = 0;
        this.counterMax = 1;


    }

    static get styles() {
        return css`
        :host {
            display: inline-flex;
            background-color: white;
            text-align: center;
            border: 5px solid black;
            margin: 8px;
            padding: 8px;
        }

        .counterTitle {
            font-family: georgia;
            color: black;
            margin: 4px;
            padding: 4px;
        }

        .display {
            font-family: georgia;
            font-size: 40px;
            color: black;
            margin: 4px;
            padding: 4px;
        }

        .addOne {
            background-color: green;
            color: black;
            font-size: 20px;
            font-family: Georgia;
            padding: 8px;
            margin: 0px;
        }

        .subOne {
            background-color: red;
            color: black;
            font-size: 20px;
            font-family: Georgia;
            padding: 8px;
            margin: 0px;
        }

        .addOne:focus,
        .addOne:hover {
            background-color: gray;
        }

        .subOne:focus,
        .subOne:hover {
            background-color: gray;
        }

        .counterMin {
            font-family: georgia;
            font-size: 20px;
            color: black;
            margin: 4px;
            padding: 4px;
        }
        .counterMax {
            font-family: georgia;
            font-size: 20px;
            color: black;
            margin: 4px;
            padding: 4px;
        }



    `;
    }

    render() {
        return html`
        <div>
            <h2 class="counterTitle">${this.counterTitle}</h2>
            <h2 class="display">${this.display}</h2>
            <button class="addOne">+</button>
            <button class="subOne">-</button>
        </div>
        <p class="counterMin">Min: ${this.counterMin}</p>
        <p class="counterMax">Max: ${this.counterMax}</p>
        `;
    }

    static get properties() {
        return {
            counterTitle: { type: String },
            display: { type: Number },
            counterMin: { type: Number },
            counterMax: { type: Number },
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);