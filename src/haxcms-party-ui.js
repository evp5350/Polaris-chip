import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { RpgCharacter } from '@lrnwebcomponents/rpg-character/rpg-character.js';

export class PartyUI extends DDD {
    static get tag() {
        return "haxcms-party-ui";
    }
  
    constructor() {
        super();
      
        this.saved = false;
        this.party = localStorage.getItem("party") != null ? localStorage.getItem("party").split(",") : ["evp5350"];
    }
  
    static get styles() {
        return [
        super.styles,
        css`
            :host {
                display: flex;
            }
            .partyList {
                background-color: var(--ddd-theme-default-beaverBlue);
                min-width: 100vh;
                height: 620px;
                padding: var(--ddd-spacing-4);
                color: white;
                overflow-y: scroll;

            }

            .username {
                font-family: "Press Start 2P", system-ui;
                margin: var(--ddd-spacing-8);
                padding: var(--ddd-spacing-8);
                
            }

            .userSlot {
                display: flex;
                margin-left: var(--ddd-spacing-4);


            }

            .buttonWrapper {
                display: flex;
                margin-left: var(--ddd-spacing-4);
                
            }
            
            .rules {
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                width: 92%;
                background-color: var(--ddd-theme-default-nittanyNavy);

            }

            .ruleText {
                font-family: "Press Start 2P", system-ui;
                font-size: 12px;
                margin: 0px;
                padding: 0px;

            }

            .partyDisplay {
                text-align: left;
            }

            .partyInvite {
                font-family: "Press Start 2P", system-ui;
                font-size: var(--ddd-font-size-3xs);
                font-weight: 500;
                color: blue;
                min-width: 150px;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                border: var(--ddd-border-sm);
                border-color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-roarMaxlight);

            }

            .removeMember {
                font-family: "Press Start 2P", system-ui;
                font-size: var(--ddd-font-size-3xs);
                font-weight: 500;
                color: blue;
                min-width: 150px;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                border: var(--ddd-border-sm);
                border-color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-roarMaxlight);
                position: sticky;
                left: 90%;

            }
            
            .saveParty {
                font-family: "Press Start 2P", system-ui;
                font-size: var(--ddd-font-size-3xs);
                font-weight: 500;
                color: blue;
                min-width: 150px;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                border: var(--ddd-border-sm);
                border-color: var(--ddd-theme-default-nittanyNavy);
                background-color: var(--ddd-theme-default-roarMaxlight);
            }

            .partyInvite:focus,
            .partyInvite:hover {
                background-color: var(--ddd-theme-default-nittanyNavy);
                color: var(--ddd-theme-default-roarMaxlight);
                transform: scale(1.1);
                transition: 0.3s ease-in-out;
            }

            .removeMember:focus,
            .removeMember:hover {
                background-color: var(--ddd-theme-default-nittanyNavy);
                color: var(--ddd-theme-default-roarMaxlight);
                transform: scale(1.1);
                transition: 0.3s ease-in-out;
            }

            .saveParty:focus,
            .saveParty:hover {
                background-color: var(--ddd-theme-default-nittanyNavy);
                color: var(--ddd-theme-default-roarMaxlight);
                transform: scale(1.1);
                transition: 0.3s ease-in-out
            }

            .search-input {
                font-family: "Press Start 2P", system-ui;
                min-width: 92%;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                background-color: var(--ddd-theme-default-slateMaxLight);
            }



          
          
        `];
    }

    deleteData() {
        localStorage.removeItem("party");
    }

    addUser() {
        this.party = [...this.party, null];
        this.saved = true;
    }

    saveData() {
        if (this.saved) {
            const partyArray = this.party.toString();
            localStorage.setItem("party", partyArray);
            console.log(localStorage.getItem("party").split(","));
            this.makeItRain();

        }

        else {
            localStorage.removeItem("party");
        }
    }

    remove() {
        this.saved = false;
    }

    /*handleInput(event) {
        const input = event.target.value;
        const filter = input.replace(/[^a-z0-9]/g, "");

        event.target.value = filter.slice(0, 10);
    } */
    
    addItem() {
        const input = document.querySelector(".search-input").value;

        if (input.trim() !== "") {
            if (this.party.length < 5) {
                if (/^[a-z0-9]{1,10}$/.test(input)) {
                    if (!this.party.includes(input)) {
                        const confirmed = window.confirm(`Invite ${input} to division?`);
                        if (confirmed) {
                            this.party = [...this.party, input];
                            this.saved = true;
                        }
                        else {
                            window.alert("User is already in the division.");
                        }
                    }
                }
                else {
                    window.alert("Must contain only lowercase letters, numbers, no spaces, and a maximum of 10 characters.");
                }
            }
            else {
                window.alert("The division is full!");
            }
        }
        else {
            window.alert("Empty entry!");
        }
    }
    
    displayItem(item) {
        return html`<rpg-character seed="${item}"></rpg-character>`;
      
    }

    
    makeItRain() {
        import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
            (module) => {
                setTimeout(() => {
                this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
            }, 0);
          }
        );
    }





    render() {
        return html`
            <confetti-container id="confetti">
                <div class="partyList">
                    <h2 style="font-family: system.ui; color: white; text-align: center;">Create a Division</h2>
                    <input type="text" class="search-input" placeholder="Add a division member."/>
                    
                    <div class="rules">
                            <p class="ruleText">Input Rules:</p>
                            <p class="ruleText">- Maximum of 10 characters.</p>
                            <p class="ruleText">- Only lowercase letters.</p>
                            <p class="ruleText">- No special characters.</p>
                            <p class="ruleText">- Division can only have a maximum of 5 members.</p>
                    </div>

                    <div class="buttonWrapper">
                        <button class="saveParty" @click="${this.saveData}">Save Party</button>
                        <button class="partyInvite" @click="${this.addUser}">Invite Friend</button>
                        
            
                    </div>

                    <div class="partyDisplay">
                        ${this.party.map((item) => html`<div class="userSlot"><rpg-character seed=${item}></rpg-character><p class="username">${item}</p><button class="removeMember" @click="${this.remove}">Remove Member</button></div>`)}
                    </div>
                    
            
                </div>
            </confetti-container>            
        `;
    }
   
    static get properties() {
        return {
            ...super.properties,
            party: { type: Array, reflect: true },
        }
    }
  }

globalThis.customElements.define(PartyUI.tag, PartyUI);