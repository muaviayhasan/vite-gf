import React, { Component } from "react";
import "../../../style/index.scss";
import DashboardHeader from "../../../includes/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CKEditor } from "react-ckeditor-component";

let config = {
  toolbarGroups: [
    { name: "document", groups: ["mode", "document", "doctools"] },
    {
      name: "editing",
      groups: ["find", "selection", "spellchecker", "editing"],
    },
    { name: "forms", groups: ["forms"] },
    { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
    {
      name: "paragraph",
      groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
    },
    "/",
    { name: "links", groups: ["links"] },
    { name: "insert", groups: ["insert"] },
    { name: "styles", groups: ["styles"] },
    { name: "colors", groups: ["colors"] },
    { name: "tools", groups: ["tools"] },
    "/",
    { name: "clipboard", groups: ["clipboard", "undo"] },
    { name: "others", groups: ["others"] },
    { name: "about", groups: ["about"] },
  ],
  removeButtons:
    "Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,SelectAll,Scayt,Replace,Form,Checkbox,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,BidiLtr,BidiRtl,Language,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,ShowBlocks,About,CopyFormatting,Undo,Redo",
  fontSize_sizes: "16/16px;24/24px;48/48px;",
  font_names:
    "Arial/Arial, Helvetica, sans-serif;" +
    "Times New Roman/Times New Roman, Times, serif;" +
    "Verdana",
  allowedContent: true,
  // disableNativeSpellChecker: false
  // skin: "moono",
  // plugins:
  //   "dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,popup,filetools,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc"
};

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      title: "",
      seo_url: "",
      order: "",
      status: true,
      menu_name: "",
      image: "",
      markup: "",
      file: null,
    };
    console.log("data: ");
  }

  componentDidMount() {
    document
      .getElementById("adminPanel")
      .setAttribute(
        "href",
        `${import.meta.env.VITE_PUBLIC_URL}/assets/css/custome.scoped.css`
      );
    axios.get(`${import.meta.env.VITE_API_URL}/pages`).then((res) => {
      this.setState({ pages: res.data });
    });
  }

  componentWillUnmount() {
    document.getElementById("adminPanel").removeAttribute("href");
  }

  convertToSlug = (Text) => {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  createCustomPage = (e) => {
    console.log(this.state);

    let formData = new FormData();
    if (this.state.file !== null) {
      formData.set("image", this.state.file);
    }

    var check = false;
    this.state.pages.forEach((element) => {
      if (element.seo_url == this.convertToSlug(this.state.seo_url)) {
        check = true;
      }
    });

    if (check == true) {
      toast.error(
        `Page SEO URL already being used, please choose different one`
      );
      return;
    }
    formData.set("title", this.state.title);
    formData.set("seo_url", this.convertToSlug(this.state.seo_url));
    formData.set("order", this.state.order);
    formData.set("status", true);
    formData.set("menu_name", this.state.menu_name);
    formData.set("markup", this.state.markup);

    axios
      .post(`${import.meta.env.VITE_API_URL}/pages`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(`Custom page created`);
        this.setState({
          title: "",
          seo_url: "",
          order: "",
          status: "",
          menu_name: "",
          image: "",
          markup: "",
          file: null,
        });
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  onChange = (evt) => {
    var markup = evt.editor.getData();
    this.setState({ markup });
  };

  _handleImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState(
        {
          file: file,
          image: reader.result,
        },
        () => {
          console.log(this.state.file);
        }
      );
    };

    reader.readAsDataURL(file);
  }

  render() {
    const {
      title,
      seo_url,
      order,
      status,
      menu_name,
      image,
      markup,
    } = this.state;
    return (
      <div>
        <section className="admin-dashboard">
          <div className="row col-md-12">
            <div className="col-md-3">
              <DashboardHeader />
            </div>
            <div className="col-md-9" style={{ "margin-top": "20px" }}>
              <main className="page-content">
                <div className="container-fluid">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h1 className="heading-settings-table">
                      Create Custom Page
                    </h1>
                  </div>{" "}
                  <br />
                  <form id="form" className="theme-form hide_div show_div">
                    <div className="form-row">
                      <div className="col-md-3 form__group">
                        <input
                          name="title"
                          type="text"
                          className="form__field"
                          placeholder="Page Title"
                          id="title"
                          value={title}
                          onChange={(e) => {
                            this.setState({ title: e.target.value });
                          }}
                        />
                        <label htmlFor="title" className="form__label">
                          Page Title{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="seo_url"
                          type="text"
                          className="form__field"
                          placeholder="SEO URL"
                          id="seo_url"
                          value={seo_url}
                          onChange={(e) => {
                            this.setState({ seo_url: e.target.value });
                          }}
                        />
                        <label htmlFor="title" className="form__label">
                          SEO URL{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="order"
                          type="text"
                          className="form__field"
                          placeholder="Order"
                          id="order"
                          value={order}
                          onChange={(e) => {
                            this.setState({ order: e.target.value });
                          }}
                          disabled={!status}
                          style={
                            !status
                              ? { cursor: "not-allowed" }
                              : { cursor: "default" }
                          }
                        />
                        <label htmlFor="title" className="form__label">
                          Menu Order{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="menu_name"
                          type="text"
                          className="form__field"
                          placeholder="menu_name"
                          id="menu_name"
                          value={menu_name}
                          onChange={(e) => {
                            this.setState({ menu_name: e.target.value });
                          }}
                          disabled={!status}
                          style={
                            !status
                              ? { cursor: "not-allowed" }
                              : { cursor: "default" }
                          }
                        />
                        <label htmlFor="title" className="form__label">
                          Menu name{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        <input
                          name="image"
                          type="file"
                          className="form__field"
                          id="image"
                          onChange={(e) => {
                            this._handleImageChange(e);
                          }}
                        />
                        <label htmlFor="title" className="form__label">
                          Cover Image{" "}
                        </label>
                      </div>
                      <div className="col-md-3 form__group">
                        {image !== "" && (
                          <img src={image} height={100} width={100} />
                        )}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-md-3 form__group">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <label>Show in menu: </label>
                          <div style={{ display: "flex" }}>
                            <div>
                              Yes
                              <input
                                type="radio"
                                name="status"
                                defaultChecked={true}
                                value={true}
                                onChange={() => {
                                  this.setState({ status: true });
                                }}
                              />
                            </div>
                            <div style={{ marginLeft: "5%" }}>
                              No
                              <input
                                type="radio"
                                name="status"
                                defaultChecked={false}
                                value={true}
                                onChange={() => {
                                  this.setState({ status: false });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <CKEditor
                        activeClass="p10"
                        name="description"
                        config={config}
                        content={markup}
                        // editor={ClassicEditor}
                        events={{
                          blur: this.onBlur,
                          afterPaste: this.afterPaste,
                          change: this.onChange,
                        }}
                      />
                    </div>
                    <br />
                  </form>
                  <div className="col-md-12">
                    <button
                      className="btn btn-outline-primary-2 btn-round"
                      onClick={(e) => {
                        this.createCustomPage();
                      }}
                    >
                      Save Custom Page
                    </button>
                    <button
                      className="btn btn-outline-danger-2 btn-round btn-danger"
                      style={{ marginLeft: "5%" }}
                      onClick={() => {
                        this.props.history.goBack();
                      }}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CreatePage;
