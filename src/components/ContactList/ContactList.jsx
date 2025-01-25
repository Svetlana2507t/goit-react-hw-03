import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={s.ul}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.li}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
export default ContactList;
