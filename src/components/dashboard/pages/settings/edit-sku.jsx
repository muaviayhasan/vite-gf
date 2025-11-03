import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
import ImagePicker from "./../../includes/image-picker";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
 // import "../../css/custome.scoped.css";

class editSku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
      inputValue: [],
      show: false,
      options: [],
      slabs: [],
      manufacturer: [],
      brands: [],
      brandsFilter: [],
      suppliers: [],
      suppliersFilter: [],
      base_color: [],
      color_shades: [],
      color_shadesFilter: [],
      material_types: [],
      tiles: [],
      applications: [],
      effects: [],
      thickness: [],
      finishes: [],
      temporary: [],
      material: "",
      file: "",
      imagePreviewUrl: "",
      selectedFinishes: [],
      getDateState: {
        manufacturer_id: "",
        brand_id: "",
        supplier_id: "",
        base_color_id: "",
        color_shade_id: "",
        color_code: "",
        material_type_id: "",
        material_id: "",
        slab_size_note: "",
        slab_size: "",
        tile_size: "",
        tile_size_note: "",
        applications_area_note: "",
        applications_area: "",
        effects: "",
        effects_note: "",
        thicknesses: [],
        finishes: "",
        editableSku: [],
        selected_manufacturer: "",
        selected_brand: "",
        selected_material_type: "",
        selected_color_code: "",
        data: []
      },
      images: {
        imagepreview_1: "http://placehold.it/180",
        imagepreview_2: "http://placehold.it/180",
        imagepreview_3: "http://placehold.it/180",
        imagepreview_4: "http://placehold.it/180",
        imagepreview_5: "http://placehold.it/180"
      },
      images_show: {
        imagepreview_1: "http://placehold.it/180",
        imagepreview_2: "http://placehold.it/180",
        imagepreview_3: "http://placehold.it/180",
        imagepreview_4: "http://placehold.it/180",
        imagepreview_5: "http://placehold.it/180"
      }
    };
    this.showGlass = this.showGlass.bind(this);
    this.showStone = this.showStone.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
    this.handleFinishesPrice = this.handleFinishesPrice.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
  handleChangeeee(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  handleFinishesPrice(e) {
    let finishes = this.state.selectedFinishes;
    finishes.push(e.target.getAttribute("name"));
    this.setState({
      ...this.state,
      selectedFinishes: finishes
    });
  }

  handleImageUpload(event) {
    console.log("saveImages");

    let name = event.target.name;
    let saveImages = this.state.images;
    let saveImages1 = this.state.images_show;
    saveImages[name] = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        saveImages1[name] = e.target.result;
        this.setState({
          ...this.state,
          images_show: saveImages1,
          images: saveImages
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    // this.setState({
    //   ...this.state,
    //   images: saveImages
    // });

    // if (event.target.files && event.target.files[0]) {
    //   let reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.onload = (e) => {
    //     saveImages[name] = event.target.files[0];
    //     this.setState({
    //       ...this.state,
    //       images: saveImages
    //     });

    //   };
    // }
  }

  handleShow(event) {
    let name = event.target.name;
    let saveImages = this.state.images_show;

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        saveImages[name] = e.target.result;
        this.setState({
          ...this.state,
          images_show: saveImages
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state.getDateState;
    let images = this.state.images;

    const form = event.target;
    for (let element in data) {
      if (form[element] !== undefined) {
        if (
          element == "slab_size" ||
          element == "tile_size" ||
          element == "applications_area" ||
          element == "effects" ||
          element == "thicknesses" ||
          element == "inputValue" ||
          element == "img_caption" ||
          element == "sequence"
        ) {
          let localArray = [];
          var getSlabSizeArray = form[element];
          for (var i = 0; i < getSlabSizeArray.length; i++) {
            if (getSlabSizeArray[i].checked) {
              localArray.push(getSlabSizeArray[i].value);
            }
          }
          data[element] = localArray;
        } else {
          data[element] = form[element].value;
        }
      } else {
      }
    }

    let finishesPrice = [];
    this.state.selectedFinishes.map(finish => {
      let seprate = finish.split("_");
      let thickness_id = seprate[0];
      let finish_id = seprate[1];
      let price = form[finish].value;

      let tempObj = {
        thickness_id: thickness_id,
        finish_id: finish_id,
        price: price
      };
      finishesPrice.push(tempObj);
    });

    let images_obj = [];
    for (let image in images) {
      if (this.state.images[image] !== "http://placehold.it/180") {
        let seprate = image.split("_");
        let image_id = seprate[1];
        let caption = form["imgcaption_" + image_id].value;
        let sequence = form["imgsequence_" + image_id].value;
        let tempImageObj = {
          caption: caption,
          sequence: sequence,
          image: this.state.images[image]
        };
        images_obj.push(tempImageObj);
      }
    }

    console.log(images_obj);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    let form_data = new FormData();

    for (var key in data) {
      form_data.append(key, data[key]);
    }

    for (var i = 0; i < finishesPrice.length; i++) {
      let finish = finishesPrice[i];
      form_data.append("finishes[" + i + "]", JSON.stringify(finish));
    }

    for (var i = 0; i < images_obj.length; i++) {
      let image = images_obj[i].image;
      form_data.append("images[" + i + "]", image);
    }

    console.log(form_data);

    axios
      .post(`${import.meta.env.VITE_API_URL}/sku`, form_data, config)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      return this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
  }
  handleInput = (event, index) => {
    this.state.inputValue[index] = event.target.value;
    this.setState({
      ...this.state,
      inputValue: this.state.inputValue
    });
  };
  handleCheckbox(e) {
    let value = e.target.checked;

    let finishIndex = parseInt(e.target.getAttribute("data-index"));
    let thicknessIndex = parseInt(e.target.getAttribute("data-thickness"));
    let thicknesses = this.state.thickness;
    let requiredObj = thicknesses[thicknessIndex];
    let finishes = requiredObj.finishes;
    finishes[finishIndex].checked = value;
    requiredObj.finishes = finishes;
    thicknesses[thicknessIndex] = requiredObj;
    this.setState({
      ...this.state,
      thickness: thicknesses
    });
  }
  handleThicknessCheck = e => {
    let thicknessIndex = parseInt(e.target.getAttribute("data-index"));
    let thicknesses = this.state.thickness;
    let requiredObj = thicknesses[thicknessIndex];
    requiredObj.checked = !requiredObj.checked;
    thicknesses.splice(thicknessIndex, 1, requiredObj);
    this.setState({
      ...this.state,
      thickness: thicknesses
    });
  };
  showStone() {
    this.setState({
      ...this.state,
      material: "stone",
      thickness: this.state.temporary
    });
  }
  showGlass() {
    this.setState({
      ...this.state,
      temporary: this.state.thicknes
    });

    // console.log(this.state.temporary);

    let thiknes = this.state.thickness.filter(function(el) {
      return el.name != "4mm";
    });
    this.setState({
      ...this.state,
      material: "glass",
      thickness: thiknes
    });
  }

  handleManufacturerChange = function(manufacturer) {
    let manufacturerNumber = manufacturer;
    let localArray = this.state.brands.filter(function(element) {
      return element.manufacturer_id === parseInt(manufacturerNumber);
    });
    this.setState({
      ...this.state,
      brandsFilter: localArray,
      suppliersFilter: []
    });
  };

  handleBrandChange(brand) {
    let localArray = [];
    this.state.suppliers.filter(function(element) {
      let checkBrandId = element.brands.filter(function(el) {
        return el.pivot.brand_id === parseInt(brand);
      });
      if (checkBrandId.length !== 0) {
        localArray.push(element);
      }
    });
    this.setState({
      ...this.state,
      suppliersFilter: localArray
    });
  }

  handleColorChange(color) {
    let localArray = this.state.color_shades.filter(function(element) {
      return element.baseColor.id === parseInt(color);
    });

    this.setState({
      ...this.state,
      color_shadesFilter: localArray
    });
  }
  //   editSku = skuId => {
  //     console.log(skuId);

  //     axios.get(`${import.meta.env.VITE_API_URL}/sku/getSku/${skuId}`).then(res => {
  //       console.log(res.data);
  //       this.setState({
  //         ...this.state,
  //         isLoaded: true,
  //         editableSku: res.data
  //       });
  //     });
  //   };

  componentDidMount() {
    //editable Sku

    axios
      .get(`${import.meta.env.VITE_API_URL}/sku/getSku/${this.props.match.params.id}`)
      .then(res => {
        let selected_manufacturer = res.data[0].manufacturer_name;
        let selected_brand = res.data[0].brand;
        let selected_material_type = res.data[0].material_type;
        let selected_color_code = res.data[0].color_code;
        this.setState({
          ...this.state,
          isLoaded: true,
          editableSku: res.data,
          selected_manufacturer: selected_manufacturer,
          selected_brand: selected_brand,
          selected_material_type: selected_material_type,
          selected_color_code: selected_color_code
        });
        console.log(this.state.editableSku);
      });

    //slab size
    axios.get(`${import.meta.env.VITE_API_URL}/slab_sizes`).then(slab_size => {
      let slabs = slab_size.data.map(slab_size => {
        //mapping
        return { name: slab_size.name, value: slab_size.id };
      });

      this.setState({
        ...this.state,
        isLoaded: true,
        data: slab_size.data,
        slabs: slabs
      });
    });
    //tile
    axios.get(`${import.meta.env.VITE_API_URL}/tile_sizes`).then(tile_size => {
      let tiles = tile_size.data.map(tile_size => {
        //mapping
        return { name: tile_size.name, value: tile_size.id };
      });

      this.setState({
        ...this.state,
        isLoaded: true,
        tiles: tiles
      });
    });

    //manufacturers
    axios.get(`${import.meta.env.VITE_API_URL}/manufacturer`).then(res => {
      let manufacturers = res.data.map(manufacturer => {
        //mapping
        return { label: manufacturer.name, value: manufacturer.id };
      });
      this.setState({
        ...this.state,
        isLoaded: true,
        manufacturer: manufacturers
      });
    });

    //brands

    axios.get(`${import.meta.env.VITE_API_URL}/brand`).then(brand => {
      let brands = brand.data.map(_brand => {
        //mapping
        return {
          label: _brand.name,
          value: _brand.id,
          manufacturer_id: _brand.manufacturer_id
        };
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        brands: brands
      });
    });
    //suppliers
    axios.get(`${import.meta.env.VITE_API_URL}/suppliers`).then(res => {
      let supp = res.data.map(suppl => {
        return { label: suppl.name, value: suppl.id, brands: suppl.brands };
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        suppliers: supp
      });
    });

    //Base Color
    axios.get(`${import.meta.env.VITE_API_URL}/base_color`).then(res => {
      let base_colors = res.data.map(_base_color => {
        return { label: _base_color.name, value: _base_color.id };
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        base_color: base_colors
      });
    });

    //color shades
    axios.get(`${import.meta.env.VITE_API_URL}/color_shades`).then(color_shades => {
      let color_shade = color_shades.data.map(_color_shades => {
        return {
          label: _color_shades.name,
          value: _color_shades.id,
          baseColor: _color_shades.baseColor
        };
      });

      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        color_shades: color_shade
      });
    });
    //Material Types
    axios.get(`${import.meta.env.VITE_API_URL}/material_types`).then(material_types => {
      let material_type = material_types.data.map(_material_type => {
        return { label: _material_type.name, value: _material_type.id };
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        material_types: material_type
      });
    });

    //application Areas
    axios
      .get(`${import.meta.env.VITE_API_URL}/application_areas`)
      .then(application_area => {
        let application = application_area.data.map(application_area => {
          //mapping
          return { name: application_area.name, value: application_area.id };
        });

        this.setState({
          ...this.state,
          isLoaded: true,
          applications: application
        });
      });

    //effects
    axios.get(`${import.meta.env.VITE_API_URL}/effects`).then(effect => {
      let effectss = effect.data.map(effect => {
        //mapping
        return { name: effect.name, value: effect.id };
      });

      this.setState({
        ...this.state,
        isLoaded: true,
        effects: effectss
      });
    });
    //Thickness & Finishes
    axios
      .get(`${import.meta.env.VITE_API_URL}/material_thickness`)
      .then(material_thickness => {
        axios.get(`${import.meta.env.VITE_API_URL}/finishes`).then(finish => {
          let finishees = finish.data.map(finish => {
            return { checked: false, name: finish.name, value: finish.id };
          });

          let material_thicknesses = material_thickness.data.map(
            //mapping
            material_thickness => {
              return {
                checked: false,
                name: material_thickness.name,
                value: material_thickness.id,
                finishes: finish.data.map(finish => {
                  return {
                    checked: false,
                    name: finish.name,
                    value: finish.id
                  };
                })
              };
            }
          );
          this.setState({
            ...this.state,
            isLoaded: true,
            thickness: material_thicknesses,
            temporary: material_thicknesses,
            finishes: finish.data
          });
        });
      });

    this.setState({
      ...this.state,
      material: "stone"
    });

    document.getElementById("stone").click();
    document.getElementById("adminPanel").setAttribute("href", `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`);
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  // handleManufacturerChange(manufacturer) {

  //    console.log(this.state);
  //   // let localArray = this.state.brands.filter(function(element) {
  //   //   return element.manufacturer_id === manufacturer.value;
  //   // });
  //   // console.log(localArray);

  // }
  render() {
    const manufacturers = this.state.manufacturer;
    let brands = this.state.brandsFilter;
    const suppliers = this.state.suppliersFilter;
    const base_color = this.state.base_color;
    const color_shade = this.state.color_shadesFilter;
    const material_type = this.state.material_types;
    const glass_type = [
      {
        label: "Toughened",
        value: 1
      },
      {
        label: "Tempered",
        value: 2
      }
    ];
    const glass_category = [
      {
        label: "Glass Prints",
        value: 1
      },
      {
        label: "Canvas Prints",
        value: 2
      },
      {
        label: "Acrylic Prints",
        value: 3
      },
      {
        label: "Glass Splashbacks",
        value: 4
      },
      {
        label: "Glass ChoppingBoard",
        value: 5
      },
      {
        label: "Glass WallClock",
        value: 6
      }
    ];
    const {
      slabs,
      tiles,
      applications,
      effects,
      thickness,
      finishes,
      material,
      manufacturer,
      editableSku
    } = this.state;

    let content = "";
    if (material == "stone") {
      content = (
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Manufacturer:</label>
                <select
                  name="manufacturer_id"
                  class="custome-select-box-sku"
                  onChange={e => this.handleManufacturerChange(e.target.value)}
                  required
                >
                  <option key="base" value="">
                    Select Manufacturer
                  </option>
                  {manufacturers.map(element => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_manufacturer == element.label
                        }
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Brand:</label>
                <select
                  name="brand_id"
                  class="custome-select-box-sku"
                  onChange={e => this.handleBrandChange(e.target.value)}
                  required
                >
                  <option key="base" value="">
                    Select Manufacturer First
                  </option>
                  {brands.map(element => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={this.state.selected_brand == element.label}
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Supplier:</label>
                <select
                  name="supplier_id"
                  class="custome-select-box-sku"
                  required
                >
                  <option key="base" value="">
                    Select Brand First
                  </option>
                  {suppliers.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Main Color:</label>

                <select
                  name="base_color_id"
                  class="custome-select-box-sku"
                  onChange={e => this.handleColorChange(e.target.value)}
                  required
                >
                  <option key="base" value="">
                    Select Base Color
                  </option>
                  {base_color.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Color Name:</label>

                <select
                  name="color_shade_id"
                  class="custome-select-box-sku"
                  required
                >
                  <option key="base" value="">
                    Select base Color First
                  </option>
                  {color_shade.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Color Code:</label>
                <input
                  type="text"
                  className="form-control"
                  id="color-code"
                  name="color_code"
                  value={this.state.selected_color_code}
                  placeholder="Color Code"
                  style={{ height: "38px" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Material:</label>
                <select
                  name="material_type_id"
                  class="custome-select-box-sku"
                  required
                >
                  <option key="base" value="">
                    Select Material
                  </option>
                  {material_type.map(element => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_material_type == element.label
                        }
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Manufacturer:</label>
                <select
                  name="manufacturer_id"
                  className="custome-select-box-sku"
                  onChange={e => this.handleManufacturerChange(e.target.value)}
                >
                  <option key="base" value="">
                    Select Manufacturer
                  </option>
                  {manufacturers.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Brand:</label>
                <select
                  name="brand_id"
                  className="custome-select-box-sku"
                  onChange={e => this.handleBrandChange(e.target.value)}
                >
                  <option key="base" value="">
                    Select Manufacturer First
                  </option>
                  {brands.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Supplier:</label>
                <select name="supplier_id" class="custome-select-box-sku">
                  <option key="base" value="">
                    Select Brand First
                  </option>
                  {suppliers.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Glass Type :</label>
                <select name="glass_type" className="custome-select-box-sku">
                  <option key="base" value="">
                    Select Glass Type
                  </option>
                  {glass_type.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Glass Category:</label>
                <select name="glass_category" class="custome-select-box-sku">
                  <option key="base" value="">
                    Select Glass Category
                  </option>
                  {glass_category.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Main Color:</label>

                <select
                  name="base_color_id"
                  class="custome-select-box-sku"
                  onChange={e => this.handleColorChange(e.target.value)}
                >
                  <option key="base" value="">
                    Select Base Color
                  </option>
                  {base_color.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Color Name:</label>

                <select name="color_shade_id" class="custome-select-box-sku">
                  <option key="base" value="">
                    Select base Color First
                  </option>
                  {color_shade.map(element => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <label className="custome_lable">Color Code:</label>
                <input
                  type="text"
                  className="form-control"
                  id="color-code"
                  placeholder="Color Code"
                  style={{ height: "38px" }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <section className="admin-dashboard">
            <div className="row col-md-12">
              <div className="col-md-3">
                <DashboardHeader />
              </div>
              <div className="col-md-9 " style={{ "margin-top": "20px" }}>
                <main className="page-content card">
                  <div className="container-fluid">
                    <div className="container">
                      <h2>Edit Sku</h2>
                      <hr />
                      <h5>Select Material Type</h5>
                      <div className="row">
                        <div className="col-md-1">
                          <label className="custome_lable">Stone:</label>
                          <input
                            type="radio"
                            className="form-control"
                            id="stone"
                            onChange={this.showStone}
                            placeholder="Stone"
                            name="material_id"
                            value="2"
                          />
                        </div>
                        <div className="col-md-1">
                          <label className="custome_lable">Glass:</label>
                          <input
                            type="radio"
                            className="form-control"
                            id="glass"
                            placeholder="glass"
                            name="material_id"
                            onChange={this.showGlass}
                            value="1"
                          />
                        </div>
                      </div>

                      <br />
                      {content}
                    </div>

                    <div className="col-md-12 row">
                      <div className="col-md-6 col-sm-12 custome_table_add_sku">
                        <div className="row head-clr">
                          <h3>Slab Sizes</h3>
                        </div>
                        <div className="row">
                          {" "}
                          {slabs.map(slab => {
                            return (
                              <div className="">
                                <div className="custom-control col-md-6 custom-control-inline custom-checkbox">
                                  <input
                                    type="checkbox"
                                    value={slab.value}
                                    className="custom-control-input"
                                    name="slab_size"
                                    id={"slab-" + slab.value}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={"slab-" + slab.value}
                                  >
                                    {slab.name}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <label className="custome_lable" htmlFor="name">
                          Slab Size Notes
                        </label>
                        <input
                          name="slab_size_note"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Slab Size Notes"
                          required=""
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 custome_table_add_sku">
                        <div className="row head-clr">
                          <h3>Tile Sizes</h3>
                        </div>
                        <div className="row">
                          {" "}
                          {tiles.map(tile => {
                            return (
                              <div className="">
                                <div className="custom-control col-md-6 custom-control-inline custom-checkbox">
                                  <input
                                    type="checkbox"
                                    value={tile.value}
                                    className="custom-control-input"
                                    name="tile_size"
                                    id={"tile-" + tile.value}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={"tile-" + tile.value}
                                  >
                                    {tile.name}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <label className="custome_lable" htmlFor="name">
                          Tile Size Notes
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="tile_size_note"
                          placeholder="Tile Size Notes"
                          required=""
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 custome_table_add_sku">
                        <div className="row head-clr">
                          <h3>Application Areas</h3>
                        </div>
                        <div className="row">
                          {" "}
                          {applications.map(application => {
                            return (
                              <div className="">
                                <div className="custom-control col-md-6 custom-control-inline custom-checkbox">
                                  <input
                                    type="checkbox"
                                    value={application.value}
                                    className="custom-control-input"
                                    name="applications_area"
                                    id={"application-" + application.value}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={"application-" + application.value}
                                  >
                                    {application.name}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <label className="custome_lable " htmlFor="name">
                          Application Areas Notes
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="applications_area_note"
                          placeholder="Application Areas Notes"
                          required=""
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 custome_table_add_sku">
                        <div className="row head-clr">
                          <h3>Effects</h3>
                        </div>
                        <div className="row">
                          {" "}
                          {effects.map(effect => {
                            return (
                              <div className="">
                                <div className="custom-control col-md-6 custom-control-inline custom-checkbox">
                                  <input
                                    type="checkbox"
                                    value={effect.value}
                                    className="custom-control-input"
                                    name="effects"
                                    id={"effect-" + effect.value}
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor={"effect-" + effect.value}
                                  >
                                    {effect.name}
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <label className="custome_lable" htmlFor="name">
                          Effects Notes
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="effects_note"
                          placeholder="Effects Notes"
                          required=""
                        />
                      </div>
                    </div>
                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div className=" container head-clr2">
                        <h3>Thickness, Finishes & Prices</h3>
                        <br />
                      </div>

                      <div className="row  col-md-12">
                        {thickness.map((thicknes, thicknessIndex) => {
                          return (
                            <React.Fragment>
                              <div className="border-matt">
                                <div className="row col-md-12">
                                  <div className="custom-control col-md-12 head-clr3 custom-control-inline custom-checkbox">
                                    <input
                                      type="checkbox"
                                      value={thicknes.value}
                                      className="custom-control-input"
                                      name="thicknesses"
                                      data-index={thicknessIndex}
                                      id={"thickness" + thicknes.name}
                                      onChange={this.handleThicknessCheck.bind(
                                        this
                                      )}
                                    />

                                    <label
                                      className="custom-control-label"
                                      htmlFor={"thickness" + thicknes.name}
                                    >
                                      {" "}
                                      {thicknes.name}
                                    </label>
                                  </div>
                                </div>
                                <br />{" "}
                                {thicknes.finishes.map((item, index) => {
                                  return (
                                    <React.Fragment>
                                      <div className="custom-control custom-control-inline custom-checkbox">
                                        <input
                                          type="checkbox"
                                          value={
                                            thicknes.name + "_" + item.value
                                          }
                                          className="custom-control-input"
                                          name="finishes"
                                          id={
                                            thicknes.name +
                                            "_" +
                                            thicknessIndex +
                                            "_" +
                                            index
                                          }
                                          data-index={index}
                                          data-thickness={thicknessIndex}
                                          disabled={!thicknes.checked}
                                          checked={
                                            thicknes.checked && item.checked
                                          }
                                          onChange={this.handleCheckbox.bind(
                                            this
                                          )}
                                        />
                                        <label
                                          className="custom-control-label"
                                          htmlFor={
                                            thicknes.name +
                                            "_" +
                                            thicknessIndex +
                                            "_" +
                                            index
                                          }
                                        >
                                          {item.name}
                                        </label>
                                        <input
                                          type="text"
                                          placeholder="price"
                                          className="form-control custom-text"
                                          id={
                                            thicknes.name +
                                            "_" +
                                            index +
                                            "_" +
                                            thicknessIndex
                                          }
                                          data-index={index}
                                          name={
                                            thicknes.value + "_" + item.value
                                          }
                                          disabled={
                                            !(item.checked && thicknes.checked)
                                          }
                                          onBlur={
                                            (event =>
                                              this.handleInput(event, index)) &&
                                            this.handleFinishesPrice.bind(this)
                                          }
                                        />
                                        <span>/m²</span>
                                      </div>
                                    </React.Fragment>
                                  );
                                })}
                              </div>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>

                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div className="container head-clr2">
                        <h3>Images</h3>
                        <br />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div style={{ display: "table-caption;" }}>
                            <input
                              type="file"
                              name="imagepreview_1"
                              onChange={this.handleImageUpload}
                              className="image-upload-custome"
                            />

                            <img
                              src={this.state.images_show.imagepreview_1}
                              className="image-preview-custome"
                            />
                          </div>

                          <div className="img-caption cust-img-cap">
                            <input
                              type="text"
                              className="form-control"
                              name="imgcaption_1"
                              placeholder="Image Caption"
                            ></input>
                          </div>
                          <div className="img-caption cust-img-cap">
                            <input
                              type="number"
                              placeholder="Sequence Number"
                              name="imgsequence_1"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col text-center">
                      <button type="submit" className="btn btn-primary">
                        Save Sku
                      </button>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </section>
        </form>
      </div>
    );
  }
}
export default editSku;
