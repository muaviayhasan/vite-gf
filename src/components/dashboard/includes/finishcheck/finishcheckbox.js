import React from "react";
import PropTypes from "prop-types";

const FinishBox = ({ type = "checkbox", name, checked = false, onChange }) => [
  <input type={type} name={name} checked={checked} onChange={onChange} />,
  <input type="text" name={name + "input"} placeholder="price" />
];

FinishBox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};
export default FinishBox;
