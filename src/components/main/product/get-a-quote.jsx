import React, { Component, Fragment } from "react";
import { renderToString } from "react-dom/server";
import moment from "moment";
import { Helmet } from "react-helmet";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import auth from "../../../auth/auth";
// import Select from "react-select";
// import makeAnimated from "react-select/animated";
import "./get-a-quote.css";
import InnerOverlay from "../../common/overlay/inner-overlay";
import { isMobile } from "react-device-detect";

class GetAQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProduct: [],
      filter_thickness: [],
      selected_product: { value: 0, label: "select product" },
      selected_thickness: { value: 0, label: "select thickness" },
      selected_finish: { value: 0, label: "select finish" },
      all_products: [],
      all_products_search: [],
      worktop_width: "",
      worktop_lenght: "",
      splashback_width: "",
      splashback_lenght: "",
      fabrication_quantity: "",
      extra_services_quantity: "",
      design_width: "",
      design_lenght: "",
      communication: "",
      filter_finishes: [],
      change: false,
      open: false,
      customers: [],
      design_pieces: "",
      design_cutouts: "",
      isRedirect: false,
      inNull: false,
      isEmpty: false,
      surveyCheck: "",
      survey: {
        item: null,
        item_name: "",
      },
      edge: {
        item: null,
        item_name: "",
      },
      shapedCheck: "",
      Cutouts_quantity: "",
      total_worktop_area: 0,
      total_splashback_area: 0,
      total_area: 0,
      total_glass_area: 0,
      extra_services2_quantity: "",
      products: [],
      stoneProduct: false,
      glassProduct: false,
      checked: false,
      worktop_options: [],
      splashback_dimensions: [],
      Edge_Details: [],
      fabrications: [],
      Designoptions: [],
      survey_fit_options: [],
      cutouts: [],
      Extra_Services: [],
      Extra_ServicesStone: [],
      selectedServiceStoneIndex: 0,
      addfabrications: [
        {
          item: 0,
          item_name: "",
          quantity: 0,
          price: 0,
          unit_price: 0,
        },
      ],
      addWorktopDimensions: [
        {
          item: 0,
          item_name: "",
          worktop_width: 0,
          worktop_lenght: 0,
          area: 0,
        },
      ],

      addSplashbackDimensions: [
        {
          item: 0,
          item_name: "",
          splashback_width: 0,
          splashback_lenght: 0,
          area: 0,
        },
      ],
      addFabrication: [
        {
          item: "",
          fabrication_quantity: "",
        },
      ],
      addCutouts: [
        {
          item: 0,
          item_name: "",
          quantity: 0,
          price: 0,
        },
      ],
      sparkleCheck: 0,

      AddExtraServices: [
        {
          item: 0,
          item_name: "",
          unit_price: 0,
          quantity: 0,
          price: 0,
        },
      ],
      AddExtraservicesGlass: [
        { item: 0, item_name: "", unit_price: 0, quantity: 0, price: 0 },
      ],
      userInfo: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        city: "",
      },

      AddDesignPanel: [
        {
          design: 0,
          design_name: "",
          adddesignglass: [
            {
              design_width: 0,
              design_lenght: 0,
              design_pieces: 0,
              area: 0,
              design_cutouts: 0,
              shaped: 0,
            },
          ],
        },
      ],
    };
    this.addWorktopDimension = this.addWorktopDimension.bind(this);
    this.addSplashbackDimension = this.addSplashbackDimension.bind(this);
    this.addFabricationOption = this.addFabricationOption.bind(this);
    this.addExtraServices = this.addExtraServices.bind(this);
    this.addCutouts = this.addCutouts.bind(this);
    this.addExtraServicesGlass = this.addExtraServicesGlass.bind(this);
    this.addDesignGlass = this.addDesignGlass.bind(this);
    this.addMainGlassPanel = this.addMainGlassPanel.bind(this);
    this.addDesignPanel = this.addDesignPanel.bind(this);
    this.handleServicePrice = this.handleServicePrice.bind(this);
    this.handleServicePriceStone = this.handleServicePriceStone.bind(this);
    this.calculatee = this.calculatee.bind(this);
    this.worktop_options = this.worktop_options.bind(this);
    this.calculateSplashBackArea = this.calculateSplashBackArea.bind(this);
    this.CalculateGlassArea = this.CalculateGlassArea.bind(this);
    this.calculateStoneService = this.calculateStoneService.bind(this);
    this.calculateGlassService = this.calculateGlassService.bind(this);
    this.printRadioVal = this.printRadioVal.bind(this);
    this.PrintCheckOfGlass = this.PrintCheckOfGlass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDesignChange = this.handleDesignChange.bind(this);
    this.splash_options = this.splash_options.bind(this);
    this.handleFabrication = this.handleFabrication.bind(this);
    this.handleCutouts = this.handleCutouts.bind(this);
    this.calculateCutoutsService = this.calculateCutoutsService.bind(this);
    this.handleCutoutPriceStone = this.handleCutoutPriceStone.bind(this);
    this.sparkleGet = this.sparkleGet.bind(this);
    this.handleSurvey = this.handleSurvey.bind(this);
    this.handleUserForm = this.handleUserForm.bind(this);
    this.handleFabricationPrice = this.handleFabricationPrice.bind(this);
    this.handleEdge = this.handleEdge.bind(this);
    this.removeSkuFromLocal = this.removeSkuFromLocal.bind(this);
    this.termsandconditions = this.termsandconditions.bind(this);
  }

  getThickness = (e) => {
    let getProduct = this.state.all_products.filter((el) => {
      return el.id === e.value;
    });
    let thickness = [];
    if (getProduct[0].finishes) {
      getProduct[0].finishes.map((el) => {
        let checkOldThickness = thickness.findIndex((elOld) => {
          return elOld.value === el.thickness_id;
        });
        if (checkOldThickness === -1) {
          thickness.push({ value: el.thickness_id, label: el.thickness });
        }
      });
    }

    this.setState({
      ...this.state,
      newProduct: getProduct,
      filter_thickness: thickness,
      selected_product: e,
      selected_thickness: { value: 0, label: "select thickness" },
      selected_finish: { value: 0, label: "select thickness first" },
    });
  };

  getFinishes = (e) => {
    this.setState({
      ...this.state,
      filter_finishes: [],
    });
    let getFinishes = this.state.newProduct[0].finishes.filter((el) => {
      return el.thickness_id == e.value;
    });
    let getFinishesObj = [];

    getFinishes.map((el) => {
      let checkOldFinishes = getFinishesObj.findIndex((elOld) => {
        return elOld.value === el.finish_id;
      });
      if (checkOldFinishes === -1) {
        getFinishesObj.push({ value: el.finish_id, label: el.finish });
      }
    });
    this.setState({
      ...this.state,
      filter_finishes: getFinishesObj,
      selected_thickness: e,
      selected_finish: { value: 0, label: "select finish" },
    });
  };

  saveFinish = (e) => {
    this.setState({
      ...this.state,
      selected_finish: e,
    });
  };

  saveNewProduct = (e) => {
    let product = [
      {
        product_id: this.state.selected_product.value,
        thickness_id: this.state.selected_thickness.value,
        finish_id: this.state.selected_finish.value,
      },
    ];

    if (
      product[0].product_id === 0 ||
      product[0].product_id === 0 ||
      product[0].finish_id === 0
    ) {
      toast.error("Please Select All New Product Options");
    } else {
      let products;
      if (localStorage.getItem("sku")) {
        products = localStorage.getItem("sku");
      } else {
        localStorage.setItem("sku", JSON.stringify([]));
        products = localStorage.getItem("sku");
      }
      if (!(this.state.thickness_id != "" && this.state.finish_id != "")) {
        toast.error(`Please select atlest 1 finish`);
        return false;
      }

      if (products) {
        products = JSON.parse(products);

        if (products.length === 5) {
          toast.error(
            `You have reached maximum limit of products. You can't add new for quotation.`
          );
          return false;
        }

        let index = products.findIndex(function (item) {
          return (
            item.thickness_id == product[0].thickness_id &&
            item.product_id == product[0].product_id &&
            item.finish_id == product[0].finish_id
          );
        });
        if (index === -1) {
          toast.success(
            <p style={{ marginLeft: "-10%" }}>
              Product shortlisted for{" "}
              <Link
                to="/get-a-quote"
                style={{ color: "black", fontWeight: "bold" }}
              >
                FREE Quote
              </Link>{" "}
              <br />
              click here to{" "}
              <Link
                to="/get-a-quote"
                style={{ color: "black", fontWeight: "bold" }}
              >
                proceed
              </Link>{" "}
            </p>,
            {
              autoClose: 6000,
            }
          );
          products.push(product[0]);
          localStorage.setItem("sku", JSON.stringify(products));
          this.componentDidMount();
          // let new_product = {
          //   products: JSON.stringify(product)
          // };

          //   axios
          //     .post(`${import.meta.env.VITE_API_URL}/quote-products`, new_product)
          //     .then((res) => {
          //       let newProducts = this.state.products;
          //       let stoneProduct = false;
          //       let glassProduct = false;
          //       newProducts.push(res.data[0]);
          //       newProducts.map((product) => {
          //         if (product.material === "Stone") {
          //           stoneProduct = true;
          //         }
          //         if (product.material === "Glass") {
          //           glassProduct = true;
          //         }
          //       });
          //       this.setState({
          //         ...this.state,
          //         products: newProducts,
          //         stoneProduct: stoneProduct,
          //         glassProduct: glassProduct,
          //         filter_thickness:[],
          //   filter_finishes:[],
          //   selected_product: { value: 0, label: "select product" },
          //   selected_thickness: { value: 0, label: "select thickness" },
          //   selected_finish: { value: 0, label: "select finish" }
          //       });
          //     })
          //     .catch((error) => {
          //       console.log(error);
          //     });

          return;
        } else {
          toast.error(`Item already shortlisted`);
          return;
        }
      }
    }
  };

  handleUserForm = (e, property) => {
    let user = this.state.userInfo;
    user[property] = e.target.value.toLowerCase();
    this.setState({
      ...this.state,
      userInfo: user,
    });
  };

  removeSkuFromLocal = (index) => {
    let products = this.state.products;
    let Sku = localStorage.getItem("sku");
    Sku = JSON.parse(Sku);
    //before change on 2/18/2020 its search on products and remove like this
    /*
     let checkFinish = products.findIndex(function (finish) {
      return (
        parseInt(Sku[index].finish_id) == finish.finish_id &&
        parseInt(Sku[index].thickness_id) == finish.thickness_id && 
        parseInt(Sku[index].product_id) == finish. sku_id
      );
    })   
Sku.splice(index, 1);
products.splice(checkFinish, 1);

    */
    let checkFinish = Sku.findIndex(function (finish) {
      return (
        parseInt(products[index].finish_id) == finish.finish_id &&
        parseInt(products[index].thickness_id) == finish.thickness_id &&
        parseInt(products[index].sku_id) == finish.product_id
      );
    });
    if (checkFinish > -1) {
      Sku.splice(checkFinish, 1);
      products.splice(index, 1);

      localStorage.setItem("sku", JSON.stringify(Sku));

      let stoneProduct = false;
      let glassProduct = false;
      products.map((product) => {
        if (product.material === "Stone") {
          stoneProduct = true;
        }
        if (product.material === "Glass") {
          glassProduct = true;
        }
      });

      this.setState({
        ...this.state,
        products: products,
        stoneProduct: stoneProduct,
        glassProduct: glassProduct,
      });
      toast.success(`Item Removed from Shortlist`);

      if (Sku.length === 0) {
        this.setState({
          isEmpty: true,
        });
      }
    }
  };

  termsandconditions = (e) => {
    if (e.target.checked == true) {
      this.setState({
        ...this.state,
        checked: true,
      });
    } else {
      this.setState({
        ...this.state,
        checked: false,
      });
    }
  };

  handleInputChange = (input) => {
    this.setState({ open: !!input });
  };

  selectOptionOnChange = (e) => {
    console.log(e);
    if (e) {
      this.setState({
        userInfo: {
          firstname: e.firstname,
          lastname: e.lastname,
          email: e.email,
          phone: e.phone,
          address: e.address,
          postcode: e.postcode,
          city: e.city,
        },
      });
    } else {
      this.setState({
        userInfo: {
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          address: "",
          postcode: "",
          city: "",
        },
      });
    }
  };

  checkRequiredFields(field, error) {
    if (!field || field === 0) {
      toast.error(`${error}`);
      return false;
    }
    return true;
  }

  checkProductsFielts() {
    if (this.state.stoneProduct) {
      if (
        !this.state.addSplashbackDimensions[0].item &&
        !this.state.addWorktopDimensions[0].item
      ) {
        toast.error(`Please Select Worktop or Splashback`);
        return false;
      }
      if (this.state.addWorktopDimensions[0].item) {
        if (
          !this.checkRequiredFields(
            this.state.addWorktopDimensions[0].worktop_width,
            "Please Enter Worktop Width"
          ) ||
          !this.checkRequiredFields(
            this.state.addWorktopDimensions[0].worktop_lenght,
            "Please Enter Worktop Lenght"
          )
        ) {
          return false;
        }
      }
      if (this.state.addSplashbackDimensions[0].item) {
        if (
          !this.checkRequiredFields(
            this.state.addSplashbackDimensions[0].splashback_width,
            "Please Enter Splashback Width"
          ) ||
          !this.checkRequiredFields(
            this.state.addSplashbackDimensions[0].splashback_lenght,
            "Please Enter Splashback Lenght"
          )
        ) {
          return false;
        }
      }
    }

    if (this.state.glassProduct) {
      if (
        !this.checkRequiredFields(
          this.state.AddDesignPanel[0].design,
          "Please Select Glass Design"
        ) ||
        !this.checkRequiredFields(
          this.state.AddDesignPanel[0].adddesignglass[0].design_width,
          "Please Enter Design Panel width"
        ) ||
        !this.checkRequiredFields(
          this.state.AddDesignPanel[0].adddesignglass[0].design_lenght,
          "Please Enter Design Panel Lenght"
        ) ||
        !this.checkRequiredFields(
          this.state.AddDesignPanel[0].adddesignglass[0].design_pieces,
          "Please Enter Design Panel Pieces"
        )
      ) {
        return false;
      }
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    let date = new Date();
    date = moment(date).format("DD-MM-YYYY");
    let splashBackArea = (
      this.state.total_worktop_area + this.state.total_splashback_area
    ).toFixed(3);
    let data = {
      designPanel: this.state.AddDesignPanel,
      splashbackDimensions: this.state.addSplashbackDimensions,
      worktopDimensions: this.state.addWorktopDimensions,
      fabrications: this.state.addfabrications,
      cutouts: this.state.addCutouts,
      extraservices1: this.state.AddExtraServices,
      extraservice2: this.state.AddExtraservicesGlass,
      glass_area: this.state.total_glass_area.toFixed(3),
      stone_area: splashBackArea,
      sku: this.state.products,
      sparkle: this.state.sparkleCheck,
      survey: this.state.survey,
      edge: this.state.edge,
      user: this.state.userInfo,
      apiUrl: import.meta.env.VITE_API_URL,
      stoneProduct: this.state.stoneProduct,
      glassProduct: this.state.glassProduct,
      date: date,
      creator: auth.isAuthenticatedAdmin()
        ? "Admin(gnf)"
        : this.state.userInfo.firstname + " " + this.state.userInfo.lastname,
    };

    if (
      this.checkProductsFielts() &&
      this.checkRequiredFields(
        this.state.userInfo.firstname,
        "Please Enter First Name"
      ) &&
      this.checkRequiredFields(
        this.state.userInfo.email,
        "Please Enter Email Address"
      ) &&
      this.checkRequiredFields(
        this.state.userInfo.phone,
        "Please Enter Phone Number"
      )
    ) {
      // console.log("my data" , data)
      // return "okey";
      console.log("should not console");
      axios
        .post(`${import.meta.env.VITE_API_URL}/quote`, data)
        .then((res) => {
          this.setState({
            isRedirect: true,
          });
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      let Sku = [];
      localStorage.setItem("sku", JSON.stringify(Sku));
    }

    // axios
    //   .post(`${import.meta.env.VITE_API_URL}/get-pdf`, data)
    //   .then(() =>
    //     setTimeout(() => {
    //       axios.get(`${import.meta.env.VITE_API_URL}/get-pdf`, { responseType: "blob" })
    //         .then(res => {
    //           const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    //           saveAs(pdfBlob, "get-a-quote.pdf");
    //         });
    //     }, 5000))
  }

  sparkleGet = (e) => {
    let value = parseInt(e.currentTarget.value);
    this.setState({
      ...this.state,
      sparkleCheck: value,
    });
  };

  printRadioVal = (e) => {
    console.log(e.target.value);
    this.setState({
      surveyCheck: e.target.value,
    });
  };

  PrintCheckOfGlass = (e) => {
    this.setState({
      shapedCheck: e.target.value,
    });
  };

  calculatee = (e, property, index) => {
    let oldArray = this.state.addWorktopDimensions;

    oldArray[index][property] = e.target.value;
    oldArray[index]["area"] = (
      (oldArray[index]["worktop_width"] * oldArray[index]["worktop_lenght"]) /
      1000000
    ).toFixed(3);
    // oldArray.forEach(element => {
    //   totalArea = this.state.total_area + element["area"]
    // });

    this.setState({
      ...this.state,
      addWorktopDimensions: oldArray,
    });
    let totalArea = 0;
    let items = this.state.addWorktopDimensions;
    for (var k in items) {
      totalArea += parseFloat(items[k].area);
    }
    this.setState({
      ...this.state,
      total_worktop_area: totalArea,
    });
  };

  handleSurvey = (e) => {
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    let oldArray = this.state.survey;
    oldArray["item"] = parseInt(value);
    oldArray["item_name"] = label;
    this.setState({
      ...this.state,
      survey: oldArray,
    });
  };

  handleEdge = (e) => {
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    let oldArray = this.state.edge;
    oldArray["item"] = parseInt(value);
    oldArray["item_name"] = label;
    this.setState({
      ...this.state,
      edge: oldArray,
    });
  };

  handleFabrication = (e, property, index) => {
    let oldArray = this.state.addfabrications;
    let price;
    oldArray[index][property] = parseInt(e.target.value);
    oldArray[index]["price"] = e.target.value * oldArray[index]["unit_price"];

    this.setState({
      ...this.state,
      addfabrications: oldArray,
    });
    console.log(oldArray);
  };

  handleFabricationPrice = (e, property, index) => {
    let oldArray = this.state.addfabrications;
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    let price = label.split("£");
    oldArray[index]["unit_price"] = price[1];
    oldArray[index]["item"] = parseInt(value);
    oldArray[index]["item_name"] = label;
    document.getElementById(`fabrication_quantity_${index}`).value = null;

    this.setState({
      ...this.state,
      addfabrications: oldArray,
    });

    console.log(oldArray);
  };

  handleCutouts = (e, property, index) => {
    let oldArray = this.state.addCutouts;
    let price;
    oldArray[index][property] = parseInt(e.target.value);
    oldArray[index]["price"] = e.target.value * oldArray[index]["unit_price"];

    this.setState({
      ...this.state,
      addCutouts: oldArray,
    });
  };

  handleCutoutsPrice = (e, property, index) => {
    let oldArray = this.state.addCutouts;
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    let price = label.split("£");
    oldArray[index]["unit_price"] = price[1];
    oldArray[index]["item"] = parseInt(value);
    oldArray[index]["item_name"] = label;
    document.getElementById(`checkout_quantity_${index}`).value = null;

    this.setState({
      ...this.state,
      addCutouts: oldArray,
    });
  };

  worktop_options = (e, index) => {
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    let oldArray = this.state.addWorktopDimensions;
    oldArray[index]["item"] = parseInt(value);
    oldArray[index]["item_name"] = label;
    this.setState({
      ...this.state,
      addWorktopDimensions: oldArray,
    });
  };

  splash_options = (e, index) => {
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    let oldArray = this.state.addSplashbackDimensions;
    oldArray[index]["item"] = parseInt(value);
    oldArray[index]["item_name"] = label;
    this.setState({
      ...this.state,
      addSplashbackDimensions: oldArray,
    });
  };

  calculateStoneService = (e, property, index) => {
    let oldArray = this.state.AddExtraServices;
    if (property === "quantity") {
      oldArray[index][property] = parseInt(e.target.value);
      oldArray[index]["price"] = parseInt(
        oldArray[index]["quantity"] * oldArray[index]["unit_price"]
      );
    } else if (property === "item") {
      let index1 = e.nativeEvent.target.selectedIndex;
      let label = e.nativeEvent.target[index1].text;
      let value = e.target.value;
      oldArray[index]["item"] = parseInt(value);
      oldArray[index]["item_name"] = label;
    }

    this.setState({
      ...this.state,
      AddExtraServices: oldArray,
    });

    console.log(oldArray);
  };

  calculateCutoutsService = (e, property, index) => {
    let oldArray = this.state.AddExtraservicesGlass;
    console.log(oldArray);
    if (property === "quantity") {
      oldArray[index][property] = parseInt(e.target.value);
      oldArray[index]["price"] = parseInt(
        oldArray[index]["quantity"] * oldArray[index]["unit_price"]
      );
    } else if (property === "item") {
      let index1 = e.nativeEvent.target.selectedIndex;
      let label = e.nativeEvent.target[index1].text;
      let value = e.target.value;
      oldArray[index]["item"] = parseInt(value);
      oldArray[index]["item_name"] = label;
    }

    this.setState({
      ...this.state,
      AddExtraservicesGlass: oldArray,
      change: true,
    });

    console.log(oldArray);
  };

  calculateGlassService = (e, property, index) => {
    let oldArray = this.state.AddExtraservicesGlass;
    let Price = 0;
    oldArray[index][property] = e.target.value;
    oldArray[index]["Price"] = (
      (oldArray[index]["extra_services2_quantity"] *
        oldArray[index]["selected_service"]) /
      1000000
    ).toFixed(3);

    this.setState({
      ...this.state,
      AddExtraservicesGlass: oldArray,
    });
  };

  calculateSplashBackArea = (e, proptery, indexofSplash) => {
    let oldArray = this.state.addSplashbackDimensions;

    oldArray[indexofSplash][proptery] = e.target.value;

    oldArray[indexofSplash]["area"] = (
      (oldArray[indexofSplash]["splashback_width"] *
        oldArray[indexofSplash]["splashback_lenght"]) /
      1000000
    ).toFixed(3);

    let totalArea = 0; // declare before use
    oldArray.forEach((element) => {
      totalArea += parseFloat(element["area"]);
    });
    this.setState({ 
      ...this.state,
      addSplashbackDimensions: oldArray,
    });
    let items = this.state.addSplashbackDimensions;
    for (var k in items) {
      totalArea += parseFloat(items[k].area);
    }
    this.setState({
      total_splashback_area: totalArea,
    });
  };
  CalculateGlassArea = (e, property, designPanelIndex, designIndex) => {
    let oldArray = this.state.AddDesignPanel;
    let TotalGlassArea = 0;
    oldArray[designPanelIndex]["adddesignglass"][designIndex][property] =
      e.target.value;
    oldArray[designPanelIndex]["adddesignglass"][designIndex]["area"] = (
      (oldArray[designPanelIndex]["adddesignglass"][designIndex][
        "design_width"
      ] *
        oldArray[designPanelIndex]["adddesignglass"][designIndex][
        "design_lenght"
        ] *
        oldArray[designPanelIndex]["adddesignglass"][designIndex][
        "design_pieces"
        ]) /
      1000000
    ).toFixed(3);
    if (property == "shaped" && e.target.checked == true) {
      oldArray[designPanelIndex]["adddesignglass"][designIndex][property] = 1;
    } else if (property == "shaped" && e.target.checked == false) {
      oldArray[designPanelIndex]["adddesignglass"][designIndex][property] = 0;
    }

    console.log(oldArray);

    this.setState({
      ...this.state,
      AddDesignPanel: oldArray,
    });
    let toatlArea = 0;
    let items = this.state.AddDesignPanel;
    for (var i in items) {
      for (var j in items[i].adddesignglass) {
        toatlArea += parseFloat(items[i].adddesignglass[j].area);
      }
    }
    // console.log(toatlArea)
    this.setState({
      ...this.state,
      total_glass_area: toatlArea,
    });
  };

  handleDesignChange = (e, designIndex) => {
    let index = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index].text;
    let value = e.target.value;
    let oldArray = this.state.AddDesignPanel;
    oldArray[designIndex]["design"] = parseInt(value);
    oldArray[designIndex]["design_name"] = label;
    this.setState({
      ...this.state,
      AddDesignPanel: oldArray,
    });
  };

  handleCutoutPriceStone = (e, index) => {
    let toBeAdded = e.target.value;
    let array = this.state.Extra_ServicesStone;
    let abc;
    array.filter(function (array) {
      if (toBeAdded == array.value) abc = array.price;
    });
    let variable = this.state.AddExtraservicesGlass;
    variable[index]["unit_price"] = abc;

    let oldarray = this.state.AddExtraservicesGlass;
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    oldarray[index]["item"] = parseInt(value);
    oldarray[index]["item_name"] = label;

    this.setState({
      ...this.state,
      AddExtraservicesGlass: oldarray,
      change: true,
    });
  };

  handleServicePriceStone = (e, index) => {
    let toBeAdded = e.target.value;
    let array = this.state.Extra_ServicesStone;
    let abc;
    array.filter(function (array) {
      if (toBeAdded == array.value) abc = array.price;
    });
    let variable = this.state.AddExtraServices;
    variable[index]["unit_price"] = abc;

    let oldarray = this.state.AddExtraServices;
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    oldarray[index]["item"] = parseInt(value);
    oldarray[index]["item_name"] = label;

    this.setState({
      ...this.state,
      AddExtraServices: oldarray,
      change: true,
    });
  };

  handleServicePrice = (e, index) => {
    let toBeAdded = e.target.value;
    let array = this.state.Extra_Services;
    let xyz;
    array.filter(function (array) {
      if (toBeAdded == array.value) xyz = array.price;
    });
    let variable = this.state.AddExtraservicesGlass;
    variable[index]["selectedService"] = xyz;
    this.setState({
      ...this.state,
      AddExtraservicesGlass: variable,
    });
  };
  handleChanges(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  removeRow = () => {
    console.log("deleteRow");
    $(document).on("click", ".delete-row", function () {
      //  alert("deleting row#"+row);

      $(this)
        .closest("tr")
        .remove();

      return false;
    });
  };
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  }

  async componentDidMount() {
    if (
      localStorage.getItem("sku") !== null &&
      JSON.parse(localStorage.getItem("sku")).length === 0
    ) {
      this.props.history.push("/empty-short-list");
    }

    if (auth.isAuthenticatedAdmin()) {
      const resp = await axios({
        url: `${import.meta.env.VITE_API_URL}/sku`,
        method: "get",
        data: null,
      });
      this.setState({
        all_products: resp.data,
      });

      if (this.state.all_products) {
        let all_products_search = this.state.all_products.map((product) => {
          return {
            value: product.id,
            label: `${product.material} - ${product.material_type} - ${product.name}`,
          };
        });
        this.setState({
          ...this.state,
          all_products_search: all_products_search,
          filter_thickness: [],
          filter_finishes: [],
          selected_product: { value: 0, label: "select product" },
          selected_thickness: { value: 0, label: "select thickness" },
          selected_finish: { value: 0, label: "select finish" },
        });
      }

      axios.get(`${import.meta.env.VITE_API_URL}/customers`).then((res) => {
        const temp = [];
        res.data.forEach((e) => {
          temp.push({
            firstname: e.firstname,
            lastname: e.lastname,
            email: e.email,
            phone: e.phone,
            address: e.address,
            postcode: e.postcode,
            city: e.city,
            value: e.email,
            label: e.email,
          });
          if (res.data.length === temp.length) {
            this.setState({
              customers: temp,
            });
          }
        });
      });
    }

    let getProducts = localStorage.getItem("sku");
    let checkSku = JSON.parse(getProducts);
    if (checkSku && checkSku.length === 0) {
      this.setState({
        inNull: true,
      });
    } else {
      let products = {
        products: getProducts,
      };
      if (getProducts) {
        console.log(products);

        axios
          .post(`${import.meta.env.VITE_API_URL}/quote-products`, products)
          .then((res) => {
            console.log(res.data);
            let stoneProduct = false;
            let glassProduct = false;
            res.data.map((product) => {
              if (product.material === "Stone") {
                stoneProduct = true;
              }
              if (product.material === "Glass") {
                glassProduct = true;
              }
            });
            this.setState({
              ...this.state,
              products: res.data,
              stoneProduct: stoneProduct,
              glassProduct: glassProduct,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      axios
        .get(`${import.meta.env.VITE_API_URL}/worktop-dimensions`)
        .then((worktopD) => {
          axios
            .get(`${import.meta.env.VITE_API_URL}/splashback-dimensions`)
            .then((splashB) => {
              let splashback_dimensions = splashB.data.map((splashB) => {
                console.log(splashB);
                return {
                  label: splashB.name,
                  value: splashB.id,
                };
              });
              let worktop = worktopD.data.map((worktop_dimensions) => {
                //mapping
                return {
                  label: worktop_dimensions.name,
                  value: worktop_dimensions.id,
                };
              });
              this.setState({
                // using spread operator, you will need transform-object-rest-spread from babel or
                // another transpiler to use this
                ...this.state, // spreading in state for future proofing
                isLoaded: true,
                worktop_options: worktop,
                splashback_dimensions: splashback_dimensions,
              });
            });
        });
      axios.get(`${import.meta.env.VITE_API_URL}/edge-details`).then((edge_details) => {
        axios
          .get(`${import.meta.env.VITE_API_URL}/fabrication_options`)
          .then((fabrication) => {
            let fabricationss = fabrication.data.map((fab) => {
              return {
                label: `${fab.name} - £${fab.price}`,
                value: fab.id,
              };
            });
            let edge_d = edge_details.data.map((edge_d) => {
              return {
                label: edge_d.name,
                value: edge_d.id,
              };
            });
            this.setState({
              // using spread operator, you will need transform-object-rest-spread from babel or
              // another transpiler to use this
              ...this.state, // spreading in state for future proofing
              isLoaded: true,
              Edge_Details: edge_d,
              fabrications: fabricationss,
            });
          });
      });
      axios
        .get(`${import.meta.env.VITE_API_URL}/design_options`)
        .then((design_options) => {
          let designOp = design_options.data.map((designOp) => {
            return {
              label: designOp.name,
              value: designOp.id,
            };
          });
          this.setState({
            // using spread operator, you will need transform-object-rest-spread from babel or
            // another transpiler to use this
            ...this.state, // spreading in state for future proofing
            isLoaded: true,
            Designoptions: designOp,
          });
        });
      axios
        .get(`${import.meta.env.VITE_API_URL}/survey_fit_options`)
        .then((survey_fit_options) => {
          let survey_fit = survey_fit_options.data.map((survey_fits) => {
            return {
              label: `${survey_fits.name} - £${survey_fits.price}`,
              value: survey_fits.id,
            };
          });
          this.setState({
            // using spread operator, you will need transform-object-rest-spread from babel or
            // another transpiler to use this
            ...this.state, // spreading in state for future proofing
            isLoaded: true,
            survey_fit_options: survey_fit,
          });
        });
      axios.get(`${import.meta.env.VITE_API_URL}/cutouts`).then((cutouts) => {
        let _cutout = cutouts.data.map((cutout) => {
          return {
            label: `${cutout.name} - £${cutout.price}`,
            value: cutout.id,
          };
        });
        this.setState({
          // using spread operator, you will need transform-object-rest-spread from babel or
          // another transpiler to use this
          ...this.state, // spreading in state for future proofing
          isLoaded: true,
          cutouts: _cutout,
        });
      });

      axios
        .get(`${import.meta.env.VITE_API_URL}/extra_services`)
        .then((extra_services) => {
          let _extra_services = extra_services.data.map((extra_service) => {
            return {
              label: extra_service.name,
              value: extra_service.id,
              price: extra_service.price,
              material: extra_service.materials.name,
            };
          });
          this.setState({
            // using spread operator, you will need transform-object-rest-spread from babel or
            // another transpiler to use this
            ...this.state, // spreading in state for future proofing
            isLoaded: true,
            Extra_Services: _extra_services,
          });
          console.log(_extra_services);
        });
      axios
        .get(`${import.meta.env.VITE_API_URL}/extra_services`)
        .then((extra_services) => {
          let extraServices_stone = extra_services.data.map(
            (ExtraService_Stone) => {
              return {
                label: ExtraService_Stone.name,
                value: ExtraService_Stone.id,
                price: ExtraService_Stone.price,
                material: ExtraService_Stone.materials.name,
              };
            }
          );
          this.setState({
            // using spread operator, you will need transform-object-rest-spread from babel or
            // another transpiler to use this
            ...this.state, // spreading in state for future proofing
            isLoaded: true,
            Extra_ServicesStone: extraServices_stone,
          });
        });
    }
  }

  addDesignPanel() {
    let OldDesignPanel = this.state.AddDesignPanel;
    let newDesignPanel = {
      design: 0,
      design_name: "",
      adddesignglass: [
        {
          design_width: 0,
          design_lenght: 0,
          design_pieces: 0,
          area: 0,
          design_cutouts: 0,
          shaped: 0,
        },
      ],
    };
    OldDesignPanel.push(newDesignPanel);
    this.setState({
      ...this.state,
      AddDesignPanel: OldDesignPanel,
    });
  }
  RemoveDesignPanel = (event) => {
    let panelIndex = event.target.getAttribute("data-design-panel-index");
    let removeFromDesignpanel = this.state.AddDesignPanel;
    removeFromDesignpanel.splice(panelIndex, 1);
    this.setState({
      ...this.state,
      AddDesignPanel: removeFromDesignpanel,
    });
  };
  addWorktopDimension() {
    let oldWorktopDimension = this.state.addWorktopDimensions;
    let newWorktopDimension = {
      item: 0,
      item_name: "",
      worktop_width: "",
      worktop_lenght: "",
      area: "",
    };
    oldWorktopDimension.push(newWorktopDimension);
    this.setState({
      ...this.state,
      addWorktopDimensions: oldWorktopDimension,
    });
  }
  addMainGlassPanel() {
    let oldGlassPanel = this.state.AddGlassMainPanel;
    let newGlassPanel = {
      item: "",
      design_width: "",
      design_lenght: "",
      design_pieces: "",
      design_cutouts: "",
    };
    oldGlassPanel.push(newGlassPanel);
    this.setState({
      ...this.state,
      AddGlassMainPanel: oldGlassPanel,
    });
  }
  addSplashbackDimension() {
    let oldSplashbackDimension = this.state.addSplashbackDimensions;
    let newSplashbackDimension = {
      item: "",
      splashback_width: "",
      splashback_lenght: "",
      area: "",
    };
    oldSplashbackDimension.push(newSplashbackDimension);
    this.setState({
      ...this.state,
      addSplashbackDimensions: oldSplashbackDimension,
    });
  }
  addFabricationOption() {
    let oldFabricationOption = this.state.addfabrications;
    let newFabricationOption = {
      item: 0,
      item_name: "",
      quantity: 1,
      price: 0,
      unit_price: 0,
    };
    oldFabricationOption.push(newFabricationOption);
    this.setState({
      ...this.state,
      addFabrication: oldFabricationOption,
    });
  }
  addCutouts() {
    let oldCutouts = this.state.addCutouts;
    let newCutuouts = {
      item: 0,
      item_name: "",
      quantity: 0,
      price: 0,
    };
    oldCutouts.push(newCutuouts);
    this.setState({
      ...this.setState,
      addCutouts: oldCutouts,
    });
  }
  addExtraServices() {
    let oldExtraServices = this.state.AddExtraServices;
    let newExtraServices = {
      item: 0,
      item_name: "",
      unit_price: 0,
      quantity: 0,
      price: 0,
    };
    oldExtraServices.push(newExtraServices);
    this.setState({
      ...this.state,
      AddExtraServices: oldExtraServices,
    });
  }
  addExtraServicesGlass() {
    let oldExtraServiceGlass = this.state.AddExtraservicesGlass;
    let newExtraServiceGlass = {
      item: 0,
      item_name: "",
      unit_price: 0,
      quantity: 0,
      price: 0,
    };
    oldExtraServiceGlass.push(newExtraServiceGlass);
    this.setState({
      ...this.state,
      addExtraServicesGlass: oldExtraServiceGlass,
    });
  }
  addDesignGlass(event) {
    let panelIndex = event.target.getAttribute("data-design-panel-index");
    let newDesignGlass = {
      design_width: 0,
      design_lenght: 0,
      design_pieces: 0,
      area: 0,
      design_cutouts: 0,
      shaped: 0,
    };
    let designPanels = this.state.AddDesignPanel;
    let requiredPanel = designPanels[panelIndex];
    requiredPanel.adddesignglass.push(newDesignGlass);
    designPanels.splice(panelIndex, 1, requiredPanel);

    this.setState({
      ...this.state,
      AddDesignPanel: designPanels,
    });
  }
  removeDesignPanel = (event) => {
    let panelIndex = event.target.getAttribute("data-design-panel-index");
    let index = event.target.getAttribute("data-index");

    let designPanels = this.state.AddDesignPanel;
    let requiredPanel = designPanels[panelIndex];
    requiredPanel.adddesignglass.splice(index, 1);
    designPanels.splice(panelIndex, 1, requiredPanel);
    this.setState({
      AddDesignPanel: designPanels,
    });
  };

  removeDesignGlass = (event) => {
    let panelIndex = event.target.getAttribute("data-design-panel-index");
    let index = event.target.getAttribute("data-index");

    let designPanels = this.state.AddDesignPanel;
    let requiredPanel = designPanels[panelIndex];
    requiredPanel.adddesignglass.splice(index, 1);
    designPanels.splice(panelIndex, 1, requiredPanel);
    this.setState({
      AddDesignPanel: designPanels,
    });
  };
  removeWorktopDimension = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromWorktopDimension = this.state.addWorktopDimensions;
    removeFromWorktopDimension.splice(index, 1);
    this.setState({
      ...this.state,
      addWorktopDimensions: removeFromWorktopDimension,
    });
  };
  removeExtraServices = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromExtraServices = this.state.AddExtraServices;
    removeFromExtraServices.splice(index, 1);
    this.setState({
      ...this.state,
      AddExtraServices: removeFromExtraServices,
    });
  };
  removeExtraServicesGlass = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromExtraServices = this.state.AddExtraservicesGlass;
    removeFromExtraServices.splice(index, 1);
    this.setState({
      ...this.state,
      AddExtraservicesGlass: removeFromExtraServices,
    });
  };
  removeSplashbackDimension = (e) => {
    let indexofSplash = e.target.getAttribute("data-index");
    let removeFromSplashDimension = this.state.addSplashbackDimensions;
    removeFromSplashDimension.splice(indexofSplash, 1);
    this.setState({
      ...this.state,
      addSplashbackDimensions: removeFromSplashDimension,
    });
  };
  removeFabricationOption = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromFabrication = this.state.addFabrication;
    removeFromFabrication.splice(index, 1);
    this.setState({
      ...this.state,
      addFabrication: removeFromFabrication,
    });
  };
  removeCutout = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromCutouts = this.state.addCutouts;
    removeFromCutouts.splice(index, 1);
    this.setState({
      ...this.state,
      addCutouts: removeFromCutouts,
    });
  };

  render() {
    if (isMobile) {
      return (
        <Navigate to="/get-a-quote-mobile" replace={false} />
      );
    }
    if (this.state.isRedirect && auth.isAuthenticatedAdmin()) {
      return (
        <Navigate to="/admin/quote-list" replace={false} />
      );
    }
    if (this.state.isRedirect && !auth.isAuthenticatedAdmin()) {
      return (
        <Navigate to="/thanks-for-quote" replace={false} />
      );
    }
    if (
      (!localStorage.getItem("sku") || this.state.inNull) &&
      !auth.isAuthenticatedAdmin()
    ) {
      return (
        <Navigate to="/empty-short-list" replace={false} />
      );
    }
    if (
      (!localStorage.getItem("sku") || this.state.isEmpty) &&
      !auth.isAuthenticatedAdmin()
    ) {
      return (
        <Navigate to="/empty-short-list" replace={false} />
      );
    }

    const worktop = this.state.worktop_options;
    const splashback = this.state.splashback_dimensions;
    const edge_detailss = this.state.Edge_Details;
    const fabrication = this.state.fabrications;
    const design_options = this.state.Designoptions;
    const survey_fit_Op = this.state.survey_fit_options;
    const cutouts_ = this.state.cutouts;
    const ExtraServices = this.state.Extra_Services;
    let addWorktopDimensions = this.state.addWorktopDimensions;
    let addFabrication = this.state.addFabrication;
    let addSplashbackDimensions = this.state.addSplashbackDimensions;
    let addExtraServices = this.state.AddExtraServices;
    let addExtraServicesGlass = this.state.AddExtraservicesGlass;
    let AddCutout = this.state.addCutouts;
    let AddDesignGlass = this.state.AddDesignGlass;
    let AddDesignPanel = this.state.AddDesignPanel;
    let selectedService = this.state.selectedService;
    let selectedServiceStone = this.state.selectedServiceStone;
    let Extra_ServicesStone = this.state.Extra_ServicesStone;
    let total_worktop_area = this.state.total_worktop_area;
    let total_splashback_area = this.state.total_splashback_area;
    let total_area = this.state.total_area;
    let total_glass_area = this.state.total_glass_area;

    let html6 = AddDesignPanel.map((designPanel, designPanelIndex) => {
      return (
        <React.Fragment key={designPanelIndex}>
          <div className="row">
            {designPanelIndex == 0 ? "" : <hr className="break2" />}

            <div className="col-md-8">
              {/* <Select options={design_options} /> */}
              <select
                name={`design_select-${designPanelIndex}`}
                className="custome-select-box-get-a-quote noborder changeColor"
                onChange={(e) => this.handleDesignChange(e, designPanelIndex)}
              >
                <option key="base" value="">
                  Select option
                </option>
                {design_options.map((element) => {
                  return (
                    <option key={element.value} value={element.value}>
                      {element.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-md-4">
              {designPanelIndex == 0 ? (
                ""
              ) : (
                <button
                  className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                  data-design-panel-index={designPanelIndex}
                  key="minus"
                  onClick={this.RemoveDesignPanel}
                  type="button"
                >
                  -
                </button>
              )}
              <button
                type="button"
                className="btn btn-outline-primary-2 btn-round btn-more noprint"
                onClick={this.addDesignPanel}
                style={{
                  paddingTop: "0.15rem",
                  paddingBottom: "0.15rem",
                  minWidth: "140px",
                  textTransform: "capitalize",
                }}
              >
                Add New Design
              </button>
            </div>
          </div>
          <br />
          {designPanel.adddesignglass.map((GlassDesign, designIndex) => {
            return (
              <React.Fragment>
                <div className="row">
                  <div className="col-md-1">
                    {designIndex == 0 ? (
                      <div
                        className="custom-span-get-quote panel-font"
                        style={{ marginTop: "27px" }}
                      >
                        Panel {designIndex + 1}
                      </div>
                    ) : (
                      <div className="custom-span-get-quote panel-font">
                        Panel {designIndex + 1}
                      </div>
                    )}
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      {designIndex == 0 ? (
                        <label className="custome_lable custome_lable_lenghtt">
                          Width(mm)
                        </label>
                      ) : (
                        ""
                      )}
                      <input
                        type="number"
                        placeholder=""
                        className="form-control custom-text_panel noborder"
                        // value={this.state.design_width}
                        name={`design_width-${designIndex}`}
                        onChange={(e) =>
                          this.CalculateGlassArea(
                            e,
                            "design_width",
                            designPanelIndex,
                            designIndex
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2 cust-marg-get-a-quote">
                    <div className="form-group">
                      {designIndex == 0 ? (
                        <label className="custome_lable custome_lable_lenghtt">
                          {" "}
                          Length(mm)
                        </label>
                      ) : (
                        ""
                      )}
                      <input
                        type="number"
                        placeholder=""
                        className="form-control custom-text_panel noborder"
                        // value={this.state.design_lenght}
                        name={`design_lenght-${designIndex}`}
                        onChange={(e) =>
                          this.CalculateGlassArea(
                            e,
                            "design_lenght",
                            designPanelIndex,
                            designIndex
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-2 cust-marg-get-a-quote">
                    <div className="form-group">
                      {designIndex == 0 ? (
                        <label className="custome_lable_pieces custome_lable_lenghtt">
                          Pieces
                        </label>
                      ) : (
                        ""
                      )}
                      <input
                        type="number"
                        placeholder=""
                        className="form-control custom-text_panel_Pieces noborder"
                        // value={this.state.design_pieces}
                        name={`design_pieces-${designIndex}`}
                        onChange={(e) =>
                          this.CalculateGlassArea(
                            e,
                            "design_pieces",
                            designPanelIndex,
                            designIndex
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-1 cust-marg-get-a-quote">
                    <div className="form-group">
                      {designIndex == 0 ? (
                        <label className="custome_lable_area">Area(m²)</label>
                      ) : (
                        ""
                      )}
                      <input
                        type="text"
                        className="form-control custom-text noborder disabled_text_field"
                        name={`design_area-${designIndex}`}
                        disabled
                        value={GlassDesign.area}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ">
                    <div className="form-group">
                      {designIndex == 0 ? (
                        <label className="custome_lable  custome_cutout_margin_get_a_quote">
                          Cutouts
                        </label>
                      ) : (
                        ""
                      )}
                      <input
                        type="number"
                        placeholder=""
                        className="form-control noborder custo2"
                        name={`design_cutouts-${designIndex}`}
                        onChange={(e) =>
                          this.CalculateGlassArea(
                            e,
                            "design_cutouts",
                            designPanelIndex,
                            designIndex
                          )
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-1 ">
                    <div className="form-group Designtable">
                      {designIndex == 0 ? (
                        <label className="custome_lable custome_lable_lenghtt">
                          Shaped
                        </label>
                      ) : (
                        ""
                      )}
                      <div style={{ display: "flex" }}>
                        <input
                          name={`design_panael_shaped-${designIndex}`}
                          type="checkbox"
                          className="chk noprint"
                          value={GlassDesign.shaped}
                          onChange={(e) =>
                            this.CalculateGlassArea(
                              e,
                              "shaped",
                              designPanelIndex,
                              designIndex
                            )
                          }
                        />
                        <div
                          style={{ fontSize: "10px", marginLeft: "10%" }}
                        >
                          {GlassDesign.shaped == 0 ? "No" : "Yes"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      {designIndex == 0 ? (
                        <button
                          type="button"
                          className="Green-Add-Panel_button cutome-rounded-delete-button noprint first_plus_button"
                          key="add"
                          data-design-panel-index={designPanelIndex}
                          onClick={this.addDesignGlass}
                        >
                          +
                        </button>
                      ) : (
                        <div>
                          <button
                            type="button"
                            className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                            key="add"
                            data-design-panel-index={designPanelIndex}
                            onClick={this.addDesignGlass}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                            data-design-panel-index={designPanelIndex}
                            data-index={designIndex}
                            key="minus"
                            onClick={this.removeDesignGlass}
                          >
                            -
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </React.Fragment>
      );
    });

    let html2 = addSplashbackDimensions.map(
      (SplashbackDimension, indexofSplash) => {
        return (
          <React.Fragment key={indexofSplash}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  {indexofSplash == 0 ? (
                    <label className="custome_lable pdfLabel custome_lable_lenghtt">
                      Item
                    </label>
                  ) : (
                    ""
                  )}
                  {/* <Select options={splashback} /> */}
                  <select
                    name="splashback_select"
                    className="custome-select-box-get-a-quote noborder changeColor"
                    onChange={(e) => this.splash_options(e, indexofSplash)}
                  >
                    <option key="base" value="">
                      Select item
                    </option>
                    {splashback.map((element) => {
                      return (
                        <option key={element.value} value={element.value}>
                          {element.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  {indexofSplash == 0 ? (
                    <label className="custome_lable custome_lable_lenghtt">
                      Width(mm)
                    </label>
                  ) : (
                    ""
                  )}
                  <input
                    type="number"
                    placeholder=""
                    className="form-control custom-text noborder"
                    // value={this.state.splashback_width}
                    name="splashback_width"
                    onChange={(e) =>
                      this.calculateSplashBackArea(
                        e,
                        "splashback_width",
                        indexofSplash
                      )
                    }
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  {indexofSplash == 0 ? (
                    <label className="custome_lable custome_lable_lenghtt">
                      Length(mm)
                    </label>
                  ) : (
                    ""
                  )}
                  <input
                    type="number"
                    placeholder=""
                    className="form-control custom-text noborder"
                    // value={this.state.splashback_lenght}
                    name="splashback_lenght"
                    onChange={(e) =>
                      this.calculateSplashBackArea(
                        e,
                        "splashback_lenght",
                        indexofSplash
                      )
                    }
                  />
                </div>
              </div>
              <div className="col-md-1 cust-marg-get-a-quote">
                <div className="form-group">
                  {indexofSplash == 0 ? (
                    <label className="custome_lable_lenght ">Area(m²)</label>
                  ) : (
                    ""
                  )}
                  <input
                    type="text"
                    className="form-control custom-text noborder disabled_text_field"
                    name={`worktop_value-${indexofSplash}`}
                    disabled
                    value={(
                      (SplashbackDimension.splashback_width *
                        SplashbackDimension.splashback_lenght) /
                      1000000
                    ).toFixed(3)}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  {indexofSplash == 0 ? (
                    <button
                      type="button"
                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint first_plus_button"
                      key="add"
                      onClick={this.addSplashbackDimension}
                    >
                      +
                    </button>
                  ) : (
                    <div>
                      <button
                        type="button"
                        className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                        key="add"
                        onClick={this.addSplashbackDimension}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                        data-index={indexofSplash}
                        key="minus"
                        onClick={this.removeSplashbackDimension}
                      >
                        -
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }
    );

    let html = addWorktopDimensions.map((WorktopDimension, index) => {
      return (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    Item
                  </label>
                ) : (
                  ""
                )}
                {/* <Select options={worktop} /> */}
                <select
                  name={`worktop_select-${index}`}
                  className="custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) => this.worktop_options(e, index)}
                >
                  <option key="base" value="">
                    Select item
                  </option>
                  {worktop.map((element) => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    Width(mm)
                  </label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text noborder"
                  name={`worktop_width-${index}`}
                  data-index={index}
                  onChange={(e) => this.calculatee(e, "worktop_width", index)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    Length(mm)
                  </label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text noborder"
                  name={`worktop_lenght-${index}`}
                  onChange={(e) => this.calculatee(e, "worktop_lenght", index)}
                />
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_lenght">Area(m²)</label>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  className="form-control custom-text noborder disabled_text_field"
                  name={`worktop_value-${index}`}
                  disabled
                  value={(
                    (WorktopDimension.worktop_width *
                      WorktopDimension.worktop_lenght) /
                    1000000
                  ).toFixed(3)}
                />
              </div>
            </div>
            <div
              className="col-md-2"
              style={{ maxHeight: "15px", marginTop: "-5px" }}
            >
              {index == 0 ? (
                <div className="form-group p-0 m-0 first_plus_button">
                  <button
                    type="button"
                    className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                    key="add"
                    onClick={this.addWorktopDimension}
                  >
                    +
                  </button>
                </div>
              ) : (
                <div className="form-group p-0 m-0">
                  <button
                    type="button"
                    className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                    key="add"
                    onClick={this.addWorktopDimension}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                    data-index={index}
                    key="minus"
                    onClick={this.removeWorktopDimension}
                  >
                    -
                  </button>
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    });

    let html3 = addFabrication.map((fabricationOption, index) => {
      console.log("addFAB: => ", addFabrication);

      return (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-md-7">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    Item
                  </label>
                ) : (
                  ""
                )}
                {/* <Select options={fabrication} /> */}
                <select
                  name="fabrication_select"
                  className="custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) =>
                    this.handleFabricationPrice(e, "item", index)
                  }
                >
                  <option key="base" value="">
                    Select item
                  </option>

                  {fabrication.map((element) => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_fabrication">Quantity</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_extra-services_quantity noborder"
                  // value={this.state.fabrication_quantity}
                  name="fabrication_quantity"
                  id={`fabrication_quantity_${index}`}
                  onChange={(e) => this.handleFabrication(e, "quantity", index)}
                  value={fabricationOption.quantity}
                />
              </div>
            </div>
            <div
              className="col-md-2"
              style={{
                marginLeft: "-7%",
              }}
            >
              <div className="form-group">
                {index == 0 ? (
                  <button
                    type="button"
                    className="Green-Add-Panel_button cutome-rounded-delete-button noprint first_plus_button"
                    key="add"
                    onClick={this.addFabricationOption}
                  >
                    +
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                      key="add"
                      onClick={this.addFabricationOption}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                      data-index={index}
                      key="minus"
                      onClick={this.removeFabricationOption}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });

    let cutouthtml = AddCutout.map((Cutouts, index) => {
      return (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-md-7 col-lg-7">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    Item
                  </label>
                ) : (
                  ""
                )}
                {/* <Select options={cutouts_} /> */}
                <select
                  name="cutout_select"
                  className="custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) => this.handleCutoutsPrice(e, "item", index)}
                >
                  <option key="base" value="">
                    Select item
                  </option>
                  {cutouts_.map((element) => {
                    return (
                      <option key={element.value} value={element.value}>
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 ">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable">Quantity</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_cutouts noborder"
                  name="Cutouts_quantity"
                  id={`checkout_quantity_${index}`}
                  // value={this.state.Cutouts_quantity}
                  onChange={(e) => this.handleCutouts(e, "quantity", index)}
                />
              </div>
            </div>

            <div className="col-md-2 col-lg-2" style={{ marginLeft: "-7%" }}>
              <div className="form-group">
                {index == 0 ? (
                  <button
                    type="button"
                    className="Green-Add-Panel_button cutome-rounded-delete-button first_plus_button"
                    key="add"
                    onClick={this.addCutouts}
                  >
                    +
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                      key="add"
                      onClick={this.addCutouts}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                      data-index={index}
                      key="minus"
                      onClick={this.removeCutout}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });

    let html4 = addExtraServices.map((extraservices, index) => {
      return (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    Item
                  </label>
                ) : (
                  ""
                )}
                {/* <Select options={Extra_ServicesStone}  */}
                {/* onChange={this.handleServicePriceStone} */}
                {/* />                           */}
                <select
                  name="extra_stone_select"
                  className="custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) => this.handleServicePriceStone(e, index)}
                >
                  <option key="base" value="">
                    Select Service
                  </option>

                  {Extra_ServicesStone.map((element) => {
                    if (element.material === "Stone") {
                      return (
                        <option key={element.value} value={element.value}>
                          {element.label}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    UnitPrice
                  </label>
                ) : (
                  ""
                )}

                <span
                  name="selected_service"
                  onChange={(e) =>
                    this.calculateStoneService(e, "unit_price", index)
                  }
                  className="custom-text_extra-services_quantity "
                >
                  {extraservices.unit_price}
                </span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_extra">Quantity</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_extra-services_quantity noborder"
                  // value={this.state.extra_services_quantity}
                  name="extra_services_quantity"
                  // onChange={this.handleChange.bind(this)}
                  onChange={(e) =>
                    this.calculateStoneService(e, "quantity", index)
                  }
                  disabled={this.state.change === false ? true : false}
                />
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_lenght">Price</label>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  className="form-control custom-text noborder disabled_text_field"
                  name={`worktop_value-${index}`}
                  disabled
                  value={extraservices.quantity * extraservices.unit_price}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                {index == 0 ? (
                  <button
                    type="button"
                    className="Green-Add-Panel_button cutome-rounded-delete-button noprint first_plus_button"
                    key="add"
                    onClick={this.addExtraServices}
                  >
                    +
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                      key="add"
                      onClick={this.addExtraServices}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                      data-index={index}
                      key="minus"
                      onClick={this.removeExtraServices}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });

    let html5 = addExtraServicesGlass.map((extraservicesglass, index) => {
      return (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    Item
                  </label>
                ) : (
                  ""
                )}
                {/* <Select options={ExtraServices}         
                                onChange={this.handleServicePrice}
                                /> */}
                <select
                  name="extra_select"
                  className="custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) => this.handleCutoutPriceStone(e, index)}
                >
                  <option key="base" value="">
                    Select item
                  </option>
                  {ExtraServices.map((element) => {
                    if (element.material === "Glass") {
                      return (
                        <option key={element.value} value={element.value}>
                          {element.label}
                        </option>
                      );
                    }
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-2 cust-marg-get-a-quote">
              <div
                className="form-group"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "7%",
                }}
              >
                {index == 0 ? (
                  <label className="custome_lable custome_lable_lenghtt">
                    UnitPrice{" "}
                  </label>
                ) : (
                  ""
                )}
                <span
                  className="custom-text_extra-services_quantity "
                  name="selected_service"
                  onChange={(e) =>
                    this.calculateCutoutsService(e, "unit_price", index)
                  }
                >
                  {extraservicesglass.unit_price}
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_extra">Quantity</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_extra-services_quantity noborder"
                  // value={this.state.extra_services2_quantity}
                  name="extra_services2_quantity"
                  onChange={(e) =>
                    this.calculateCutoutsService(e, "quantity", index)
                  }
                  disabled={this.state.change === false ? true : false}
                />
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_lenght">Price</label>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  className="form-control custom-text noborder disabled_text_field"
                  name={`worktop_value-${index}`}
                  disabled
                  value={
                    extraservicesglass.quantity * extraservicesglass.unit_price
                  }
                />
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="form-group">
                {index == 0 ? (
                  <button
                    type="button"
                    className="Green-Add-Panel_button cutome-rounded-delete-button noprint first_plus_button"
                    key="add"
                    onClick={this.addExtraServicesGlass}
                  >
                    +
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                      key="add"
                      onClick={this.addExtraServicesGlass}
                    >
                      +
                    </button>
                    <button
                      className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                      type="button"
                      data-index={index}
                      key="minus"
                      onClick={this.removeExtraServicesGlass}
                    >
                      -
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });

    return (
      <div>
        {" "}
        <div>
          <Helmet>
            <title>Get a FREE Quote </title>
            <meta
              name="description"
              content="Get a free no obligation quote for your dream kitchen! "
            />
            <meta
              name="keywords"
              content="Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, Quartz worktop, Granite worktops, Marble worktops, Interior design, Luxury homes,  London, kitchen design UK, UK best kitchen, London,Kitchen worktop, marble tiles, bespoke kitchen design, get quote, kitchen redesign quote"
            />
          </Helmet>
          {/*Forget Password section*/}
          <form onSubmit={this.handleSubmit}>
            <section>
              <div className="container">
                <div className="row">
                  {/* {auth.isAuthenticatedAdmin() ? (
                    <div
                      className="col-sm-6"
                      style={{ marginBottom: "10px", marginLeft: "-1%" }}
                    >
                      Customer Search
                      {this.state.customers.length > 0 ? (
                        <Select
                          closeMenuOnSelect={true}
                          options={this.state.customers}
                          onInputChange={this.handleInputChange}
                          menuIsOpen={this.state.open}
                          isClearable={true}
                          value={this.state.selectedOption}
                          onChange={this.selectOptionOnChange}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )} */}

                  {auth.isAuthenticatedAdmin() ? (
                    <React.Fragment>
                      <div className="col-12">
                        <span
                          className="col-12 custom-span"
                          style={{ fontSize: "20px", fontWeight: "normal" }}
                        >
                          <b>Step 1:</b> Add New Product to Quote
                          {auth.isAuthenticatedAdmin() &&
                            this.state.all_products.length == 0 ? (
                            <div className="quote-loader"></div>
                          ) : (
                            ""
                          )}
                        </span>
                        <div className="row" style={{ marginLeft: "-4%" }}>
                          <div
                            className="container"
                            style={{ display: "flex" }}
                          >
                            <div className="col-md-5 col-sm-12">
                              <Select
                                value={this.state.selected_product}
                                placeholder="Search Product"
                                className="custome_select_box"
                                onChange={(e) => this.getThickness(e)}
                                options={this.state.all_products_search}
                              />
                            </div>

                            {!this.state.filter_thickness.length > 0 ? (
                              ""
                            ) : (
                              <div className="col-md-3 col-sm-12">
                                <Select
                                  value={this.state.selected_thickness}
                                  placeholder="Select Thickness"
                                  className="custome_select_box"
                                  onChange={(e) => this.getFinishes(e)}
                                  options={this.state.filter_thickness}
                                />
                              </div>
                            )}

                            {!this.state.filter_finishes.length > 0 ? (
                              ""
                            ) : (
                              <div className="col-md-4 col-sm-12">
                                <Select
                                  value={this.state.selected_finish}
                                  placeholder="Select Finish"
                                  className="custome_select_box"
                                  onChange={(e) => this.saveFinish(e)}
                                  options={this.state.filter_finishes}
                                />
                              </div>
                            )}

                            <br />
                            <button
                              type="button"
                              className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more "
                              onClick={(e) => this.saveNewProduct(e)}
                            >
                              Add New Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  <br />
                  <div
                    className="col-sm-12"
                    style={{ marginBottom: "10px" }}
                  >
                    {/* <button  className="btn btc ">
                      <Link
                        to={`${import.meta.env.VITE_PUBLIC_URL}/`}
                        className="Custom-color"
                      >
                        Add new item to Selection
                    </Link>
                    </button> */}
                  </div>
                  <div className="main">
                    <br />
                    <InnerOverlay />

                    <div className="page-content">
                      <div className="container">
                        {this.state.products.length > 0 ? (
                          <div className="row">
                            <div className="col-md-12">
                              <span
                                className="custom-span"
                                style={{
                                  fontSize: "20px",
                                  fontWeight: "normal",
                                }}
                              >
                                {/* Selected Items */}
                                {!auth.isAuthenticatedAdmin() && (
                                  <Fragment>
                                    {" "}
                                    <b>Step 1:</b> Select colours & materials
                                  </Fragment>
                                )}
                              </span>
                              <table className="table table-image quote_table_border">
                                <thead className="header_color">
                                  <tr>
                                    <th
                                      className="sky_th_color"
                                      scope="col"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      &nbsp;Name
                                    </th>
                                    <th
                                      className="sky_th_color"
                                      scope="col"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      &nbsp;Material
                                    </th>
                                    <th
                                      className="sky_th_color"
                                      scope="col"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      &nbsp;Image
                                    </th>
                                    <th
                                      className="sky_th_color"
                                      scope="col"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      &nbsp;Thickness
                                    </th>
                                    <th
                                      className="sky_th_color"
                                      scope="col"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      &nbsp;Finish
                                    </th>
                                    <th
                                      className="sky_th_color"
                                      scope="col"
                                      style={{ fontWeight: "bold" }}
                                    >
                                      &nbsp;Action
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {this.state.products.map((product, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>
                                          &nbsp;&nbsp;&nbsp;{product.name}
                                        </td>
                                        <td>
                                          &nbsp;&nbsp;&nbsp;{product.material}
                                        </td>
                                        <td className="w-25">
                                          {product.image ? (
                                            <img
                                              src={`${import.meta.env.VITE_API_URL}${product.image}`}
                                              className="img-fluid sku_img_thumbnails"
                                              alt={`${product.name}`}
                                            />
                                          ) : (
                                            <img
                                              src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/default-placeholder.jpg`}
                                              className="img-fluid sku_img_thumbnails"
                                              alt={`${product.name}`}
                                            />
                                          )}
                                        </td>

                                        <td>
                                          &nbsp;&nbsp;&nbsp;{product.thickness}
                                        </td>
                                        <td>
                                          &nbsp;&nbsp;&nbsp;{product.finish}
                                        </td>

                                        <td className="remove_item_sku">
                                          <button
                                            className="cutome-rounded-delete-button btn btn-outline-primary-2 btn-round btn-more"
                                            type="button"
                                            onClick={(e) =>
                                              this.removeSkuFromLocal(index)
                                            }
                                          >
                                            X
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                              {!auth.isAuthenticatedAdmin() ? (
                                <button
                                  type="button"
                                  className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more"
                                  style={{
                                    float: "right",
                                    padding: "0%",
                                    marginTop: "-1%",
                                    marginBottom: "2%",
                                    textTransform: "capitalize",
                                    minWidth: "190px",
                                  }}
                                >
                                  <Link
                                    to={`${import.meta.env.VITE_PUBLIC_URL}/product-catalogue`}
                                    className="Custom-color"
                                  >
                                    Add new item to Selection
                                  </Link>
                                </button>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        {this.state.stoneProduct ? (
                          <React.Fragment>
                            <span
                              className="custom-span"
                              style={{
                                fontSize: "20px",
                                fontWeight: "normal",
                              }}
                            >
                              <b>Step 2:</b> Measurements & Price Estimator
                              <span style={{ fontSize: "15px" }}>
                                (Quartz, Marble, Granite, Compact Worktops)
                              </span>
                            </span>
                            <div className="row px-3">
                              <div
                                className="col-md-6 col-sm-12 custome_table_get_a_quote"
                                style={{ borderRight: "0px" }}
                              >
                                <div className="padding-class">
                                  <div className="font-class-design">
                                    Worktop Dimensions
                                  </div>
                                  {html}
                                </div>
                                <div className="padding-class">
                                  <div className="font-class-design">
                                    Splashback Dimensions
                                  </div>
                                  {html2}
                                </div>
                                {/* <div
                          className="col-md-12"
                          style={{
                            borderTop: "1px solid black",
                            float: "bottom"
                          }}
                        >
                          Total Area: 12.72m²
                        </div> */}
                                <hr className="break" />
                                <div className="padding-class">
                                  <span>
                                    Total Area :
                                    {(
                                      total_worktop_area + total_splashback_area
                                    ).toFixed(3)}
                                    m²
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12 custome_table_get_a_quote ">
                                <div className="row padding-class">
                                  <div className="col-md-8 ">
                                    <div className="form-group">
                                      <div className="font-class-design">
                                        {" "}
                                        Edge Details
                                      </div>
                                      {/* <Select options={edge_detailss} /> */}
                                      <select
                                        name="edge_details_select"
                                        className="custome-select-box-get-a-quote noborder"
                                        onChange={(e) => this.handleEdge(e)}
                                      >
                                        <option key="base" value="">
                                          Select item
                                        </option>
                                        {edge_detailss.map((element) => {
                                          return (
                                            <option
                                              key={element.value}
                                              value={element.value}
                                            >
                                              {element.label}
                                            </option>
                                          );
                                        })}
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <div className="padding-class">
                                  <div className="font-class-design">
                                    Fabrication
                                  </div>
                                  {html3}
                                </div>

                                <div className="padding-class">
                                  <div className="font-class-design">
                                    Extra Services
                                  </div>
                                  {html4}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ) : (
                          ""
                        )}

                        <br />
                        {this.state.glassProduct ? (
                          <React.Fragment>
                            <span
                              className="custom-span"
                              style={{
                                fontSize: "20px",
                                fontWeight: "normal",
                              }}
                            >
                              <b>Step 2:</b> Measurements & Bespoke Glass Price
                              Estimator
                            </span>
                            <div
                              className="container"
                              style={{ border: "1px solid black" }}
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <ol>
                                    <li>
                                      {" "}
                                      <b>1.</b> Make sure you put all the sizes
                                      in millimetres
                                    </li>
                                    <li>
                                      <b>2.</b> Glass panels over 2950 x 1350 mm
                                      are charged as oversized panels- please
                                      call us for a quotation.
                                    </li>
                                    <li>
                                      <b>3.</b> If you need Socket Cutouts or
                                      holes on your panels, make sure you put
                                      how many of them you need on each panel in
                                      the CUTOUT field
                                    </li>
                                    <li>
                                      <b>4.</b> If your glass is{" "}
                                      <strong>SHAPED</strong> or not should be
                                      completed according to the image below:
                                    </li>
                                  </ol>
                                </div>
                              </div>
                              <div className="row px-3">
                                <div className="col-md-6 cusdiv">
                                  <span className="cust-center">
                                    <strong>Shaped Glass</strong>
                                  </span>
                                  <img
                                    src="/assets/images/Shaped-Glass_461x164.png"
                                    className="img-fluid "
                                    alt="Marble"
                                    style={{ width: "461px", height: "164px" }}
                                  />
                                </div>
                                <div className="col-md-6 cusdiv">
                                  <div className="cust-centers">
                                    <strong>Not a Shaped Glass</strong>
                                  </div>
                                  <img
                                    src="/assets/images/not-shaped-glass_371x121.png"
                                    className="img-fluid "
                                    alt="Marble"
                                    style={{ width: "377px", height: "121px" }}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6 col-sm-12 custome_table_get_a_quote">
                                  <div className="padding-class">
                                    <div className="font-class-design">
                                      Choose your Design(s):
                                    </div>
                                    {html6}
                                  </div>
                                  <hr className="break" />
                                  <div className="padding-class">
                                    <span>
                                      {" "}
                                      Total Area:{total_glass_area.toFixed(3)}m²
                                    </span>
                                  </div>
                                </div>
                                <div className="col-md-6 col-sm-12 custome_table_get_a_quote">
                                  <div className="row radio-margin ">
                                    <div style={{ width: "50%" }}>
                                      <div className="Col-md-3 padding-class2">
                                        Sparkle Add-on:
                                      </div>
                                      <div
                                        className="Col-md-3 padding-class2"
                                        style={{
                                          display: "flex",
                                          marginLeft: "7%",
                                          marginTop: "0%",
                                        }}
                                      >
                                        <div className="col-md-3 noprint">
                                          <label className="radio-inline1 noprint">
                                            <input
                                              type="radio"
                                              name="optradio"
                                              id="yes"
                                              value="1"
                                              onChange={(e) =>
                                                this.sparkleGet(e)
                                              }
                                            />{" "}
                                            Yes
                                          </label>
                                        </div>
                                        <div className="col-md-2 noprint">
                                          <label className="radio-inline1 noprint">
                                            <input
                                              type="radio"
                                              name="optradio"
                                              id="no"
                                              onChange={(e) =>
                                                this.sparkleGet(e)
                                              }
                                              value="0"
                                            />{" "}
                                            No
                                          </label>
                                        </div>
                                        <div className="col-md-4 print-only">
                                          {this.state.surveyCheck}
                                        </div>
                                      </div>
                                    </div>

                                    <div style={{ width: "50%" }}>
                                      <div className="col-md-12 font-class">
                                        <div className="side-survey">
                                          Survey & Fit Options:
                                        </div>
                                      </div>
                                      <div
                                        className="col-md-3"
                                        style={{
                                          marginTop: "0%",
                                          marginLeft: "-9%",
                                        }}
                                      >
                                        <select
                                          name="surveyfit_select"
                                          className="select-box-survey-fit noborder changeColor"
                                          onChange={(e) => this.handleSurvey(e)}
                                          style={{
                                            width: "195px",
                                          }}
                                        >
                                          <option key="base" value="">
                                            Select item
                                          </option>
                                          {survey_fit_Op.map((element) => {
                                            return (
                                              <option
                                                key={element.value}
                                                value={element.value}
                                              >
                                                {element.label}
                                              </option>
                                            );
                                          })}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="padding-class font-class-cutouts">
                                    Cutouts
                                    {cutouthtml}
                                  </div>
                                  <div className="padding-class font-class-extra-service font-class-design">
                                    Extra Services
                                    {html5}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main">
                  <div className="page-content">
                    <div className="container">
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "101.5%",
                        }}
                      >
                        {auth.isAuthenticatedAdmin() ? (
                          <div
                            className="col-sm-6"
                            style={{
                              marginBottom: "30px",
                              marginLeft: "-1%",
                              fontSize: "20px",
                              fontWeight: "normal",
                              marginTop: 20,
                            }}
                          >
                            <b>Step 3:</b> Customer Search (Optional)
                            {this.state.customers.length > 0 ? (
                              <Select
                                closeMenuOnSelect={true}
                                options={this.state.customers}
                                onInputChange={this.handleInputChange}
                                menuIsOpen={this.state.open}
                                isClearable={true}
                                value={this.state.selectedOption}
                                onChange={this.selectOptionOnChange}
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="row" style={{ marginLeft: "0%" }}>
                        <span
                          className="custom-span"
                          style={{
                            marginLeft: "-1%",
                            fontSize: "20px",
                            fontWeight: "normal",
                          }}
                        >
                          <b>Step {auth.isAuthenticatedAdmin() ? "4" : "3"}:</b>{" "}
                          {auth.isAuthenticatedAdmin()
                            ? "Client's Information"
                            : "Your Information"}
                        </span>
                      </div>

                      <div
                        className=""
                        style={{
                          border: "1px solid black",
                          //   width: " 87%",
                          //   marginLeft: "5.4%",
                          marginLeft: "-1.2%",
                          width: "100%",
                        }}
                      >
                        <div className="row col-md-12 col-lg-12 ">
                          <div className="col-md-4 col-lg-3 col-sm-12 ">
                            <div className="form-group">
                              <label className="custome_lable custome_lable_lenghtt">
                                First Name
                              </label>
                              <input
                                type="text"
                                placeholder="First Name"
                                className="form-control custom-text_cutouts noborder"
                                name="Cutouts_quantity"
                                style={{ width: "100%" }}
                                value={this.state.userInfo.firstname}
                                onChange={(e) =>
                                  this.handleUserForm(e, "firstname")
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-4 col-lg-3 col-sm-12 ">
                            <div className="form-group">
                              <label className="custome_lable custome_lable_lenghtt">
                                Last Name
                              </label>
                              <input
                                type="text"
                                placeholder="Last Name"
                                className="form-control custom-text_cutouts noborder"
                                name="Cutouts_quantity"
                                style={{ width: "100%" }}
                                value={this.state.userInfo.lastname}
                                onChange={(e) =>
                                  this.handleUserForm(e, "lastname")
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-4 col-lg-3 col-sm-12 ">
                            <div className="form-group">
                              <label className="custome_lable custome_lable_lenghtt">
                                Email
                              </label>
                              <input
                                type="email"
                                placeholder="Email"
                                className="form-control custom-text_cutouts noborder"
                                name="Cutouts_quantity"
                                style={{ width: "100%" }}
                                value={this.state.userInfo.email}
                                onChange={(e) =>
                                  this.handleUserForm(e, "email")
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-4 col-lg-3 col-sm-12 ">
                            <div className="form-group">
                              <label className="custome_lable custome_lable_lenghtt">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                placeholder="Phone Number"
                                className="form-control custom-text_cutouts noborder"
                                name="Cutouts_quantity"
                                style={{ width: "100%" }}
                                value={this.state.userInfo.phone}
                                onChange={(e) =>
                                  this.handleUserForm(e, "phone")
                                }
                              />
                            </div>
                          </div>
                          {auth.isAuthenticatedAdmin() && (
                            <Fragment>
                              <div className="col-md-4 col-lg-3 col-sm-12 ">
                                <div className="form-group">
                                  <label className="custome_lable custome_lable_lenghtt">
                                    Address
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Address"
                                    className="form-control custom-text_cutouts noborder"
                                    name="Cutouts_quantity"
                                    style={{ width: "100%" }}
                                    value={this.state.userInfo.address}
                                    onChange={(e) =>
                                      this.handleUserForm(e, "address")
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-4 col-lg-3 col-sm-12 ">
                                <div className="form-group">
                                  <label className="custome_lable custome_lable_lenghtt">
                                    Post Code
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Post code"
                                    className="form-control custom-text_cutouts noborder"
                                    name="Cutouts_quantity"
                                    style={{ width: "100%" }}
                                    value={this.state.userInfo.postcode}
                                    onChange={(e) =>
                                      this.handleUserForm(e, "postcode")
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-4 col-lg-3 col-sm-12 ">
                                <div className="form-group">
                                  <label className="custome_lable custome_lable_lenghtt">
                                    City
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="City"
                                    className="form-control custom-text_cutouts noborder"
                                    name="Cutouts_quantity"
                                    style={{ width: "100%" }}
                                    value={this.state.userInfo.city}
                                    onChange={(e) =>
                                      this.handleUserForm(e, "city")
                                    }
                                  />
                                </div>
                              </div>
                            </Fragment>
                          )}
                        </div>
                      </div>

                      <br />
                      <div>
                        <div
                          className="col-md-12"
                          style={{ marginLeft: "-2%" }}
                        >
                          <span
                            className="font-12"
                            style={{
                              fontSize: "20px",
                              fontWeight: "normal",
                            }}
                          >
                            <b>
                              Step {auth.isAuthenticatedAdmin() ? "5" : "4"}:
                            </b>{" "}
                            Get your FREE Quote
                          </span>
                          <div className="form-group form-check">
                            <input
                              name="check"
                              type="checkbox"
                              className="form-check-input"
                              id="check"
                              required=""
                              onChange={(e) => this.termsandconditions(e)}
                              style={{ marginTop: "0.5%" }}
                            />
                            <label
                              className="custome_lable_accept form-check-label"
                              htmlFor="check"
                              style={{ marginLeft: "1%" }}
                            >
                              &nbsp;I accept the &nbsp;
                              <Link
                                to={`${import.meta.env.VITE_PUBLIC_URL}/terms-and-condition`}
                              >
                                Terms & Conditions
                              </Link>
                              &nbsp; and &nbsp;
                              <Link
                                to={`${import.meta.env.VITE_PUBLIC_URL}/privacy-policy`}
                              >
                                &nbsp; Privacy policy
                              </Link>
                            </label>
                            <br />
                            <button
                              className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more "
                              type="submit"
                              disabled={!this.state.checked}
                              style={{
                                padding: "0.2%",
                                minWidth: "170px",
                              }}
                            >
                              Email me the quote
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    );
  }
}

export default GetAQuote;
