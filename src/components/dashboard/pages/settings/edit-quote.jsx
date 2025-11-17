import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import DashboardHeader from "../../includes/Header";

import { Helmet } from "react-helmet";

import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import $ from "jquery";

import moment from "moment";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

class editQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded1: false,
      ref: 0,
      customer_id: 0,
      quote_id: 0,
      isRedirect: false,
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
      filter_thickness: [],
      filter_finishes: [],
      newProduct: [],
      communication_history: [],
      design_pieces: "",
      showCommunicaton: false,
      design_cutouts: "",
      surveyCheck: "",
      internal_notes: " ",
      client_notes: " ",
      survey: {
        item: 0,
        item_name: "",
      },
      edge: {
        item: 0,
        item_name: "",
      },
      shapedCheck: "",
      versions: [],
      Cutouts_quantity: "",
      total_worktop_area: 0,
      total_splashback_area: 0,
      total_area: 0,
      total_glass_area: 0,
      extra_services2_quantity: "",
      products: [],
      stoneProduct: false,
      glassProduct: false,
      selected_product: { value: 0, label: "select product" },
      selected_thickness: { value: 0, label: "select thickness" },
      selected_finish: { value: 0, label: "select finish" },
      glassExtraTotal: 0,
      stoneExtraTotal: 0,
      //     name: "Red delicate pattern",
      //     material: "Quartz",
      //     image: `${import.meta.env.VITE_API_URL}/assets/images/henry-co--odUkx8C2gg-unsplash.jpg`,
      //     thickness: "4mm"
      // },
      // {
      //     name: "Black pattern",
      //     material: "Marble",
      //     image: `${import.meta.env.VITE_API_URL}/assets/images/henry-co--odUkx8C2gg-unsplash.jpg`,
      //     thickness: "30mm"
      // },
      // {
      //     name: "Green pattern	",
      //     material: "Glass",
      //     image: `${import.meta.env.VITE_API_URL}/assets/images/henry-co--odUkx8C2gg-unsplash.jpg`,
      //     thickness: "25mm"
      // }],
      worktop_options: [],
      splashback_dimensions: [],
      Edge_Details: [],
      fabrications: [],
      Designoptions: [],
      survey_fit_options: [],
      cutouts: [],
      sku: [],
      Extra_Services: [],
      Extra_ServicesStone: [],
      selectedServiceStoneIndex: 0,
      loading: false,
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
          splashback_width: "",
          splashback_lenght: "",
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
              design_cutouts: "",
              shaped: 0,
            },
          ],
        },
      ],
      addNewProduct: false,
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
    this.dublicateQuote = this.dublicateQuote.bind(this);
    this.cancelPage = this.cancelPage.bind(this);
    this.manageNotes = this.manageNotes.bind(this);
    this.showCommunicaton = this.showCommunicaton.bind(this);
    this.submitCommunication = this.submitCommunication.bind(this);
    this.saveNewProduct = this.saveNewProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.sendVersionPdf = this.sendVersionPdf.bind(this);
    this.showAddNewProduct = this.showAddNewProduct.bind(this);
  }

  async showAddNewProduct(e) {
    this.setState({ addNewProduct: true });

    if (!this.state.all_products.length) {
      this.setState({ loading: true });

      const resp = await axios({
        url: `${import.meta.env.VITE_API_URL}/sku`,
        method: "get",
        data: null,
      });

      this.setState({
        all_products: resp.data,
        addNewProduct: true,
        loading: false,
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
        });
      }
    }
  }

  getThickness(e) {
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
  }

  getFinishes(e) {
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
  }

  saveFinish(e) {
    this.setState({
      ...this.state,
      selected_finish: e,
    });
  }

  saveNewProduct(e) {
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
      let products = {
        products: JSON.stringify(product),
      };
      axios
        .post(`${import.meta.env.VITE_API_URL}/quote-products`, products)
        .then((res) => {
          console.log(res)
          let newProducts = this.state.products;
          let stoneProduct = false;
          let glassProduct = false;
          newProducts.push(res.data[0]);
          newProducts.map((product) => {
            if (product.material === "Stone") {
              stoneProduct = true;
            }
            if (product.material === "Glass") {
              glassProduct = true;
            }
          });

          this.setState({
            ...this.state,
            products: newProducts,
            stoneProduct: stoneProduct,
            glassProduct: glassProduct,
            filter_thickness: [],
            filter_finishes: [],
            selected_product: { value: 0, label: "select product" },
            selected_thickness: { value: 0, label: "select thickness" },
            selected_finish: { value: 0, label: "select finish" },
            showAddNewProduct: false,
          });
          // let stoneProduct = false;
          // let glassProduct = false;
          // res.data.map((product) => {
          //   if (product.material === "Stone") {
          //     stoneProduct = true;
          //   }
          //   if (product.material === "Glass") {
          //     glassProduct = true;
          //   }
          // });
          // this.setState({
          //   ...this.state,
          //   products: res.data
          // });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  removeProduct(index) {
    let products = this.state.products;
    if (products.length === 1) {
      toast.error(`you can'not remove all items from list`);
    } else {
      products.splice(index, 1);
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
      // if(!glassProduct)
      // {
      //   this.setState({
      //     ...this.state,
      //     AddDesignPanel: [
      //       {
      //         design: 0,
      //         design_name: "",
      //         adddesignglass: [
      //           {
      //             design_width: 0,
      //             design_lenght: 0,
      //             design_pieces: 0,
      //             area: 0,
      //             design_cutouts: "",
      //             shaped: 0,
      //           },
      //         ],
      //       },
      //     ],
      //     addCutouts: [
      //       {
      //         item: 0,
      //         item_name: "",
      //         quantity: 0,
      //         price: 0,
      //       }
      //     ],
      //     AddExtraservicesGlass: [
      //       { item: 0, item_name: "", unit_price: 0, quantity: 0, price: 0 },
      //     ],
      //     total_glass_area: 0,
      //     glassExtraTotal: 0
      //   });
      // }
      this.setState({
        ...this.state,
        products: products,
        stoneProduct: stoneProduct,
        glassProduct: glassProduct,
      });
      toast.success(`Item Removed from Shortlist`);
    }
  }

  sendVersionPdf(e, path) {
    confirmAlert({
      title: "Please Confirm",
      message: `Are you sure to send this version to ${this.state.userInfo.firstname} ${this.state.userInfo.lastname} at ${this.state.userInfo.email}.`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            window.scrollTo(0, 0);
            this.setState({ loading: true });
            let splitpath = path.split("/");
            let data = {
              email: this.state.userInfo.email,
              filename: splitpath ? splitpath[3] : path,
              mainfile: `./public${path}`,
              name: `${this.state.userInfo.firstname} ${this.state.userInfo.lastname}`,
            };
            axios
              .post(`${import.meta.env.VITE_API_URL}/email-version-pdf`, data)
              .then((res) => {
                this.setState({ loading: false });
                toast.success("Email successfully sent to client and admin");
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => { },
        },
      ],
    });
  }

  handleProductPrice(e, index) {
    let products = this.state.products;
    if (e.target.value === "") {
      products[index].price = 0;
    } else {
      products[index].price = parseInt(e.target.value);
    }
    this.setState({
      products: products,
    });
  }

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

  cancelPage = (e) => {
    this.setState({
      isRedirect: true,
    });
  };

  manageNotes = (e, property) => {
    let value = e.target.value;
    if (property === "internal_notes") {
      this.setState({
        ...this.state,
        internal_notes: e.target.value,
      });
    } else if (property === "client_notes") {
      this.setState({
        ...this.state,
        client_notes: e.target.value,
      });
    } else if (property === "communication") {
      this.setState({
        ...this.state,
        communication: e.target.value,
      });
    }
  };

  showCommunicaton = (e) => {
    this.setState({
      ...this.state,
      showCommunicaton: true,
    });
  };

  submitCommunication = (e) => {
    let data = {
      communication: this.state.communication,
      ref: this.state.ref,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/communication-history`, data)
      .then((res) => {
        this.setState({
          ...this.state,
          communication_history: res.data,
          showCommunicaton: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ loading: true });
    window.scrollTo(0, 0);
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      1500
    );
  };

  dublicateQuote(index) {
    this.setState({ loading: true });
    setTimeout(
      function () {
        this.setState({ loading: false });
      }.bind(this),
      1500
    );

    let quoteId = this.state.versions[index];

    axios
      .get(`${import.meta.env.VITE_API_URL}/quote/dublicate/${quoteId.id}`)
      .then((res) => {
        let edge = {
          item: res.data[0].edge_id,
          item_name: res.data[0].edge_name,
        };

        let survey = {
          item: res.data[0].survey_id,
          item_name: res.data[0].survey_name,
        };
        // this.setState({
        //     ...this.state,
        //     total_glass_area: res.data[0].glass_area,
        //     total_worktop_area: res.data[0].worktopsArea,
        //     total_splashback_area: res.data[0].splashbackarea,
        //     sparkle: res.data[0].sparkle,
        //     userInfo: res.data[0].user[0],
        //     addWorktopDimensions: res.data[0].worktopDimensions,
        //     addSplashbackDimensions: res.data[0].splashbackDimensions,
        //     addFabrication: res.data[0].fabrications,
        //     addCutouts: res.data[0].cutouts,
        //     AddExtraServices: res.data[0].fabricationServices,
        //     AddExtraservicesGlass: res.data[0].cutoutServices,
        //     sku: res.data[0].sku,
        //     AddDesignPanel: res.data[0].designPanel,
        //     versions: res.data[0].versions,
        //     survey: survey,
        //     edge: edge,
        //     ref: res.data[0].ref,
        //     customer_id: res.data[0].customer_id,
        //     quote_id: res.data[0].id,
        //     internal_notes: res.data[0].internal_notes,
        //     client_notes: res.data[0].client_notes
        // })

        this.setStateDate("total_worktop_area", res.data[0].worktopsArea);
        this.setStateDate("total_splashback_area", res.data[0].splashbackarea);
        this.setStateDate("sparkle", res.data[0].sparkle);
        this.setStateDate("userInfo", res.data[0].user[0]);
        this.setStateDate(
          "addWorktopDimensions",
          res.data[0].worktopDimensions
        );
        this.setStateDate(
          "addSplashbackDimensions",
          res.data[0].splashbackDimensions
        );
        this.setStateDate("addFabrication", res.data[0].fabrications);

        this.setStateDate("AddExtraServices", res.data[0].fabricationServices);

        this.setStateDate("sku", res.data[0].sku);
        this.setStateDate("survey", survey);
        this.setStateDate("versions", res.data[0].versions.reverse());
        this.setStateDate("edge", edge);
        this.setStateDate("ref", res.data[0].ref);
        this.setStateDate("customer_id", res.data[0].customer_id);
        this.setStateDate("quote_id", res.data[0].id);
        res.data[0].internal_notes !== null
          ? this.setStateDate("internal_notes", res.data[0].internal_notes)
          : this.setStateDate("internal_notes", " ");
        res.data[0].client_notes !== null
          ? this.setStateDate("client_notes", res.data[0].client_notes)
          : this.setStateDate("client_notes", " ");

        if (this.state.sku) {
          let products = {
            products: JSON.stringify(this.state.sku),
            quote_id: res.data[0].id,
          };

          axios
            .post(`${import.meta.env.VITE_API_URL}/edit-quote-products`, products)
            .then((res1) => {
              let stoneProduct = false;
              let glassProduct = false;
              res1.data.map((product) => {
                if (product.material === "Stone") {
                  stoneProduct = true;
                }
                if (product.material === "Glass") {
                  glassProduct = true;
                }
              });

              if (res.data[0].cutouts && glassProduct) {
                this.setStateDate("addCutouts", res.data[0].cutouts);
              }
              if (res.data[0].cutoutServices && glassProduct) {
                this.setStateDate(
                  "AddExtraservicesGlass",
                  res.data[0].cutoutServices
                );
              }
              this.setStateDate("sku", res.data[0].sku);
              if (res.data[0].designPanel.length > 0 && glassProduct) {
                this.setStateDate("AddDesignPanel", res.data[0].designPanel);
              }
              if (glassProduct) {
                this.setStateDate("total_glass_area", res.data[0].glass_area);
              }

              this.setState({
                ...this.state,
                products: res1.data,
                stoneProduct: stoneProduct,
                glassProduct: glassProduct,
              });
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
      });
    axios.get(`${import.meta.env.VITE_API_URL}/worktop-dimensions`).then((worktopD) => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/splashback-dimensions`)
        .then((splashB) => {
          let splashback_dimensions = splashB.data.map((splashB) => {
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
            label: survey_fits.name,
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
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.getGlassExtraTotal();
      this.getStoneExtraTotal();
    }, 2000);
  }

  handleUserForm = (e, property) => {
    let user = this.state.userInfo;
    user[property] = e.target.value;
    this.setState({
      ...this.state,
      userInfo: user,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let date = new Date();
    date = moment(date).format("DD-MM-YYYY");

    let splashBackArea = (
      this.state.total_worktop_area + this.state.total_splashback_area
    ).toFixed(2);
    let data = {
      designPanel: this.state.AddDesignPanel,
      splashbackDimensions: this.state.addSplashbackDimensions,
      worktopDimensions: this.state.addWorktopDimensions,
      fabrications: this.state.addFabrication,
      cutouts: this.state.addCutouts,
      extraservices1: this.state.AddExtraServices,
      extraservice2: this.state.AddExtraservicesGlass,
      glass_area: this.state.total_glass_area.toFixed(2),
      stone_area: splashBackArea,
      sku: this.state.products,
      sparkle: this.state.sparkle,
      survey: this.state.survey,
      edge: this.state.edge,
      user: this.state.userInfo,
      ref: this.state.ref,
      customer_id: this.state.customer_id,
      quote_id: this.state.quote_id,
      apiUrl: import.meta.env.VITE_API_URL,
      internal_notes: this.state.internal_notes,
      client_notes: this.state.client_notes,
      stoneProduct: this.state.stoneProduct,
      glassProduct: this.state.glassProduct,
      date: date,
    };

    if (this.checkProductsFielts()) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/update-quote`, data)
        .then((res) => {
          this.setState({
            isRedirect: true,
          });
        })
        .catch((error) => {
          console.log(error.response.data);
          this.setState({
            isRedirect: true,
          });
        });
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
    console.log("check: ", this.state.sparkle);
    // let value = parseInt(e.currentTarget.value);
    // this.setState({
    //   ...this.state,
    //   sparkleCheck: value,
    // });
    this.setState({ sparkle: e, surveyCheck: e }, () => {
      console.log("sparl;e: ", this.state.sparkle);
    });
  };

  printRadioVal = (e) => {
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
    ).toFixed(2);
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
    console.log(oldArray["item"]);
    oldArray["item_name"] = label;
    this.setState(
      {
        ...this.state,
        survey: oldArray,
      },
      () => {
        this.getGlassExtraTotal();
      }
    );
    // this.getGlassExtraTotal();
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
    // let oldArray = this.state.addFabrication;
    // let price;
    // oldArray[index][property] = parseInt(e.target.value);
    // oldArray[index]["price"] =
    //   oldArray[index]["quantity"] * oldArray[index]["unit_price"];
    // this.setState({
    //   ...this.state,
    //   addfabrications: oldArray,
    // });
    // this.getStoneExtraTotal();

    let oldArray = this.state.addFabrication;
    if (property === "quantity" || property === "unit_price") {
      if (e.target.value === "") {
        oldArray[index][property] = 0;
      } else {
        oldArray[index][property] = parseInt(e.target.value);
      }
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

    this.setState(
      {
        ...this.state,
        addfabrications: oldArray,
      },
      () => {
        this.getStoneExtraTotal();
      }
    );
    // this.getStoneExtraTotal();
  };

  handleFabricationPrice = (e, property, index) => {
    let oldArray = this.state.addFabrication;
    let index1 = e.nativeEvent.target.selectedIndex;
    let label = e.nativeEvent.target[index1].text;
    let value = e.target.value;
    let price = label.split("£");
    oldArray[index]["unit_price"] = price[1];
    oldArray[index]["item"] = parseInt(value);
    oldArray[index]["item_name"] = label;
    oldArray[index]["quantity"] = 0;

    document.getElementById(`fabrication_quantity_${index}`).value = 0;

    this.setState(
      {
        ...this.state,
        addfabrications: oldArray,
      },
      () => {
        this.getStoneExtraTotal();
      }
    );
    // this.getStoneExtraTotal();
  };

  handleCutouts = (e, property, index) => {
    let oldArray = this.state.addCutouts;
    let price;
    oldArray[index][property] = parseInt(e.target.value);
    oldArray[index]["price"] =
      oldArray[index]["quantity"] * oldArray[index]["unit_price"];

    this.setState(
      {
        ...this.state,
        addCutouts: oldArray,
      },
      () => {
        this.getGlassExtraTotal();
      }
    );
    // this.getGlassExtraTotal();
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
    this.setState(
      {
        ...this.state,
        addCutouts: oldArray,
      },
      () => {
        this.getGlassExtraTotal();
      }
    );
    // this.getGlassExtraTotal();
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
    if (property === "quantity" || property === "unit_price") {
      if (e.target.value === "") {
        oldArray[index][property] = 0;
      } else {
        oldArray[index][property] = parseInt(e.target.value);
      }
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

    this.setState(
      {
        ...this.state,
        AddExtraServices: oldArray,
      },
      () => {
        this.getStoneExtraTotal();
      }
    );
    // this.getStoneExtraTotal();
  };

  calculateCutoutsService = (e, property, index) => {
    let oldArray = this.state.AddExtraservicesGlass;
    if (property === "quantity" || property === "unit_price") {
      if (e.target.value === "") {
        oldArray[index][property] = 0;
      } else {
        oldArray[index][property] = parseInt(e.target.value);
      }
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

    this.setState(
      {
        ...this.state,
        AddExtraservicesGlass: oldArray,
      },
      () => {
        this.getGlassExtraTotal();
      }
    );
    // this.getGlassExtraTotal();
  };

  calculateGlassService = (e, property, index) => {
    let oldArray = this.state.AddExtraservicesGlass;
    let Price = 0;
    oldArray[index][property] = e.target.value;
    oldArray[index]["Price"] = (
      (oldArray[index]["extra_services2_quantity"] *
        oldArray[index]["selected_service"]) /
      1000000
    ).toFixed(2);
    this.setState(
      {
        ...this.state,
        AddExtraservicesGlass: oldArray,
      },
      () => {
        this.getGlassExtraTotal();
      }
    );
    // this.getGlassExtraTotal();
  };

  calculateSplashBackArea = (e, proptery, indexofSplash) => {
    let oldArray = this.state.addSplashbackDimensions;

    oldArray[indexofSplash][proptery] = e.target.value;

    oldArray[indexofSplash]["area"] = (
      (oldArray[indexofSplash]["splashback_width"] *
        oldArray[indexofSplash]["splashback_lenght"]) /
      1000000
    ).toFixed(2);

    oldArray.forEach((element) => {
      totalArea = this.state.total_area + element["area"];
    });
    this.setState({
      ...this.state,
      addSplashbackDimensions: oldArray,
    });
    let totalArea = 0;
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
    ).toFixed(2);
    if (property == "shaped" && e.target.checked == true) {
      oldArray[designPanelIndex]["adddesignglass"][designIndex][property] = 1;
    } else if (property == "shaped" && e.target.checked == false) {
      oldArray[designPanelIndex]["adddesignglass"][designIndex][property] = 0;
    }

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
    this.setState({
      ...this.state,
      total_glass_area: toatlArea,
    });
  };

  getGlassExtraTotal() {
    let cutouts = this.state.addCutouts;
    let services = this.state.AddExtraservicesGlass;
    let survey = this.state.survey;
    let getTotal = 0;
    cutouts.map((total) => {
      if (total) {
        getTotal = getTotal + total.price;
      }
    });
    services.map((total) => {
      if (total) {
        getTotal = getTotal + total.price;
      }
    });
    if (survey) {
      let price = survey.item_name.split("£");
      if (price) {
        getTotal = getTotal + parseInt(price[1]);
      }
    }

    this.setState({
      glassExtraTotal: getTotal,
    });
  }

  getStoneExtraTotal() {
    let fabrication = this.state.addFabrication;
    let services = this.state.AddExtraServices;
    let getTotal = 0;
    fabrication.map((total) => {
      if (total.price) {
        getTotal = getTotal + total.price;
      }
    });
    services.map((total) => {
      if (total) {
        getTotal = getTotal + total.price;
      }
    });

    this.setState({
      stoneExtraTotal: getTotal,
    });
  }

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
    });
    this.getStoneExtraTotal();
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

  setStateDate(stateName, data) {
    if (data) {
      this.setState({
        ...this.state,
        [stateName]: data,
      });
    }
  }

  async componentDidMount() {
    document
      .getElementById("adminPanel")
      .setAttribute(
        "href",
        `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`
      );
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `$(document).ready(function(){
      $('body').css("overflow", 'scroll')
    })`;
    this.instance.appendChild(s);

    axios
      .get(`${import.meta.env.VITE_API_URL}/quote/${this.props.match.params.id}`)
      .then((res) => {
        let edge = {
          item: res.data[0].edge_id,
          item_name: res.data[0].edge_name,
        };

        let survey = {
          item: res.data[0].survey_id,
          item_name: res.data[0].survey_name,
        };
        this.setStateDate("total_worktop_area", res.data[0].worktopsArea);
        this.setStateDate("total_splashback_area", res.data[0].splashbackarea);
        this.setStateDate("sparkle", res.data[0].sparkle);
        this.setStateDate("userInfo", res.data[0].user[0]);
        this.setStateDate(
          "addWorktopDimensions",
          res.data[0].worktopDimensions
        );
        this.setStateDate(
          "addSplashbackDimensions",
          res.data[0].splashbackDimensions
        );

        this.setStateDate("addFabrication", res.data[0].fabrications);

        this.setStateDate("AddExtraServices", res.data[0].fabricationServices);
        this.setStateDate("sku", res.data[0].sku);
        this.setStateDate("versions", res.data[0].versions);
        this.setStateDate("survey", survey);
        this.setStateDate("edge", edge);
        this.setStateDate("ref", res.data[0].ref);
        this.setStateDate("customer_id", res.data[0].customer_id);
        this.setStateDate("quote_id", res.data[0].id);
        this.setStateDate("internal_notes", res.data[0].internal_notes);
        this.setStateDate("client_notes", res.data[0].client_notes);
        this.setStateDate("communication_history", res.data[0].communications);
        // this.setState({
        //     ...this.state,
        //     total_glass_area: res.data[0].glass_area,
        //     total_worktop_area: res.data[0].worktopsArea,
        //     total_splashback_area: res.data[0].splashbackarea,
        //     sparkle: res.data[0].sparkle,
        //     userInfo: res.data[0].user[0],
        //     addWorktopDimensions: res.data[0].worktopDimensions,
        //     addSplashbackDimensions: res.data[0].splashbackDimensions,
        //     addFabrication: res.data[0].fabrications,
        //     addCutouts: res.data[0].cutouts,
        //     AddExtraServices: res.data[0].fabricationServices,
        //     AddExtraservicesGlass: res.data[0].cutoutServices,
        //     sku: res.data[0].sku,
        //     AddDesignPanel: res.data[0].designPanel,
        //     versions: res.data[0].versions,
        //     survey: survey,
        //     edge: edge,
        //     ref: res.data[0].ref,
        //     customer_id: res.data[0].customer_id,
        //     quote_id: res.data[0].id,
        //     internal_notes: res.data[0].internal_notes,
        //     client_notes: res.data[0].client_notes,
        //     communication_history: res.data[0].communications

        // })

        if (this.state.sku) {
          let products = {
            products: JSON.stringify(this.state.sku),
            quote_id: this.state.quote_id,
          };

          axios
            .post(`${import.meta.env.VITE_API_URL}/edit-quote-products`, products)
            .then((res1) => {
              let stoneProduct = false;
              let glassProduct = false;
              res1.data.map((product) => {
                if (product.material === "Stone") {
                  stoneProduct = true;
                }
                if (product.material === "Glass") {
                  glassProduct = true;
                }
              });

              if (res.data[0].cutouts && glassProduct) {
                this.setStateDate("addCutouts", res.data[0].cutouts);
              }
              if (res.data[0].cutoutServices && glassProduct) {
                this.setStateDate(
                  "AddExtraservicesGlass",
                  res.data[0].cutoutServices
                );
              }
              this.setStateDate("sku", res.data[0].sku);
              if (res.data[0].designPanel.length > 0 && glassProduct) {
                this.setStateDate("AddDesignPanel", res.data[0].designPanel);
              }
              if (glassProduct) {
                this.setStateDate("total_glass_area", res.data[0].glass_area);
              }

              this.setState({
                ...this.state,
                products: res1.data,
                stoneProduct: stoneProduct,
                glassProduct: glassProduct,
              });
              console.log(this.state.products);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    axios.get(`${import.meta.env.VITE_API_URL}/worktop-dimensions`).then((worktopD) => {
      axios
        .get(`${import.meta.env.VITE_API_URL}/splashback-dimensions`)
        .then((splashB) => {
          let splashback_dimensions = splashB.data.map((splashB) => {
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
        this.setState(
          {
            // using spread operator, you will need transform-object-rest-spread from babel or
            // another transpiler to use this
            ...this.state, // spreading in state for future proofing
            isLoaded: true,
            Extra_ServicesStone: extraServices_stone,
          },
          () => {
            this.setState(
              {
                isLoaded1: true,
                sparkle: this.state.sparkle === 1 ? 1 : 0,
              },
              () => {
                console.log(this.state.sparkle);
                console.log("state set");
              }
            );
          }
        );
      });
    setTimeout(() => {
      this.getGlassExtraTotal();
      this.getStoneExtraTotal();
    }, 2000);
  }
  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
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
          design_cutouts: "",
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
    this.setState(
      {
        ...this.state,
        AddDesignPanel: removeFromDesignpanel,
      },
      () => {
        let toatlArea = 0;
        let items = this.state.AddDesignPanel;
        for (var i in items) {
          for (var j in items[i].adddesignglass) {
            toatlArea += parseFloat(items[i].adddesignglass[j].area);
          }
        }
        this.setState({
          ...this.state,
          total_glass_area: toatlArea,
        });
      }
    );
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
    let oldFabricationOption = this.state.addFabrication;
    let newFabricationOption = {
      item: 0,
      item_name: "",
      quantity: 0,
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
    this.setState(
      {
        AddDesignPanel: designPanels,
      },
      () => {
        let toatlArea = 0;
        let items = this.state.AddDesignPanel;
        for (var i in items) {
          for (var j in items[i].adddesignglass) {
            toatlArea += parseFloat(items[i].adddesignglass[j].area);
          }
        }
        this.setState({
          ...this.state,
          total_glass_area: toatlArea,
        });
      }
    );
  };

  removeDesignGlass = (event) => {
    let panelIndex = event.target.getAttribute("data-design-panel-index");
    let index = event.target.getAttribute("data-index");

    let designPanels = this.state.AddDesignPanel;
    let requiredPanel = designPanels[panelIndex];
    requiredPanel.adddesignglass.splice(index, 1);
    designPanels.splice(panelIndex, 1, requiredPanel);
    this.setState(
      {
        AddDesignPanel: designPanels,
      },
      () => {
        let toatlArea = 0;
        let items = this.state.AddDesignPanel;
        for (var i in items) {
          for (var j in items[i].adddesignglass) {
            toatlArea += parseFloat(items[i].adddesignglass[j].area);
          }
        }
        this.setState({
          ...this.state,
          total_glass_area: toatlArea,
        });
      }
    );
  };
  removeWorktopDimension = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromWorktopDimension = this.state.addWorktopDimensions;
    console.log("here: ", removeFromWorktopDimension);
    removeFromWorktopDimension.splice(index, 1);
    this.setState(
      {
        ...this.state,
        addWorktopDimensions: removeFromWorktopDimension,
      },
      () => {
        let totalArea = 0;
        let items = this.state.addWorktopDimensions;
        for (var k in items) {
          totalArea += parseFloat(items[k].area);
        }
        this.setState({
          ...this.state,
          total_worktop_area: totalArea,
        });
      }
    );
  };
  removeExtraServices = (e) => {
    console.log("123 test");
    let index = e.target.getAttribute("data-index");
    let removeFromExtraServices = this.state.AddExtraServices;
    removeFromExtraServices.splice(index, 1);
    this.setState(
      {
        ...this.state,
        AddExtraServices: removeFromExtraServices,
      },
      () => {
        this.getStoneExtraTotal();
      }
    );
  };
  removeExtraServicesGlass = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromExtraServices = this.state.AddExtraservicesGlass;
    removeFromExtraServices.splice(index, 1);
    this.setState(
      {
        ...this.state,
        AddExtraservicesGlass: removeFromExtraServices,
      },
      () => {
        this.getGlassExtraTotal();
      }
    );
  };
  removeSplashbackDimension = (e) => {
    let indexofSplash = e.target.getAttribute("data-index");
    let removeFromSplashDimension = this.state.addSplashbackDimensions;
    removeFromSplashDimension.splice(indexofSplash, 1);
    this.setState(
      {
        ...this.state,
        addSplashbackDimensions: removeFromSplashDimension,
      },
      () => {
        let totalArea = 0;
        let items = this.state.addSplashbackDimensions;
        for (var k in items) {
          totalArea += parseFloat(items[k].area);
        }
        this.setState({
          total_splashback_area: totalArea,
        });
      }
    );
  };
  removeFabricationOption = (e) => {
    let index = e.target.getAttribute("data-index");
    let removeFromFabrication = this.state.addFabrication;
    removeFromFabrication.splice(index, 1);
    this.setState(
      {
        ...this.state,
        addFabrication: removeFromFabrication,
      },
      () => {
        this.getStoneExtraTotal();
      }
    );
  };
  removeCutout = (e) => {
    console.log("test 123");
    let index = e.target.getAttribute("data-index");
    let removeFromCutouts = this.state.addCutouts;
    removeFromCutouts.splice(index, 1);
    this.setState(
      {
        ...this.state,
        addCutouts: removeFromCutouts,
      },
      () => {
        this.getGlassExtraTotal();
      }
    );
  };

  render() {
    if (this.state.isRedirect) {
      return (
        <Navigate to="/admin/quote-list" replace={false} />
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
    let num = 0;
    let html6 = AddDesignPanel.map((designPanel, designPanelIndex) => {
      return (
        <React.Fragment key={designPanelIndex}>
          <div className="row">
            {designPanelIndex == 0 ? "" : <hr className="break2" />}

            <div className="col-md-8">
              {/* <Select options={design_options} /> */}
              <select
                name={`design_select-${designPanelIndex}`}
                class="custom-text custome-select-box-get-a-quote noborder changeColor"
                onChange={(e) => this.handleDesignChange(e, designPanelIndex)}
                value={designPanel.design}
              >
                <option className="custom-text" key="base" value="">
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
                  className="Red-delete-Panel-button noprint"
                  data-design-panel-index={designPanelIndex}
                  key="minus"
                  onClick={this.RemoveDesignPanel}
                >
                  -
                </button>
              )}
              <button
                type="button"
                className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more noprint noprint noprint"
                onClick={this.addDesignPanel}
                style={{
                  minWidth: "108px",
                  fontSize: "12px",
                  marginLeft: "2%",
                  padding: "2%",
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
                        Panel&nbsp;{designIndex + 1}
                      </div>
                    ) : (
                      <div className="custom-span-get-quote panel-font">
                        Panel&nbsp;{designIndex + 1}
                      </div>
                    )}
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      {designIndex == 0 ? (
                        <label className="custome_lable_area">Width(mm)</label>
                      ) : (
                        ""
                      )}
                      <input
                        type="number"
                        placeholder=""
                        className="form-control custom-text_panel noborder"
                        // value={this.state.design_width}
                        name={`design_width-${designIndex}`}
                        value={GlassDesign.design_width}
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
                        <label className="custome_lable_area">
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
                        value={GlassDesign.design_lenght}
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
                        <label className="custome_lable_pieces">Pieces</label>
                      ) : (
                        ""
                      )}
                      <input
                        type="text"
                        placeholder=""
                        className="form-control custom-text_panel_Pieces noborder"
                        // value={this.state.design_pieces}
                        name={`design_pieces-${designIndex}`}
                        value={GlassDesign.design_pieces}
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
                        type="number"
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
                        <label className="custome_lable_area custo">
                          Cutouts
                        </label>
                      ) : (
                        ""
                      )}
                      <input
                        type="number"
                        placeholder=""
                        className="form-control noborder custo2 custome_text_field_edit_quote"
                        name={`design_cutouts-${designIndex}`}
                        value={GlassDesign.design_cutouts}
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
                        <label className="custome_lable_area">Shaped</label>
                      ) : (
                        ""
                      )}
                      <div style={{ display: "flex" }}>
                        <input
                          name={`design_panael_shaped-${designIndex}`}
                          type="checkbox"
                          defaultChecked={GlassDesign.shaped}
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
                        <div style={{ "font-size": "10px" }}>
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
                          className="Green-Add-Panel_button noprint first_plus_button"
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
                            className="Green-Add-Panel_button noprint"
                            key="add"
                            data-design-panel-index={designPanelIndex}
                            onClick={this.addDesignGlass}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="Red-delete-Panel-button noprint"
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
                    <label className="custome_lable_area pdfLabel">Item</label>
                  ) : (
                    ""
                  )}
                  {/* <Select options={splashback} /> */}
                  <select
                    name="splashback_select"
                    className="custom-text custome-select-box-get-a-quote noborder changeColor"
                    onChange={(e) => this.splash_options(e, indexofSplash)}
                    value={SplashbackDimension.item}
                  >
                    <option className="custom-text" key="base" value="">
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
                    <label className="custome_lable_area">Width(mm)</label>
                  ) : (
                    ""
                  )}
                  <input
                    type="number"
                    placeholder=""
                    className="form-control custom-text noborder"
                    // value={this.state.splashback_width}
                    name="splashback_width"
                    value={SplashbackDimension.splashback_width}
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
                    <label className="custome_lable_area">Length(mm)</label>
                  ) : (
                    ""
                  )}
                  <input
                    type="number"
                    placeholder=""
                    className="form-control custom-text noborder"
                    // value={this.state.splashback_lenght}
                    name="splashback_lenght"
                    value={SplashbackDimension.splashback_lenght}
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
                    <label className="custome_lable_area ">Area(m²)</label>
                  ) : (
                    ""
                  )}
                  <input
                    type="number"
                    className="form-control custom-text noborder disabled_text_field"
                    name={`worktop_value-${indexofSplash}`}
                    disabled
                    value={(
                      (SplashbackDimension.splashback_width *
                        SplashbackDimension.splashback_lenght) /
                      1000000
                    ).toFixed(2)}
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  {indexofSplash == 0 ? (
                    <button
                      type="button"
                      className="Green-Add-Panel_button noprint first_plus_button"
                      key="add"
                      onClick={this.addSplashbackDimension}
                    >
                      +
                    </button>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <button
                        type="button"
                        className="Green-Add-Panel_button noprint"
                        key="add"
                        onClick={this.addSplashbackDimension}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="Red-delete-Panel-button noprint"
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
                  <label className="custome_lable_area">Item</label>
                ) : (
                  ""
                )}
                {/* <Select options={worktop} /> */}
                <select
                  name={`worktop_select-${index}`}
                  class="custom-text custome-select-box-get-a-quote noborder changeColor"
                  value={WorktopDimension.item}
                  onChange={(e) => this.worktop_options(e, index)}
                >
                  <option className="custom-text" key="base" value="">
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
                  <label className="custome_lable_area">Width(mm)</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text noborder"
                  name={`worktop_width-${index}`}
                  value={WorktopDimension.worktop_width}
                  data-index={index}
                  onChange={(e) => this.calculatee(e, "worktop_width", index)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Length(mm)</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  value={WorktopDimension.worktop_lenght}
                  className="form-control custom-text noborder"
                  name={`worktop_lenght-${index}`}
                  onChange={(e) => this.calculatee(e, "worktop_lenght", index)}
                />
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Area(m²)</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  className="form-control custom-text noborder disabled_text_field"
                  name={`worktop_value-${index}`}
                  disabled
                  value={(
                    (WorktopDimension.worktop_width *
                      WorktopDimension.worktop_lenght) /
                    1000000
                  ).toFixed(2)}
                />
              </div>
            </div>
            <div className="col-md-2" style={{ maxHeight: "15px" }}>
              {index == 0 ? (
                <div className="form-group p-0 m-0 first_plus_button">
                  <button
                    type="button"
                    className="Green-Add-Panel_button noprint"
                    key="add"
                    onClick={this.addWorktopDimension}
                  >
                    +
                  </button>
                </div>
              ) : (
                <div
                  className="form-group p-0 m-0 mt-1"
                  style={{ display: "flex" }}
                >
                  <button
                    type="button"
                    className="Green-Add-Panel_button noprint"
                    key="add"
                    onClick={this.addWorktopDimension}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="Red-delete-Panel-button noprint"
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
      return (
        <React.Fragment key={index}>
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Item</label>
                ) : (
                  ""
                )}
                {/* <Select options={fabrication} /> */}
                <select
                  name="fabrication_select"
                  class="custom-text custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) =>
                    this.handleFabricationPrice(e, "item", index)
                  }
                  value={fabricationOption.item}
                >
                  <option className="custom-text" key="base" value="">
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

            <div className="col-md-2" style={{ "padding-left": "0px" }}>
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_fabrication">UnitPrice</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_extra-services_quantity noborder custome_text_field_edit_quote"
                  step="any"
                  // value={this.state.fabrication_quantity}
                  name="fabrication_unit_price"
                  value={fabricationOption.unit_price}
                  onChange={(e) =>
                    this.handleFabrication(e, "unit_price", index)
                  }
                />
              </div>
            </div>

            <div className="col-md-2" style={{ "padding-left": "0px" }}>
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_fabrication">Quantity</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_extra-services_quantity noborder custome_text_field_edit_quote"
                  // value={this.state.fabrication_quantity}
                  name="fabrication_quantity"
                  id={`fabrication_quantity_${index}`}
                  value={fabricationOption.quantity}
                  onChange={(e) => this.handleFabrication(e, "quantity", index)}
                />
              </div>
            </div>

            <div
              className="col-md-1 col-lg-1 "
              style={{ "padding-left": "0px" }}
            >
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Price</label>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  placeholder=""
                  className="form-control noborder custo2 custome_text_field_edit_quote"
                  name="Cutouts_price"
                  value={fabricationOption.price}
                  style={{ "margin-left": "0px", padding: "0px" }}
                  disabled
                // value={this.state.Cutouts_quantity}
                />
              </div>
            </div>

            <div className="col-md-2" style={{ "padding-left": "0px" }}>
              <div className="form-group">
                {index == 0 ? (
                  <button
                    type="button"
                    className="Green-Add-Panel_button noprint first_plus_button"
                    key="add"
                    onClick={this.addFabricationOption}
                  >
                    +
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="Green-Add-Panel_button noprint"
                      key="add"
                      onClick={this.addFabricationOption}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="Red-delete-Panel-button noprint"
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
            <div className="col-md-4 col-lg-4">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Item</label>
                ) : (
                  ""
                )}
                {/* <Select options={cutouts_} /> */}
                <select
                  name="cutout_select"
                  class="custom-text custome-select-box-get-a-quote noborder changeColor"
                  value={Cutouts.item}
                  onChange={(e) => this.handleCutoutsPrice(e, "item", index)}
                >
                  <option className="custom-text" key="base" value="">
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

            <div
              className="col-md-2 col-lg-2 "
              style={{ "padding-left": "0px" }}
            >
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">UnitPrice</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_cutouts noborder custome_text_field_edit_quote"
                  name="Cutouts_price"
                  value={Cutouts.unit_price}
                  id={`cutouts_price_${index}`}
                  style={{ padding: "0px" }}
                  // value={this.state.Cutouts_quantity}
                  onChange={(e) => this.handleCutouts(e, "unit_price", index)}
                />
              </div>
            </div>

            <div
              className="col-md-2 col-lg-2 "
              style={{ "padding-left": "0px" }}
            >
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area ">Quantity</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  placeholder=""
                  className="form-control custom-text_cutouts noborder custome_text_field_edit_quote"
                  name="Cutouts_quantity"
                  id={`checkout_quantity_${index}`}
                  value={Cutouts.quantity}
                  // value={this.state.Cutouts_quantity}
                  onChange={(e) => this.handleCutouts(e, "quantity", index)}
                />
              </div>
            </div>

            <div
              className="col-md-1 col-lg-1 "
              style={{ "padding-left": "0px" }}
            >
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Price</label>
                ) : (
                  ""
                )}
                <input
                  type="text"
                  placeholder=""
                  className="form-control noborder custo2 custome_text_field_edit_quote"
                  name="Cutouts_price"
                  value={Cutouts.price}
                  id={`cutouts_price_${index}`}
                  style={{ "margin-left": "0px", padding: "0px" }}
                  disabled
                // value={this.state.Cutouts_quantity}
                />
              </div>
            </div>

            <div
              className="col-md-2 col-lg-2"
              style={{ "padding-left": "0px" }}
            >
              <div className="form-group">
                {index == 0 ? (
                  <button
                    type="button"
                    className="Green-Add-Panel_button first_plus_button"
                    key="add"
                    onClick={this.addCutouts}
                  >
                    +
                  </button>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="Green-Add-Panel_button noprint"
                      key="add"
                      onClick={this.addCutouts}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="Red-delete-Panel-button noprint"
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
                  <label className="custome_lable_area">Item</label>
                ) : (
                  ""
                )}
                {/* <Select options={Extra_ServicesStone}  */}
                {/* onChange={this.handleServicePriceStone} */}
                {/* />                           */}
                <select
                  name="extra_stone_select"
                  class="custom-text custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) => this.handleServicePriceStone(e, index)}
                  value={extraservices.item}
                >
                  <option className="custom-text" key="base" value="">
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
            <div className="col-md-2 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">UnitPrice</label>
                ) : (
                  ""
                )}

                <input
                  type="number"
                  name="selected_service"
                  value={extraservices.unit_price}
                  onChange={(e) =>
                    this.calculateStoneService(e, "unit_price", index)
                  }
                  className="form-control custom-text noborder custome_text_field_edit_quote"
                />
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
                  className="form-control custom-text_extra-services_quantity noborder custome_text_field_edit_quote"
                  // value={this.state.extra_services_quantity}
                  name="extra_services_quantity"
                  value={extraservices.quantity}
                  // onChange={this.handleChange.bind(this)}
                  onChange={(e) =>
                    this.calculateStoneService(e, "quantity", index)
                  }
                />
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Price</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  className="form-control custom-text noborder disabled_text_field custome_text_field_edit_quote"
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
                    className="Green-Add-Panel_button noprint first_plus_button"
                    key="add"
                    onClick={this.addExtraServices}
                    style={{ float: "right" }}
                  >
                    +
                  </button>
                ) : (
                  <div style={{ display: "flex" }}>
                    <button
                      type="button"
                      className="Green-Add-Panel_button noprint"
                      key="add"
                      onClick={this.addExtraServices}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="Red-delete-Panel-button noprint"
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
                  <label className="custome_lable_area">Item</label>
                ) : (
                  ""
                )}
                {/* <Select options={ExtraServices}         
                                onChange={this.handleServicePrice}
                                /> */}
                <select
                  name="extra_select"
                  class="custom-text custome-select-box-get-a-quote noborder changeColor"
                  onChange={(e) => this.handleCutoutPriceStone(e, index)}
                  value={extraservicesglass.item}
                >
                  <option className="custom-text" key="base" value="">
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
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">UnitPrice </label>
                ) : (
                  ""
                )}

                <input
                  type="number"
                  name="selected_service"
                  value={extraservicesglass.unit_price}
                  onChange={(e) =>
                    this.calculateCutoutsService(e, "unit_price", index)
                  }
                  className="form-control custom-text noborder custome_text_field_edit_quote custome_text_field_edit_quote"
                />
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
                  className="form-control custom-text_extra-services_quantity noborder custome_text_field_edit_quote"
                  // value={this.state.extra_services2_quantity}
                  name="extra_services2_quantity"
                  value={extraservicesglass.quantity}
                  onChange={(e) =>
                    this.calculateCutoutsService(e, "quantity", index)
                  }
                />
              </div>
            </div>
            <div className="col-md-1 cust-marg-get-a-quote">
              <div className="form-group">
                {index == 0 ? (
                  <label className="custome_lable_area">Price</label>
                ) : (
                  ""
                )}
                <input
                  type="number"
                  className="form-control custom-text noborder disabled_text_field custome_text_field_edit_quote"
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
                    className="Green-Add-Panel_button noprint first_plus_button"
                    key="add"
                    onClick={this.addExtraServicesGlass}
                    style={{ float: "right" }}
                  >
                    +
                  </button>
                ) : (
                  <div style={{ display: "flex" }}>
                    <button
                      type="button"
                      className="Green-Add-Panel_button noprint"
                      key="add"
                      onClick={this.addExtraServicesGlass}
                    >
                      +
                    </button>
                    <button
                      className="Red-delete-Panel-button noprint"
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
      <div ref={(el) => (this.instance = el)}>
        {" "}
        <div>
          <Helmet>
            <title>{`GNF - ${this.props.title}`}</title>
          </Helmet>
          {/*Forget Password section*/}
          {this.state.loading ? <div className="loader"></div> : ""}
          <form onSubmit={this.handleSubmit}>
            <section className="admin-dashboard" style={{ width: 2596 }}>
              <div className="row col-md-12">
                <div className="col-md-3">
                  <DashboardHeader />
                </div>
                <div
                  className="col-md-9"
                  style={{ "margin-left": "6%", "margin-top": "1%" }}
                >
                  <div className="row">
                    <div
                      className="container"
                      style={{ marginLeft: "-14%", width: "63%" }}
                    >
                      <div className="row">
                        <div className="col-12">
                          {this.state.products.length === 5 ? (
                            <span style={{ fontSize: "20px" }}>
                              You reached maximum limit of products, <br />
                              You can'not add new product .
                            </span>
                          ) : (
                            <React.Fragment>
                              <div
                                className="col-12"
                                style={{ "margin-left": "-1.7%" }}
                              >
                                <span
                                  className="col-12 _customHeading"
                                  style={{ fontSize: "20px" }}
                                >
                                  Edit Quote
                                  <br />
                                </span>

                                {this.state.addNewProduct ? (
                                  <div className="row">
                                    <span
                                      className="font-12"
                                      style={{
                                        marginLeft: "1.7%",
                                      }}
                                    >
                                      Add New Product to Quote
                                    </span>
                                    <div
                                      className="container"
                                      style={{ display: "flex", zIndex: 1 }}
                                    >
                                      <div className="col-md-4 col-sm-12">
                                        <Select
                                          value={this.state.selected_product}
                                          placeholder="Search Product"
                                          className="custome_select_box"
                                          onChange={(e) => this.getThickness(e)}
                                          options={
                                            this.state.all_products_search
                                          }
                                        />
                                      </div>

                                      {!this.state.filter_thickness.length >
                                        0 ? (
                                        ""
                                      ) : (
                                        <div className="col-md-3 col-sm-12">
                                          <Select
                                            value={
                                              this.state.selected_thickness
                                            }
                                            placeholder="Select Thickness"
                                            className="custome_select_box"
                                            onChange={(e) =>
                                              this.getFinishes(e)
                                            }
                                            options={
                                              this.state.filter_thickness
                                            }
                                          />
                                        </div>
                                      )}

                                      {!this.state.filter_finishes.length >
                                        0 ? (
                                        ""
                                      ) : (
                                        <div className="col-md-3 col-sm-12">
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
                                        className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more"
                                        onClick={(e) => this.saveNewProduct(e)}
                                        style={{
                                          minWidth: "120px",
                                          paddingLeft: "0px",
                                          paddingRight: "0px",
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                        }}
                                      >
                                        Add to list
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </React.Fragment>
                          )}

                          <br />

                          <span className="font-12">Added Sku List</span>

                          <table className="table table-image quote_table_border">
                            <thead className="header_color">
                              <tr>
                                <th className=" sky_th_color pl-2" scope="col">
                                  Item
                                </th>
                                <th className=" sky_th_color pl-2" scope="col">
                                  Material
                                </th>
                                <th className=" sky_th_color pl-2" scope="col">
                                  Image
                                </th>
                                <th className=" sky_th_color pl-2" scope="col">
                                  Thickness
                                </th>

                                <th className=" sky_th_color pl-2" scope="col">
                                  Finish
                                </th>
                                <th className=" sky_th_color pl-2" scope="col">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.products.map((product, index) => {
                                return (
                                  <tr>
                                    <td
                                      className="custom-text pl-4"
                                      style={{ width: "auto" }}
                                    >
                                      {product.name}
                                    </td>
                                    <td
                                      className="custom-text pl-4"
                                      style={{ width: "auto" }}
                                    >
                                      {product.material}
                                    </td>
                                    <td
                                      className="custom-text pl-4  w-25"
                                      style={{ width: "auto" }}
                                    >
                                      {
                                        product.image ? <img
                                          src={`${import.meta.env.VITE_API_URL}${product.image}`}
                                          className="custom-text img-fluid sku_img_thumbnails"
                                          alt="Quartz"
                                          style={{ marginLeft: "37%", marginBottom: "1%" }}
                                        /> :
                                          <img
                                            src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/default-placeholder.jpg`}
                                            className="custom-text img-fluid sku_img_thumbnails"
                                            alt="Quartz"
                                            style={{ marginLeft: "37%", marginBottom: "1%" }}
                                          />
                                      }

                                    </td>

                                    <td
                                      className="custom-text pl-4"
                                      style={{ width: "auto" }}
                                    >
                                      {product.thickness}
                                    </td>
                                    <td
                                      className="custom-text pl-4"
                                      style={{ width: "auto" }}
                                    >
                                      {product.finish}
                                    </td>

                                    <td
                                      className="custom-text pl-4 text remove_item_sku"
                                      style={{ width: "auto" }}
                                    >
                                      <button
                                        className="cutome-rounded-delete-button btn btn-outline-primary-2 btn-round btn-more"
                                        onClick={(e) =>
                                          this.removeProduct(index)
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
                          <button
                            type="button"
                            className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more"
                            onClick={(e) => this.showAddNewProduct(e)}
                            style={{
                              float: "right",
                              minWidth: "160px",
                              padding: "0.4px",
                              marginTop: "-0.7%",
                            }}
                          >
                            Add New Product
                          </button>
                        </div>
                      </div>
                      <br />
                      {this.state.stoneProduct ? (
                        <React.Fragment>
                          <div style={{ display: "flex" }}>
                            <span className="font-12">
                              Measurements & Price Estimator
                            </span>
                            <span
                              className="custom-text"
                              style={{ width: "auto" }}
                            >
                              (Quartz, Marble, Granite, Compact Worktops)
                            </span>
                          </div>
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
                                <span className="font-class-design">
                                  Total Area :
                                  {(
                                    total_worktop_area + total_splashback_area
                                  ).toFixed(2)}
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
                                      class="custom-text custome-select-box-get-a-quote noborder"
                                      onChange={(e) => this.handleEdge(e)}
                                      value={this.state.edge.item}
                                    >
                                      <option
                                        className="custom-text"
                                        key="base"
                                        value=""
                                      >
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
                                <div
                                  class="row"
                                  style={{
                                    "border-top": "1px solid black",
                                    marginRight: "0px",
                                    padding: "1%",
                                  }}
                                >
                                  <div class="col-md-6 table_product_subtotal"></div>

                                  <div class="col-md-6 row product_sub_total product_sub_total_padding">
                                    <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                      {" "}
                                      <strong style={{ color: "black" }}>
                                        Fabrications Sub Total
                                      </strong>
                                    </div>
                                    <div class="col-md-4 product_sub_total_border product_sub_total_padding">
                                      {" "}
                                      £{this.state.stoneExtraTotal}
                                    </div>
                                    {/* <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                      {" "}
                                      <strong>VAT (20%)</strong>
                                    </div>
                                    <div class="col-md-4 product_sub_total_border product_sub_total_padding">
                                      £
                                      {(
                                        this.state.stoneExtraTotal * 0.2
                                      ).toFixed(2)}
                                    </div> */}
                                    {/* <div class="col-md-8 product_sub_total_border product_sub_total_padding product_total">
                                      {" "}
                                      <strong class="white_strong">
                                        Fabrications Total
                                      </strong>
                                    </div> */}
                                    {/* <div class="col-md-4 product_sub_total_border product_sub_total_padding product_total">
                                      £{this.state.stoneExtraTotal.toFixed(2)} */}
                                    {/* {this.state.stoneExtraTotal +
                                        this.state.stoneExtraTotal * 0.2} */}
                                    {/* </div> */}
                                  </div>
                                </div>
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
                          <span className="font-12">
                            Measurements & Bespoke Glass Price Estimator
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
                                    1. Make sure you put all the sizes in
                                    millimetres
                                  </li>
                                  <br />
                                  <li>
                                    2. Glass panels over 2950 x 1350 mm are
                                    charged as oversized panels- please call us
                                    for a quotation.
                                  </li>
                                  <li>
                                    3. If you need Socket Cutouts or holes on
                                    your panels, make sure you put how many of
                                    them you need on each panel in the CUTOUT
                                    field
                                  </li>
                                  <li>
                                    4. If your glass is <strong>SHAPED</strong>{" "}
                                    or not should be completed according to the
                                    image below:
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
                                  <span className="font-class-design">
                                    {" "}
                                    Total Area:{total_glass_area.toFixed(2)}m²
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-12 custome_table_get_a_quote">
                                <div className="row radio-margin ">
                                  <div className="Col-md-3 padding-class2">
                                    Sparkle Add-on:
                                  </div>
                                  <div className="col-md-2 noprint">
                                    <label
                                      className="radio-inline1 noprint"
                                      style={{
                                        marginTop: "6%",
                                        marginLeft: "2%",
                                      }}
                                    >
                                      {this.state.isLoaded1 === true && (
                                        <input
                                          type="radio"
                                          name="optradio"
                                          id="yes"
                                          // value={this.state.sparkle}
                                          onChange={(e) => this.sparkleGet(1)}
                                          // checked={this.state.sparkle === 0  && true}
                                          defaultChecked={this.state.sparkle}
                                        />
                                      )}
                                      Yes
                                    </label>
                                  </div>
                                  <div
                                    className="col-md-2 noprint"
                                    style={{ marginLeft: "-9%" }}
                                  >
                                    <label
                                      class="radio-inline2 noprint"
                                      style={{
                                        marginTop: "6%",
                                        marginLeft: "2%",
                                      }}
                                    >
                                      <input
                                        type="radio"
                                        name="optradio"
                                        id="no"
                                        onChange={(e) => this.sparkleGet(0)}
                                        // value={this.state.sparkle}
                                        // checked={
                                        //   this.state.sparkle === 1
                                        //     ? true
                                        //     : false
                                        // }
                                        defaultChecked={
                                          this.state.sparkle === 0 && true
                                        }
                                      />
                                      No
                                    </label>
                                  </div>
                                  <div className="col-md-4 print-only">
                                    {this.state.surveyCheck}
                                  </div>
                                  <div className="font-class">
                                    <div className="side-survey">
                                      Survey & Fit Options:
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <select
                                      name="surveyfit_select"
                                      class="custom-text select-box-survey-fit noborder changeColor"
                                      value={this.state.survey.item}
                                      onChange={(e) => this.handleSurvey(e)}
                                    >
                                      <option
                                        className="custom-text"
                                        key="base"
                                        value=""
                                      >
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
                                <div className="padding-class font-class-cutouts">
                                  Cutouts
                                  {cutouthtml}
                                </div>
                                <div
                                  className="padding-class font-class-extra-service"
                                  style={{ fontWeight: "bold" }}
                                >
                                  Extra Services
                                  {html5}
                                  <div
                                    class="row"
                                    style={{
                                      "border-top": "1px solid black",
                                      marginRight: "0px",
                                      padding: "1%",
                                    }}
                                  >
                                    <div class="col-md-6 table_product_subtotal"></div>

                                    <div class="col-md-6 row product_sub_total product_sub_total_padding">
                                      <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                        {" "}
                                        <strong style={{ color: "black" }}>
                                          Fabrications Sub Total
                                        </strong>
                                      </div>
                                      <div class="col-md-4 product_sub_total_border product_sub_total_padding">
                                        {" "}
                                        £{this.state.glassExtraTotal}
                                      </div>
                                      {/* <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                        {" "}
                                        <strong>VAT (20%)</strong>
                                      </div>
                                      <div class="col-md-4 product_sub_total_border product_sub_total_padding">
                                        £
                                        {(
                                          this.state.glassExtraTotal * 0.2
                                        ).toFixed(2)}
                                      </div> */}
                                      {/* <div class="col-md-8 product_sub_total_border product_sub_total_padding product_total">
                                        {" "}
                                        <strong class="white_strong">
                                          Fabrications Total
                                        </strong>
                                      </div> */}
                                      {/* <div class="col-md-4 product_sub_total_border product_sub_total_padding product_total">
                                        £ */}
                                      {/* {(
                                          this.state.glassExtraTotal +
                                          this.state.glassExtraTotal * 0.2
                                        ).toFixed(2)} */}
                                      {/* {this.state.glassExtraTotal.toFixed()}
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ) : (
                        ""
                      )}

                      {/* <div class="row">
      <div class="col-xs-9 table_product_subtotal"></div>
      <div class="col-xs-3 product_sub_total product_sub_total_padding">

    
     @if(product.material === "Stone")
     <div class="col-xs-8 product_sub_total_border product_sub_total_padding"> <strong>Material Sub Total</strong></div>
     <div class="col-xs-4 product_sub_total_border product_sub_total_padding"> £{{product.price * body.stone_area}}</div>
      <div class="col-xs-8 product_sub_total_border product_sub_total_padding"> <strong>VAT  (20%)</strong></div>
     <div class="col-xs-4 product_sub_total_border product_sub_total_padding">£{{((product.price * body.stone_area) * 0.2)}}</div>
       <div class="col-xs-8 product_sub_total_border product_sub_total_padding product_total"> <strong class="white_strong">Material Total</strong></div>
     <div class="col-xs-4 product_sub_total_border product_sub_total_padding product_total">£{{((product.price * body.stone_area) + ((product.price * body.stone_area) * 0.2))}}</div>
    @else
         <div class="col-xs-8 product_sub_total_border product_sub_total_padding"> <strong>Material Sub Total</strong></div>
     <div class="col-xs-4 product_sub_total_border product_sub_total_padding"> £{{product.price * body.glass_area}}</div>
     <div class="col-xs-8 product_sub_total_border product_sub_total_padding"> <strong>VAT  (20%)</strong></div>
     <div class="col-xs-4 product_sub_total_border product_sub_total_padding">£{{((product.price * body.glass_area) * 0.2)}}</div>
       <div class="col-xs-8 product_sub_total_border product_sub_total_padding product_total"> <strong class="white_strong">Material Total</strong></div>
     <div class="col-xs-4 product_sub_total_border product_sub_total_padding product_total">£{{((product.price * body.glass_area) + ((product.price * body.glass_area) * 0.2))}}</div>
    @endif
    
      </div>
      </div> 
    </div>
<br />
 @endeach */}
                    </div>
                    <div style={{ marginRight: "13%", maxWidth: "35%" }}>
                      <span
                        className="font-12"
                        style={{
                          marginLeft: "-1.5%",
                        }}
                      >
                        Quotations History
                      </span>
                      <div
                        style={{
                          border: "1px solid black",
                          padding: "2%",
                          width: 732,
                        }}
                        className="row col-md-12 col-lg-12 col-sm-12 "
                      >
                        {[...this.state.versions]
                          .reverse()
                          .map((version, index) => {
                            return (
                              <React.Fragment>
                                <div
                                  style={{
                                    width: "100%",
                                    display: "flex",

                                    flexDirection: "column",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                    }}
                                  >
                                    <div
                                      className="custome_lable_area"
                                      style={{
                                        "margin-top": "3%",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Version{" "}
                                      {this.state.versions.length - index},
                                    </div>
                                    <div
                                      className="custom-text"
                                      style={{
                                        "margin-top": "3%",
                                        "padding-left": "5px",
                                        width: "auto",
                                      }}
                                    >
                                      {moment(version.created_at).format(
                                        "DD-MMMM-YYYY HH:mm"
                                      )}
                                    </div>
                                    <div
                                      className="custom-text"
                                      style={{
                                        "margin-top": "3%",
                                        "padding-left": "5px",
                                      }}
                                    >
                                      {version.creator
                                        ? version.creator
                                        : "Manager"}
                                    </div>
                                    <div
                                      style={{
                                        "margin-top": "1.7%",
                                        "padding-left": "5px",
                                      }}
                                    >
                                      <button
                                        type="button"
                                        onClick={(e) =>
                                          this.dublicateQuote(index)
                                        }
                                        class="cutome-rounded-history-button btn btn-outline-primary-2 btn-round btn-more"
                                      >
                                        Duplicate
                                      </button>
                                    </div>
                                    <div
                                      style={{
                                        "margin-top": "1.7%",
                                        "padding-left": "5px",
                                      }}
                                    >
                                      <a
                                        href={`${import.meta.env.VITE_API_URL}${version.path}`}
                                        class="cutome-rounded-history-button btn btn-outline-primary-2 btn-round btn-more"
                                        target="_blank"
                                      >
                                        Download
                                      </a>
                                    </div>
                                    <div
                                      style={{
                                        "margin-top": "1.7%",
                                        "padding-left": "5px",
                                      }}
                                    >
                                      <button
                                        type="button"
                                        onClick={(e) =>
                                          this.sendVersionPdf(e, version.path)
                                        }
                                        className="cutome-rounded-history-button btn btn-outline-primary-2 btn-round btn-more"
                                        style={{
                                          minWidth: "120px",
                                        }}
                                      >
                                        Email to Client
                                      </button>
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      "margin-left": "-2%",
                                      "margin-top": "-2%",
                                      "margin-bottom": "3%",
                                    }}
                                  >
                                    <div
                                      className="custom-text"
                                      style={{
                                        height: "auto",
                                        marginLeft: "6%",
                                        marginTop: "2%",
                                        width: "95%",
                                        overflow: "auto",
                                      }}
                                    >
                                      {version.internal_notes}
                                    </div>
                                  </div>
                                </div>

                                <br />
                                <br />
                              </React.Fragment>
                            );
                          })}
                      </div>
                      <div
                        style={{
                          maxWidth: "100%",
                          marginLeft: "-1%",
                          marginTop: "5%",
                        }}
                      >
                        <span className="font-12">Communications History</span>{" "}
                        <button
                          type="button"
                          onClick={(e) => this.showCommunicaton(e)}
                          className="cutome-rounded-history-button btn btn-outline-primary-2 btn-round btn-more"
                          style={{
                            padding: "1%",
                            paddingTop: "1px",
                            paddingBottom: "1px",
                            minWidth: "65px",
                          }}
                        >
                          Add New
                        </button>
                        <div
                          style={{
                            border: "1px solid black",
                            padding: "1%",
                            "margin-top": "2%",
                          }}
                        >
                          {[...this.state.communication_history]
                            .reverse()
                            .map((communication, index) => {
                              if (communication.communication !== null) {
                                console.log(communication);
                                num = num + 1;
                                return (
                                  <React.Fragment>
                                    <div style={{ display: "flex" }}>
                                      <div
                                        className="custome_lable_area"
                                        style={{ "margin-top": "1%" }}
                                      >
                                        Message {num}
                                      </div>
                                      ,
                                      <div
                                        className="custom-text"
                                        style={{
                                          "margin-top": "1%",
                                          width: "auto",
                                        }}
                                      >
                                        {moment(
                                          communication.created_at
                                        ).format("DD-MMMM-YYYY HH:mm")}
                                        ,{" "}
                                        {communication.creator
                                          ? communication.creator
                                          : "Manager"}
                                      </div>
                                    </div>

                                    <div
                                      className="custom-text"
                                      style={{
                                        paddingLeft: "4%",
                                        width: "auto",
                                      }}
                                    >
                                      {communication.communication}
                                    </div>
                                    <br />
                                  </React.Fragment>
                                );
                              }
                            })}
                        </div>
                      </div>
                      {this.state.showCommunicaton == true ? (
                        <div
                          style={{
                            maxWidth: "100%",
                            marginLeft: "0.5%",
                            marginTop: "8%",
                            width: " 100%",
                            "margin-top": "1%",
                          }}
                        >
                          <div>
                            <span
                              className="font-12"
                              style={{ marginLeft: "-1.5%" }}
                            >
                              Add Communications History
                            </span>
                            <textarea
                              rows="5"
                              onChange={(e) =>
                                this.manageNotes(e, "communication")
                              }
                              cols="160"
                              style={{ border: "1px solid black" }}
                              className="communication_area row col-md-12 col-lg-12 col-sm-12 "
                            ></textarea>
                            <button
                              type="button"
                              onClick={(e) => this.submitCommunication(e)}
                              className="cutome-rounded-history-button btn btn-outline-primary-2 btn-round btn-more"
                              style={{
                                "margin-top": "1%",
                                float: "right",
                                padding: "1%",
                              }}
                            >
                              Save Communication History{" "}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            maxWidth: "100%",
                            marginLeft: "-1.5%",
                            marginTop: "8%",
                            width: " 100%",
                            "margin-top": "1%",
                            height: "200px",
                          }}
                        ></div>
                      )}
                    </div>
                  </div>

                  <br />
                  <br />

                  <div style={{ marginTop: "-2%" }}>
                    {this.state.products.map((product, index) => {
                      return (
                        <React.Fragment>
                          <div
                            class="panel panel-default product_panel"
                            style={{
                              marginTop: "2%",
                              maxWidth: "62.3%",
                              marginLeft: "-14.2%",
                            }}
                          >
                            <table class="table product-table-edit-quote ">
                              <thead className="header_color">
                                <tr>
                                  <td class="sky_th_color pl-2 table_material_product">
                                    Product and Brand
                                  </td>
                                  <td class="sky_th_color pl-2 table_material">
                                    Material
                                  </td>
                                  <td class="sky_th_color pl-2 table_image">
                                    Image
                                  </td>
                                  <td class="sky_th_color pl-2 table_thickness">
                                    Thickness (mm)
                                  </td>
                                  <td class="sky_th_color pl-2 table_thickness">
                                    Finish
                                  </td>
                                  <td class="sky_th_color pl-2 table_price">
                                    Price £ / m²
                                  </td>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <th
                                    class="custom-text pl-4 rowtotal mono"
                                    style={{ fontSize: "11px" }}
                                  >
                                    {product.name}, <br />
                                    {product.brand}
                                  </th>
                                  <th
                                    class="custom-text pl-4 rowtotal mono"
                                    style={{ fontSize: "11px" }}
                                  >
                                    {product.material}
                                  </th>
                                  <th
                                    class="custom-text pl-4 rowtotal mono"
                                    style={{ fontSize: "11px" }}
                                  >
                                    {product.image ?
                                      <img
                                        src={`${import.meta.env.VITE_API_URL}${product.image}`}
                                        class=" img-fluid sku_img_thumbnails"
                                        style={{ marginLeft: "30%" }}
                                        alt="Quote Product"
                                      /> :
                                      <img
                                        src={`${import.meta.env.VITE_PUBLIC_URL}/assets/images/default-placeholder.jpg`}
                                        class=" img-fluid sku_img_thumbnails"
                                        style={{ marginLeft: "30%" }}
                                        alt="Quote Product"
                                      />
                                    }

                                  </th>
                                  <th
                                    class="custom-text pl-4 rowtotal mono"
                                    style={{ fontSize: "11px" }}
                                  >
                                    {product.thickness}
                                  </th>
                                  <th
                                    class="custom-text pl-4 rowtotal mono"
                                    style={{ fontSize: "11px" }}
                                  >
                                    {product.finish}
                                  </th>
                                  <th
                                    class="custom-text pl-4 rowtotal mono"
                                    style={{ fontSize: "11px" }}
                                  >
                                    <input
                                      type="number"
                                      placeholder="First Name"
                                      className="form-control custom-text_cutouts noborder"
                                      name="Cutouts_quantity"
                                      value={product.price}
                                      // value={this.state.Cutouts_quantity}
                                      onChange={(e) =>
                                        this.handleProductPrice(e, index)
                                      }
                                    />
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            class="row"
                            style={{
                              marginTop: "-1%",
                              marginBottom: "2%",
                              width: "48%",
                              display: "flex",
                              justifyContent: "flex-end",
                            }}
                          >
                            {/* <div class="col-md-8 table_product_subtotal"></div> */}

                            {product.material === "Stone" ? (
                              <div class="col-md-4 row product_sub_total product_sub_total_padding">
                                <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                  {" "}
                                  <strong style={{ color: "black" }}>
                                    Material Sub Total
                                  </strong>
                                </div>
                                <div
                                  class="col-md-4 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  {" "}
                                  £
                                  {(
                                    product.price *
                                    (total_worktop_area + total_splashback_area)
                                  ).toFixed(2)}
                                </div>
                                <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                  {" "}
                                  <strong style={{ color: "black" }}>
                                    Fabrications Sub Total
                                  </strong>
                                </div>
                                <div
                                  class="col-md-4 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  {" "}
                                  £{this.state.stoneExtraTotal}
                                  {/* {this.state.stoneExtraTotal +
                                  this.state.stoneExtraTotal * 0.2} */}
                                </div>
                                <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                  {" "}
                                  <strong style={{ color: "black" }}>
                                    VAT (20%)
                                  </strong>
                                </div>
                                <div
                                  class="col-md-4 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  £
                                  {(
                                    (
                                      product.price *
                                      (total_worktop_area +
                                        total_splashback_area) +
                                      this.state.stoneExtraTotal
                                    ).toFixed(2) * 0.2
                                  ).toFixed(2)}
                                  {/* {(
                                  (
                                    product.price *
                                      (total_worktop_area +
                                        total_splashback_area) +
                                    (this.state.stoneExtraTotal +
                                      this.state.stoneExtraTotal * 0.2)
                                  ).toFixed(2) * 0.2
                                ).toFixed(2)} */}
                                </div>
                                <div class="col-md-8 product_sub_total_border product_sub_total_padding product_total">
                                  {" "}
                                  <strong class="white_strong">
                                    Grand Total
                                  </strong>
                                </div>
                                <div class="col-md-4 product_sub_total_border product_sub_total_padding product_total">
                                  £
                                  {/* {(
                                  product.price *
                                    (total_worktop_area +
                                      total_splashback_area) +
                                  this.state.stoneExtraTotal +
                                  this.state.stoneExtraTotal * 0.2 +
                                  (
                                    product.price *
                                      (total_worktop_area +
                                        total_splashback_area) +
                                    (this.state.stoneExtraTotal +
                                      this.state.stoneExtraTotal * 0.2)
                                  ).toFixed(2) *
                                    0.2
                                ).toFixed(2)} */}
                                  {(
                                    product.price *
                                    (total_worktop_area +
                                      total_splashback_area) +
                                    this.state.stoneExtraTotal +
                                    (
                                      product.price *
                                      (total_worktop_area +
                                        total_splashback_area) +
                                      this.state.stoneExtraTotal
                                    ).toFixed(2) *
                                    0.2
                                  ).toFixed(2)}
                                </div>
                              </div>
                            ) : (
                              <div class="col-md-4 row product_sub_total product_sub_total_padding">
                                <div class="col-md-8 product_sub_total_border product_sub_total_padding">
                                  {" "}
                                  <strong style={{ color: "black" }}>
                                    Material Sub Total
                                  </strong>
                                </div>
                                <div
                                  class="col-md-4 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  {" "}
                                  £
                                  {(product.price * total_glass_area).toFixed(
                                    2
                                  )}
                                </div>
                                <div
                                  class="col-md-8 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  {" "}
                                  <strong style={{ color: "black" }}>
                                    Fabrications Sub Total
                                  </strong>
                                </div>
                                <div
                                  class="col-md-4 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  {" "}
                                  £{this.state.glassExtraTotal}
                                </div>
                                <div
                                  class="col-md-8 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  {" "}
                                  <strong style={{ color: "black" }}>
                                    VAT (20%)
                                  </strong>
                                </div>
                                <div
                                  class="col-md-4 product_sub_total_border product_sub_total_padding"
                                  style={{ color: "black" }}
                                >
                                  £
                                  {(
                                    (
                                      product.price * total_glass_area +
                                      this.state.glassExtraTotal
                                    ).toFixed(2) * 0.2
                                  ).toFixed(2)}
                                </div>
                                <div class="col-md-8 product_sub_total_border product_sub_total_padding product_total">
                                  {" "}
                                  <strong class="white_strong">
                                    Grand Total
                                  </strong>
                                </div>
                                <div class="col-md-4 product_sub_total_border product_sub_total_padding product_total">
                                  £
                                  {(
                                    product.price * total_glass_area +
                                    this.state.glassExtraTotal +
                                    (
                                      product.price * total_glass_area +
                                      this.state.glassExtraTotal
                                    ).toFixed(2) *
                                    0.2
                                  ).toFixed(2)}
                                </div>
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* <span className="custom-span" style={{ "margin-left": "7.5%" }}>
                Please Add Your Info
              </span> */}
              <div
                className="row col-md-12"
                style={{
                  width: "50.4%",
                  "margin-left": "9.7%",
                  "margin-top": "-3%",
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "row",
                  border: "none",
                  padding: "2%",
                }}
              >
                <div
                  className="col-md-6 col-lg-6 col-sm-12  "
                  style={{
                    // "margin-right": "1%",
                    "max-width": "29%",
                    maxWidth: "50%",
                  }}
                >
                  <span className="font-12">Internal Notes</span>
                  <div style={{ border: "1px solid black" }}>
                    <textarea
                      style={{ width: "100%", border: "none", padding: "0.5%" }}
                      rows="5"
                      value={this.state.internal_notes || ""}
                      cols="50"
                      onChange={(e) => this.manageNotes(e, "internal_notes")}
                    ></textarea>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-6 col-sm-12  "
                  style={{
                    // "margin-right": "1%",
                    "max-width": "30.1%",
                    maxWidth: "50%",
                  }}
                >
                  <span className="font-12" style={{ color: "red" }}>
                    Client Notes
                  </span>
                  <div style={{ border: "1px solid black" }}>
                    <textarea
                      style={{ width: "100%", border: "none", padding: "0.5%" }}
                      value={this.state.client_notes || ""}
                      rows="5"
                      cols="53"
                      onChange={(e) => this.manageNotes(e, "client_notes")}
                    ></textarea>
                  </div>
                </div>
              </div>

              <span
                className="font-12"
                style={{
                  width: "46%",
                  marginLeft: "12%",
                  marginTop: "1%",
                }}
              >
                Client Information
              </span>
              <div
                class="container"
                style={{
                  border: "1px solid black",
                  width: "46%",
                  marginLeft: "12%",
                  marginTop: "0%",
                }}
              >
                <div
                  className="row col-md-12 col-lg-12 "
                  style={{ marginTop: "2%" }}
                >
                  <div style={{ width: "10%" }}>
                    <div className="form-group">
                      <label className="custome_lable_area">First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="form-control custom-text_cutouts noborder"
                        name="Cutouts_quantity"
                        style={{ width: "100%" }}
                        defaultValue={this.state.userInfo.firstname}
                        // value={this.state.Cutouts_quantity}
                        onChange={(e) => this.handleUserForm(e, "firstname")}
                      />
                    </div>
                  </div>

                  <div style={{ width: "10%", paddingLeft: "1%" }}>
                    <div className="form-group">
                      <label className="custome_lable_area">Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control custom-text_cutouts noborder"
                        name="Cutouts_quantity"
                        style={{ width: "100%" }}
                        defaultValue={this.state.userInfo.lastname}
                        // value={this.state.Cutouts_quantity}
                        onChange={(e) => this.handleUserForm(e, "lastname")}
                      />
                    </div>
                  </div>

                  <div style={{ width: "20%", paddingLeft: "1%" }}>
                    <div className="form-group">
                      <label className="custome_lable_area">Email</label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="form-control custom-text_cutouts noborder"
                        name="Cutouts_quantity"
                        style={{ width: "100%" }}
                        defaultValue={this.state.userInfo.email}
                        disabled
                        // value={this.state.Cutouts_quantity}
                        onChange={(e) => this.handleUserForm(e, "email")}
                      />
                    </div>
                  </div>

                  <div style={{ width: "15%", paddingLeft: "1%" }}>
                    <div className="form-group">
                      <label className="custome_lable_area">Phone Number</label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="form-control custom-text_cutouts noborder"
                        name="Cutouts_quantity"
                        style={{ width: "100%" }}
                        defaultValue={this.state.userInfo.phone}
                        // value={this.state.Cutouts_quantity}
                        onChange={(e) => this.handleUserForm(e, "phone")}
                      />
                    </div>
                  </div>
                  <div style={{ width: "20%", paddingLeft: "1%" }}>
                    <div className="form-group">
                      <label className="custome_lable_area">Address</label>
                      <input
                        type="text"
                        placeholder="Address"
                        className="form-control custom-text_cutouts noborder"
                        name="Cutouts_quantity"
                        style={{ width: "100%" }}
                        value={this.state.userInfo.address}
                        onChange={(e) => this.handleUserForm(e, "address")}
                      />
                    </div>
                  </div>

                  <div style={{ width: "10%", paddingLeft: "1%" }}>
                    <div className="form-group">
                      <label className="custome_lable_area">Post Code</label>
                      <input
                        type="text"
                        placeholder="Post code"
                        className="form-control custom-text_cutouts noborder"
                        name="Cutouts_quantity"
                        style={{ width: "100%" }}
                        value={this.state.userInfo.postcode}
                        onChange={(e) => this.handleUserForm(e, "postcode")}
                      />
                    </div>
                  </div>

                  <div style={{ width: "10%", paddingLeft: "1%" }}>
                    <div className="form-group">
                      <label className="custome_lable_area">City</label>
                      <input
                        type="text"
                        placeholder="City"
                        className="form-control custom-text_cutouts noborder"
                        name="Cutouts_quantity"
                        style={{ width: "100%" }}
                        value={this.state.userInfo.city}
                        onChange={(e) => this.handleUserForm(e, "city")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  "margin-left": "12%",
                  "margin-top": "1%",
                  width: "63.4%",
                  float: "right",
                }}
              >
                <div className="col-md-12 margin">
                  <div
                    class="form-group form-check"
                    style={{ marginLeft: "-1%" }}
                  >
                    <button
                      className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more "
                      type="submit"
                    >
                      Save as a new Version
                    </button>
                    <button
                      className="btn btn-danger cutome-rounded-button btn btn-outline-danger-2 btn-round btn-more "
                      type="button"
                      onClick={(e) => this.cancelPage(e)}
                      style={{ "margin-left": "2%" }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="container row col-md-12"
                style={{
                  width: " 78%",
                  "margin-left": "20.5%",
                  "margin-top": "1%",
                }}
              ></div>
            </section>
          </form>
          <br /> <br /> <br /> <br />
          <br />
        </div>
      </div>
    );
  }
}

export default editQuote;
