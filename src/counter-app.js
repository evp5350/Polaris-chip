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
        this.message = "---";


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
        :host ([display=counterMin]) .subOne {
            color: orange;
        }

        :host ([display=counterMax]) .addOne {
            color: orange;
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

        .message {
            font-family: georgia;
            font-size: 10px;
            color: black;
            margin: 4px;
            padding: 4px; 
        }
    `;
    }

    increase(){
        if (this.display === this.counterMax){
            this.display += 0;
            this.messaage === "Maximum interger reached!";
        }
        else {
            this.display += 1;
            this.messaage === "---";
        }
    }

    decrease(){
        if (this.display === this.counterMin){
            this.display -= 0;
            this.messaage === "Minimum interger reached!";
        }
        else {
            this.display -= 1;
            this.messaage === "---";
        }
    }

    render() {
        return html`
        <div>
            <h2 class="counterTitle">${this.counterTitle}</h2>
            <h2 class="display">${this.display}</h2>
            <button class="addOne" @click="${this.increase}">+</button>
            <button class="subOne" @click="${this.decrease}">-</button>
            <p class="message">${this.message}</p>

        </div>
        `;
    }
    static get properties() {
        return {
            counterTitle: { type: String },
            display: { type: Number, reflect: true },
            message: { type: String, reflect: true },
            counterMin: { type: Number },
            counterMax: { type: Number },
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);