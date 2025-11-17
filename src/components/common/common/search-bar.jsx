import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import { Navigate } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMaterial: "Stone",
      stone_materials: [],
      glass_materials: [],
      brands: [],
      base_colors: [],
      effects: [],
      finishes: [],
      price_bands: [],
      searchData: {},
      glassProductName: 0,
      glass_category: 0,
      material_type: 0,
      base_color: 0,
      price_band: 0,
      brand: 0,
      effect: 0,
      finishe: 0,
      isLoaded: false,
      isRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, e) => {
    this.setState({
      ...this.state,
      [name]: e.value,
    });
  };

  handleSubmit(name) {
    let searchData;
    if (name === "glass") {
      searchData = {
        glass_category: this.state.glass_category,
        product_name: this.state.glassProductName,
        base_color: this.state.base_color,
        price_band: this.state.price_band,
        currentMaterial: "Glass",
      };
    } else {
      searchData = {
        stone_material: this.state.material_type,
        effect: this.state.effect,
        base_color: this.state.base_color,
        price_band: this.state.price_band,
        brand: this.state.brand,
        currentMaterial: "Stone",
      };
    }
    let searchCriteria = {
      searchCriteria: searchData,
    };
    localStorage.setItem("search_load_more", JSON.stringify(searchCriteria));

    this.setState({
      searchData: searchData,
      isRedirect: true,
    });
  }

  handleMaterial(material) {
    this.setState({
      currentMaterial: material,
      glassProductName: 0,
      glass_category: 0,
      material_type: 0,
      base_color: 0,
      price_band: 0,
      brand: 0,
      effect: 0,
    });
  }

  handleGlassProductName(e) {
    this.setState({
      glassProductName: e.target.value,
    });
  }

  async componentDidMount() {
    let material_types = await axios({
      url: `${import.meta.env.VITE_API_URL}/material_types`,
      method: "get",
      data: null,
    });
    let brands = await axios({
      url: `${import.meta.env.VITE_API_URL}/brand`,
      method: "get",
      data: null,
    });
    let base_colors = await axios({
      url: `${import.meta.env.VITE_API_URL}/base_color`,
      method: "get",
      data: null,
    });

    let effects = await axios({
      url: `${import.meta.env.VITE_API_URL}/effects`,
      method: "get",
      data: null,
    });

    // let finishes = await axios({
    //   url: `${import.meta.env.VITE_API_URL}/finishes`,
    //   method: "get",
    //   data: null
    // });

    let stone_materials = [];
    let glass_materials = [];
    let stone_effects = [];

    material_types.data.map((material_type) => {
      if (material_type.materials.name === "Stone") {
        stone_materials?.push({
          value: material_type.id,
          label: material_type.name,
        });
      } else {
        glass_materials?.push({
          value: material_type.id,
          label: material_type.name,
        });
      }
    });

    stone_materials = [
      { value: 0, label: "All Materials" },
      ...stone_materials,
    ];
    glass_materials = [
      { value: 0, label: "All Materials" },
      ...glass_materials,
    ];

    brands = brands.data.map((brand) => {
      return { value: brand.id, label: brand.name };
    });
    brands = [{ value: 0, label: "All Brands" }, ...brands];

    base_colors = base_colors.data.map((base_color) => {
      return { value: base_color.id, label: base_color.name };
    });
    base_colors = [{ value: 0, label: "All Colors" }, ...base_colors];

    effects.data.map((effect) => {
      if (effect.materialType.name === "Stone") {
        stone_effects?.push({ value: effect.id, label: effect.name });
      }
    });
    stone_effects = [{ value: 0, label: "All Effects" }, ...stone_effects];

    // finishes = finishes.data.map(finishe => {
    //   return { value : finishe.id , label: finishe.name};
    // });
    // finishes = [{value : 0, label: "All Finishes"} , ...finishes]

    let price_bands = [
      { value: 0, label: "All Price Bands" },
      { value: 1, label: "£" },
      { value: 2, label: "££" },
      { value: 3, label: "£££" },
      { value: 4, label: "££££" },
      { value: 5, label: "£££££" },
      { value: 6, label: "££££££" },
    ];

    this.setState({
      glass_materials: glass_materials,
      stone_materials: stone_materials,
      brands: brands,
      base_colors: base_colors,
      price_bands: price_bands,
      effects: stone_effects,
      isLoaded: true,
    });
  }

  render() {
    if (this.state.isRedirect) {
      return (
        <Navigate
          to={
            !this.props.adminProductSearch
              ? `/search`
              : `/search`
          }
          state={{ searchData: this.state.searchData }}
          replace={false}
        />
      );
    }

    const {
      glass_materials,
      stone_materials,
      base_colors,
      brands,
      price_bands,
      effects,
    } = this.state;

    return (
      <div className="container" style={{ "textAlign": "center" }}>
        <br /> <br />
        Glass
        <input
          type="radio"
          name="search_metrial"
          defaultChecked={this.state.currentMaterial === "Glass" ? true : false}
          onClick={(e) => this.handleMaterial("Glass")}
        />{" "}
        | Stone
        <input
          type="radio"
          name="search_metrial"
          defaultChecked={this.state.currentMaterial === "Stone" ? true : false}
          onClick={(e) => this.handleMaterial("Stone")}
        />
        <br />
        {this.state.currentMaterial === "Glass" ? (
          <div className="row seven-cols">
            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={glass_materials.filter(
                    (option) =>
                      this.state.glass_category !== 0 &&
                      option.value === this.state.glass_category
                  )}
                  placeholder="Glass Category"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("glass_category", e)}
                  options={glass_materials}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={base_colors.filter(
                    (option) =>
                      this.state.base_color !== 0 &&
                      option.value === this.state.base_color
                  )}
                  placeholder="Main Color"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("base_color", e)}
                  options={base_colors}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="form-control"
                  onChange={(e) => this.handleGlassProductName(e)}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={price_bands.filter(
                    (option) =>
                      this.state.price_band !== 0 &&
                      option.value === this.state.price_band
                  )}
                  placeholder="Price Band"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("price_band", e)}
                  options={price_bands}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-p"
                  style={{ "line-height": "28px" }}
                  onClick={(e) => this.handleSubmit("glass")}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row seven-cols">
            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={stone_materials.filter(
                    (option) =>
                      this.state.material_type !== 0 &&
                      option.value === this.state.material_type
                  )}
                  placeholder="Stone Matrial"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("material_type", e)}
                  options={stone_materials}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={effects.filter(
                    (option) =>
                      this.state.effect !== 0 &&
                      option.value === this.state.effect
                  )}
                  placeholder="Effect"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("effect", e)}
                  options={effects}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={base_colors.filter(
                    (option) =>
                      this.state.base_color !== 0 &&
                      option.value === this.state.base_color
                  )}
                  placeholder="Main Color"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("base_color", e)}
                  options={base_colors}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={price_bands.filter(
                    (option) =>
                      this.state.price_band !== 0 &&
                      option.value === this.state.price_band
                  )}
                  placeholder="Price Band"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("price_band", e)}
                  options={price_bands}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <Select
                  value={brands.filter(
                    (option) =>
                      this.state.brand !== 0 &&
                      option.value === this.state.brand
                  )}
                  placeholder="Brand"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("brand", e)}
                  options={brands}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <div>
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-p"
                  style={{ "line-height": "28px" }}
                  onClick={(e) => this.handleSubmit("stone")}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
