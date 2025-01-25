import s from './Contact.module.css';
export default function Contact({ data, onDelete }) {
  return (
    <div className={s.contact_card}>
      <ul className={s.contact_ul}>
        <li className={s.contact_item}>
          <div className={s.contact_info}>
            <svg
              className="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>{data.name}</span>
          </div>
        </li>
        <li className={s.contact_item}>
          <div className={s.contact_info}>
            <svg
              className="icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.24 12.36 12.36 0 004.01.68 1 1 0 011 1v3.56a1 1 0 01-1 1 19.05 19.05 0 01-8.55-2.1 19.17 19.17 0 01-6.44-6.44A19.05 19.05 0 012 5a1 1 0 011-1h3.55a1 1 0 011 1 12.39 12.39 0 00.69 4 1 1 0 01-.24 1.09l-2.2 2.2z" />
            </svg>
            <span>{data.number}</span>
          </div>
        </li>
      </ul>

      <div className={s.delete_btn}>
        <button onClick={() => onDelete(data.id)}>Delete</button>
      </div>
    </div>
  );
}
