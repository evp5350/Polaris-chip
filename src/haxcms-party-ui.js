import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/rpg-character/rpg-character.js";


export class PartyUI extends LitElement {

    static get tag() {
      return 'haxcms-party-ui';
    }

    constructor() {
        super();
        this.icon = "https://cdn-icons-png.flaticon.com/512/880/880594.png";
        this.darkMode = false;
    }

    static get styles() {
        return css`
        :host {
            display: flex;
            margin: 4px;
            padding: 4px;
        }

        :host([darkMode]) .partyInvite {
            background-color: black;
            color: white;
            border: 3px solid white;
        }

        .friendIcon {
            height: 30px;
            width: 30px;
            margin: 8px;
            padding: 8px;
            
        }
        .partyInvite {
            background-color: white;
            border: 3px solid black;
            text-align: center;
            height: 100px;
            width: 100px;
            margin: 4px;
            padding: 4px;
            color: black;
            font-size: 10px;
            font-family: georgia;
            font-weight: bold;

        }

        .partyInvite:focus,
        .partyInvite:hover {
            background-color: lightgray;
        }

        .removeMember {
            background-color: red;
            border: 3px solid black;
            text-align: center;
            height: 50px;
            width: 100px;
            margin: 4px;
            padding: 4px;
            color: black;
            font-size: 10px;
            font-family: georgia;
            font-weight: bold;

        }
        .removeMember:focus,
        .removeMember:hover {
            background-color: lightgray;
        }

        .saveParty {
            background-color: lightblue;
            border: 3px solid black;
            text-align: center;
            height: 50px;
            width: 100px;
            margin: 4px;
            padding: 4px;
            color: black;
            font-size: 10px;
            font-family: georgia;
            font-weight: bold;
        }

        .saveParty:focus,
        .saveParty:hover {
            background-color: lightgray;
        }

        .friendList {
            display: inline-flex;
            margin: 4px;
            padding: 4px;
            background-color: white;
            height: 600px;
            width: 500px;
            overflow: auto;
            border: 3px solid black;

        }

        
    `;
    }

    

    render() {
        return html`
            <div>
                <button class="saveParty">Save Party</button>
                <button class="partyInvite"><img class=friendIcon src="${this.icon}" alt="Add Friend">Invite Friend</button>
            </div>

            <div class="friendList">
                <div>
                    <rpg-character hat="random" seed="haxtheweb"></rpg-character>
                    <p style="text-aign: left; ">placeholder user</p>
                </div>
                <button class="removeMember">Remove Member</button>
            
            </div>
            
            <p style="font-family: comic sans ms;">where we droppin?</p>
            
        
        `;
    }


    static get properties() {
        return {
            icon: { type: String },
            darkMode: { type: Boolean, reflect: true, attribute: "dark-mode"},

        };
    }
}

globalThis.customElements.define(PartyUI.tag, PartyUI);