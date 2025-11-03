import React, { Component } from "react";
import parse from 'html-react-parser';
class FactSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      blockSize: 50
    };
  }
  getValues(list, key) {
    let values = "";
    for (var i in list) {
      values += list[i][key] + (i < list.length - 1 ? "," : "");
    }
    return values;
  }
  getPriceRange(list, key) {
    let values = 0;
    let html = "<font class='text-danger'>£</font>";
    if(list)
    {
    for (var i in list) {
      if(list[i][key] > values)
      {
        values = list[i][key];
      }
    }
    for (var i = 1; i < 6; i++) {
      if (values > this.state.blockSize * i) {
        html += "<font class='text-danger'>£</font>";
      } else {
        html += "<font>£</font>";
      }
    }
  }
    return html;
  }
  componentDidUpdate(oldProps) {
    if (!oldProps.data.data && this.props.data.data.length) {
      this.setState({
        data: this.props.data.data[0]
      });
    }
  }
  render() {
    const { data } = this.state;
    if (data) {
      return (
        <div className="facts-sheet">
          <div className="facts-inner">
            <div className="facts-heading">
              <p className="fact-para">Facts Sheet</p>
            </div>
            <div className="form-check-inline">
              <p className="priceBand">Price Band:</p>
              <p className="innerBand">
                {" "}
                {parse(this.getPriceRange(data.finishes, "price"))}
              </p>
              <p className="priceBandManufacturer">Manufacturer Warranty:</p>
              <p className="innerBand"> 10Years</p>
            </div>
            <div className="slabSizeClass">
              <p className="priceBand">Slab Size:</p>
              <p className="innerBand">
                {this.getValues(data.slab_size, "slab_size")}
              </p>
              <p className="innerBand">{data.slab_size_note}</p>
            </div>
            <div className="tileSizeClass">
              <p className="priceBand">Tile Sizes:</p>
              <p className="innerBand">
                {this.getValues(data.tile_sizes, "tile_size")}
              </p>
              <p className="innerBand">{data.tile_size_note}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="facts-sheet">
          <div className="facts-inner">
            <div className="facts-heading">
              <p className="fact-para">facts Sheet</p>
            </div>
            <div className="form-check-inline">
              <p className="priceBand">Price Band:</p>
              <p>££££££</p>
            </div>
            <div className="">
              <p className="priceBand">Slab Size:</p>
              <p>4mm, 6mm, 12mm</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default FactSheet;
