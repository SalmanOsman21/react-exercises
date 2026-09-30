import { useReducer, useState } from 'react';
import { reducer, initialState } from './reducer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = state.filter((contact) => {
    const term = searchTerm.toLowerCase();
    const nameMatch = contact.name?.toLowerCase().includes(term);
    const emailMatch = contact.email?.toLowerCase().includes(term);
    
    return nameMatch || emailMatch;
  });

  return (
    <div>
      <h2>Contact Management App</h2>
      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <div style={{ margin: '16px 0' }}>
        <input
          type="text"
          placeholder="Search contacts by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ContactList
        contacts={filteredContacts}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
};

export default ContactApp;