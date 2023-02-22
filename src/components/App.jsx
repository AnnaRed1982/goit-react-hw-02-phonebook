import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = name => {
    console.log(name);

    const contact = {
      id: nanoid(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.addContact(this.state.name);
    this.setState({ name: '' });
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>

        <ul>
          {this.state.contacts.map(contact => {
            return <li key={contact.id}>{contact.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
