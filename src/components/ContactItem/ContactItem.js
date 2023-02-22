export const ContactItem = ({ onDelete, name, number }) => {
  return (
    <div>
      {name}: {number}
      <button type="button" onClick={()=>{onDelete(name)}}>Delete</button>
    </div>
  );
};
