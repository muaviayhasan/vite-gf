import React, { Component } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Select from "react-select";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

import Product from "./product";
import "./style.scss";
import store from "../../../store/index";
import { changeDemo, outerLoading } from "../../../actions";
import { initSettings } from "../../../utils/utils";
import "./search-bar.css";

class Search extends Component {
  constructor(props) {
    super(props);
    const params = this.props.searchParams || {};

    this.state = {
      currentMaterial: params.material || "Stone",

      items: [],
      itemSize: 0,

      stone_materials: [],
      glass_materials: [],
      brands: [],
      base_colors: [],
      effects: [],
      price_bands: [],

      // selected values, ids
      glass_category: 0,
      material_type: 0,
      base_color: 0,
      price_band: 0,
      brand: 0,
      effect: 0,

      // selected values, labels
      glassProductName: "all",
      glass_category_name: "all",
      base_color_name: "all",
      price_band_name: "all",
      brand_name: "all",
      effect_name: "all",
      material_type_name: "all",

      limit: 16,
      page_num: 1,

      isLoaded: true,
      searchCriteria: null,
      search_name: "",
      loadMore: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadMoreProducts = this.loadMoreProducts.bind(this);
  }

  // deprecated but keeping original intent
  UNSAFE_componentWillMount() {
    store.dispatch(outerLoading());
  }

  async componentDidMount() {
    // keep original behavior
    initSettings();
    store.dispatch(changeDemo("5"));

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

      this.setState(
        {
          glass_materials,
          stone_materials,
          brands,
          base_colors,
          effects,
          price_bands,
          isLoaded: false,
        },
        () => {
          // perform initial search if params exist
          this.initialSearchFromParams();
        }
      );
    } catch (err) {
      console.error(err);
      this.setState({ isLoaded: false });
    }
  }

