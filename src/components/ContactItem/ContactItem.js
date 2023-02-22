import PropTypes from 'prop-types'

export const ContactItem = ({ onDelete, name, number }) => {
  return (
    <div>
      {name}: {number}
      <button type="button" onClick={()=>{onDelete(name)}}>Delete</button>
    </div>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  name:PropTypes.string,
  number:PropTypes.string,
};