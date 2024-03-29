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
        this.party = ["john doe", "jane doe", "evp5350"];
    }
  
    static get styles() {
        return [
        super.styles,
        css`
            :host {
                display: flex;
                overflow: auto;
            }
            .partyList {
                background-color: var(--ddd-theme-default-beaverBlue);
                min-width: 100vh;
                height: 620px;
                padding: var(--ddd-spacing-4);
                color: white;
                overflow: auto;

            }

            .username {
                font-family: "Press Start 2P", system-ui;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
            }

            .buttonWrapper {
                display: flex;
                margin-left: var(--ddd-spacing-4);
                
            }
            
            .rules {
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                width: 80%;
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
                min-width: 150px;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                background-color: var(--ddd-theme-default-slateMaxLight);
            }



          
          
        `];
    }

    render() {
        return html`
            <confetti-container id="confetti">
                <div class="partyList">
                    <h2 style="font-family: system.ui; color: white; text-align: center;">Create a Division</h2>
                    <input type="text" class="search-input" placeholder="Add a division member."/>
                    
                    <div class="rules">
                            <p class="ruleText">Input Rules:</p>
                            <p class="ruleText">- Division can only have a maxmimum of 5 members.</p>
                            <p class="ruleText">- Maximum of 10 characters.</p>
                            <p class="ruleText">- Only lowercase letters.</p>
                            <p class="ruleText">- No special characters.</p>
                    </div>

                    <div class="buttonWrapper">
                        <button class="saveParty" @click="${this.makeItRain}">Save Party</button>
                        <button class="partyInvite" @click="${this.updateContainer}">Invite Friend</button>
                        <button class="removeMember">Remove Member</button>
            
                    </div>

                    <div class="partyDisplay">
                        ${this.party.map((item) => html`<p class="username">${item}<rpg-character seed=${item}></rpg-character></p>`)}
                    </div>
                    
            
                </div>
            </confetti-container>            
        `;
    }
    handleInput(event) {
        const input = event.target.value;
        const filter = input.replace(/[^a-z0-9]/g, "");

        event.target.value = filter.slice(0, 10);
    }
    
    addItem() {
        const input = document.querySelector(".search-input").value;

        if (input.trim() !== "") {
            if (this.party.length < 5) {
                if (/^[a-z0-9]{1,10}$/.test(input)) {
                    if (!this.party.includes(input)) {
                        const confirmed = window.confirm(`Invite ${input} to division?`);
                        if (confirmed) {
                            this.party = [...this.party, input];
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

    updateContainer() {
        const container = this.shadowRoot.querySelector(".party");
        this.party.forEach((item) => {
          this.displayItem(item);
        });
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
   
    static get properties() {
        return {
            ...super.properties,
            party: { type: String, reflect: true },
            item: { type:String, reflect: true },
        }
    }
  }

globalThis.customElements.define(PartyUI.tag, PartyUI);