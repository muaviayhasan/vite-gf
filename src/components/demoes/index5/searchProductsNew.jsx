import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from "react-select";
import parse from 'html-react-parser';
import Skeleton from "react-loading-skeleton";
import Product from "./product";
import './style.scss';
import store from "../../../store/index";
import { changeDemo, outerLoading } from "../../../actions";
import { initSettings } from "../../../utils/utils";
import "./search-bar.css";

class SearchProduct extends Component {
  componentDidMount() {
    initSettings();
    store.dispatch(changeDemo("5"));
  }

  UNSAFE_componentWillMount() {
    store.dispatch(outerLoading());
  }

  componentWillUnmount() {
  }
  constructor(props) {
    super(props);
    this.state = {
      productName: this.props.match.params.productName,
      items: [],
      stone_materials: [],
      glass_materials: [],
      effects: [],
      base_colors: [],
      price_bands: [],
      brands: [],
      itemSize: 1,
      skeleton: 8,
      limit: 16,
      page_num: 1,
      isLoaded: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleMaterial(material) {
    this.setState({
      currentMaterial: material,
      glassProductName: "all",
      glass_category: 0,
      glass_category_name: "all",
      material_type: 0,
      base_color: 0,
      base_color_name: "all",
      price_band: 0,
      price_band_name: "all",
      brand: 0,
      brand_name: "all",
      effect: 0,
      effect_name: "all",
      material_type_name: "all",
      per_page: 16,
    });
  }
  async loadMoreData() {
    let searchCriteria = {
      productName: this.state.productName,
      limit: this.state.limit,
      page_num: this.state.page_num + 1,
    };

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/searchproducts`,
      method: "post",
      data: searchCriteria,
    });

    this.setState({
      items: [...this.state.items, ...resp.data],
      itemSize: resp.data.length,
      isLoaded: false,
      searchCriteria: searchCriteria,
      page_num: this.state.page_num + 1,
    });
  }

  async componentDidMount() {
    initSettings();
    store.dispatch(changeDemo("5"));
    let searchCriteria = {
      productName: this.state.productName,
      limit: this.state.limit,
      page_num: this.state.page_num,
    };

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/searchproducts`,
      method: "post",
      data: searchCriteria,
    });

    this.setState({
      ...this.state,
      items: resp.data,
      itemSize: resp.data.length,
      isLoaded: false,
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

    let stone_materials = [];
    let glass_materials = [];
    let stone_effects = [];

    material_types.data.map((material_type) => {
      if (material_type.materials.name === "Stone") {
        stone_materials.push({
          value: material_type.id,
          label: material_type.name,
        });
      } else {
        glass_materials.push({
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
        stone_effects.push({ value: effect.id, label: effect.name });
      }
    });
    stone_effects = [{ value: 0, label: "All Effects" }, ...stone_effects];

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
      isLoaded: false,
    });

    let searchCriteria = {
      searchCriteria: "",
      limit: this.state.limit,
      page_num: this.state.page_num,
    };

    // hassan work start
    // var temp = [];
    // Object.keys(params).forEach(function(key) {
    //   if (params[key].split("=")[1] == "undefined") {
    //     temp.push({ [key]: "" });
    //   } else {
    //     temp.push({ [key]: params[key].split("=")[1] });
    //   }
    // });

    // var result = {};

    // temp.forEach((element, index) => {
    //   result[Object.keys(temp[index])] = !isNaN(Object.values(temp[index])[0])
    //     ? +Object.values(temp[index])[0]
    //     : Object.values(temp[index])[0];
    // });
    // console.log(result);

    // searchCriteria.searchCriteria = result;
    // hassan work end

    var params = this.props.match.params;
    if (params.material === "Glass") {
      let get_glass_category = this.state.glass_materials.filter((el) => {
        return el.label === params.category;
      });

      let get_base_color = this.state.base_colors.filter((el) => {
        return el.label === params.colour;
      });

      searchCriteria.searchCriteria = {
        glass_category: get_glass_category.length
          ? get_glass_category[0].value
          : 0,
        base_color: get_base_color.length ? get_base_color[0].value : 0,
        product_name:
          params.product_name === "all" || params.product_name === 0
            ? 0
            : params.product_name,
        price_band: +params.price_band,
        currentMaterial: "Glass",
      };
    }
    if (params.material === "Stone") {
      let get_stone_material = this.state.stone_materials.filter((el) => {
        return el.label === params.material_type;
      });

      let get_base_color = this.state.base_colors.filter((el) => {
        return el.label === params.colour;
      });

      let get_effect = this.state.effects.filter((el) => {
        return el.label === params.effect;
      });

      let get_brand = this.state.brands.filter((el) => {
        return el.label === params.brand;
      });

      searchCriteria.searchCriteria = {
        stone_material: get_stone_material.length
          ? get_stone_material[0].value
          : 0,
        base_color: get_base_color.length ? get_base_color[0].value : 0,
        effect: get_effect.length ? get_effect[0].value : 0,
        brand: get_brand.length ? get_brand[0].value : 0,
        price_band: +params.price_band,
        currentMaterial: "Stone",
      };
    }

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/search`,
      method: "post",
      data: searchCriteria,
    });

    this.setState({
      ...this.state,
      items: resp.data,
      itemSize: resp.data.length,
      isLoaded: false,
    });

    if (searchCriteria.searchCriteria.currentMaterial === "Glass") {
      this.setState({
        ...this.state,
        glass_category: searchCriteria.searchCriteria.glass_category,
        glassProductName: searchCriteria.searchCriteria.product_name,
        base_color: searchCriteria.searchCriteria.base_color,
        price_band: searchCriteria.searchCriteria.price_band,
        currentMaterial: searchCriteria.searchCriteria.currentMaterial,
      });
    } else if (searchCriteria.searchCriteria.currentMaterial === "Stone") {
      this.setState({
        ...this.state,
        material_type: searchCriteria.searchCriteria.stone_material,
        effect: searchCriteria.searchCriteria.effect,
        base_color: searchCriteria.searchCriteria.base_color,
        price_band: searchCriteria.searchCriteria.price_band,
        brand: searchCriteria.searchCriteria.brand,
        currentMaterial: searchCriteria.searchCriteria.currentMaterial,
      });
    }
    // }
  }
  async handleSubmit(name) {
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
      this.props.history.push(
        `${import.meta.env.VITE_PUBLIC_URL}/search/material=${searchData.currentMaterial}&category=${searchData.glass_category_name}&colour=${searchData.base_color_name}&product_name=${searchData.product_name}&price_band=${searchData.price_band}`
      );
    } else {
      searchData = {
        stone_material: this.state.material_type_name,
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
      this.props.history.push(
        `${import.meta.env.VITE_PUBLIC_URL}/search/material=${searchData.currentMaterial}&material_type=${searchData.stone_material}&effect=${searchData.effect_name}&colour=${searchData.base_color_name}&brand=${searchData.brand_name}&price_band=${searchData.price_band}`
      );
    }

    let searchCriteria = {
      searchCriteria: "",
      limit: this.state.limit,
      page_num: 1,
    };

    if (searchData.currentMaterial === "Glass") {
      let get_glass_category = this.state.glass_materials.filter((el) => {
        return el.label === searchData.glass_category_name;
      });

      let get_base_color = this.state.base_colors.filter((el) => {
        return el.label === searchData.base_color_name;
      });

      searchCriteria.searchCriteria = {
        glass_category: get_glass_category.length
          ? get_glass_category[0].value
          : 0,
        base_color: get_base_color.length ? get_base_color[0].value : 0,
        product_name:
          searchData.product_name === "all" || searchData.product_name === 0
            ? 0
            : searchData.product_name,
        price_band: +searchData.price_band,
        currentMaterial: "Glass",
      };
    }
    if (searchData.currentMaterial === "Stone") {
      let get_stone_material = this.state.stone_materials.filter((el) => {
        return el.label === searchData.stone_material;
      });

      let get_base_color = this.state.base_colors.filter((el) => {
        return el.label === searchData.base_color_name;
      });

      let get_effect = this.state.effects.filter((el) => {
        return el.label === searchData.effect_name;
      });

      let get_brand = this.state.brands.filter((el) => {
        return el.label === searchData.brand_name;
      });

      searchCriteria.searchCriteria = {
        stone_material: get_stone_material.length
          ? get_stone_material[0].value
          : 0,
        base_color: get_base_color.length ? get_base_color[0].value : 0,
        effect: get_effect.length ? get_effect[0].value : 0,
        brand: get_brand.length ? get_brand[0].value : 0,
        price_band: +searchData.price_band,
        currentMaterial: "Stone",
      };
    }

    const resp = await axios({
      url: `${import.meta.env.VITE_API_URL}/sku/search`,
      method: "post",
      data: searchCriteria,
    });
    this.setState({
      items: resp.data,
      itemSize: resp.data.length,
      isLoaded: false,
      searchCriteria: searchCriteria,
      search_name: name,
    });
  }
  UNSAFE_componentWillMount() {
    store.dispatch(outerLoading());
  }

  componentWillUnmount() {
  }

  loadMoreProducts() {
    this.setState({ loadMore: true }, () => {
      this.loadMoreData();
    });
  }

  getPriceRange(list, key) {
    let values = 0;
    let html = "<font class='text-danger'>£</font>";
    if (list) {
      for (var i in list) {
        if (list[i][key] > values) {
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

  getImagePath(index) {
    let images = this.state.items[index].images;
    if (images) {
      let image = images.filter(function(img) {
        return img.sequence == 0;
      });
      if (image.length > 0) {
        return `${import.meta.env.VITE_API_URL}${image[0].path}`;
      } else {
        return "/assets/images/211 x 277 tile.png";
      }
    } else {
      return "/assets/images/211 x 277 tile.png";
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.state.productName !== this.props.match.params.productName) {
      window.location.reload(false);
      this.setState({
        productName: this.props.match.params.productName,
        items: [],
        itemSize: 1,
        skeleton: 8,
        limit: 16,
        page_num: 1,
        isLoaded: true,
      });
      let searchCriteria = {
        productName: this.props.match.params.productName,
        limit: this.state.limit,
        page_num: this.state.page_num,
      };

      const resp = await axios({
        url: `${import.meta.env.VITE_API_URL}/sku/searchproducts`,
        method: "post",
        data: searchCriteria,
      });

      this.setState({
        ...this.state,
        items: resp.data,
        itemSize: resp.data.length,
        isLoaded: false,
      });
    }
  }

  render() {
    const obj = this;
    var n = 0;
    const {
      glass_materials,
      stone_materials,
      base_colors,
      brands,
      price_bands,
      effects,
      currentMaterial,
      productName,
    } = obj.state;

    return (
      <div className="mb-4">
        <div
          className="section-b-space _sectionBSpace"
          style={{ "padding-bottom": "70px" }}
        >
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
                  defaultChecked={currentMaterial === "Glass" ? true : false}
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
                class="custom-control-label custom-control-label-mobile ______pipe"
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
              <div
                className="custom-control custom-radio"
                style={{ marginLeft: "2%" }}
              >
                <input
                  type="radio"
                  name="search_metrial"
                  className="custom-control-input"
                  id="free-shipping-2"
                  defaultChecked={currentMaterial === "Stone" ? true : false}
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

            {obj.state.currentMaterial === "Glass" ? (
              <div className="row seven-cols">
                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <div>
                    <Select
                      value={glass_materials.filter(
                        (option) =>
                          obj.state.glass_category !== 0 &&
                          option.value === obj.state.glass_category
                      )}
                      placeholder="Category"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("glass_category", e)}
                      options={glass_materials}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
                  <div>
                    <Select
                      value={base_colors.filter(
                        (option) =>
                          obj.state.base_color !== 0 &&
                          option.value === obj.state.base_color
                      )}
                      placeholder="Main Colour"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("base_color", e)}
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
                      onChange={(e) => obj.handleGlassProductName(e)}
                      style={{ marginBottom: "0rem" }}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
                  <div>
                    <Select
                      value={price_bands.filter(
                        (option) =>
                          obj.state.price_band !== 0 &&
                          option.value === obj.state.price_band
                      )}
                      placeholder="Price Band"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("price_band", e)}
                      options={price_bands}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
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
                  <div>
                    <Select
                      value={stone_materials.filter(
                        (option) =>
                          obj.state.material_type !== 0 &&
                          option.value === obj.state.material_type
                      )}
                      placeholder="Material"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("material_type", e)}
                      options={stone_materials}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <div>
                    <Select
                      value={effects.filter(
                        (option) =>
                          obj.state.effect !== 0 &&
                          option.value === obj.state.effect
                      )}
                      placeholder="Effect"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("effect", e)}
                      options={effects}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <div>
                    <Select
                      value={base_colors.filter(
                        (option) =>
                          obj.state.base_color !== 0 &&
                          option.value === obj.state.base_color
                      )}
                      placeholder="Main Colour"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("base_color", e)}
                      options={base_colors}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <div>
                    <Select
                      value={price_bands.filter(
                        (option) =>
                          obj.state.price_band !== 0 &&
                          option.value === obj.state.price_band
                      )}
                      placeholder="Price Band"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("price_band", e)}
                      options={price_bands}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <div>
                    <Select
                      value={brands.filter(
                        (option) =>
                          obj.state.brand !== 0 &&
                          option.value === obj.state.brand
                      )}
                      placeholder="Brand"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("brand", e)}
                      options={brands}
                    />
                  </div>
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <div>
                    <button
                      type="button"
                      className="btn btn-outline-primary-2 btn-round btn-more custome-search-button"
                      style={{ paddingTop: "0.8rem", paddingBottom: "0.8rem" }}
                      onClick={(e) => obj.handleSubmit("stone")}
                    >
                      search
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="section-b-space _sectionBSpace"
          style={{ "padding-bottom": "70px" }}
        >
          <div className="container">
            <h4>
              {obj.state.itemSize !== 0 ? (
                `Search Results of "${obj.state.productName}":`
              ) : (
                <div className="col-sm-12" style={{ "textAlign": "center" }}>
                  <h4>Nothing found, please try again different search</h4>
                </div>
              )}
            </h4>

            {obj.state.isLoaded ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {[1, 2, 3, 4].map((data) => {
                  return (
                    <div
                      style={{
                        display: "grid",
                        marginLeft: "15%",
                        marginTop: "3%",
                      }}
                    >
                      <Skeleton circle={false} height={150} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton
                        circle={false}
                        height={30}
                        width={70}
                        // style={{ marginLeft: "54%" }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            {obj.state.isLoaded ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                {[1, 2, 3, 4].map((data) => {
                  return (
                    <div
                      style={{
                        display: "grid",
                        marginLeft: "15%",
                        marginTop: "3%",
                      }}
                    >
                      <Skeleton circle={false} height={150} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton circle={false} height={30} width={150} />
                      <Skeleton
                        circle={false}
                        height={30}
                        width={70}
                        // style={{ marginLeft: "54%" }}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}

            <div className="  search-product">
              <div className="row justify-content-center">
                {!obj.state.isLoaded
                  ? obj.state.items.map(function(item, index) {
                      n = n + 1;
                      return (
                        <div
                          className="col-6 col-md-4 col-lg-3"
                          key={index + item.name}
                        >
                          <Product product={item} key={index + item.name} />
                        </div>
                      );
                    })
                  : ""}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    padding: 20,
                  }}
                >
                  <button
                    type="button"
                    className={
                      this.state.itemSize > 15
                        ? "btn btn-outline-primary-2 btn-round btn-more"
                        : "hidden"
                    }
                    onClick={() => this.loadMoreProducts()}
                  >
                    load more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchProduct;

// /////////////////////////////////////////////////////
