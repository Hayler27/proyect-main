import { LitElement, html } from 'lit-element';
import styles from '../components-UI/styles-pokemon-data.js';

class PokemonData extends LitElement {
  static get properties() {
    return {
      pokemon: { type: Array },
      editedPokemon: { type: Object } // Se almacenan los datos editados
    };
  }

  static get styles() {
    return [styles];
  }

  constructor() {
    super();
    this.pokemon = [];
    this.editedPokemon = {};
  }

  render() {
    return html`
      <div class="main">
        ${this.pokemon.map(
      (poke) => html`
            <div class="flexcontainer">
              <figure class="cover">
                <img class="imgcover" src=${poke.image} alt=${poke.name} />
              </figure>
              <div class="content">
                <div class="encabezado">
                  <h1 class="title">Nombre: ${this.editedPokemon[poke.name]?.name || poke.name}</h1>
                  <p class="features">Tipo: ${this.editedPokemon[poke.name]?.type || poke.type}</p>
                  ${this._renderEditForm(poke)}
                  <button class="remove-button" @click=${() => this._handleRemoveClick(poke)}>Llevar al lugar más cercano</button>
                </div>
              </div>
            </div>
          `
    )}
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
  
    // Nos permite actualizar la copia temporal de los datos originales
    const originalDataIndex = this.pokemon.findIndex(p => p.name === name);
    if (originalDataIndex !== -1) {
      if (newName) {
        this.pokemon[originalDataIndex].name = newName;
      }
      if (newType) {
        this.pokemon[originalDataIndex].type = newType;
      }
    }
  
    // Nos permite Actualizar editedPokemon y solicitar una actualización
    if (newName || newType) {
      this.editedPokemon[name] = { name: newName, type: newType };
      delete this.editedPokemon[name]; // Nos permite eliminar los datos editados después de guardar
      this.requestUpdate();
  
      // Actualizamos los datos mostrados
      this.shadowRoot.querySelector(`.title-${poke.name}`).textContent = `Nombre: ${newName || poke.name}`;
      this.shadowRoot.querySelector(`.features-${poke.name}`).textContent = `Tipo: ${newType || poke.type}`;
    }
  }

  _handleCheckboxChange() {
    // Mostramos una alerta cuando se hace clic en el checkbox
    alert('Esta carta está repetida. Puedes cambiarlo en el punto más cercano.');
  }

  _handleRemoveClick(poke) {
    // Removemos el pokemon de la lista
    const index = this.pokemon.indexOf(poke);
    if (index !== -1) {
      this.pokemon.splice(index, 1);
      this.requestUpdate();
    }
  }

  _handlePokemonClick(name, event) {
    const isFormInput = event.target.tagName === 'INPUT' || event.target.tagName === 'BUTTON';
    if (!isFormInput) {
      this.dispatchEvent(new CustomEvent('pokemon-clicked', { detail: name }));
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    this.shadowRoot.querySelectorAll('.flexcontainer').forEach((card) => {
      const pokemonName = card.querySelector('.title').textContent.split('Nombre: ')[1];
      card.onclick = (event) => this._handlePokemonClick(pokemonName, event);
    });
  }
}

customElements.define('pokemon-data', PokemonData);
