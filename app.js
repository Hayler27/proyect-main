import { LitElement, html } from 'lit-element';
import data from './pokemon.json' assert { type: "json" };
import './components-DM/pokemon-data.js';
import './components-DM/pokemon-detail.js';

class AppComp extends LitElement {

  static get properties() {
    return {
      path: { attribute: false },
      pokemon: { attribute: false },
      allPokemon: { attribute: false }
    }
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.pokemon = {};
    this.allPokemon = data.pokemon; 
  }

  firstUpdated() {
    window.addEventListener('popstate', () => {
      this.path = window.location.pathname;
    });
    this.showDetail();
  }

  showDetail() {
    if (this.path !== '/') {
      this.pokemon = this.getPokemonByName(this.path.replace('/', ''));
      if (!this.pokemon) {
        window.location.pathname = '/';
      }
    }
  }

  pokemonClicked({ detail }) {
    this.pokemon = this.getPokemonByName(detail);
    this.path = `/${detail}`;
    window.history.pushState(this.pokemon, '', this.path);
    console.log(detail, this.pokemon);
  }

  getPokemonByName(name) {
    return this.allPokemon.find((pokemon) => pokemon.name === name); 
  }

  handleDataSave(event) {
    const filteredPokemon = event.detail.data;
    const currentPokemon = this.getPokemonByName(this.pokemon.name); 
    this.pokemon = filteredPokemon.find(pokemon => pokemon.name === currentPokemon.name) || {}; 
  }

  render() {
    return html`
      ${this.path === '/' ?
        html`<pokemon-data @pokemon-clicked=${this.pokemonClicked} .pokemon=${this.allPokemon}></pokemon-data>` :
        html`<pokemon-detail .pokemon=${this.pokemon}></pokemon-detail>`
      }
    `;
  }
}

customElements.define('app-comp', AppComp);
