import { LitElement, html, css } from 'lit';

export class PartyUI extends LitElement {

    static get tag() {
      return 'haxcms-party-ui';
    }

    constructor() {
        super();
        
    }

    static get styles() {
        return css`
        

        @media only screen and (max-width: 800px) {

            


        }
    `;
    }

    

    render() {
        return html`

        
        `;
    }


    static get properties() {
        return {
            

            
        };
    }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);