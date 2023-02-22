export const Filter = ({ filter, onCnangeFilter }) => {
  return (
    <label htmlFor="filter">
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onCnangeFilter}
      />
    </label>
  );
};
