import './styles.css';

function Filter() {
  return (
    <div className="base-card filter-container">
      <select className="filter-input">
        <option value="">cidat</option>
        <option value="">estado</option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
}

export default Filter;
