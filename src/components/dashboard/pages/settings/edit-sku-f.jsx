import React, { Component } from "react";
import { FormTamplate } from "./settings_form";
import "../../style/index.scss";
import DashboardHeader from "../../includes/Header";
import axios from "axios";
import ImagePicker from "./../../includes/image-picker";
import Select from "react-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Navigate } from "react-router-dom";

// var image2base64 = require("image-to-base64");

class editSku extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_holder: [],
      selectedFile: null,
      finishImages: [],
      imagesArray: [],
      checkbox: false,
      inputValue: [],
      inputNotes: [],
      show: false,
      options: [],
      slabs: [],
      manufacturer: [],
      brands: [],
      brandsFilter: [],
      isRedirect: false,
      suppliers: [],
      suppliersFilter: [],
      disabled: false,
      base_color: [],
      glass_category: [],
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
      finishNames: [],
      selectedFinishes: [],
      editableSku: [],
      selected_manufacturer: "",
      selected_brand: "",
      product_name: "",
      product_warranty: "",
      product_video: "",
      product_description: "",
      product_additional_info: "",
      product_technical_info: "",
      selected_material_type: "",
      selected_material_sub_type_id: "",
      selected_supplier: "",
      selected_color_code: "",
      selected_base_color: "",
      selected_color_shade: "",
      tile_notes: "",
      slab_notes: "",
      selected_metrial_id: 0,
      effects_notes: "",
      application_notes: "",
      image_caption: "",
      data: [],
      isChecked: true,
      slab_checked: [],
      tile_checked: [],
      application_checked: [],
      selectedFinishes_old: [],
      efffect_checked: [],
      thickness_checked: [],
      finish_checked: [],
      finish_price: [],
      finishToCheck: [],
      imageData: [],
      getDateState: {
        name: "",
        warranty: "",
        video: "",
        description: "",
        additional_info: "",
        technical_info: "",
        material_sub_type_id: "",
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
        finishes: [],
        newImageArraySequence: null,
      },
      images: {
        imagepreview_1: "http://placehold.it/180",
        imagepreview_2: "http://placehold.it/180",
        imagepreview_3: "http://placehold.it/180",
        imagepreview_4: "http://placehold.it/180",
        imagepreview_5: "http://placehold.it/180",
      },
      images_show: {
        imagepreview_1: "http://placehold.it/180",
        imagepreview_2: "http://placehold.it/180",
        imagepreview_3: "http://placehold.it/180",
        imagepreview_4: "http://placehold.it/180",
        imagepreview_5: "http://placehold.it/180",
      },
      image_caption: {
        image_caption_1: "",
        image_caption_2: "",
        image_caption_3: "",
        image_caption_4: "",
        image_caption_5: "",
      },
      image_sequence: {
        image_sequence_1: "",
        image_sequence_2: "",
        image_sequence_3: "",
        image_sequence_4: "",
        image_sequence_5: "",
      },
    };
    this.showGlass = this.showGlass.bind(this);
    this.showStone = this.showStone.bind(this);
    this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
    this.handleImageSequence = this.handleImageSequence.bind(this);
    this.handleFinishesPrice = this.handleFinishesPrice.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.getInformation = this.getInformation.bind(this);
    this.getTechnical = this.getTechnical.bind(this);
    this.cancelPage = this.cancelPage.bind(this);
  }

  cancelPage = (e) => {
    this.setState({
      isRedirect: true,
    });
  };

  getDescription = (e, editor) => {
    let data = editor.getData();
    let getState = this.state.getDateState;
    getState["description"] = data;
    this.setState({
      ...this.state,
      getDateState: getState,
    });
  };

  getInformation = (e, editor) => {
    let data = editor.getData();
    let getState = this.state.getDateState;

    getState["additional_info"] = data;
    this.setState({
      ...this.state,
      getDateState: getState,
    });
  };

  getTechnical = (e, editor) => {
    let data = editor.getData();
    let getState = this.state.getDateState;

    getState["technical_info"] = data;
    this.setState({
      ...this.state,
      getDateState: getState,
    });
  };
  isSlabSizedChecked = (id) => {
    let localArray = this.state.slab_checked;
    let index = localArray.findIndex(function (el) {
      return el == id;
    });
    if (index !== -1) {
      return true;
    }
  };

  isFinishChecked = (thicknessId, finishId) => {
    let localArray = this.state.finishToCheck;
    let index = localArray.findIndex(function (item) {
      return item.thickness_id == thicknessId && item.finish_id == finishId;
    });
    if (index == -1) {
      return false;
    } else {
      return true;
    }
  };
  isPriceAvailable = (thicknessId, finishId) => {
    let localArray = this.state.finishToCheck;
    let index = localArray.findIndex(function (item) {
      return item.thickness_id == thicknessId && item.finish_id == finishId;
    });
    if (index == -1) {
      return false;
    } else {
      return localArray[index].price;
    }
  };
  getCaption = () => {
    let localArray = this.state.imageData;
    return localArray.caption;
  };

  isTileSizeChecked = (id) => {
    let localArray = this.state.tile_checked;

    let index = localArray.findIndex(function (el) {
      return el == id;
    });
    if (index !== -1) {
      return true;
    }
  };
  isApplicationAreaChecked = (id) => {
    let localArray = this.state.application_checked;

    let index = localArray.findIndex(function (el) {
      return el == id;
    });
    if (index !== -1) {
      return true;
    }
  };
  iseffectChecked = (id) => {
    let localArray = this.state.efffect_checked;

    let index = localArray.findIndex(function (el) {
      return el == id;
    });
    if (index !== -1) {
      return true;
    }
  };
  isThicknessChecked = (id) => {
    let thiknessId = id.split("_");
    let thiknessIndex = thiknessId[1];
    let thicknesses = this.state.thickness;
    let localArray = this.state.thickness_checked;
    let index = localArray.findIndex(function (el) {
      return el == thiknessId[0];
    });

    if (index !== -1) {
      thicknesses[thiknessIndex].checked = true;
      this.setState({
        thickness: thicknesses,
      });
      return true;
    }
  };

  handleImageCaption(event, index, value) {
    // here we check for the existing data
    console.log(event.target.value);
    if (value) {
      this.state.imagesArray.filter((image) => {
        if (image.id === value) {
          image.caption = event.target.value;
        }
      });
    }
    let temp = this.state.imagesArray;
    console.log(temp);
  }

  handleImageSequence(event, index, value) {
    // here we check for the existing data
    if (value) {
      this.state.imagesArray.filter((image) => {
        if (image.id === value) {
          image.sequence = event.target.valueAsNumber;
        }
      });
    }

    // for new data
    let newImageArray = this.state.imagesArray;
    console.log(event.target.value);
    console.log(value);
    newImageArray[index]["sequence"] = event.target.value;

    this.setState({
      newImageArraySequence: newImageArray,
    });
  }

  handleChangeeee(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  handleFinishesPrice(e) {
    let finishes = this.state.selectedFinishes;
    let checkFinish = finishes.includes(e.target.getAttribute("name"));
    if (!checkFinish && e.target.value !== "") {
      finishes.push(e.target.getAttribute("name"));
    }

    this.setState({
      ...this.state,
      selectedFinishes: finishes,
    });
  }

  handleImageUpload = async (event, value, index) => {
    // here we check for the existing ones
    if (value) {
      let data = new FormData();
      this.state.imagesArray.filter((image) => {
        if (image.id === value) {
          data.append("path", image.path);
        }
      });

      data.append("file", event.target.files[0]);

      axios
        .post(`${import.meta.env.VITE_API_URL}/sku/imageupload`, data)
        .then((res) => {
          if (res.data.status === true) {
            const updated_path = res.data.path;
            this.state.imagesArray.filter((image) => {
              if (image.id === value) {
                let images_show = this.state.images_show;
                image.path = updated_path;
                images_show[
                  `imagepreview_${index + 1}`
                ] = `${import.meta.env.VITE_API_URL}${image.path}`;
                this.setState(images_show);
              }
            });
            // let imageShowArray = 'dsa'
          }
        })
        .catch((error) => {
          console.log(error.response);
        });

      console.log(event);
      console.log(value);
      const temp = this.state.imagesArray;
      console.log("images Array", temp);
    } else {
      // here we go for new data
      let name = event.target.name;
      let saveImages = this.state.images;
      let saveImages1 = this.state.images_show;
      saveImages[name] = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          saveImages1[name] = e.target.result;
          this.setState({
            ...this.state,
            images_show: saveImages1,
            images: saveImages,
          });
        };

        reader.readAsDataURL(event.target.files[0]);
      }
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
  };

  attactchFinishImage = (event) => {
    let finish = event.target.getAttribute("data-finish");
    let thickness = event.target.getAttribute("data-thickness");
    let file = event.target.files[0];
    let finishImages = this.state.finishImages;
    let index = finishImages.findIndex(function (item) {
      return item.finish == finish && item.thickness == thickness;
    });
    if (index === -1) {
      finishImages.push({
        finish: finish,
        thickness: thickness,
        image: file,
      });
    } else {
      finishImages.splice(index, 1);
      finishImages.push({
        finish: finish,
        thickness: thickness,
        image: file,
      });
    }
    this.setState({
      finishImages: finishImages,
    });
  };
  handleShow(event) {
    let name = event.target.name;
    let saveImages = this.state.images_show;

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        saveImages[name] = e.target.result;
        this.setState({
          ...this.state,
          images_show: saveImages,
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.selectedFinishes.length == 0 &&
      this.state.selectedFinishes_old.length == 0
    ) {
      toast.warn(`Please select atlest 1 finish`);
    } else {
      this.setState({
        ...this.state,
        disabled: true,
      });
      let data = this.state.getDateState;
      let images = this.state.images;
      console.log("data", data);
      console.log("images", images);
      console.log(this.state.image_sequence);

      let finishImages = this.state.finishImages;
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
          } else if (element == "name") {
            data[element] = form[element][0].value.replace(
              /^\s+|\s+$|\s+(?=\s)/g,
              ""
            );
          } else {
            data[element] = form[element].value;
          }
        } else {
        }
      }
      data["material_id"] = this.state.selected_metrial_id;

      let finishesPrice = [];
      this.state.selectedFinishes.map((finish) => {
        let seprate = finish.split("_");
        let thickness_id = seprate[0];
        let finish_id = seprate[1];
        let price = form[finish].value;

        let checkOldFinishes = this.state.selectedFinishes_old.findIndex(
          function (item) {
            return (
              item.thickness_id == parseInt(thickness_id) &&
              item.finish_id == parseInt(finish_id)
            );
          }
        );
        if (checkOldFinishes !== -1) {
          let oldFinishes = this.state.selectedFinishes_old;
          oldFinishes[checkOldFinishes].price = parseInt(price);
          this.setState({
            selectedFinishes_old: oldFinishes,
          });
        } else {
          let tempObj = {
            thickness_id: thickness_id,
            finish_id: finish_id,
            price: price,
          };
          finishesPrice.push(tempObj);
        }
      });
      let finishFinal = [...finishesPrice, ...this.state.selectedFinishes_old];

      let images_obj = [];
      let my_index_to_update = 0;
      for (let image in images) {
        if (this.state.images[image] !== "http://placehold.it/180") {
          let caption = "";
          let sequence = "";
          let seprate = image.split("_");
          let image_id = seprate[1];
          if (form["imgcaption_" + image_id]) {
            caption = form["imgcaption_" + image_id].value;
          }
          if (form["imgsequence_" + image_id]) {
            sequence = form["imgsequence_" + image_id].value;
          }

          let tempImageObj = {
            caption: caption,
            sequence: sequence,
            image: this.state.images[image],
          };
          images_obj.push(tempImageObj);
          let data_holder = this.state.data_holder;
          data_holder.push(my_index_to_update);
          this.setState({ data_holder: data_holder });
        }
        my_index_to_update++;
      }

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      let form_data = new FormData();

      for (var key in data) {
        form_data.append(key, data[key]);
      }
      for (var i = 0; i < finishFinal.length; i++) {
        let finish = finishFinal[i];
        form_data.append("finishes[" + i + "]", JSON.stringify(finish));
      }

      for (var i = 0; i < images_obj.length; i++) {
        let image = images_obj[i].image;
        let name = images_obj[i].image["name"].split(".");
        let details =
          name[0] +
          "--__" +
          images_obj[i]["caption"] +
          "--__" +
          images_obj[i]["sequence"];
        form_data.append("images[" + i + "]", image, details);
      }

      for (var i in finishImages) {
        let details = finishImages[i].thickness + "_" + finishImages[i].finish;
        form_data.append(
          "finish_image[" + i + "]",
          finishImages[i].image,
          details
        );
      }
      if (this.state.newImageArraySequence) {
        for (var i = 0; i < this.state.newImageArraySequence.length; i++) {
          let details =
            this.state.newImageArraySequence[i]["id"] +
            "--__" +
            this.state.newImageArraySequence[i]["sequence"];
          form_data.append("newImageArraySequence[" + i + "]", details);
        }
      }
      let existingData = this.state.imagesArray;

      let holding = this.state.data_holder;

      // existingData.forEach((image) => {});

      console.log("here:", existingData);
      form_data.append("indexOfImageChange", holding);
      form_data.append("existingData", JSON.stringify(existingData));

      // return;
      console.log("FORM_DATA =>", form_data);
      console.log("Config =>", config);
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/sku/update/${this.props.match.params.id}`,
          form_data,
          config
        )
        .then((res) => {
          // return res.data;
          this.setState({
            isRedirect: true,
          });
        })
        .catch((error) => {
          this.setState({
            isRedirect: true,
          });
          console.log(error.response);
        });
    }
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      return this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
  }
  handleNotesChange = (e) => {
    this.state.inputNotes = e.target.value;
    this.setState({
      tile_notes: this.state.inputNotes,
    });
  };
  handleInput = (event, index) => {
    if (event.target.value !== null && event.target.value !== "") {
      this.state.inputValue[index] = event.target.value;
      this.setState({
        ...this.state,
        inputValue: this.state.inputValue,
      });
    }
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
      thickness: thicknesses,
    });
    if (!e.target.checked) {
      let removeOldFinish = this.state.selectedFinishes_old.findIndex(function (
        item
      ) {
        return (
          item.thickness_id == parseInt(requiredObj.value) &&
          item.finish_id == parseInt(finishes[finishIndex].value)
        );
      });
      let getId = e.target.getAttribute("id");
      let splidId = getId.split("_");
      let oldId = `${splidId[0]}_${splidId[2]}_${splidId[1]}`;
      document.getElementById(oldId).value = "";
      finishes[finishIndex].checked = false;
      let getName = e.target.getAttribute("text-field");
      let fieldName = document.getElementById(getName).name;
      if (getName) {
        let getFinishes = this.state.selectedFinishes;
        let getNamefromArray = getFinishes.indexOf(fieldName);
        if (getNamefromArray > -1) {
          getFinishes.splice(getNamefromArray, 1);
          this.setState({
            ...this.state,
            selectedFinishes: getFinishes,
          });
        }
        document.getElementById(getName).value = "";
      }

      if (removeOldFinish > -1) {
        document.getElementById(oldId).value = "";
        let oldSku = this.state.selectedFinishes_old;
        let finishToCheck = this.state.finishToCheck;
        this.state.selectedFinishes_old.splice(removeOldFinish, 1);
        finishToCheck.splice(removeOldFinish, 1);
        this.setState({
          ...this.state,
          selectedFinishes_old: oldSku,
          finishToCheck: finishToCheck,
        });
      }
    }
  }
  handleThicknessCheck = (e) => {
    let thicknessIndex = parseInt(e.target.getAttribute("data-index"));
    let thicknesses = this.state.thickness;
    let requiredObj = thicknesses[thicknessIndex];
    for (let index = 0; index < requiredObj.finishes.length; index++) {
      let getId = requiredObj.name + "_" + thicknessIndex + "_" + index;
      let getElement = document.getElementById(getId);
      if (getElement) {
        if (getElement.checked) {
          getElement.click();
        }
      }
    }
    requiredObj.finishes.map((check) => { });
    requiredObj.checked = !requiredObj.checked;
    if (!requiredObj.checked) {
      for (let i in requiredObj.finishes) {
        requiredObj.finishes[i].checked = false;
      }
    }

    thicknesses.splice(thicknessIndex, 1, requiredObj);

    this.setState({
      ...this.state,
      thickness: thicknesses,
      thickness_checked: [],
    });
  };
  showStone() {
    this.setState({
      ...this.state,
      material: "stone",
      thickness: this.state.temporary,
    });
  }
  showGlass() {
    this.setState({
      ...this.state,
      temporary: this.state.thicknes,
    });

    let thiknes = this.state.thickness.filter(function (el) {
      return el.name != "4mm";
    });
    this.setState({
      ...this.state,
      material: "glass",
      thickness: thiknes,
    });
  }

  //    getBase64(file) {
  //      let blob = new Blob([file]);
  //    var reader = new FileReader();
  //    reader.readAsDataURL(blob);
  //    reader.onload = function () {
  //      console.log(reader.result);
  //    };
  //    reader.onerror = function (error) {
  //      console.log('Error: ', error);
  //    };
  // }

  // convertImageTo64(imgUrl) {
  //   let result;
  //   image2base64(imgUrl)
  //     .then(response => {
  //       result = "data:image/png;base64," + response;
  //       this.base64ImageToBlob(result);
  //       this.dataURLtoFile(result,'cd.png');
  //     })
  //     .catch(error => {
  //       console.log(error); //Exepection error....
  //     });

  //   // let filepath = base64Img.imgSync(result, "", "2");
  //   return result;
  // }

  //slab Size
  componentDidMount() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/sku/getSku/${this.props.match.params.id}`)
      .then((res) => {
        let selected_manufacturer = res.data[0].manufacturer_id;
        let selected_brand = res.data[0].brand_id;
        let selected_supplier = res.data[0].supplier_id;
        let selected_material_type = res.data[0].material_type;
        let selected_color_code = res.data[0].color_code;
        let tile_notes = res.data[0].tile_size_note;
        let slab_note = res.data[0].slab_size_note;
        let effect_note = res.data[0].effects_note;
        let selected_base_color = res.data[0].base_color_id;
        let selected_color_shade = res.data[0].color_shade_id;
        let application_note = res.data[0].applications_area_note;
        let image_caption = res.data[0].caption;
        let selectedFinishes = res.data[0].finishes;
        let images = this.state.images_show;
        let slab_checked = this.state.slab_checked;
        let tile_checked = this.state.tile_checked;
        let efffect_checked = this.state.efffect_checked;
        let thickness_checked = this.state.thickness_checked;
        let finish_checked = this.state.finish_checked;
        let finish_price = this.state.finish_price;
        let finishToCheck = this.state.finishToCheck;
        let imageData = this.state.imageData;
        let application_checked = this.state.application_checked;
        let imagecaption = this.state.image_caption;
        let name = res.data[0].name;
        let warranty = res.data[0].warranty;
        let video = res.data[0].video;
        let description = res.data[0].description;
        let additional_info = res.data[0].additional_info;
        let technical_info = res.data[0].technical_info;
        let selected_material_sub_type_id = res.data[0].material_sub_type_id;
        let selected_metrial_id = res.data[0].material_id;

        let material = res.data[0].material.toLowerCase();

        if (res.data[0]["images"] !== null) {
          res.data[0]["images"].map((image, index) => {
            let num = index + 1;
            images[
              "imagepreview_" + num
            ] = `${import.meta.env.VITE_API_URL}/${image["path"]}`;
          });

          console.log('res.data[0]["images"]: ', res.data[0]["images"]);

          this.setState({
            ...this.state,
            material: material,
            imagesArray: res.data[0]["images"],
          });

          res.data[0]["images"].map((result, index) => {
            let imageShow = this.state.images_show;
            let imageSequence = this.state.image_sequence;
            let imageCaption = this.state.image_caption;
            let imagesState = this.state.images;

            imageShow[index] = result.path;
            imageSequence[index] = result.sequence;
            imageCaption[index] = result.caption;
            this.setState({
              ...this.state,
              images_show: imageShow,
              image_sequence: imageSequence,
              image_caption: imageCaption,
              images: imagesState,
            });
          });
        }

        res.data[0]["slab_size"].map((slab_size, index) => {
          slab_checked.push(slab_size["slab_size_id"]);
        });
        res.data[0]["finishes"].map((finishes, index) => {
          finish_checked.push(finishes["finish_id"]);
        });
        res.data[0]["tile_sizes"].map((tile_sizes, index) => {
          tile_checked.push(tile_sizes["tile_size_id"]);
        });
        res.data[0]["application_areas"].map((application_areas, index) => {
          application_checked.push(application_areas["application_area_id"]);
        });
        res.data[0]["effects"].map((effects, index) => {
          efffect_checked.push(effects["effect_id"]);
        });
        res.data[0]["finishes"].map((finishes, index) => {
          thickness_checked.push(finishes["thickness_id"]);
        });
        res.data[0]["finishes"].map((finishes, index) => {
          finish_price.push(finishes["price"]);
        });
        res.data[0]["finishes"].map((finish, index) => {
          finishToCheck.push(finish);
        });

        // if (res.data[0].material === "Glass") {
        //   setTimeout(
        //     function () {
        //       this.showGlass()
        //     }
        //       .bind(this),
        //     3000
        //   );
        // }

        if (selected_manufacturer) {
          this.handleManufacturerChange(selected_manufacturer);
          this.handleBrandChange(selected_brand);
          this.handleColorChange(selected_base_color);
        }
        let getState = this.state.getDateState;
        getState["description"] = description;
        getState["additional_info"] = additional_info;
        getState["technical_info"] = technical_info;
        this.setState({
          ...this.state,
          isLoaded: true,
          editableSku: res.data[0],
          selected_manufacturer: selected_manufacturer,
          selected_brand: selected_brand,
          selected_material_type: selected_material_type,
          selected_material_sub_type_id: selected_material_sub_type_id,
          selected_color_code: selected_color_code,
          selected_base_color: selected_base_color,
          selected_color_shade: selected_color_shade,
          tile_notes: tile_notes,
          slab_notes: slab_note,
          effects_notes: effect_note,
          application_notes: application_note,
          image_caption: image_caption,
          images_show: images,
          selected_supplier: selected_supplier,
          product_name: name,
          product_warranty: warranty,
          product_video: video,
          product_description: description,
          product_additional_info: additional_info,
          product_technical_info: technical_info,
          getDateState: getState,
          selected_metrial_id: selected_metrial_id,
          material: res.data[0].material,
          selectedFinishes_old: selectedFinishes,
        });
      });

    axios.get(`${import.meta.env.VITE_API_URL}/slab_sizes`).then((slab_size) => {
      let slabs = slab_size.data.map((slab_size) => {
        //mapping
        return {
          name: slab_size.name,
          value: slab_size.id,
          material: slab_size.materialType.name,
        };
      });

      this.setState({
        ...this.state,
        isLoaded: true,
        data: slab_size.data,
        slabs: slabs,
      });
    });

    //metrial sub type
    axios.get(`${import.meta.env.VITE_API_URL}/material_subtype`).then((category) => {
      let glassCategory = category.data.map((category) => {
        //mapping
        return { name: category.name, value: category.id };
      });

      this.setState({
        ...this.state,
        isLoaded: true,
        glass_category: glassCategory,
      });
    });

    //tile
    axios.get(`${import.meta.env.VITE_API_URL}/tile_sizes`).then((tile_size) => {
      let tiles = tile_size.data.map((tile_size) => {
        //mapping
        return {
          name: tile_size.name,
          value: tile_size.id,
          material: tile_size.materialType.name,
        };
      });

      this.setState({
        ...this.state,
        isLoaded: true,
        tiles: tiles,
      });
    });

    //manufacturers
    axios.get(`${import.meta.env.VITE_API_URL}/manufacturer`).then((res) => {
      let manufacturers = res.data.map((manufacturer) => {
        //mapping
        return { label: manufacturer.name, value: manufacturer.id };
      });
      this.setState({
        ...this.state,
        isLoaded: true,
        manufacturer: manufacturers,
      });
    });

    //brands

    axios.get(`${import.meta.env.VITE_API_URL}/brand`).then((brand) => {
      let brands = brand.data.map((_brand) => {
        //mapping
        return {
          label: _brand.name,
          value: _brand.id,
          manufacturer_id: _brand.manufacturer_id,
        };
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        brands: brands,
      });
    });
    //suppliers
    axios.get(`${import.meta.env.VITE_API_URL}/suppliers`).then((res) => {
      let supp = res.data.map((suppl) => {
        return { label: suppl.name, value: suppl.id, brands: suppl.brands };
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        suppliers: supp,
      });
    });

    //Base Color
    axios.get(`${import.meta.env.VITE_API_URL}/base_color`).then((res) => {
      let base_colors = res.data.map((_base_color) => {
        return { label: _base_color.name, value: _base_color.id };
      });
      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        base_color: base_colors,
      });
    });

    //color shades
    axios.get(`${import.meta.env.VITE_API_URL}/color_shades`).then((color_shades) => {
      let color_shade = color_shades.data.map((_color_shades) => {
        return {
          label: _color_shades.name,
          value: _color_shades.id,
          baseColor: _color_shades.baseColor,
        };
      });

      this.setState({
        // using spread operator, you will need transform-object-rest-spread from babel or
        // another transpiler to use this
        ...this.state, // spreading in state for future proofing
        isLoaded: true,
        color_shades: color_shade,
      });
    });
    //Material Types
    axios
      .get(`${import.meta.env.VITE_API_URL}/material_types`)
      .then((material_types) => {
        let material_type = material_types.data.map((_material_type) => {
          return {
            label: _material_type.name,
            value: _material_type.id,
            name: _material_type.materials.name,
          };
        });
        this.setState({
          // using spread operator, you will need transform-object-rest-spread from babel or
          // another transpiler to use this
          ...this.state, // spreading in state for future proofing
          isLoaded: true,
          material_types: material_type,
        });
      });

    //application Areas
    axios
      .get(`${import.meta.env.VITE_API_URL}/application_areas`)
      .then((application_area) => {
        let application = application_area.data.map((application_area) => {
          //mapping
          return {
            name: application_area.name,
            value: application_area.id,
            material: application_area.materialType.name,
          };
        });

        this.setState({
          ...this.state,
          isLoaded: true,
          applications: application,
        });
      });

    //effects
    axios.get(`${import.meta.env.VITE_API_URL}/effects`).then((effect) => {
      let effectss = effect.data.map((effect) => {
        //mapping
        return {
          name: effect.name,
          value: effect.id,
          material: effect.materialType.name,
        };
      });

      this.setState({
        ...this.state,
        isLoaded: true,
        effects: effectss,
      });
    });
    //Thickness & Finishes

    let names = [];

    axios
      .get(`${import.meta.env.VITE_API_URL}/material_thickness`)
      .then((material_thickness) => {
        axios.get(`${import.meta.env.VITE_API_URL}/finishes`).then((finish) => {
          let finishees = finish.data.map((finish) => {
            return {
              checked: false,
              name: finish.name,
              value: finish.id,
              material: finish.materialType.name,
            };
          });
          let material_thicknesses = material_thickness.data.map(
            (material_thickness) => {
              return {
                checked: false,
                name: material_thickness.name,
                value: material_thickness.id,
                material: material_thickness.materialType.name,
                finishes: finish.data.map((finish) => {
                  names.push(material_thickness.id + "_" + finish.id);
                  this.handleFinishName(names);
                  return {
                    checked: false,
                    name: finish.name,
                    value: finish.id,
                    material: finish.materialType.name,
                  };
                }),
              };
            }
          );
          this.state.thickness_checked.map((checkThickness) => {
            let findIndex = material_thicknesses.findIndex(function (el) {
              return el.value == checkThickness;
            });
            if (findIndex > -1) {
              this.state.finishToCheck.map((checkFinish) => {
                let findFinishIndex = material_thicknesses[
                  findIndex
                ].finishes.findIndex(function (el) {
                  return el.value == checkFinish.finish_id;
                });
                if (findFinishIndex > -1) {
                  if (
                    checkFinish.thickness_id ==
                    material_thicknesses[findIndex].value
                  ) {
                    material_thicknesses[findIndex].finishes[
                      findFinishIndex
                    ].checked = true;
                  }
                }
              });
              material_thicknesses[findIndex].checked = true;
            }
          });

          this.setState({
            ...this.state,
            isLoaded: true,
            thickness: material_thicknesses,
            temporary: material_thicknesses,
            finishes: finish.data,
          });
        });
      });

    this.setState({
      ...this.state,
      material: "stone",
    });

    // document.getElementById("stone").click();
    document
      .getElementById("adminPanel")
      .setAttribute(
        "href",
        `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`
      );
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  handleManufacturerChange = function (manufacturer) {
    let manufacturerNumber = manufacturer;
    let localArray = this.state.brands.filter(function (element) {
      return element.manufacturer_id === parseInt(manufacturerNumber);
    });
    this.setState({
      ...this.state,
      brandsFilter: localArray,
      suppliersFilter: [],
    });
  };

  handleBrandChange(brand) {
    let localArray = [];
    this.state.suppliers.filter(function (element) {
      let checkBrandId = element.brands.filter(function (el) {
        return el.pivot.brand_id === parseInt(brand);
      });
      if (checkBrandId.length !== 0) {
        localArray.push(element);
      }
    });
    this.setState({
      ...this.state,
      suppliersFilter: localArray,
    });
  }

  handleColorChange(color) {
    let localArray = this.state.color_shades.filter(function (element) {
      return element.baseColor.id === parseInt(color);
    });

    this.setState({
      ...this.state,
      color_shadesFilter: localArray,
    });
  }

  handleFinishName(names) {
    this.setState({
      ...this.state,
      finishNames: names,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.brands !== this.state.brands) {
      this.handleManufacturerChange(this.state.selected_manufacturer);
    }
    if (prevState.suppliers !== this.state.suppliers) {
      this.handleBrandChange(this.state.selected_brand);
    }

    if (prevState.color_shades !== this.state.color_shades) {
      this.handleColorChange(this.state.selected_base_color);
    }
  }

  getImagesArray(length) {
    // console.log("DEBUG =>>>", Array(5 - length).fill(1));
    return Array(5 - length).fill(1);
  }

  render() {
    if (this.state.isRedirect) {
      return (
        <Navigate to="/admin/sku-list" replace={false} />
      );
    }
    const manufacturers = this.state.manufacturer;
    let brands = this.state.brandsFilter;
    const suppliers = this.state.suppliersFilter;
    const base_color = this.state.base_color;
    const color_shade = this.state.color_shadesFilter;
    const material_type = this.state.material_types;
    const obj = this;
    const glass_type = [
      {
        label: "Toughened",
        value: 1,
      },
      {
        label: "Tempered",
        value: 2,
      },
    ];
    const glass_category = this.state.glass_category;
    const {
      slabs,
      tiles,
      applications,
      effects,
      thickness,
      finishes,
      material,
      manufacturer,
    } = this.state;

    let content = "";
    if (this.state.material === "Stone") {
      content = (
        <div>
          <div className="row">
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Manufacturer:
                </label>
                <select
                  name="manufacturer_id"
                  class="custome-select-box-sku"
                  onChange={(e) =>
                    this.handleManufacturerChange(e.target.value)
                  }
                  required
                >
                  {manufacturers.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_manufacturer == element.value
                        }
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Brand:
                </label>
                <select
                  name="brand_id"
                  class="custome-select-box-sku"
                  onChange={(e) => this.handleBrandChange(e.target.value)}
                  required
                >
                  {brands.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={this.state.selected_brand == element.value}
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Supplier:
                </label>
                <select
                  name="supplier_id"
                  class="custome-select-box-sku"
                  required
                >
                  {suppliers.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={this.state.selected_supplier == element.value}
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Main Color:
                </label>

                <select
                  name="base_color_id"
                  class="custome-select-box-sku"
                  onChange={(e) => this.handleColorChange(e.target.value)}
                  required
                >
                  {base_color.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_base_color == element.value
                        }
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Color Name:
                </label>

                <select
                  name="color_shade_id"
                  class="custome-select-box-sku"
                  required
                >
                  <option key="base" value="">
                    Select base Color First
                  </option>
                  {color_shade.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_color_shade == element.value
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

          <div className="row">
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Color Code:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="color-code"
                  name="color_code"
                  defaultValue={this.state.selected_color_code}
                  placeholder="Color Code"
                  style={{ height: "27px" }}
                  required
                />
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Material:
                </label>
                <select
                  name="material_type_id"
                  class="custome-select-box-sku"
                  required
                >
                  <option key="base" value="">
                    Select Material
                  </option>
                  {material_type.map((element) => {
                    if (element.name === this.state.material) {
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
                    }
                  })}
                </select>
              </div>
            </div>

            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Product Name:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="product_name"
                  name="name"
                  defaultValue={this.state.product_name}
                  placeholder="Product Name"
                  style={{ height: "27px" }}
                  required
                />
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Manufacturer's Warranty:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="warranty"
                  name="warranty"
                  defaultValue={this.state.product_warranty}
                  placeholder="Product Warranty"
                  style={{ height: "27px" }}
                  required
                />
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Product Video URL:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="product_name"
                  defaultValue={this.state.product_video}
                  name="video"
                  placeholder="e.g. https://www.youtube.com/watch?v=EngW7tLk6R8"
                  style={{ height: "27px" }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div>
          <div className="row">
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Manufacturer:
                </label>
                <select
                  name="manufacturer_id"
                  class="custome-select-box-sku"
                  onChange={(e) =>
                    this.handleManufacturerChange(e.target.value)
                  }
                  required
                >
                  {manufacturers.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_manufacturer == element.value
                        }
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Brand:
                </label>
                <select
                  name="brand_id"
                  class="custome-select-box-sku"
                  onChange={(e) => this.handleBrandChange(e.target.value)}
                  required
                >
                  {brands.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={this.state.selected_brand == element.value}
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Supplier:
                </label>
                <select
                  name="supplier_id"
                  class="custome-select-box-sku"
                  required
                >
                  {suppliers.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={this.state.selected_supplier == element.value}
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Glass Category:
                </label>
                <select
                  name="material_type_id"
                  class="custome-select-box-sku"
                  required
                >
                  <option key="base" value="">
                    Select Category
                  </option>
                  {material_type.map((element) => {
                    if (element.name === this.state.material) {
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
                    }
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Glass Product:
                </label>
                <select
                  name="material_sub_type_id"
                  class="custome-select-box-sku"
                >
                  <option key="base" value="">
                    Select Glass Product
                  </option>
                  {glass_category.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_material_sub_type_id ==
                          element.value
                        }
                      >
                        {element.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Main Color:
                </label>

                <select
                  name="base_color_id"
                  class="custome-select-box-sku"
                  onChange={(e) => this.handleColorChange(e.target.value)}
                  required
                >
                  {base_color.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_base_color == element.value
                        }
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Color Name:
                </label>

                <select
                  name="color_shade_id"
                  class="custome-select-box-sku"
                  required
                >
                  <option key="base" value="">
                    Select base Color First
                  </option>
                  {color_shade.map((element) => {
                    return (
                      <option
                        key={element.value}
                        value={element.value}
                        selected={
                          this.state.selected_color_shade == element.value
                        }
                      >
                        {element.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Color Code:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="color-code"
                  name="color_code"
                  defaultValue={this.state.selected_color_code}
                  placeholder="Color Code"
                  style={{ height: "27px" }}
                  required
                />
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Product Name:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="product_name"
                  defaultValue={this.state.product_name}
                  name="name"
                  placeholder="Product Name"
                  style={{ height: "27px" }}
                  required
                />
              </div>
            </div>
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Manufacturer's Warranty:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="warranty"
                  defaultValue={this.state.product_warranty}
                  name="warranty"
                  placeholder="Product Warranty"
                  style={{ height: "27px" }}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              style={{
                width: "18%",
                flex: "18%",
                maxWidth: "18%",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="form-group">
                <label className="custome_lable custome_lable_sku">
                  Product Video URL:
                </label>
                <input
                  type="text"
                  className="form-control custom-control-text"
                  id="product_name"
                  defaultValue={this.state.product_video}
                  name="video"
                  placeholder="e.g. https://www.youtube.com/watch?v=EngW7tLk6R8"
                  style={{ height: "27px" }}
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
        <form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
          <section className="admin-dashboard">
            <div className="row col-md-12">
              <div className="col-md-3">
                <DashboardHeader />
              </div>
              <div
                className="col-md-9 "
                style={{
                  "margin-top": "20px",
                  width: "80%",
                  maxWidth: "80%",
                  flex: "80%",
                }}
              >
                <main className="page-content card">
                  <div className="container-fluid container-fluid-sku">
                    <div
                      className="container"
                      style={{
                        maxWidth: "100%",
                        width: "100%",
                        paddingTop: "2%",
                      }}
                    >
                      <h5>Edit Sku</h5>
                      <hr className="quotebreakLine" />
                      <label className="custome_lable custome_lable_sku">
                        Material Type: {this.state.material}
                      </label>
                      {/* <div className="row">
                        <div className="col-md-1">
                          <label className="custome_lable custome_lable_sku">Stone:</label>
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
                          <label className="custome_lable custome_lable_sku">Glass:</label>
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
                      </div> */}

                      {content}
                    </div>
                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div
                        className="col-md-12 row"
                        style={{
                          marginLeft: "0px",
                          marginRight: "0px",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        <div
                          className="col-md-6 col-sm-12 custome_table_add_sku"
                          style={{ borderRight: "1px solid #c96" }}
                        >
                          <div className="row head-clr">
                            <h3>Slab Sizes</h3>
                          </div>
                          <div className="row pl-4">
                            {" "}
                            {slabs.map((slab) => {
                              if (slab.material === this.state.material) {
                                return (
                                  <div className="">
                                    <div className="custom-control custom-control-sku custom-control-inline custom-checkbox">
                                      <input
                                        type="checkbox"
                                        value={slab.value}
                                        className="custom-control-input"
                                        defaultChecked={this.isSlabSizedChecked(
                                          slab.value
                                        )}
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
                              }
                            })}
                          </div>

                          <label
                            className="custome_lable custome_lable_sku"
                            htmlFor="name"
                          >
                            Slab Size Notes
                          </label>
                          <input
                            name="slab_size_note"
                            type="text"
                            className="form-control"
                            id="name"
                            defaultValue={this.state.slab_notes}
                            placeholder="Slab Size Notes"
                            required=""
                          />
                        </div>
                        <div className="col-md-6 col-sm-12 custome_table_add_sku">
                          <div className="row head-clr">
                            <h3>Tile Sizes</h3>
                          </div>
                          <div className="row pl-4">
                            {" "}
                            {tiles.map((tile) => {
                              if (tile.material === this.state.material) {
                                return (
                                  <div className="">
                                    <div className="custom-control custom-control-sku custom-control-inline custom-checkbox">
                                      <input
                                        type="checkbox"
                                        value={tile.value}
                                        className="custom-control-input"
                                        defaultChecked={this.isTileSizeChecked(
                                          tile.value
                                        )}
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
                              }
                            })}
                          </div>

                          <label
                            className="custome_lable custome_lable_sku"
                            htmlFor="name"
                          >
                            Tile Size Notes
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="tile_size_note"
                            defaultValue={this.state.tile_notes}
                            placeholder="Tile Size Notes"
                            required=""
                          />
                        </div>
                        <div
                          className="col-md-6 col-sm-12 custome_table_add_sku"
                          style={{ borderRight: "1px solid #c96" }}
                        >
                          <div className="row head-clr">
                            <h3>Application Areas</h3>
                          </div>
                          <div className="row pl-4">
                            {" "}
                            {applications.map((application) => {
                              if (
                                application.material === this.state.material
                              ) {
                                return (
                                  <div className="">
                                    <div className="custom-control custom-control-sku custom-control-inline custom-checkbox">
                                      <input
                                        type="checkbox"
                                        value={application.value}
                                        className="custom-control-input"
                                        name="applications_area"
                                        defaultChecked={this.isApplicationAreaChecked(
                                          application.value
                                        )}
                                        id={"application-" + application.value}
                                      />
                                      <label
                                        className="custom-control-label"
                                        htmlFor={
                                          "application-" + application.value
                                        }
                                      >
                                        {application.name}
                                      </label>
                                    </div>
                                  </div>
                                );
                              }
                            })}
                          </div>

                          <label
                            className="custome_lable custome_lable_sku "
                            htmlFor="name"
                          >
                            Application Areas Notes
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="applications_area_note"
                            defaultValue={this.state.application_notes}
                            placeholder="Application Areas Notes"
                            required=""
                          />
                        </div>
                        <div className="col-md-6 col-sm-12 custome_table_add_sku">
                          <div className="row head-clr">
                            <h3>Effects</h3>
                          </div>
                          <div className="row pl-4">
                            {" "}
                            {effects.map((effect) => {
                              if (effect.material === this.state.material) {
                                return (
                                  <div className="">
                                    <div className="custom-control custom-control-sku custom-control-inline custom-checkbox">
                                      <input
                                        type="checkbox"
                                        value={effect.value}
                                        className="custom-control-input"
                                        defaultChecked={this.iseffectChecked(
                                          effect.value
                                        )}
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
                              }
                            })}
                          </div>

                          <label
                            className="custome_lable custome_lable_sku"
                            htmlFor="name"
                          >
                            Effects Notes
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="effects_note"
                            defaultValue={this.state.effects_notes}
                            placeholder="Effects Notes"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div className=" head-clr">
                        <h3>Thickness, Finishes & Prices</h3>
                        <br />
                      </div>

                      <div
                        className="row  col-md-12"
                        style={{
                          marginLeft: "0px",
                          marginRight: "0px",
                          paddingLeft: "0px",
                          paddingRight: "0px",
                        }}
                      >
                        {thickness.map((thicknes, thicknessIndex) => {
                          if (thicknes.material === this.state.material) {
                            return (
                              <React.Fragment>
                                <div className="border-matt">
                                  <div className="row col-md-12">
                                    <div className="custom-control custom-control-sku col-md-12 head-clr3 custom-control-inline custom-checkbox">
                                      <input
                                        type="checkbox"
                                        value={thicknes.value}
                                        className="custom-control-input"
                                        name="thicknesses"
                                        data-index={thicknessIndex}
                                        id={"thickness" + thicknes.name}
                                        checked={thicknes.checked}
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
                                  </div>{" "}
                                  {thicknes.finishes.map((item, index) => {
                                    if (item.material === this.state.material) {
                                      return (
                                        <React.Fragment>
                                          <div className="custom-control custom-control-sku custom-control-inline custom-checkbox">
                                            <input
                                              type="checkbox"
                                              value={
                                                thicknes.name + "_" + item.value
                                              }
                                              className="custom-control-input"
                                              name="finishes"
                                              text-field={
                                                thicknes.name +
                                                "_" +
                                                index +
                                                "_" +
                                                thicknessIndex
                                              }
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
                                              type="number"
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
                                                thicknes.value +
                                                "_" +
                                                item.value
                                              }
                                              disabled={
                                                !(
                                                  item.checked &&
                                                  thicknes.checked
                                                )
                                              }
                                              defaultValue={
                                                !this.isPriceAvailable(
                                                  thicknes.value,
                                                  item.value
                                                )
                                                  ? ""
                                                  : this.isPriceAvailable(
                                                    thicknes.value,
                                                    item.value
                                                  )
                                              }
                                              onBlur={
                                                ((event) =>
                                                  this.handleInput(
                                                    event,
                                                    index
                                                  )) &&
                                                this.handleFinishesPrice.bind(
                                                  this
                                                )
                                              }
                                            />
                                            <span>
                                              <label
                                                htmlFor={
                                                  "file_" +
                                                  thicknes.value +
                                                  "_" +
                                                  item.value
                                                }
                                              >
                                                <i className="text-success fa fa-upload"></i>
                                              </label>
                                              <input
                                                type="file"
                                                accept="image/*"
                                                data-thickness={thicknes.value}
                                                data-finish={item.value}
                                                onChange={
                                                  this.attactchFinishImage
                                                }
                                                className="d-none"
                                                id={
                                                  "file_" +
                                                  thicknes.value +
                                                  "_" +
                                                  item.value
                                                }
                                              />
                                            </span>
                                          </div>
                                        </React.Fragment>
                                      );
                                    }
                                  })}
                                </div>
                              </React.Fragment>
                            );
                          }
                        })}
                      </div>
                    </div>

                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div className="head-clr">
                        <h3>Images</h3>
                        <br />
                      </div>
                      <div className="row">
                        {this.state.imagesArray.map(function (image, index) {
                          return (
                            <div className="col-md-6">
                              <div style={{ display: "table-caption" }}>
                                <input
                                  id="image-file"
                                  type="file"
                                  accept="image/*"
                                  name={"imagepreview_" + (1 + parseInt(index))}
                                  onChange={(e, val) =>
                                    obj.handleImageUpload(e, image.id, index)
                                  }
                                  className="image-upload-custome"
                                />

                                <img
                                  src={
                                    obj.state.images_show[
                                    `imagepreview_${index + 1}`
                                    ]
                                  }
                                  className="image-preview-custome"
                                />
                              </div>

                              <div className="img-caption cust-img-cap">
                                <input
                                  type="text"
                                  className="form-control custom-control-text"
                                  name={`imgcaption_${index + 1}`}
                                  placeholder="Image Caption"
                                  defaultValue={image.caption}
                                  onChange={(event, val) =>
                                    obj.handleImageCaption(
                                      event,
                                      index,
                                      image.id
                                    )
                                  }
                                ></input>
                              </div>
                              <div className="img-caption cust-img-cap">
                                <input
                                  type="text"
                                  placeholder="Sequence Number"
                                  name={`imgsequence_${index + 1}`}
                                  className="form-control custom-control-text"
                                  defaultValue={image.sequence}
                                  onChange={(event, val) =>
                                    obj.handleImageSequence(
                                      event,
                                      index,
                                      image.id
                                    )
                                  }
                                />
                              </div>
                            </div>
                          );
                        })}
                        {this.getImagesArray(this.state.imagesArray.length).map(
                          (result, index) => {
                            return (
                              <div className="col-md-6">
                                <div style={{ display: "table-caption;" }}>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    name={`imagepreview_${this.state.imagesArray
                                      .length +
                                      1 +
                                      index}`}
                                    onChange={this.handleImageUpload}
                                    className="image-upload-custome"
                                  />

                                  <img
                                    src={
                                      this.state.images_show[
                                      `imagepreview_${this.state.imagesArray
                                        .length +
                                      1 +
                                      index}`
                                      ]
                                    }
                                    className="image-preview-custome"
                                  />
                                </div>
                                <div className="img-caption cust-img-cap">
                                  <input
                                    type="text"
                                    className="form-control custom-control-text"
                                    name={`imgcaption_${this.state.imagesArray
                                      .length +
                                      1 +
                                      index}`}
                                    placeholder="Image Caption"
                                  ></input>
                                </div>
                                <div className="img-caption cust-img-cap">
                                  <input
                                    type="text"
                                    placeholder="Sequence Number "
                                    name={`imgsequence_${this.state.imagesArray
                                      .length +
                                      1 +
                                      index}`}
                                    className="form-control custom-control-text"
                                  />
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div className="head-clr">
                        <h3>Product Description</h3>
                        <br />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <br />
                          {this.state.product_description ? (
                            <CKEditor
                              className="ClassicEditor"
                              name="description"
                              data={this.state.product_description}
                              editor={ClassicEditor}
                              onChange={this.getDescription}
                            />
                          ) : (
                            <CKEditor
                              className="ClassicEditor"
                              name="description"
                              editor={ClassicEditor}
                              onChange={this.getDescription}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div className="head-clr">
                        <h3>Additional Information</h3>
                        <br />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <br />
                          {this.state.product_additional_info ? (
                            <CKEditor
                              className="ClassicEditor"
                              name="additional_info"
                              editor={ClassicEditor}
                              data={this.state.product_additional_info}
                              onChange={this.getInformation}
                            />
                          ) : (
                            <CKEditor
                              className="ClassicEditor"
                              name="additional_info"
                              editor={ClassicEditor}
                              onChange={this.getInformation}
                            />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className=" head-clr4" style={{ marginBottom: "4px" }}>
                      <div className="head-clr">
                        <h3>Technical Information</h3>
                        <br />
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <br />

                          {this.state.product_technical_info ? (
                            <CKEditor
                              className="ClassicEditor"
                              name="technical_info"
                              data={this.state.product_technical_info}
                              editor={ClassicEditor}
                              onChange={this.getTechnical}
                            />
                          ) : (
                            <CKEditor
                              className="ClassicEditor"
                              name="technical_info"
                              editor={ClassicEditor}
                              onChange={this.getTechnical}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2 btn-round btn-more"
                        disabled={this.state.disabled}
                      >
                        Update Sku
                      </button>
                      <button
                        className="btn btn-outline-danger-2 btn-round btn-more btn-danger "
                        type="button"
                        onClick={(e) => this.cancelPage(e)}
                        style={{ "margin-left": "2%" }}
                      >
                        Cancel
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
