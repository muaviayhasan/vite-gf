import React, { Component } from "react";
import parse from 'html-react-parser';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const colstyle = {
  width: "30%"
};
const tableStyle = {
  width: "100%"
};

class Prints extends React.Component {
  render() {
    return <div>{parse(this.props.html)}</div>;
  }
}

export default Prints;