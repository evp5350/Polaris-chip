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

        this.delete = false;
        this.changed = false;
        this.saved = false;
        this.party = localStorage.getItem("party") != null ? localStorage.getItem("party").split(",") : ["evp5350", "test1234"];
        this.selectedUser = "";
    }
  
    static get styles() {
        return [
        super.styles,
        css`
            :host {
                display: flex;
                font-family: "Press Start 2P", system-ui;
            }
            .partyList {
                background-color: var(--ddd-theme-default-beaverBlue);
                min-width: 100vh;
                height: 620px;
                padding: var(--ddd-spacing-4);
                color: white;
                overflow-y: scroll;

            }

            .title{
                font-family: system-ui;
                text-align: center;
                color: white;

            }

            .username {
                font-family: system-ui;
                margin: var(--ddd-spacing-8);
                padding: var(--ddd-spacing-8);
                
            }

            .userSlot {
                display: flex;
                margin-left: var(--ddd-spacing-4);
                
            }

            .buttonWrapper {
                display: flex;
                margin-left: 0px;
                
            }
            
            .rules {
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                width: 92%;
                background-color: var(--ddd-theme-default-nittanyNavy);

            }

            .ruleText {
                font-family: system-ui;
                font-size: 12px;
                margin: 0px;
                padding: 0px;

            }

            .partyDisplay {
                text-align: left;
            }

            .partyInvite {
                font-family: system-ui;
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
                font-family: system-ui;
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
                font-family: system-ui;
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
                transition: 0.3s ease-in-out;
            }

            #search-input {
                font-family: system-ui;
                min-width: 92%;
                margin: var(--ddd-spacing-3);
                padding: var(--ddd-spacing-6);
                background-color: var(--ddd-theme-default-slateMaxLight);
            }



          
          
        `];
    }

    
    addItem() {
        const entry = this.shadowRoot.getElementById("search-input");
        const username = entry.value.trim();

        if (username !== "") {
            if (this.party.length < 5) {
                if (/^[a-z0-9]{1,10}$/.test(username)) {
                    if (!this.party.includes(username)) {
                        this.party = [...this.party, username];
                        this.toggleChanged();
                        console.log(this.party);

                    } else {
                        alert("Username is already in the division.");
                    }
                } else {
                    alert("Username must contain lowercase letters, numbers, and a maximum of 10 characters only.");
                }
            } else {
                alert("The division has the maxium number of members. Please remove atleast one member to add the user.");
            }
        } else {
            alert("Text imput is empty.");
        }
    }

    toggleChanged() {
        this.changed = !this.changed;
    }

    removeUser(e){
        const id = e.target.id;
        this.selectedUser = id;
        this.delete = true;

        const position = this.party.indexOf(this.selectedUser);
        let deleteRequest = "Are you sure you want to remove the member: " + this.selectedUser + " ?";

        if(confirm(deleteRequest) == true){
            this.party.splice(position, 1);
            this.selectedUser = '';
            this.deleteUserPending = false;
            console.log(localStorage.getItem("party").split(","));
            this.toggleChanged();
            this.requestUpdate();
            
        } else {
            alert("User removal canceled.");
            console.log(localStorage.getItem("party").split(","));
            this.userToDelete = '';
            this.selectedUser = false;
            this.requestUpdate();
        }
        this.delete = false;
    }

    saveData() {
        if (this.changed) {
            const partyArray = this.party.toString();
            localStorage.setItem("party", partyArray);
            console.log(localStorage.getItem("party").split(","));
            this.saved = true;
            this.makeItRain();
            this.toggleChanged();
        } else {
            alert("No changes were made to the division.");
        }
    }
    
    displayItem(item) {  
        if (this.saved) {
            return html`<div class="userSlot"><rpg-character walking seed=${item}></rpg-character><p class="username">${item}</p><button class="removeMember" id="${item}" @click="${this.removeUser}">Remove Member</button></div>`;
        } else {
            return html`<div class="userSlot"><rpg-character seed=${item}></rpg-character><p class="username">${item}</p><button class="removeMember" id="${item}" @click="${this.removeUser}">Remove Member</button></div>`;
        }
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
                    <h2 class="title">Create a Division</h2>
                    <div class="rules">
                            <p class="ruleText">Input Rules:</p>
                            <p class="ruleText">- Maximum of 10 characters.</p>
                            <p class="ruleText">- Only lowercase letters.</p>
                            <p class="ruleText">- No special characters.</p>
                            <p class="ruleText">- Division can only have a maximum of 5 members.</p>
                            <p class="ruleText">- No duplicate members.</p>
                            <p></p>
                            <details><summary class="ruleText" style="color: white;">Current Array:</summary><div><p class="ruleText" style="color: white;">${this.party}</p></div></details>
                    </div>
                    
                    <input type="text" id="search-input" placeholder="Add a division member."/>

                    <div class="buttonWrapper">
                        <button class="saveParty" @click="${this.saveData}">Save Party</button>
                        <button class="partyInvite" @click="${this.addItem}">Invite Friend</button>
                    </div>

                    <div class="partyDisplay">
                        ${this.party.map((item) => this.displayItem(item))}           
                    </div>
                
                </div>

            </confetti-container>     

            `;
    }
   
    static get properties() {
        return {
            ...super.properties,
            delete: { type: Boolean, reflect: true },
            changed: { type: Boolean, reflect: true },
            saved: { type: Boolean, relect: true },
            party: { type: Array, reflect: true },
            selectedUser: { type: String, reflect: true },        
        };
    }
  }

globalThis.customElements.define(PartyUI.tag, PartyUI);