import { LitElement, html, css } from 'lit-element';
import styles from '../components-UI/styles-pokemon-detail.js';

class PokemonDetail extends LitElement {
  static get properties() {
    return {
      pokemon: { type: Object },
      editedPokemon: { type: Object } // Almacenamos los datos editados
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.pokemon = {};
    this.editedPokemon = {};
  }

  renderEvolutions() {
    let bottomNavigation = html`
      <div class="bottom-navigation">
        <div class="back">
          <button @click="${this.goBack}">
            Regreso a Lista
          </button>
        </div>
      </div>
    `;

    if (this.pokemon.evolutions && this.pokemon.evolutions.length > 0) {
      const filteredEvolutions = this.pokemon.evolutions.filter(evolution => evolution.name !== this.pokemon.name);
      return html`
        <div class="evolutions">
          ${filteredEvolutions.slice(0).map(
        (evolution) => html`
              <div class="flexcontainer">
                <div class="mask">
                  <figure class="cover">
                    <img class="imgcover" src=${evolution.image} alt=${evolution.name}/>
                  </figure>
                </div>
                <div class="content">
                  <div class="header">
                    <h1 class="title">Nombre: ${evolution.name}</h1>
                    <span class="gender">Tipo: ${evolution.type}</span>
                  </div>
                  ${this._renderEditForm(evolution)}
                  <button @click=${() => this._handleTakeToNearestPlace(evolution)}>Llevar al lugar más cercano</button>
                </div>
              </div>
            `
      )}
          ${bottomNavigation}
        </div>
      `;
    } else {
      return html`
        <div class="evolutions">
          <div class="flexcontainer empty-card">
            <div class="content">
              <h1 class="title">Este Pokémon no tiene evoluciones</h1>
            </div>
          </div>
          ${bottomNavigation}
        </div>
      `;
    }
  }

  render() {
    return html`
      <div class="main">
        ${this.renderEvolutions()}
      </div>
    `;
  }

  _renderEditForm(poke) {
    if (this.editedPokemon[poke.name]) {
      return html`
        <form @submit=${(e) => this._handleEditFormSubmit(e, poke)}>
          <input type="text" name="name" placeholder="Nuevo nombre">
          <input type="text" name="type" placeholder="Nuevo tipo">
          <button type="submit">Guardar</button>
        </form>
      `;
    } else {
      return html`
        <button @click=${() => this._handleEditButtonClick(poke)}>Editar</button>
        <input type="checkbox" id="repeated" @change=${() => this._handleCheckboxChange()}>
        <label for="repeated">Repetida</label>
      `;
    }
  }

  _handleEditButtonClick(poke) {
    this.editedPokemon[poke.name] = { name: '', type: '' }; // Inicializamos los campos de edición
    this.requestUpdate();
  }

  _handleEditFormSubmit(event, poke) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newName = formData.get('name');
    const newType = formData.get('type');
    const name = poke.name;

    // Actualizamos los datos mostrados
    const evolutionIndex = this.pokemon.evolutions.findIndex(p => p.name === name);
    if (evolutionIndex !== -1 && newName && newType) {
      this.pokemon.evolutions[evolutionIndex].name = newName;
      this.pokemon.evolutions[evolutionIndex].type = newType;
    }

    // Actualizamos editedPokemon y solicitamos una actualización
    if (newName && newType) {
      delete this.editedPokemon[name];
      this.requestUpdate();
    }
  }

  _handleCheckboxChange() {
    alert('Esta carta está repetida. Puedes cambiarlo en el punto más cercano.');
  }

  _handleTakeToNearestPlace(poke) {
    const index = this.pokemon.evolutions.findIndex(p => p.name === poke.name);
    if (index !== -1) {
      this.pokemon.evolutions.splice(index, 1);
      this.requestUpdate();
    } else {
      alert(`La carta ${poke.name} no se encontró.`);
    }
  }

  goBack() {
    window.location.href = '/';
  }
}

customElements.define('pokemon-detail', PokemonDetail);
