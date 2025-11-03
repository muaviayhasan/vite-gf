import React, { Component } from "react";
import checkboxes from "./check";
import Checkbox from "./checkbox";
import PropTypes from "prop-types";
class CheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-md-12 row">
          {checkboxes.map(item => (
            <div className="col-md-4 col-sm-4">
              {item.label}
              <Checkbox
                name={item.name}
                checked={this.state.checkedItems.get(item.name)}
                onChange={this.handleChange}
                key={item.key}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default CheckboxContainer;
