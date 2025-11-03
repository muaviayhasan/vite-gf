import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from "react-select";
import parse from 'html-react-parser';
import Skeleton from "react-loading-skeleton";

class SearchLoadMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMaterial: "",
      items: [],
      itemSize: 1,
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
      blockSize: 50,
      isLoaded: true,
      searchCriteria: null,
      skeleton: 8,
      perPage: 16,
      limit: 12,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange = (name, e) => {
    this.setState({
      ...this.state,
      [name]: e.value,
    });
  };

  async handleSubmit(name) {
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
      limit: this.state.limit,
    };
    localStorage.setItem(
      "search_load_more",
      JSON.stringify(this.state.searchCriteria)
    );
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
    });
    // var _effect;
    // this.state.effects.forEach((element) => {
    //   if (element.value === this.state.effect) {
    //     _effect = element.label;
    //   }
    // });
    // console.log("effects: ", this.state.effects);
    // let skuCriteria;
    // if (name === "glass") {
    //   skuCriteria = {
    //     category: _effect,
    //     per_page: this.state.perPage,
    //     page_num: 1,
    //   };
    // } else {
    //   skuCriteria = {
    //     category: _effect,
    //     per_page: this.state.perPage,
    //     page_num: 1,
    //   };
    // }

    // const res = await axios({
    //   url: `${import.meta.env.VITE_API_URL}/sku/category/per_page/page_num`,
    //   method: "post",
    //   data: skuCriteria,
    // });
    // this.setState({
    //   items: res.data,
    //   itemSize: res.data.length,
    //   isLoaded: false,
    //   page_num: this.props.page_num
    //     ? this.props.page_num + 1
    //     : this.state.page_num + 1,
    // });
  }

  loadMore = async (name) => {
    this.setState({ isLoaded: true });
    if (localStorage.getItem("search_load_more")) {
      let searchCriteria = JSON.parse(localStorage.getItem("search_load_more"));
      let searchData =
        localStorage.getItem("search_load_more") &&
        JSON.parse(localStorage.getItem("search_load_more")).searchCriteria;

      searchCriteria.limit = this.state.limit + 12;
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
        limit: searchCriteria.limit,
      });

      if (searchData.currentMaterial === "Glass") {
        this.setState({
          ...this.state,
          glass_category: searchData.glass_category,
          glassProductName: searchData.product_name,
          base_color: searchData.base_color,
          price_band: searchData.price_band,
          currentMaterial: searchData.currentMaterial,
        });
      } else if (searchData.currentMaterial === "Stone") {
        this.setState({
          ...this.state,
          material_type: searchData.stone_material,
          effect: searchData.effect,
          base_color: searchData.base_color,
          price_band: searchData.price_band,
          brand: searchData.brand,
          currentMaterial: searchData.currentMaterial,
        });
      }
      window.scrollBy(0, -1000);
    }
  };

  async componentDidMount() {
    if (localStorage.getItem("search_load_more")) {
      let searchCriteria = JSON.parse(localStorage.getItem("search_load_more"));
      let searchData =
        localStorage.getItem("search_load_more") &&
        JSON.parse(localStorage.getItem("search_load_more")).searchCriteria;

      searchCriteria.limit = this.state.limit;
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

      if (searchData.currentMaterial === "Glass") {
        this.setState({
          ...this.state,
          glass_category: searchData.glass_category,
          glassProductName: searchData.product_name,
          base_color: searchData.base_color,
          price_band: searchData.price_band,
          currentMaterial: searchData.currentMaterial,
        });
      } else if (searchData.currentMaterial === "Stone") {
        this.setState({
          ...this.state,
          material_type: searchData.stone_material,
          effect: searchData.effect,
          base_color: searchData.base_color,
          price_band: searchData.price_band,
          brand: searchData.brand,
          currentMaterial: searchData.currentMaterial,
        });
      }
    }

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
      isLoaded: false,
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

  render() {
    const obj = this;
    const {
      glass_materials,
      stone_materials,
      base_colors,
      brands,
      price_bands,
      effects,
      currentMaterial,
      limit,
    } = obj.state;
    var n = 0;
    console.log("currentMaterial: ", currentMaterial);
    return (
      <div className="mb-4">
        {/* {obj.state.isLoaded ? <div className="loader"></div> : ""} */}
        <div className="section-b-space" style={{ "padding-bottom": "70px" }}>
          <div className="container" style={{ "textAlign": "center" }}>
            <br /> <br />
            Glass
            <input
              type="radio"
              name="search_metrial"
              checked={currentMaterial === "Glass" ? true : false}
              onClick={(e) => obj.handleMaterial("Glass")}
            />{" "}
            | Stone
            <input
              type="radio"
              name="search_metrial"
              checked={currentMaterial === "Stone" ? true : false}
              onClick={(e) => obj.handleMaterial("Stone")}
            />
            <br />
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
                      placeholder="Select Glass Category"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("glass_category", e)}
                      options={glass_materials}
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
                      placeholder="Select Main Color"
                      className="custome_select_box"
                      onChange={(e) => obj.handleChange("base_color", e)}
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
                      onChange={(e) => obj.handleGlassProductName(e)}
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
                      placeholder="Select Price Band"
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
                      class="btn btn-primary btn-sm btn-p"
                      style={{ "line-height": "28px" }}
                      onClick={(e) => obj.handleSubmit("glass")}
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
                      placeholder="Stone Matrial"
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
                      placeholder="Main Color"
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
                      class="btn btn-primary btn-sm btn-p"
                      style={{ "line-height": "28px" }}
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

        <div className="container">
          <h1>
            {obj.state.isLoaded === false && obj.state.itemSize !== 0
              ? "Products :"
              : obj.state.isLoaded === false && (
                  <div className="col-sm-12" style={{ "textAlign": "center" }}>
                    <h4>Nothing found, please try again different search</h4>
                  </div>
                )}
          </h1>
          <br />
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
            <div className="row col-md-12">
              {obj.state.isLoaded === false &&
                obj.state.items.map((product, index) => {
                  n = n + 1;
                  return (
                    <Fragment>
                      {n <= limit && (
                        <div
                          className="col-xl-3 col-md-4 col-sm-6 mb-3 _testing"
                          style={{
                            height: 420,
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div class="front">
                                <img
                                  src={obj.getImagePath(index)}
                                  class="img-fluid product_image"
                                  alt=""
                                />
                              </div>
                            </div>
                            <br />
                            <div className="product-detail">
                              <p>
                                <b
                                  className="Component-paragraphs"
                                  style={{
                                    display: "flex",
                                    fontSize: 14,
                                    height: 35,
                                  }}
                                >
                                  {product.name}
                                </b>

                                <div
                                  className="row mb-0"
                                  style={{ marginTop: "5%" }}
                                >
                                  <div className="col-7">
                                    <p className="Component-paragraphs-inner">
                                      {product.material_type}
                                    </p>
                                  </div>
                                  <div className="col-5">
                                    <p
                                      className="Component-paragraphs-inner"
                                      style={{
                                        fontWeight: "bold",
                                        fontSize: 16,
                                      }}
                                    >
                                      {parse(
                                        obj.getPriceRange(
                                          product.finishes,
                                          "price"
                                        )
                                      )}
                                    </p>
                                  </div>
                                </div>

                                <Link
                                  to={`${
                                    import.meta.env.VITE_PUBLIC_URL
                                  }/product-detail/${product.manufacturer
                                    .replace(/ /g, "-")
                                    .replace("&", "and")
                                    .toLowerCase()}/${product.brand
                                    .replace(/ /g, "-")
                                    .replace("&", "and")
                                    .toLowerCase()}/${product.base_color
                                    .replace(/ /g, "-")
                                    .replace("&", "and")
                                    .toLowerCase()}/${product.id}`}
                                  title="Details"
                                  style={{ float: "right" }}
                                >
                                  <button
                                    className="btn btc mt-2"
                                    style={{
                                      fontWeight: 400,
                                      paddingTop: 7,
                                      paddingBottom: 3,
                                      backgroundColor: "white",
                                      color: "rgba(37, 55, 70, 1)",
                                    }}
                                  >
                                    Details
                                  </button>
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  );
                })}
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
                  className="btn _whiteColor btc _viewAll"
                  style={{
                    backgroundColor: "white",
                    color: "rgb(37, 55, 70) !important",
                    maxHeight: 35,
                    fontWeight: 400,
                    paddingTop: 7,
                    paddingBottom: 3,
                  }}
                  onClick={() => {
                    console.log("clicked");
                    this.loadMore(this.state.currentMaterial);
                    // this.setState({ limit: limit + 8 }, () => {});
                  }}
                >
                  load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchLoadMore;
