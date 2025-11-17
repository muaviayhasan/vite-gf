import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import { Navigate } from "react-router-dom";
import "./search-bar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mode
      currentMaterial: "Stone",

      // option lists
      stone_materials: [],
      glass_materials: [],
      brands: [],
      base_colors: [],
      effects: [],
      price_bands: [],

      // selected ids
      glass_category: 0,
      material_type: 0,
      base_color: 0,
      price_band: 0,
      brand: 0,
      effect: 0,

      // selected labels
      glassProductName: "all",
      glass_category_name: "all",
      material_type_name: "all",
      base_color_name: "all",
      price_band_name: "all",
      brand_name: "all",
      effect_name: "all",

      // misc
      isLoaded: false,
      isRedirect: false,
      searchData: {},
    };
  }

  async componentDidMount() {
    try {
      const [materialTypesRes, brandsRes, baseColorsRes, effectsRes] =
        await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/material_types`),
          axios.get(`${import.meta.env.VITE_API_URL}/brand`),
          axios.get(`${import.meta.env.VITE_API_URL}/base_color`),
          axios.get(`${import.meta.env.VITE_API_URL}/effects`),
        ]);

      const stone_materials = [
        { value: 0, label: "All Materials" },
        ...materialTypesRes.data
          .filter((m) => m.materials.name === "Stone")
          .map((m) => ({ value: m.id, label: m.name })),
      ];

      const glass_materials = [
        { value: 0, label: "All Materials" },
        ...materialTypesRes.data
          .filter((m) => m.materials.name !== "Stone")
          .map((m) => ({ value: m.id, label: m.name })),
      ];

      const brands = [
        { value: 0, label: "All Brands" },
        ...brandsRes.data.map((b) => ({ value: b.id, label: b.name })),
      ];

      const base_colors = [
        { value: 0, label: "All Colors" },
        ...baseColorsRes.data.map((c) => ({ value: c.id, label: c.name })),
      ];

      const effects = [
        { value: 0, label: "All Effects" },
        ...effectsRes.data
          .filter((e) => e.materialType.name === "Stone")
          .map((e) => ({ value: e.id, label: e.name })),
      ];

      const price_bands = [
        { value: 0, label: "All Price Bands" },
        { value: 1, label: "£" },
        { value: 2, label: "££" },
        { value: 3, label: "£££" },
        { value: 4, label: "££££" },
        { value: 5, label: "£££££" },
        { value: 6, label: "££££££" },
      ];

      this.setState({
        stone_materials,
        glass_materials,
        brands,
        base_colors,
        effects,
        price_bands,
        isLoaded: true,
      });
    } catch (e) {
      console.error(e);
      this.setState({ isLoaded: true });
    }
  }

  handleMaterial(material) {
    this.setState({
      currentMaterial: material,

      // reset ids
      glass_category: 0,
      material_type: 0,
      base_color: 0,
      price_band: 0,
      brand: 0,
      effect: 0,

      // reset labels
      glassProductName: "all",
      glass_category_name: "all",
      material_type_name: "all",
      base_color_name: "all",
      price_band_name: "all",
      brand_name: "all",
      effect_name: "all",
    });
  }

  handleGlassProductName = (e) => {
    this.setState({ glassProductName: e.target.value || "all" });
  };

  handleChange = (name, e) => {
    // support clearing
    const value = e ? e.value : 0;
    const label = e ? e.label : "all";

    this.setState({ [name]: value });

    if (name === "glass_category") this.setState({ glass_category_name: label });
    if (name === "base_color") this.setState({ base_color_name: label });
    if (name === "price_band") this.setState({ price_band_name: label });
    if (name === "material_type") this.setState({ material_type_name: label });
    if (name === "effect") this.setState({ effect_name: label });
    if (name === "brand") this.setState({ brand_name: label });
  };

  handleSubmit = (name) => {
    let searchData;

    if (name === "glass") {
      searchData = {
        glass_category: this.state.glass_category,
        glass_category_name: this.state.glass_category_name,
        product_name: this.state.glassProductName,
        base_color: this.state.base_color,
        base_color_name: this.state.base_color_name,
        price_band: this.state.price_band,
        price_band_name: this.state.price_band_name,
        currentMaterial: "Glass",
      };
    } else {
      searchData = {
        stone_material: this.state.material_type,
        stone_material_name: this.state.material_type_name,
        effect: this.state.effect,
        effect_name: this.state.effect_name,
        base_color: this.state.base_color,
        base_color_name: this.state.base_color_name,
        price_band: this.state.price_band,
        price_band_name: this.state.price_band_name,
        brand: this.state.brand,
        brand_name: this.state.brand_name,
        currentMaterial: "Stone",
      };
    }

    this.setState({
      searchData,
      isRedirect: true,
    });
  };

  // render redirect first for both materials
  renderRedirectIfNeeded() {
    const { isRedirect, searchData } = this.state;
    if (!isRedirect) return null;

    const base = `${import.meta.env.VITE_PUBLIC_URL || ""}/search`;
    if (searchData.currentMaterial === "Glass") {
      const url = `${base}?material=${encodeURIComponent(
        searchData.currentMaterial
      )}&category=${encodeURIComponent(
        searchData.glass_category_name
      )}&colour=${encodeURIComponent(
        searchData.base_color_name
      )}&product_name=${encodeURIComponent(
        searchData.product_name || "all"
      )}&price_band=${encodeURIComponent(searchData.price_band)}`;

      return (
        <Navigate
          to={url}
          state={{ searchData }}
          replace={false}
        />
      );
    }

    const url = `${base}?material=${encodeURIComponent(
      searchData.currentMaterial
    )}&material_type=${encodeURIComponent(
      searchData.stone_material_name
    )}&effect=${encodeURIComponent(
      searchData.effect_name
    )}&colour=${encodeURIComponent(
      searchData.base_color_name
    )}&brand=${encodeURIComponent(
      searchData.brand_name
    )}&price_band=${encodeURIComponent(searchData.price_band)}`;

    return (
      <Navigate
        to={url}
        state={{ searchData }}
        replace={false}
      />
    );
  }

  render() {
    const {
      glass_materials,
      stone_materials,
      base_colors,
      brands,
      price_bands,
      effects,
      currentMaterial,
      glass_category,
      material_type,
      base_color,
      price_band,
      brand,
      effect,
    } = this.state;

    const redirectNode = this.renderRedirectIfNeeded();
    if (redirectNode) return redirectNode;

    return (
      <div
        className="container custome-search-container"
        style={{ "textAlign": "center" }}
      >
        <div style={{ display: "flex" }}>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              name="search_metrial"
              className="custom-control-input"
              id="free-shipping-1"
              defaultChecked={
                this.state.currentMaterial === "Glass" ? true : false
              }
              onClick={(e) => this.handleMaterial("Glass")}
            />
            <label
              className="custom-control-label"
              htmlFor="free-shipping-1"
              style={{
                fontSize: 19,
                color: "#333333",
                fontWeight: "600",
                color: "white",
              }}
            >
              Search Glass Range
            </label>
          </div>
          <span
            className="______pipe"
            style={{
              fontSize: 19,
              color: "#333333",
              fontWeight: "600",
              marginTop: "1.1rem",
              paddingLeft: "4%",
              color: "#cc9966",
            }}
          >
            ||
          </span>
          <div className="custom-control custom-radio" style={{ marginLeft: "2%" }}>
            <input
              type="radio"
              name="search_metrial"
              className="custom-control-input"
              id="free-shipping-2"
              defaultChecked={
                this.state.currentMaterial === "Stone" ? true : false
              }
              onClick={(e) => this.handleMaterial("Stone")}
            />
            <label
              className="custom-control-label"
              htmlFor="free-shipping-2"
              style={{
                fontSize: 19,
                color: "#333333",
                fontWeight: "600",
                color: "white",
              }}
            >
              Search Stones Range
            </label>
          </div>{" "}
        </div>
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
                  placeholder="Category"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("glass_category", e)}
                  options={glass_materials}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <div>
                <Select
                  value={base_colors.filter(
                    (option) =>
                      this.state.base_color !== 0 &&
                      option.value === this.state.base_color
                  )}
                  placeholder="Main Colour"
                  className="custome_select_box"
                  onChange={(e) => this.handleChange("base_color", e)}
                  options={base_colors}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <div>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="form-control"
                  onChange={(e) => this.handleGlassProductName(e)}
                  style={{ marginBottom: "0rem" }}
                />
              </div>
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <Select
                value={
                  price_band !== 0
                    ? price_bands.find((o) => o.value === price_band)
                    : null
                }
                placeholder="Price Band"
                className="custome_select_box"
                onChange={(e) => this.handleChange("price_band", e)}
                options={price_bands}
                isClearable
              />
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <div>
                <button
                  type="button"
                  className="btn btn-outline-primary-2 btn-round btn-more custome-search-button"
                  onClick={(e) => this.handleSubmit("glass")}
                  style={{ paddingTop: "0.8rem", paddingBottom: "0.8rem" }}
                >
                  search
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row seven-cols">
            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <Select
                value={
                  material_type !== 0
                    ? stone_materials.find((o) => o.value === material_type)
                    : null
                }
                placeholder="Material"
                className="custome_select_box"
                onChange={(e) => this.handleChange("material_type", e)}
                options={stone_materials}
                isClearable
              />
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <Select
                value={
                  effect !== 0
                    ? effects.find((o) => o.value === effect)
                    : null
                }
                placeholder="Effect"
                className="custome_select_box"
                onChange={(e) => this.handleChange("effect", e)}
                options={effects}
                isClearable
              />
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <Select
                value={
                  base_color !== 0
                    ? base_colors.find((o) => o.value === base_color)
                    : null
                }
                placeholder="Main Colour"
                className="custome_select_box"
                onChange={(e) => this.handleChange("base_color", e)}
                options={base_colors}
                isClearable
              />
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <Select
                value={
                  price_band !== 0
                    ? price_bands.find((o) => o.value === price_band)
                    : null
                }
                placeholder="Price Band"
                className="custome_select_box"
                onChange={(e) => this.handleChange("price_band", e)}
                options={price_bands}
                isClearable
              />
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
              <Select
                value={
                  brand !== 0
                    ? brands.find((o) => o.value === brand)
                    : null
                }
                placeholder="Brand"
                className="custome_select_box"
                onChange={(e) => this.handleChange("brand", e)}
                options={brands}
                isClearable
              />
            </div>

            <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
              <button
                type="button"
                className="btn btn-outline-primary-2 btn-round btn-more custome-search-button"
                onClick={() => this.handleSubmit("stone")}
                style={{ paddingTop: "0.8rem", paddingBottom: "0.8rem" }}
              >
                search
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