  initialSearchFromParams() {
    const params = this.props.searchParams || {};
    const { glass_materials, base_colors, stone_materials, effects, brands } =
      this.state;

    let searchCriteria = {
      searchCriteria: "",
      limit: this.state.limit,
      page_num: this.state.page_num,
    };

    if (params.material === "Glass") {
      const get_glass_category = glass_materials.find(
        (el) => el.label === params.category
      );
      const get_base_color = base_colors.find(
        (el) => el.label === params.colour
      );

      searchCriteria.searchCriteria = {
        glass_category: get_glass_category ? get_glass_category.value : 0,
        base_color: get_base_color ? get_base_color.value : 0,
        product_name:
          params.product_name === "all" || params.product_name === "0"
            ? 0
            : params.product_name,
        price_band: Number(params.price_band || 0),
        currentMaterial: "Glass",
      };
    } else if (params.material === "Stone") {
      const get_stone_material = stone_materials.find(
        (el) => el.label === params.material_type
      );
      const get_base_color = base_colors.find(
        (el) => el.label === params.colour
      );
      const get_effect = effects.find((el) => el.label === params.effect);
      const get_brand = brands.find((el) => el.label === params.brand);

      searchCriteria.searchCriteria = {
        stone_material: get_stone_material ? get_stone_material.value : 0,
        base_color: get_base_color ? get_base_color.value : 0,
        effect: get_effect ? get_effect.value : 0,
        brand: get_brand ? get_brand.value : 0,
        price_band: Number(params.price_band || 0),
        currentMaterial: "Stone",
      };
    } else {
      // no params, skip
      return;
    }

    this.fetchSearch(searchCriteria, true);
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
      base_color_name: "all",
      price_band_name: "all",
      brand_name: "all",
      effect_name: "all",
      material_type_name: "all",

      // reset results
      items: [],
      itemSize: 0,
      page_num: 1,
      searchCriteria: null,
      search_name: "",
    });
  }

  handleGlassProductName(e) {
    this.setState({ glassProductName: e.target.value });
  }

  handleChange = (name, e) => {
    // support clearing the Select
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

  async fetchSearch(searchCriteria, replaceResults = true) {
    try {
      this.setState({ isLoaded: true });
      const resp = await axios.post(
        `${import.meta.env.VITE_API_URL}/sku/search`,
        searchCriteria
      );

      this.setState((prev) => ({
        items: replaceResults ? resp.data : [...prev.items, ...resp.data],
        itemSize: resp.data.length,
        isLoaded: false,
        searchCriteria,
      }));
    } catch (err) {
      console.error(err);
      this.setState({ isLoaded: false });
    }
  }

  async handleSubmit(name) {
    const {
      glass_materials,
      stone_materials,
      base_colors,
      effects,
      brands,
      limit,
    } = this.state;

    let searchData;
    if (name === "glass") {
      searchData = {
        glass_category_name: this.state.glass_category_name,
        base_color_name: this.state.base_color_name,
        product_name: this.state.glassProductName,
        price_band: this.state.price_band,
        currentMaterial: "Glass",
      };

      this.props.navigate(
        `${import.meta.env.VITE_PUBLIC_URL}/search?material=${encodeURIComponent(
          searchData.currentMaterial
        )}&category=${encodeURIComponent(
          searchData.glass_category_name
        )}&colour=${encodeURIComponent(
          searchData.base_color_name
        )}&product_name=${encodeURIComponent(
          searchData.product_name || "all"
        )}&price_band=${encodeURIComponent(searchData.price_band)}`
      );

      const get_glass_category = glass_materials.find(
        (el) => el.label === searchData.glass_category_name
      );
      const get_base_color = base_colors.find(
        (el) => el.label === searchData.base_color_name
      );

      const searchCriteria = {
        searchCriteria: {
          glass_category: get_glass_category ? get_glass_category.value : 0,
          base_color: get_base_color ? get_base_color.value : 0,
          product_name:
            searchData.product_name === "all" || searchData.product_name === 0
              ? 0
              : searchData.product_name,
          price_band: Number(searchData.price_band || 0),
          currentMaterial: "Glass",
        },
        limit,
        page_num: 1,
      };

      await this.fetchSearch(searchCriteria, true);
      this.setState({ search_name: "glass", page_num: 1 });
    } else {
      searchData = {
        stone_material_name: this.state.material_type_name,
        effect_name: this.state.effect_name,
        base_color_name: this.state.base_color_name,
        price_band: this.state.price_band,
        brand_name: this.state.brand_name,
        currentMaterial: "Stone",
      };

      this.props.navigate(
        `${import.meta.env.VITE_PUBLIC_URL}/search?material=${encodeURIComponent(
          searchData.currentMaterial
        )}&material_type=${encodeURIComponent(
          searchData.stone_material_name
        )}&effect=${encodeURIComponent(
          searchData.effect_name
        )}&colour=${encodeURIComponent(
          searchData.base_color_name
        )}&brand=${encodeURIComponent(
          searchData.brand_name
        )}&price_band=${encodeURIComponent(searchData.price_band)}`
      );

      const get_stone_material = stone_materials.find(
        (el) => el.label === searchData.stone_material_name
      );
      const get_base_color = base_colors.find(
        (el) => el.label === searchData.base_color_name
      );
      const get_effect = effects.find(
        (el) => el.label === searchData.effect_name
      );
      const get_brand = brands.find((el) => el.label === searchData.brand_name);

      const searchCriteria = {
        searchCriteria: {
          stone_material: get_stone_material ? get_stone_material.value : 0,
          base_color: get_base_color ? get_base_color.value : 0,
          effect: get_effect ? get_effect.value : 0,
          brand: get_brand ? get_brand.value : 0,
          price_band: Number(searchData.price_band || 0),
          currentMaterial: "Stone",
        },
        limit,
        page_num: 1,
      };

      await this.fetchSearch(searchCriteria, true);
      this.setState({ search_name: "stone", page_num: 1 });
    }
  }

  async loadMoreData() {
    const { searchCriteria, page_num, limit } = this.state;
    if (!searchCriteria) return;

    const next = {
      ...searchCriteria,
      page_num: page_num + 1,
      limit,
    };

    await this.fetchSearch(next, false);
    this.setState({ page_num: page_num + 1, loadMore: false });
  }

  loadMoreProducts() {
    this.setState({ loadMore: true }, () => this.loadMoreData());
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
      items,
      itemSize,
      isLoaded,
      limit,
    } = obj.state;

    return (
      <div className="mb-4">
        <div className="section-b-space _sectionBSpace" style={{ paddingBottom: "70px" }}>
          <div className="container custome-search-container" style={{ textAlign: "center" }}>
            <div style={{ display: "flex" }}>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  name="search_material"
                  className="custom-control-input"
                  id="radio-glass"
                  checked={currentMaterial === "Glass"}
                  onChange={() => this.handleMaterial("Glass")}
                />
                <label
                  className="custom-control-label"
                  htmlFor="radio-glass"
                  style={{ fontSize: 19, fontWeight: 600, color: "white" }}
                >
                  Search Glass Range
                </label>
              </div>

              <span
                className="custom-control-label custom-control-label-mobile ______pipe"
                style={{
                  fontSize: 19,
                  fontWeight: 600,
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
                  name="search_material"
                  className="custom-control-input"
                  id="radio-stone"
                  checked={currentMaterial === "Stone"}
                  onChange={() => this.handleMaterial("Stone")}
                />
                <label
                  className="custom-control-label"
                  htmlFor="radio-stone"
                  style={{ fontSize: 19, fontWeight: 600, color: "white" }}
                >
                  Search Stones Range
                </label>
              </div>
            </div>

            {currentMaterial === "Glass" ? (
              <div className="row seven-cols">
                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <Select
                    value={glass_materials.find(
                      (option) => obj.state.glass_category !== 0 && option.value === obj.state.glass_category
                    )}
                    placeholder="Category"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("glass_category", e)}
                    options={glass_materials}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
                  <Select
                    value={base_colors.find(
                      (option) => obj.state.base_color !== 0 && option.value === obj.state.base_color
                    )}
                    placeholder="Main Colour"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("base_color", e)}
                    options={base_colors}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="form-control"
                    onChange={(e) => obj.handleGlassProductName(e)}
                    style={{ marginBottom: "0rem" }}
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6 _selSearch">
                  <Select
                    value={price_bands.find(
                      (option) => obj.state.price_band !== 0 && option.value === obj.state.price_band
                    )}
                    placeholder="Price Band"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("price_band", e)}
                    options={price_bands}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <button
                    type="button"
                    className="btn btn-outline-primary-2 btn-round btn-more custome-search-button"
                    onClick={() => this.handleSubmit("glass")}
                    style={{ paddingTop: "0.8rem", paddingBottom: "0.8rem" }}
                  >
                    search
                  </button>
                </div>
              </div>
            ) : (
              <div className="row seven-cols">
                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <Select
                    value={stone_materials.find(
                      (option) => obj.state.material_type !== 0 && option.value === obj.state.material_type
                    )}
                    placeholder="Material"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("material_type", e)}
                    options={stone_materials}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <Select
                    value={effects.find(
                      (option) => obj.state.effect !== 0 && option.value === obj.state.effect
                    )}
                    placeholder="Effect"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("effect", e)}
                    options={effects}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <Select
                    value={base_colors.find(
                      (option) => obj.state.base_color !== 0 && option.value === obj.state.base_color
                    )}
                    placeholder="Main Colour"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("base_color", e)}
                    options={base_colors}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <Select
                    value={price_bands.find(
                      (option) => obj.state.price_band !== 0 && option.value === obj.state.price_band
                    )}
                    placeholder="Price Band"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("price_band", e)}
                    options={price_bands}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <Select
                    value={brands.find(
                      (option) => obj.state.brand !== 0 && option.value === obj.state.brand
                    )}
                    placeholder="Brand"
                    className="custome_select_box"
                    onChange={(e) => obj.handleChange("brand", e)}
                    options={brands}
                    isClearable
                  />
                </div>

                <div className="col-lg-1 col-md-3 col-sm-4 col-xs-6">
                  <button
                    type="button"
                    className="btn btn-outline-primary-2 btn-round btn-more custome-search-button"
                    style={{ paddingTop: "0.8rem", paddingBottom: "0.8rem" }}
                    onClick={() => obj.handleSubmit("stone")}
                  >
                    search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="container">
          <h4>
            {itemSize !== 0 ? (
              "Search Results :"
            ) : (
              <div className="col-sm-12" style={{ textAlign: "center" }}>
                <h4>Nothing found, please try a different search</h4>
              </div>
            )}
          </h4>

          <br />

          {isLoaded && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {[1, 2, 3, 4].map((data) => (
                <div
                  key={data}
                  style={{ display: "grid", marginLeft: "15%", marginTop: "3%" }}
                >
                  <Skeleton height={150} width={150} />
                  <Skeleton height={30} width={150} />
                  <Skeleton height={30} width={150} />
                  <Skeleton height={30} width={70} />
                </div>
              ))}
            </div>
          )}

          <div className="search-product">
            <div className="row justify-content-center">
              {items.map((item, index) => (
                <div className="col-6 col-md-4 col-lg-3" key={`${item.id || item.name}-${index}`}>
                  <Product product={item} />
                </div>
              ))}

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
                    itemSize >= limit
                      ? "btn btn-outline-primary-2 btn-round btn-more"
                      : "hidden"
                  }
                  onClick={this.loadMoreProducts}
                  disabled={isLoaded}
                >
                  {isLoaded ? "loading..." : "load more"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Wrapper component to provide query params as props
function SearchWithParams(props) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const params = {};
  for (let [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return <Search {...props} searchParams={params} navigate={navigate} />;
}

export default SearchWithParams;
