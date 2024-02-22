import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

    static get tag() {
      return 'counter-app';
    }

    constructor() {
        super();
        this.counterTitle = "Learn to Count";
        this.counter = 0;
        this.counterMin = 0;
        this.counterMax = 1;
        this.message = "---";
        this.maxReached = false;
        this.minReached = false;

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

        .counter {
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
            background-color: #800000;
            color: black;
            font-size: 20px;
            font-family: Georgia;
            padding: 8px;
            margin: 0px;
        }

        .addOne:focus,
        .addOne:hover {
            background-color: #00ff00;
        }

        .subOne:focus,
        .subOne:hover {
            background-color: #ff0000;
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
            font-size: 12px;
            color: black;
            margin: 4px;
            padding: 4px; 
        }

    `;
    }

    increase(){

        if (this.counter === this.counterMax || this. counter >= this.counterMax){
            this.message = "Maximum value reached!";
            this.counter += 0;
        }
        else {
            this.message = "---";
            this.counter += 1;
        }
    }

    decrease(){
        if (this.counter === this.counterMin || this. counter <= this.counterMin){
            this.message = "Minimum value reached!";
            this.counter -= 0;
        }
        else {
            this.message = "---";
            this.counter -= 1;
        }
    }

    updated(changedProperties) {
        if (changedProperties.has('counter') && (this.counter === 21)) {
          // do your testing of the value and make it rain by calling makeItRain
          return this.makeItRain();
        }
      }
      
      makeItRain() {
        // this is called a dynamic import. It means it won't import the code for confetti until this method is called
        // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
        // will only run AFTER the code is imported and available to us
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
          (module) => {
            // This is a minor timing 'hack'. We know the code library above will import prior to this running
            // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
            // this "hack" ensures the element has had time to process in the DOM so that when we set popped
            // it's listening for changes so it can react
            setTimeout(() => {
              // forcibly set the poppped attribute on something with id confetti
              // while I've said in general NOT to do this, the confetti container element will reset this
              // after the animation runs so it's a simple way to generate the effect over and over again
              this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
          }
        );
    }

    render() {
        return html`
        <div>
            <h2 class="counterTitle">${this.counterTitle}</h2>
            <confetti-container id="confetti"><h2 class="counter" style=${this.counter >= 21 ? 'color: green;' : this.counter >= 18 ? 'color: orange;' : this.counter === this.counterMin ? 'color: red;': ''}>
                ${this.counter}
            </h2></confetti-container>
            
            <button class="addOne" @click="${this.increase}" ?disabled="${this.counter === this.counterMax}">+</button>
            <button class="subOne" @click="${this.decrease}" ?disabled="${this.counter === this.counterMin}">-</button>
            
            <p class="message">${this.message}</p>

        </div>
        `;
    }
    static get properties() {
        return {
            counterTitle: { type: String },
            counter: { type: Number, reflect: true },
            message: { type: String },
            counterMin: { type: Number },
            counterMax: { type: Number },
        };
    }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);