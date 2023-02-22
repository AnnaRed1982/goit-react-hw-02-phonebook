import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <form>
        <h2>Phonebook</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
      </form>
    );
  }
}
