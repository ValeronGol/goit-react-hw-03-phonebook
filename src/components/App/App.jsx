import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Conteiner } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = data => {
    this.setState(prevState => {
      const newContact = { id: uuidv4(), name: data.name, number: data.number };
      const duplicateContact = prevState.contacts.find(contact => {
        return contact.name === data.name;
      });
      if (duplicateContact) {
        alert(`${data.name} вже є у телефонній книзі!!!`);
        return { ...prevState };
      }
      return this.setState({
        ...this.state,
        contacts: [...prevState.contacts, newContact],
      });
    });
  };
  deleteContact = contactId => {
    let newContacAtfterDel = this.state.contacts.filter(
      contact => contact.id !== contactId,
    );
    this.setState({
      ...this.state,
      contacts: [...newContacAtfterDel],
    });
  };

  setFilterToState = filterData => {
    this.setState({ ...this.state, filter: `${filterData}` });
  };

  filterContact = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  render() {
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.formSubmit} />
        <h1>Contacts</h1>
        <Filter setFilterToState={this.setFilterToState} />
        <ContactList
          contacts={this.filterContact(this.state.contacts)}
          onDelete={this.deleteContact}
        />
      </Conteiner>
    );
  }
}
export default App;
