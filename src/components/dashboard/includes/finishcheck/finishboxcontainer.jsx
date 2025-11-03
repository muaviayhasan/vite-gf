import React, { Component } from "react";
import PropTypes from "prop-types";
import finishcheck from "./finishcheck";
import FinishBox from "./finishcheckbox";

class FinishContainer extends React.Component {
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
          {finishcheck.map(item => (
            <div className="col-md-3">
              {item.label}
              <FinishBox
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

export default FinishContainer;
