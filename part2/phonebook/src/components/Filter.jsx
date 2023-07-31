const Filter = ({ value, onChange, text }) => (
  <div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={text}
    ></input>
  </div>
);

export default Filter;
