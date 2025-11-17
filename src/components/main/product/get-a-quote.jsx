/* GetAQuote.jsx, modernized */

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Fragment,
} from "react";
import { Helmet } from "react-helmet";
import Select from "react-select";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import auth from "../../../auth/auth";
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
}

const initialUser = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  postcode: "",
  city: "",
};

const initialWorktopRow = () => ({
  item: 0,
  item_name: "",
  worktop_width: 0,
  worktop_lenght: 0,
  area: 0,
});

const initialSplashRow = () => ({
  item: 0,
  item_name: "",
  splashback_width: 0,
  splashback_lenght: 0,
  area: 0,
});

const initialFabRow = () => ({
  item: 0,
  item_name: "",
  quantity: 0,
  price: 0,
  unit_price: 0,
});

const initialCutoutRow = () => ({
  item: 0,
  item_name: "",
  quantity: 0,
  price: 0,
  unit_price: 0,
});

const initialExtraRow = () => ({
  item: 0,
  item_name: "",
  unit_price: 0,
  quantity: 0,
  price: 0,
});

const initialDesignPanel = () => ({
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
});

const initialSurveyOrEdge = () => ({
  item: null,
  item_name: "",
});

export default function GetAQuote() {
  const navigate = useNavigate();
  const isAdmin = auth.isAuthenticatedAdmin();

  /* top level state */
  const [allProducts, setAllProducts] = useState([]);
  const [allProductsSelect, setAllProductsSelect] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [filterThickness, setFilterThickness] = useState([]);
  const [filterFinishes, setFilterFinishes] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({
    value: 0,
    label: "select product",
  });
  const [selectedThickness, setSelectedThickness] = useState({
    value: 0,
    label: "select thickness",
  });
  const [selectedFinish, setSelectedFinish] = useState({
    value: 0,
    label: "select finish",
  });

  const [products, setProducts] = useState([]);
  const [stoneProduct, setStoneProduct] = useState(false);
  const [glassProduct, setGlassProduct] = useState(false);

  const [worktopOptions, setWorktopOptions] = useState([]);
  const [splashbackOptions, setSplashbackOptions] = useState([]);
  const [edgeDetails, setEdgeDetails] = useState([]);
  const [fabrications, setFabrications] = useState([]);
  const [designOptions, setDesignOptions] = useState([]);
  const [surveyFitOptions, setSurveyFitOptions] = useState([]);
  const [cutouts, setCutouts] = useState([]);
  const [extraServices, setExtraServices] = useState([]);
  const [extraServicesStone, setExtraServicesStone] = useState([]);

  const [addWorktopDimensions, setAddWorktopDimensions] = useState([
    initialWorktopRow(),
  ]);
  const [addSplashbackDimensions, setAddSplashbackDimensions] = useState([
    initialSplashRow(),
  ]);
  const [addFabrications, setAddFabrications] = useState([initialFabRow()]);
  const [addCutouts, setAddCutouts] = useState([initialCutoutRow()]);
  const [addExtraServices, setAddExtraServices] = useState([initialExtraRow()]);
  const [addExtraServicesGlass, setAddExtraServicesGlass] = useState([
    initialExtraRow(),
  ]);
  const [addDesignPanel, setAddDesignPanel] = useState([initialDesignPanel()]);
  const [sparkleCheck, setSparkleCheck] = useState(0);
  const [survey, setSurvey] = useState(initialSurveyOrEdge());
  const [edge, setEdge] = useState(initialSurveyOrEdge());
  const [checkedTC, setCheckedTC] = useState(false);

  const [userInfo, setUserInfo] = useState(initialUser);

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const mountedRef = useRef(true);

  /* redirect early for mobile */
  useEffect(() => {
    if (isMobile) {
      navigate("/get-a-quote-mobile", { replace: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* load product shortlist and master data */
  useEffect(() => {
    mountedRef.current = true;

    const controller = new AbortController();

    const loadShortlistAndFlags = async () => {
      const sku = safeParseSkuLS();

      if (!isAdmin) {
        if (!sku || sku.length === 0) {
          navigate("/empty-short-list", { replace: false });
          return;
        }
      }

      if (sku && sku.length > 0) {
        try {
          const res = await axios.post(
            `${API_URL}/quote-products`,
            { products: JSON.stringify(sku) },
            { signal: controller.signal }
          );
          if (!mountedRef.current) return;
          setProducts(res.data || []);
          const hasStone = (res.data || []).some(
            (p) => p.material === "Stone"
          );
          const hasGlass = (res.data || []).some(
            (p) => p.material === "Glass"
          );
          setStoneProduct(hasStone);
          setGlassProduct(hasGlass);
        } catch (err) {
          if (!axios.isCancel(err)) {
            console.error(err);
          }
        }
      }
    };

    const loadAdminLookups = async () => {
      if (!isAdmin) return;
      try {
        const res = await axios.get(`${API_URL}/sku`, {
          signal: controller.signal,
        });
        if (!mountedRef.current) return;

        setAllProducts(res.data || []);
        const opts = (res.data || []).map((p) => ({
          value: p.id,
          label: `${p.material} - ${p.material_type} - ${p.name}`,
        }));
        setAllProductsSelect(opts);

        const customersRes = await axios.get(`${API_URL}/customers`, {
          signal: controller.signal,
        });
        if (!mountedRef.current) return;

        const cust = customersRes.data.map((e) => ({
          firstname: e.firstname,
          lastname: e.lastname,
          email: e.email,
          phone: e.phone,
          address: e.address,
          postcode: e.postcode,
          city: e.city,
          value: e.email,
          label: e.email,
        }));
        setCustomers(cust);
      } catch (err) {
        if (!axios.isCancel(err)) console.error(err);
      }
    };

    const loadLookups = async () => {
      try {
        const [
          worktopD,
          splashB,
          edgeRes,
          fabRes,
          designRes,
          surveyRes,
          cutoutsRes,
          es1,
          es2,
        ] = await Promise.all([
          axios.get(`${API_URL}/worktop-dimensions`, {
            signal: controller.signal,
          }),
          axios.get(`${API_URL}/splashback-dimensions`, {
            signal: controller.signal,
          }),
          axios.get(`${API_URL}/edge-details`, { signal: controller.signal }),
          axios.get(`${API_URL}/fabrication_options`, {
            signal: controller.signal,
          }),
          axios.get(`${API_URL}/design_options`, { signal: controller.signal }),
          axios.get(`${API_URL}/survey_fit_options`, {
            signal: controller.signal,
          }),
          axios.get(`${API_URL}/cutouts`, { signal: controller.signal }),
          axios.get(`${API_URL}/extra_services`, { signal: controller.signal }),
          axios.get(`${API_URL}/extra_services`, { signal: controller.signal }),
        ]);

        if (!mountedRef.current) return;

        setWorktopOptions(
          (worktopD.data || []).map((w) => ({ label: w.name, value: w.id }))
        );
        setSplashbackOptions(
          (splashB.data || []).map((s) => ({ label: s.name, value: s.id }))
        );
        setEdgeDetails(
          (edgeRes.data || []).map((e) => ({ label: e.name, value: e.id }))
        );
        setFabrications(
          (fabRes.data || []).map((f) => ({
            label: `${f.name} - £${f.price}`,
            value: f.id,
            price: f.price,
          }))
        );
        setDesignOptions(
          (designRes.data || []).map((d) => ({ label: d.name, value: d.id }))
        );
        setSurveyFitOptions(
          (surveyRes.data || []).map((s) => ({
            label: `${s.name} - £${s.price}`,
            value: s.id,
          }))
        );
        setCutouts(
          (cutoutsRes.data || []).map((c) => ({
            label: `${c.name} - £${c.price}`,
            value: c.id,
            price: c.price,
          }))
        );
        const extras = (es1.data || []).map((x) => ({
          label: x.name,
          value: x.id,
          price: x.price,
          material: x.materials?.name,
        }));
        setExtraServices(extras);
        setExtraServicesStone(extras);
      } catch (err) {
        if (!axios.isCancel(err)) console.error(err);
      }
    };

    loadShortlistAndFlags();
    loadAdminLookups();
    loadLookups();

    return () => {
      mountedRef.current = false;
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin]);

  /* totals, all derived from rows, recompute on change */
  const totalWorktopArea = useMemo(() => {
    return addWorktopDimensions.reduce((sum, r) => sum + Number(r.area || 0), 0);
  }, [addWorktopDimensions]);

  const totalSplashbackArea = useMemo(() => {
    return addSplashbackDimensions.reduce(
      (sum, r) => sum + Number(r.area || 0),
      0
    );
  }, [addSplashbackDimensions]);

  const totalGlassArea = useMemo(() => {
    let t = 0;
    addDesignPanel.forEach((p) => {
      p.adddesignglass.forEach((g) => {
        t += Number(g.area || 0);
      });
    });
    return t;
  }, [addDesignPanel]);

  /* react select search menu open */
  const handleSelectMenuInput = useCallback((input) => {
    setMenuOpen(!!input);
  }, []);

  const onCustomerSelect = useCallback((opt) => {
    setSelectedCustomer(opt);
    if (opt) {
      setUserInfo({
        firstname: opt.firstname || "",
        lastname: opt.lastname || "",
        email: opt.email || "",
        phone: opt.phone || "",
        address: opt.address || "",
        postcode: opt.postcode || "",
        city: opt.city || "",
      });
    } else {
      setUserInfo(initialUser);
    }
  }, []);

  /* admin add product, compute thickness and finishes */
  const onPickProduct = useCallback(
    (opt) => {
      setSelectedProduct(opt || { value: 0, label: "select product" });
      setSelectedThickness({ value: 0, label: "select thickness" });
      setSelectedFinish({ value: 0, label: "select finish" });

      if (!opt) {
        setFilterThickness([]);
        setFilterFinishes([]);
        return;
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
      }
      setFilterThickness(thicks);
      setFilterFinishes([]);
    },
    [allProducts]
  );

  const onPickThickness = useCallback(
    (opt) => {
      setSelectedThickness(opt || { value: 0, label: "select thickness" });
      setSelectedFinish({ value: 0, label: "select finish" });
      const p = allProducts.find((x) => x.id === selectedProduct.value);
      if (!p || !opt) {
        setFilterFinishes([]);
        return;
      }
      const finishes = [];
      p.finishes
        .filter((f) => f.thickness_id === opt.value)
        .forEach((f) => {
          const exists = finishes.some((x) => x.value === f.finish_id);
          if (!exists) {
            finishes.push({ value: f.finish_id, label: f.finish });
          }
        });
      setFilterFinishes(finishes);
    },
    [allProducts, selectedProduct.value]
  );

  const onPickFinish = useCallback((opt) => {
    setSelectedFinish(opt || { value: 0, label: "select finish" });
  }, []);

  const addNewProductToShortlist = useCallback(() => {
    const payload = {
      product_id: selectedProduct.value,
      thickness_id: selectedThickness.value,
      finish_id: selectedFinish.value,
    };
    if (!payload.product_id || !payload.thickness_id || !payload.finish_id) {
      toast.error("Please select product, thickness, and finish");
      return;
    }
    let sku = safeParseSkuLS();
    if (!sku) {
      localStorage.setItem("sku", JSON.stringify([]));
      sku = [];
    }
    if (sku.length >= 5) {
      toast.error(
        "You have reached maximum limit of products, you can not add new for quotation"
      );
      return;
    }
    const exists = sku.some(
      (s) =>
        Number(s.product_id) === payload.product_id &&
        Number(s.thickness_id) === payload.thickness_id &&
        Number(s.finish_id) === payload.finish_id
    );
    if (exists) {
      toast.error("Item already shortlisted");
      return;
    }
    const next = [...sku, payload];
    localStorage.setItem("sku", JSON.stringify(next));
    toast.success(
      <p style={{ marginLeft: "-10%" }}>
        Product shortlisted for{" "}
        <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
          FREE Quote
        </Link>
        <br />
        click here to{" "}
        <Link to="/get-a-quote" style={{ color: "black", fontWeight: "bold" }}>
          proceed
        </Link>
      </p>,
      { autoClose: 6000 }
    );
    /* refresh shortlist view */
    (async () => {
      try {
        const res = await axios.post(
          `${API_URL}/quote-products`,
          { products: JSON.stringify(next) },
          {}
        );
        if (!mountedRef.current) return;
        setProducts(res.data || []);
        const hasStone = (res.data || []).some((p) => p.material === "Stone");
        const hasGlass = (res.data || []).some((p) => p.material === "Glass");
        setStoneProduct(hasStone);
        setGlassProduct(hasGlass);
        /* reset pickers */
        setSelectedProduct({ value: 0, label: "select product" });
        setSelectedThickness({ value: 0, label: "select thickness" });
        setSelectedFinish({ value: 0, label: "select finish" });
        setFilterThickness([]);
        setFilterFinishes([]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [selectedProduct, selectedThickness, selectedFinish]);

  /* user info change */
  const onUserChange = useCallback((prop, value) => {
    setUserInfo((u) => ({ ...u, [prop]: String(value || "").toLowerCase() }));
  }, []);

  /* remove sku item */
  const removeSkuByIndex = useCallback(
    (idx) => {
      const skuLS = safeParseSkuLS() || [];
      const prod = products[idx];
      const pos = skuLS.findIndex(
        (s) =>
          Number(prod.finish_id) === Number(s.finish_id) &&
          Number(prod.thickness_id) === Number(s.thickness_id) &&
          Number(prod.sku_id) === Number(s.product_id)
      );
      if (pos > -1) {
        const nextLS = [...skuLS.slice(0, pos), ...skuLS.slice(pos + 1)];
        localStorage.setItem("sku", JSON.stringify(nextLS));
      }
      const nextProducts = [...products.slice(0, idx), ...products.slice(idx + 1)];
      setProducts(nextProducts);
      const hasStone = nextProducts.some((p) => p.material === "Stone");
      const hasGlass = nextProducts.some((p) => p.material === "Glass");
      setStoneProduct(hasStone);
      setGlassProduct(hasGlass);
      toast.success("Item removed from shortlist");
      if (nextProducts.length === 0 && !isAdmin) {
        navigate("/empty-short-list", { replace: false });
      }
    },
    [products, isAdmin, navigate]
  );

  /* terms */
  const onTC = useCallback((e) => setCheckedTC(!!e.target.checked), []);

  /* helpers */
  const checkField = useCallback((field, msg) => {
    if (!field || field === 0) {
      toast.error(msg);
      return false;
    }
    return true;
  }, []);

  const validateBeforeSubmit = useCallback(() => {
    if (stoneProduct) {
      const w0 = addWorktopDimensions[0];
      const s0 = addSplashbackDimensions[0];
      if (!w0.item && !s0.item) {
        toast.error("Please select Worktop or Splashback");
        return false;
      }
      if (w0.item) {
        if (!checkField(w0.worktop_width, "Please enter Worktop width"))
          return false;
        if (!checkField(w0.worktop_lenght, "Please enter Worktop length"))
          return false;
      }
      if (s0.item) {
        if (!checkField(s0.splashback_width, "Please enter Splashback width"))
          return false;
        if (!checkField(s0.splashback_lenght, "Please enter Splashback length"))
          return false;
      }
    }
    if (glassProduct) {
      const p0 = addDesignPanel[0];
      const g0 = p0.adddesignglass[0];
      if (
        !checkField(p0.design, "Please select Glass design") ||
        !checkField(g0.design_width, "Please enter Design panel width") ||
        !checkField(g0.design_lenght, "Please enter Design panel length") ||
        !checkField(g0.design_pieces, "Please enter Design panel pieces")
      ) {
        return false;
      }
    }
    if (
      !checkField(userInfo.firstname, "Please enter First name") ||
      !checkField(userInfo.email, "Please enter Email address") ||
      !checkField(userInfo.phone, "Please enter Phone number")
    ) {
      return false;
    }
    return true;
  }, [
    stoneProduct,
    glassProduct,
    addWorktopDimensions,
    addSplashbackDimensions,
    addDesignPanel,
    userInfo,
    checkField,
  ]);

  /* change handlers for rows */
  const onWorktopItem = useCallback((index, value, label) => {
    setAddWorktopDimensions((rows) => {
      const next = rows.map((r, i) =>
        i === index ? { ...r, item: Number(value), item_name: label } : r
      );
      return next;
    });
  }, []);

  const onWorktopSize = useCallback((index, prop, value) => {
    setAddWorktopDimensions((rows) => {
      const next = rows.map((r, i) => {
        if (i !== index) return r;
        const w = prop === "worktop_width" ? Number(value || 0) : r.worktop_width;
        const l = prop === "worktop_lenght" ? Number(value || 0) : r.worktop_lenght;
        const nextRow = {
          ...r,
          [prop]: Number(value || 0),
          area: Number(((w * l) / 1_000_000).toFixed(3)),
        };
        return nextRow;
      });
      return next;
    });
  }, []);

  const onSplashItem = useCallback((index, value, label) => {
    setAddSplashbackDimensions((rows) =>
      rows.map((r, i) =>
        i === index ? { ...r, item: Number(value), item_name: label } : r
      )
    );
  }, []);

  const onSplashSize = useCallback((index, prop, value) => {
    setAddSplashbackDimensions((rows) =>
      rows.map((r, i) => {
        if (i !== index) return r;
        const w =
          prop === "splashback_width" ? Number(value || 0) : r.splashback_width;
        const l =
          prop === "splashback_lenght" ? Number(value || 0) : r.splashback_lenght;
        return {
          ...r,
          [prop]: Number(value || 0),
          area: Number(((w * l) / 1_000_000).toFixed(3)),
        };
      })
    );
  }, []);

  const onEdgePick = useCallback((val, label) => {
    setEdge({ item: Number(val), item_name: label });
  }, []);

  const onFabPick = useCallback((index, val, label) => {
    const unit = String(label).split("£")[1];
    setAddFabrications((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            item: Number(val),
            item_name: label,
            unit_price: Number(unit || 0),
            quantity: 0,
            price: 0,
          }
          : r
      )
    );
  }, []);

  const onFabQty = useCallback((index, qty) => {
    setAddFabrications((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            quantity: Number(qty || 0),
            price: Number(qty || 0) * Number(r.unit_price || 0),
          }
          : r
      )
    );
  }, []);

  const onCutoutPick = useCallback((index, val, label) => {
    const unit = String(label).split("£")[1];
    setAddCutouts((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            item: Number(val),
            item_name: label,
            unit_price: Number(unit || 0),
            quantity: 0,
            price: 0,
          }
          : r
      )
    );
  }, []);

  const onCutoutQty = useCallback((index, qty) => {
    setAddCutouts((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            quantity: Number(qty || 0),
            price: Number(qty || 0) * Number(r.unit_price || 0),
          }
          : r
      )
    );
  }, []);

  const onExtraStonePick = useCallback((index, val, label) => {
    const found = extraServicesStone.find((x) => Number(x.value) === Number(val));
    const unit = found?.price || 0;
    setAddExtraServices((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            item: Number(val),
            item_name: label,
            unit_price: Number(unit || 0),
            quantity: 0,
            price: 0,
          }
          : r
      )
    );
  }, [extraServicesStone]);

  const onExtraStoneQty = useCallback((index, qty) => {
    setAddExtraServices((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            quantity: Number(qty || 0),
            price: Number(qty || 0) * Number(r.unit_price || 0),
          }
          : r
      )
    );
  }, []);

  const onExtraGlassPick = useCallback((index, val, label) => {
    const found = extraServices.find((x) => Number(x.value) === Number(val));
    const unit = found?.price || 0;
    setAddExtraServicesGlass((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            item: Number(val),
            item_name: label,
            unit_price: Number(unit || 0),
            quantity: 0,
            price: 0,
          }
          : r
      )
    );
  }, [extraServices]);

  const onExtraGlassQty = useCallback((index, qty) => {
    setAddExtraServicesGlass((rows) =>
      rows.map((r, i) =>
        i === index
          ? {
            ...r,
            quantity: Number(qty || 0),
            price: Number(qty || 0) * Number(r.unit_price || 0),
          }
          : r
      )
    );
  }, []);

  const onSurveyPick = useCallback((val, label) => {
    setSurvey({ item: Number(val), item_name: label });
  }, []);

  const onSparkle = useCallback((val) => setSparkleCheck(Number(val || 0)), []);

  const onDesignSelect = useCallback((panelIdx, val, label) => {
    setAddDesignPanel((panels) =>
      panels.map((p, i) =>
        i === panelIdx ? { ...p, design: Number(val), design_name: label } : p
      )
    );
  }, []);

  const onDesignSize = useCallback(
    (panelIdx, rowIdx, prop, value, checked = null) => {
      setAddDesignPanel((panels) =>
        panels.map((p, i) => {
          if (i !== panelIdx) return p;
          const rows = p.adddesignglass.map((g, j) => {
            if (j !== rowIdx) return g;
            const next = { ...g };
            if (prop === "shaped") {
              next.shaped = checked ? 1 : 0;
            } else {
              next[prop] = Number(value || 0);
            }
            const w = Number(next.design_width || 0);
            const l = Number(next.design_lenght || 0);
            const pcs = Number(next.design_pieces || 0);
            next.area = Number(((w * l * pcs) / 1_000_000).toFixed(3));
            return next;
          });
          return { ...p, adddesignglass: rows };
        })
      );
    },
    []
  );

  /* add or remove row helpers */
  const pushRow = (setter, factory) => () => setter((rows) => [...rows, factory()]);
  const popRow = (setter) => (idx) =>
    setter((rows) => rows.filter((_, i) => i !== idx));

  const addDesignRow = useCallback(
    (panelIdx) => {
      setAddDesignPanel((panels) =>
        panels.map((p, i) =>
          i === panelIdx
            ? {
              ...p,
              adddesignglass: [
                ...p.adddesignglass,
                {
                  design_width: 0,
                  design_lenght: 0,
                  design_pieces: 0,
                  area: 0,
                  design_cutouts: 0,
                  shaped: 0,
                },
              ],
            }
            : p
        )
      );
    },
    []
  );

  const removeDesignRow = useCallback((panelIdx, rowIdx) => {
    setAddDesignPanel((panels) =>
      panels.map((p, i) =>
        i === panelIdx
          ? {
            ...p,
            adddesignglass: p.adddesignglass.filter((_, j) => j !== rowIdx),
          }
          : p
      )
    );
  }, []);

  const removeDesignPanel = useCallback((panelIdx) => {
    setAddDesignPanel((panels) => panels.filter((_, i) => i !== panelIdx));
  }, []);

  /* submit */
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!validateBeforeSubmit()) return;

      const today = new Date();
      const dateStr = today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      const sku = products;

      const payload = {
        designPanel: addDesignPanel,
        splashbackDimensions: addSplashbackDimensions,
        worktopDimensions: addWorktopDimensions,
        fabrications: addFabrications,
        cutouts: addCutouts,
        extraservices1: addExtraServices,
        extraservice2: addExtraServicesGlass,
        glass_area: Number(totalGlassArea.toFixed(3)),
        stone_area: Number((totalWorktopArea + totalSplashbackArea).toFixed(3)),
        sku,
        sparkle: sparkleCheck,
        survey,
        edge,
        user: userInfo,
        apiUrl: API_URL,
        stoneProduct,
        glassProduct,
        date: dateStr,
        creator: isAdmin
          ? "Admin(gnf)"
          : `${userInfo.firstname} ${userInfo.lastname}`.trim(),
      };

      try {
        await axios.post(`${API_URL}/quote`, payload);
        localStorage.setItem("sku", JSON.stringify([]));
        if (isAdmin) {
          navigate("/admin/quote-list", { replace: false });
        } else {
          navigate("/thanks-for-quote", { replace: false });
        }
      } catch (err) {
        console.error(err?.response?.data || err);
        toast.error("Could not submit quote, please try again");
      }
    },
    [
      validateBeforeSubmit,
      addDesignPanel,
      addSplashbackDimensions,
      addWorktopDimensions,
      addFabrications,
      addCutouts,
      addExtraServices,
      addExtraServicesGlass,
      totalGlassArea,
      totalWorktopArea,
      totalSplashbackArea,
      sparkleCheck,
      survey,
      edge,
      userInfo,
      stoneProduct,
      glassProduct,
      isAdmin,
      products,
      navigate,
    ]
  );

  /* jsx helpers for labels */
  const L = {
    item: "Item",
    width: "Width(mm)",
    length: "Length(mm)",
    area: "Area(m²)",
    quantity: "Quantity",
    unitPrice: "UnitPrice",
    price: "Price",
  };

  return (
    <div>
      <Helmet>
        <title>Get a FREE Quote</title>
        <meta
          name="description"
          content="Get a free no obligation quote for your dream kitchen!"
        />
        <meta
          name="keywords"
          content="Kitchen design, Kitchen remodel, Glass splashbacks, Home design, Kitchen worktop, Granite, Quartz, Marble, Kitchen design uk, Kitchen makeover, Countertops, Quartz worktop, Granite worktops, Marble worktops, Interior design, Luxury homes, London, kitchen design UK, UK best kitchen, London,Kitchen worktop, marble tiles, bespoke kitchen design, get quote, kitchen redesign quote"
        />
      </Helmet>

      <form onSubmit={onSubmit}>
        <section>
          <div className="container">
            {/* Step 1 add new product (admin only) */}
            {isAdmin && (
              <div className="col-12">
                <span className="col-12 custom-span" style={{ fontSize: 20 }}>
                  <b>Step 1:</b> Add New Product to Quote
                  {allProducts.length === 0 ? (
                    <div className="quote-loader" />
                  ) : null}
                </span>

                <div className="row" style={{ marginLeft: "-4%" }}>
                  <div className="container" style={{ display: "flex" }}>
                    <div className="col-md-5 col-sm-12">
                      <Select
                        value={selectedProduct}
                        placeholder="Search Product"
                        className="custome_select_box"
                        onChange={onPickProduct}
                        onInputChange={handleSelectMenuInput}
                        menuIsOpen={menuOpen}
                        options={allProductsSelect}
                        isClearable
                      />
                    </div>

                    {filterThickness.length > 0 && (
                      <div className="col-md-3 col-sm-12">
                        <Select
                          value={selectedThickness}
                          placeholder="Select Thickness"
                          className="custome_select_box"
                          onChange={onPickThickness}
                          options={filterThickness}
                          isClearable
                        />
                      </div>
                    )}

                    {filterFinishes.length > 0 && (
                      <div className="col-md-4 col-sm-12">
                        <Select
                          value={selectedFinish}
                          placeholder="Select Finish"
                          className="custome_select_box"
                          onChange={onPickFinish}
                          options={filterFinishes}
                          isClearable
                        />
                      </div>
                    )}

                    <button
                      type="button"
                      className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more"
                      onClick={addNewProductToShortlist}
                      style={{ marginLeft: 8 }}
                    >
                      Add New Product
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="main">
              <br />
              <InnerOverlay />

              <div className="page-content">
                <div className="container">
                  {/* Selected Items */}
                  {products.length > 0 && (
                    <div className="row">
                      <div className="col-md-12">
                        <span
                          className="custom-span"
                          style={{ fontSize: 20, fontWeight: "normal" }}
                        >
                          {!isAdmin && (
                            <Fragment>
                              <b>Step 1:</b> Select colours and materials
                            </Fragment>
                          )}
                        </span>

                        <table className="table table-image quote_table_border">
                          <thead className="header_color">
                            <tr>
                              <th className="sky_th_color">&nbsp;Name</th>
                              <th className="sky_th_color">&nbsp;Material</th>
                              <th className="sky_th_color">&nbsp;Image</th>
                              <th className="sky_th_color">&nbsp;Thickness</th>
                              <th className="sky_th_color">&nbsp;Finish</th>
                              <th className="sky_th_color">&nbsp;Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((p, i) => (
                              <tr key={`${p.sku_id}-${i}`}>
                                <td>&nbsp;&nbsp;&nbsp;{p.name}</td>
                                <td>&nbsp;&nbsp;&nbsp;{p.material}</td>
                                <td className="w-25">
                                  {p.image ? (
                                    <img
                                      src={`${API_URL}${p.image}`}
                                      className="img-fluid sku_img_thumbnails"
                                      alt={p.name}
                                    />
                                  ) : (
                                    <img
                                      src={`${PUBLIC_URL}/assets/images/default-placeholder.jpg`}
                                      className="img-fluid sku_img_thumbnails"
                                      alt={p.name}
                                    />
                                  )}
                                </td>
                                <td>&nbsp;&nbsp;&nbsp;{p.thickness}</td>
                                <td>&nbsp;&nbsp;&nbsp;{p.finish}</td>
                                <td className="remove_item_sku">
                                  <button
                                    className="cutome-rounded-delete-button btn btn-outline-primary-2 btn-round btn-more"
                                    type="button"
                                    onClick={() => removeSkuByIndex(i)}
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {!isAdmin && (
                          <button
                            type="button"
                            className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more"
                            style={{
                              float: "right",
                              padding: 0,
                              marginTop: "-1%",
                              marginBottom: "2%",
                              textTransform: "capitalize",
                              minWidth: "190px",
                            }}
                          >
                            <Link
                              to={`${PUBLIC_URL}/product-catalogue`}
                              className="Custom-color"
                            >
                              Add new item to Selection
                            </Link>
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Stone estimator */}
                  {stoneProduct && (
                    <Fragment>
                      <span className="custom-span" style={{ fontSize: 20 }}>
                        <b>Step 2:</b> Measurements and Price Estimator{" "}
                        <span style={{ fontSize: 15 }}>
                          (Quartz, Marble, Granite, Compact Worktops)
                        </span>
                      </span>

                      <div className="row px-3">
                        <div
                          className="col-md-6 col-sm-12 custome_table_get_a_quote"
                          style={{ borderRight: 0 }}
                        >
                          <div className="padding-class">
                            <div className="font-class-design">Worktop Dimensions</div>

                            {addWorktopDimensions.map((row, idx) => (
                              <div className="row" key={`wt-${idx}`}>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.item}
                                      </label>
                                    )}
                                    <select
                                      className="custome-select-box-get-a-quote noborder changeColor"
                                      onChange={(e) =>
                                        onWorktopItem(
                                          idx,
                                          e.target.value,
                                          e.target.options[e.target.selectedIndex]
                                            ?.text || ""
                                        )
                                      }
                                      value={row.item || ""}
                                    >
                                      <option value="">Select item</option>
                                      {worktopOptions.map((o) => (
                                        <option key={o.value} value={o.value}>
                                          {o.label}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.width}
                                      </label>
                                    )}
                                    <input
                                      type="number"
                                      className="form-control custom-text noborder"
                                      value={row.worktop_width || ""}
                                      onChange={(e) =>
                                        onWorktopSize(
                                          idx,
                                          "worktop_width",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.length}
                                      </label>
                                    )}
                                    <input
                                      type="number"
                                      className="form-control custom-text noborder"
                                      value={row.worktop_lenght || ""}
                                      onChange={(e) =>
                                        onWorktopSize(
                                          idx,
                                          "worktop_lenght",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-md-1 cust-marg-get-a-quote">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable_lenght">
                                        {L.area}
                                      </label>
                                    )}
                                    <input
                                      type="text"
                                      className="form-control custom-text noborder disabled_text_field"
                                      disabled
                                      value={Number(row.area || 0).toFixed(3)}
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <div
                                  className="col-md-2"
                                  style={{ maxHeight: 15, marginTop: -5 }}
                                >
                                  <div className="form-group p-0 m-0">
                                    <button
                                      type="button"
                                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                                      onClick={pushRow(
                                        setAddWorktopDimensions,
                                        initialWorktopRow
                                      )}
                                    >
                                      +
                                    </button>
                                    {idx > 0 && (
                                      <button
                                        type="button"
                                        className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                        onClick={() =>
                                          popRow(setAddWorktopDimensions)(idx)
                                        }
                                      >
                                        -
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="padding-class">
                            <div className="font-class-design">
                              Splashback Dimensions
                            </div>
                            {addSplashbackDimensions.map((row, idx) => (
                              <div className="row" key={`sp-${idx}`}>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable pdfLabel custome_lable_lenghtt">
                                        {L.item}
                                      </label>
                                    )}
                                    <select
                                      className="custome-select-box-get-a-quote noborder changeColor"
                                      onChange={(e) =>
                                        onSplashItem(
                                          idx,
                                          e.target.value,
                                          e.target.options[e.target.selectedIndex]
                                            ?.text || ""
                                        )
                                      }
                                      value={row.item || ""}
                                    >
                                      <option value="">Select item</option>
                                      {splashbackOptions.map((o) => (
                                        <option key={o.value} value={o.value}>
                                          {o.label}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.width}
                                      </label>
                                    )}
                                    <input
                                      type="number"
                                      className="form-control custom-text noborder"
                                      value={row.splashback_width || ""}
                                      onChange={(e) =>
                                        onSplashSize(
                                          idx,
                                          "splashback_width",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.length}
                                      </label>
                                    )}
                                    <input
                                      type="number"
                                      className="form-control custom-text noborder"
                                      value={row.splashback_lenght || ""}
                                      onChange={(e) =>
                                        onSplashSize(
                                          idx,
                                          "splashback_lenght",
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-md-1 cust-marg-get-a-quote">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable_lenght">
                                        {L.area}
                                      </label>
                                    )}
                                    <input
                                      type="text"
                                      className="form-control custom-text noborder disabled_text_field"
                                      disabled
                                      value={Number(row.area || 0).toFixed(3)}
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    <button
                                      type="button"
                                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                                      onClick={pushRow(
                                        setAddSplashbackDimensions,
                                        initialSplashRow
                                      )}
                                    >
                                      +
                                    </button>
                                    {idx > 0 && (
                                      <button
                                        type="button"
                                        className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                        onClick={() =>
                                          popRow(setAddSplashbackDimensions)(idx)
                                        }
                                      >
                                        -
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <hr className="break" />
                          <div className="padding-class">
                            <span>
                              Total Area:{" "}
                              {Number(
                                (totalWorktopArea + totalSplashbackArea).toFixed(
                                  3
                                )
                              )}
                              m²
                            </span>
                          </div>
                        </div>

                        <div className="col-md-6 col-sm-12 custome_table_get_a_quote">
                          <div className="row padding-class">
                            <div className="col-md-8">
                              <div className="form-group">
                                <div className="font-class-design">Edge Details</div>
                                <select
                                  className="custome-select-box-get-a-quote noborder"
                                  onChange={(e) =>
                                    onEdgePick(
                                      e.target.value,
                                      e.target.options[e.target.selectedIndex]?.text ||
                                      ""
                                    )
                                  }
                                  value={edge.item || ""}
                                >
                                  <option value="">Select item</option>
                                  {edgeDetails.map((o) => (
                                    <option key={o.value} value={o.value}>
                                      {o.label}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="padding-class">
                            <div className="font-class-design">Fabrication</div>
                            {addFabrications.map((row, idx) => (
                              <div className="row" key={`fab-${idx}`}>
                                <div className="col-md-7">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.item}
                                      </label>
                                    )}
                                    <select
                                      className="custome-select-box-get-a-quote noborder changeColor"
                                      onChange={(e) =>
                                        onFabPick(
                                          idx,
                                          e.target.value,
                                          e.target.options[e.target.selectedIndex]
                                            ?.text || ""
                                        )
                                      }
                                      value={row.item || ""}
                                    >
                                      <option value="">Select item</option>
                                      {fabrications.map((o) => (
                                        <option key={o.value} value={o.value}>
                                          {o.label}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>

                                <div className="col-md-3">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable_fabrication">
                                        {L.quantity}
                                      </label>
                                    )}
                                    <input
                                      type="number"
                                      className="form-control custom-text_extra-services_quantity noborder"
                                      value={row.quantity || ""}
                                      onChange={(e) => onFabQty(idx, e.target.value)}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    <button
                                      type="button"
                                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                                      onClick={pushRow(setAddFabrications, initialFabRow)}
                                    >
                                      +
                                    </button>
                                    {idx > 0 && (
                                      <button
                                        type="button"
                                        className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                        onClick={() => popRow(setAddFabrications)(idx)}
                                      >
                                        -
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="padding-class">
                            <div className="font-class-design">Extra Services</div>
                            {addExtraServices.map((row, idx) => (
                              <div className="row" key={`xs-${idx}`}>
                                <div className="col-md-4">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.item}
                                      </label>
                                    )}
                                    <select
                                      className="custome-select-box-get-a-quote noborder changeColor"
                                      onChange={(e) =>
                                        onExtraStonePick(
                                          idx,
                                          e.target.value,
                                          e.target.options[e.target.selectedIndex]
                                            ?.text || ""
                                        )
                                      }
                                      value={row.item || ""}
                                    >
                                      <option value="">Select Service</option>
                                      {extraServicesStone
                                        .filter((x) => x.material === "Stone")
                                        .map((o) => (
                                          <option key={o.value} value={o.value}>
                                            {o.label}
                                          </option>
                                        ))}
                                    </select>
                                  </div>
                                </div>

                                <div className="col-md-1 cust-marg-get-a-quote">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable custome_lable_lenghtt">
                                        {L.unitPrice}
                                      </label>
                                    )}
                                    <span className="custom-text_extra-services_quantity ">
                                      {row.unit_price}
                                    </span>
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable_extra">
                                        {L.quantity}
                                      </label>
                                    )}
                                    <input
                                      type="number"
                                      className="form-control custom-text_extra-services_quantity noborder"
                                      value={row.quantity || ""}
                                      onChange={(e) =>
                                        onExtraStoneQty(idx, e.target.value)
                                      }
                                      disabled={!row.item}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-1 cust-marg-get-a-quote">
                                  <div className="form-group">
                                    {idx === 0 && (
                                      <label className="custome_lable_lenght">
                                        {L.price}
                                      </label>
                                    )}
                                    <input
                                      type="text"
                                      className="form-control custom-text noborder disabled_text_field"
                                      disabled
                                      value={Number(row.price || 0)}
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <div className="col-md-2">
                                  <div className="form-group">
                                    <button
                                      type="button"
                                      className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                                      onClick={pushRow(
                                        setAddExtraServices,
                                        initialExtraRow
                                      )}
                                    >
                                      +
                                    </button>
                                    {idx > 0 && (
                                      <button
                                        type="button"
                                        className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                        onClick={() =>
                                          popRow(setAddExtraServices)(idx)
                                        }
                                      >
                                        -
                                      </button>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  )}

                  {/* Glass estimator */}
                  {glassProduct && (
                    <Fragment>
                      <span className="custom-span" style={{ fontSize: 20 }}>
                        <b>Step 2:</b> Measurements and Bespoke Glass Price
                        Estimator
                      </span>

                      <div className="container" style={{ border: "1px solid black" }}>
                        <div className="row px-3">
                          <div className="col-md-12" style={{ paddingTop: 12 }}>
                            <ol>
                              <li>
                                <b>1.</b> Put all sizes in millimetres
                              </li>
                              <li>
                                <b>2.</b> Oversized panels are charged differently, please
                                call for a quotation
                              </li>
                              <li>
                                <b>3.</b> If you need socket cutouts or holes, fill the
                                CUTOUT field per panel
                              </li>
                              <li>
                                <b>4.</b> Mark shaped panels as shown below
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
                              alt="Shaped"
                              style={{ width: 461, height: 164 }}
                            />
                          </div>
                          <div className="col-md-6 cusdiv">
                            <div className="cust-centers">
                              <strong>Not a Shaped Glass</strong>
                            </div>
                            <img
                              src="/assets/images/not-shaped-glass_371x121.png"
                              className="img-fluid "
                              alt="Not Shaped"
                              style={{ width: 377, height: 121 }}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 col-sm-12 custome_table_get_a_quote">
                            <div className="padding-class">
                              <div className="font-class-design">
                                Choose your Design(s)
                              </div>

                              {addDesignPanel.map((panel, pIdx) => (
                                <Fragment key={`dp-${pIdx}`}>
                                  <div className="row">
                                    {pIdx !== 0 && <hr className="break2" />}
                                    <div className="col-md-8">
                                      <select
                                        className="custome-select-box-get-a-quote noborder changeColor"
                                        onChange={(e) =>
                                          onDesignSelect(
                                            pIdx,
                                            e.target.value,
                                            e.target.options[e.target.selectedIndex]
                                              ?.text || ""
                                          )
                                        }
                                        value={panel.design || ""}
                                      >
                                        <option value="">Select option</option>
                                        {designOptions.map((o) => (
                                          <option key={o.value} value={o.value}>
                                            {o.label}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-md-4">
                                      {pIdx !== 0 && (
                                        <button
                                          className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                          type="button"
                                          onClick={() => removeDesignPanel(pIdx)}
                                        >
                                          -
                                        </button>
                                      )}
                                      <button
                                        type="button"
                                        className="btn btn-outline-primary-2 btn-round btn-more noprint"
                                        onClick={pushRow(
                                          setAddDesignPanel,
                                          initialDesignPanel
                                        )}
                                        style={{
                                          paddingTop: "0.15rem",
                                          paddingBottom: "0.15rem",
                                          minWidth: 140,
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        Add New Design
                                      </button>
                                    </div>
                                  </div>

                                  <br />
                                  {panel.adddesignglass.map((g, gIdx) => (
                                    <div className="row" key={`g-${pIdx}-${gIdx}`}>
                                      <div className="col-md-1">
                                        <div
                                          className="custom-span-get-quote panel-font"
                                          style={{ marginTop: gIdx === 0 ? 27 : 0 }}
                                        >
                                          Panel {gIdx + 1}
                                        </div>
                                      </div>

                                      <div className="col-md-2">
                                        <div className="form-group">
                                          {gIdx === 0 && (
                                            <label className="custome_lable custome_lable_lenghtt">
                                              {L.width}
                                            </label>
                                          )}
                                          <input
                                            type="number"
                                            className="form-control custom-text_panel noborder"
                                            value={g.design_width || ""}
                                            onChange={(e) =>
                                              onDesignSize(
                                                pIdx,
                                                gIdx,
                                                "design_width",
                                                e.target.value
                                              )
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-2 cust-marg-get-a-quote">
                                        <div className="form-group">
                                          {gIdx === 0 && (
                                            <label className="custome_lable custome_lable_lenghtt">
                                              {L.length}
                                            </label>
                                          )}
                                          <input
                                            type="number"
                                            className="form-control custom-text_panel noborder"
                                            value={g.design_lenght || ""}
                                            onChange={(e) =>
                                              onDesignSize(
                                                pIdx,
                                                gIdx,
                                                "design_lenght",
                                                e.target.value
                                              )
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-2 cust-marg-get-a-quote">
                                        <div className="form-group">
                                          {gIdx === 0 && (
                                            <label className="custome_lable_pieces custome_lable_lenghtt">
                                              Pieces
                                            </label>
                                          )}
                                          <input
                                            type="number"
                                            className="form-control custom-text_panel_Pieces noborder"
                                            value={g.design_pieces || ""}
                                            onChange={(e) =>
                                              onDesignSize(
                                                pIdx,
                                                gIdx,
                                                "design_pieces",
                                                e.target.value
                                              )
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-1 cust-marg-get-a-quote">
                                        <div className="form-group">
                                          {gIdx === 0 && (
                                            <label className="custome_lable_area">
                                              {L.area}
                                            </label>
                                          )}
                                          <input
                                            type="text"
                                            className="form-control custom-text noborder disabled_text_field"
                                            disabled
                                            value={Number(g.area || 0).toFixed(3)}
                                            readOnly
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-2">
                                        <div className="form-group">
                                          {gIdx === 0 && (
                                            <label className="custome_lable custome_lable_lenghtt">
                                              Cutouts
                                            </label>
                                          )}
                                          <input
                                            type="number"
                                            className="form-control noborder custo2"
                                            value={g.design_cutouts || ""}
                                            onChange={(e) =>
                                              onDesignSize(
                                                pIdx,
                                                gIdx,
                                                "design_cutouts",
                                                e.target.value
                                              )
                                            }
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-1">
                                        <div className="form-group Designtable">
                                          {gIdx === 0 && (
                                            <label className="custome_lable custome_lable_lenghtt">
                                              Shaped
                                            </label>
                                          )}
                                          <div style={{ display: "flex" }}>
                                            <input
                                              type="checkbox"
                                              className="chk noprint"
                                              checked={g.shaped === 1}
                                              onChange={(e) =>
                                                onDesignSize(
                                                  pIdx,
                                                  gIdx,
                                                  "shaped",
                                                  null,
                                                  e.target.checked
                                                )
                                              }
                                            />
                                            <div
                                              style={{ fontSize: 10, marginLeft: "10%" }}
                                            >
                                              {g.shaped === 0 ? "No" : "Yes"}
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-md-2">
                                        <div className="form-group">
                                          <button
                                            type="button"
                                            className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                                            onClick={() => addDesignRow(pIdx)}
                                          >
                                            +
                                          </button>
                                          {gIdx > 0 && (
                                            <button
                                              type="button"
                                              className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                              onClick={() =>
                                                removeDesignRow(pIdx, gIdx)
                                              }
                                            >
                                              -
                                            </button>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </Fragment>
                              ))}
                            </div>

                            <hr className="break" />
                            <div className="padding-class">
                              <span>
                                Total Area: {Number(totalGlassArea.toFixed(3))}m²
                              </span>
                            </div>
                          </div>

                          <div className="col-md-6 col-sm-12 custome_table_get_a_quote">
                            <div className="row radio-margin ">
                              <div style={{ width: "50%" }}>
                                <div className="Col-md-3 padding-class2">
                                  Sparkle Add on:
                                </div>
                                <div
                                  className="Col-md-3 padding-class2"
                                  style={{ display: "flex", marginLeft: "7%" }}
                                >
                                  <div className="col-md-3 noprint">
                                    <label className="radio-inline1 noprint">
                                      <input
                                        type="radio"
                                        name="sparkle"
                                        value="1"
                                        checked={sparkleCheck === 1}
                                        onChange={(e) => onSparkle(e.target.value)}
                                      />{" "}
                                      Yes
                                    </label>
                                  </div>
                                  <div className="col-md-2 noprint">
                                    <label className="radio-inline1 noprint">
                                      <input
                                        type="radio"
                                        name="sparkle"
                                        value="0"
                                        checked={sparkleCheck === 0}
                                        onChange={(e) => onSparkle(e.target.value)}
                                      />{" "}
                                      No
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div style={{ width: "50%" }}>
                                <div className="col-md-12 font-class">
                                  <div className="side-survey">Survey and Fit Options:</div>
                                </div>
                                <div
                                  className="col-md-3"
                                  style={{ marginTop: 0, marginLeft: "-9%" }}
                                >
                                  <select
                                    className="select-box-survey-fit noborder changeColor"
                                    onChange={(e) =>
                                      onSurveyPick(
                                        e.target.value,
                                        e.target.options[e.target.selectedIndex]?.text ||
                                        ""
                                      )
                                    }
                                    value={survey.item || ""}
                                    style={{ width: 195 }}
                                  >
                                    <option value="">Select item</option>
                                    {surveyFitOptions.map((o) => (
                                      <option key={o.value} value={o.value}>
                                        {o.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="padding-class font-class-cutouts">
                              Cutouts
                              {addCutouts.map((row, idx) => (
                                <div className="row" key={`co-${idx}`}>
                                  <div className="col-md-7 col-lg-7">
                                    <div className="form-group">
                                      {idx === 0 && (
                                        <label className="custome_lable custome_lable_lenghtt">
                                          {L.item}
                                        </label>
                                      )}
                                      <select
                                        className="custome-select-box-get-a-quote noborder changeColor"
                                        onChange={(e) =>
                                          onCutoutPick(
                                            idx,
                                            e.target.value,
                                            e.target.options[e.target.selectedIndex]
                                              ?.text || ""
                                          )
                                        }
                                        value={row.item || ""}
                                      >
                                        <option value="">Select item</option>
                                        {cutouts.map((o) => (
                                          <option key={o.value} value={o.value}>
                                            {o.label}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>

                                  <div className="col-md-2 col-lg-2 ">
                                    <div className="form-group">
                                      {idx === 0 && (
                                        <label className="custome_lable">
                                          {L.quantity}
                                        </label>
                                      )}
                                      <input
                                        type="number"
                                        className="form-control custom-text_cutouts noborder"
                                        value={row.quantity || ""}
                                        onChange={(e) =>
                                          onCutoutQty(idx, e.target.value)
                                        }
                                        disabled={!row.item}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-2 col-lg-2" style={{ marginLeft: "-7%" }}>
                                    <div className="form-group">
                                      <button
                                        type="button"
                                        className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                                        onClick={pushRow(setAddCutouts, initialCutoutRow)}
                                      >
                                        +
                                      </button>
                                      {idx > 0 && (
                                        <button
                                          type="button"
                                          className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                          onClick={() => popRow(setAddCutouts)(idx)}
                                        >
                                          -
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="padding-class font-class-extra-service font-class-design">
                              Extra Services
                              {addExtraServicesGlass.map((row, idx) => (
                                <div className="row" key={`xg-${idx}`}>
                                  <div className="col-md-4">
                                    <div className="form-group">
                                      {idx === 0 && (
                                        <label className="custome_lable custome_lable_lenghtt">
                                          {L.item}
                                        </label>
                                      )}
                                      <select
                                        className="custome-select-box-get-a-quote noborder changeColor"
                                        onChange={(e) =>
                                          onExtraGlassPick(
                                            idx,
                                            e.target.value,
                                            e.target.options[e.target.selectedIndex]
                                              ?.text || ""
                                          )
                                        }
                                        value={row.item || ""}
                                      >
                                        <option value="">Select item</option>
                                        {extraServices
                                          .filter((x) => x.material === "Glass")
                                          .map((o) => (
                                            <option key={o.value} value={o.value}>
                                              {o.label}
                                            </option>
                                          ))}
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
                                      {idx === 0 && (
                                        <label className="custome_lable custome_lable_lenghtt">
                                          {L.unitPrice}
                                        </label>
                                      )}
                                      <span className="custom-text_extra-services_quantity ">
                                        {row.unit_price}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-3">
                                    <div className="form-group">
                                      {idx === 0 && (
                                        <label className="custome_lable_extra">
                                          {L.quantity}
                                        </label>
                                      )}
                                      <input
                                        type="number"
                                        className="form-control custom-text_extra-services_quantity noborder"
                                        value={row.quantity || ""}
                                        onChange={(e) =>
                                          onExtraGlassQty(idx, e.target.value)
                                        }
                                        disabled={!row.item}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-1 cust-marg-get-a-quote">
                                    <div className="form-group">
                                      {idx === 0 && (
                                        <label className="custome_lable_lenght">
                                          {L.price}
                                        </label>
                                      )}
                                      <input
                                        type="text"
                                        className="form-control custom-text noborder disabled_text_field"
                                        disabled
                                        value={Number(row.price || 0)}
                                        readOnly
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-2">
                                    <div className="form-group">
                                      <button
                                        type="button"
                                        className="Green-Add-Panel_button cutome-rounded-delete-button noprint"
                                        onClick={pushRow(
                                          setAddExtraServicesGlass,
                                          initialExtraRow
                                        )}
                                      >
                                        +
                                      </button>
                                      {idx > 0 && (
                                        <button
                                          type="button"
                                          className="Red-delete-Panel-button cutome-rounded-delete-button noprint"
                                          onClick={() =>
                                            popRow(setAddExtraServicesGlass)(idx)
                                          }
                                        >
                                          -
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3 customer search for admin */}
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
                    {isAdmin && (
                      <div
                        className="col-sm-6"
                        style={{
                          marginBottom: 30,
                          marginLeft: "-1%",
                          fontSize: 20,
                          fontWeight: "normal",
                          marginTop: 20,
                        }}
                      >
                        <b>Step 3:</b> Customer Search (Optional)
                        {customers.length > 0 && (
                          <Select
                            closeMenuOnSelect
                            options={customers}
                            onInputChange={handleSelectMenuInput}
                            menuIsOpen={menuOpen}
                            isClearable
                            value={selectedCustomer}
                            onChange={onCustomerSelect}
                          />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Step 4 or 3 user info */}
                  <div className="row" style={{ marginLeft: "0%" }}>
                    <span
                      className="custom-span"
                      style={{
                        marginLeft: "-1%",
                        fontSize: 20,
                        fontWeight: "normal",
                      }}
                    >
                      <b>Step {isAdmin ? "4" : "3"}:</b>{" "}
                      {isAdmin ? "Client's Information" : "Your Information"}
                    </span>
                  </div>

                  <div
                    style={{
                      border: "1px solid black",
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
                            className="form-control custom-text_cutouts noborder w-100"
                            value={userInfo.firstname}
                            onChange={(e) => onUserChange("firstname", e.target.value)}
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
                            className="form-control custom-text_cutouts noborder w-100"
                            value={userInfo.lastname}
                            onChange={(e) => onUserChange("lastname", e.target.value)}
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
                            className="form-control custom-text_cutouts noborder w-100  "
                            value={userInfo.email}
                            onChange={(e) => onUserChange("email", e.target.value)}
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
                            className="form-control custom-text_cutouts noborder w-100"
                            value={userInfo.phone}
                            onChange={(e) => onUserChange("phone", e.target.value)}
                          />
                        </div>
                      </div>

                      {isAdmin && (
                        <Fragment>
                          <div className="col-md-4 col-lg-3 col-sm-12 ">
                            <div className="form-group">
                              <label className="custome_lable custome_lable_lenghtt">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control custom-text_cutouts noborder w-100"
                                value={userInfo.address}
                                onChange={(e) => onUserChange("address", e.target.value)}
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
                                className="form-control custom-text_cutouts noborder w-100"
                                value={userInfo.postcode}
                                onChange={(e) =>
                                  onUserChange("postcode", e.target.value)
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
                                className="form-control custom-text_cutouts noborder w-100"
                                value={userInfo.city}
                                onChange={(e) => onUserChange("city", e.target.value)}
                              />
                            </div>
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </div>

                  <br />
                  {/* Step 5 or 4 submit */}
                  <div className="col-md-12" style={{ marginLeft: "-2%" }}>
                    <span className="font-12" style={{ fontSize: 20 }}>
                      <b>Step {isAdmin ? "5" : "4"}:</b> Get your FREE Quote
                    </span>

                    <div className="form-group form-check">
                      <input
                        name="check"
                        type="checkbox"
                        className="form-check-input"
                        id="check"
                        required
                        onChange={onTC}
                        style={{ marginTop: "0.5%" }}
                        checked={checkedTC}
                      />
                      <label
                        className="custome_lable_accept form-check-label"
                        htmlFor="check"
                        style={{ marginLeft: "1%" }}
                      >
                        &nbsp;I accept the&nbsp;
                        <Link to={`${PUBLIC_URL}/terms-and-condition`}>
                          Terms and Conditions
                        </Link>
                        &nbsp; and&nbsp;
                        <Link to={`${PUBLIC_URL}/privacy-policy`}>
                          Privacy policy
                        </Link>
                      </label>
                      <br />
                      <button
                        className="cutome-rounded-button btn btn-outline-primary-2 btn-round btn-more"
                        type="submit"
                        disabled={!checkedTC}
                        style={{ padding: "0.2%", minWidth: 170 }}
                      >
                        Email me the quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end main */}
          </div>
        </section>
      </form>
    </div>
  );
}
