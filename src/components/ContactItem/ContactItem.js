export const ContactItem = ({ name, number }) => {
  return (
    <div>
      {name}: {number}
      <button type="button">Delete</button>
    </div>
  );
};
