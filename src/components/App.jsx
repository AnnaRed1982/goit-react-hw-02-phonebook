import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = (name, number) => {
    console.log(name, number);

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
