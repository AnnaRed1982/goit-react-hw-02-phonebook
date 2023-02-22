export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
