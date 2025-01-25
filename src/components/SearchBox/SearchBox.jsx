import s from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  return (
    <div className={s.filter_wrapper}>
      <p className={s.search_label}>Find contacts by name</p>
      <input
        type="text"
        className={s.search_input}
        value={value}
        onChange={e => onSearch(e.target.value)}
      ></input>
    </div>
  );
}
