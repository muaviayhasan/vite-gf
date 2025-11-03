import React, { Component } from "react";
import "../../../style/index.scss";
import DashboardHeader from "../../../includes/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CKEditor } from "react-ckeditor-component";
import pageData from './gnf.json';

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

class CreatePageAuto extends Component {
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
  }

 async componentDidMount() {

for (let index = 0; index < pageData.Ceramic_Kitchen_Worktops.length; index++) {
    const element = pageData.Ceramic_Kitchen_Worktops[index];


    let formData = new FormData();
    formData.set("image", null);
    formData.set("title", element.Combination);
    formData.set("seo_url", element.Page_URL.toLowerCase());
    formData.set("order", 0);
    formData.set("status", false);
    formData.set("menu_name", element.Combination);
    formData.set("page_title", element.Page_Title);
    formData.set("page_meta", element.Meta_Tag);
    formData.set("page_description", element.Meta_Description);
      // markup Ceramic_Kitchen_Worktops 
      formData.set("markup", `<div class="main">
      <div class="bg-light-2 bg-light-2-new pt-6  mb-6 mb-lg-8" style="background: url(&quot;/assets/images/site/why-us-1.png.jpg&quot;) center center / cover no-repeat fixed;">
      <div class="container">
      <div class="row">
      <div class="col-lg-12">
      <h2 class="title" style="margin-top: -1%; color: white; padding-bottom: 1%; font-size: 3.4rem;">Granite, Marble, Quartz, &amp; Ceramics</h2>
      
      <h2 class="title" style="color: white; padding-bottom: 2%; font-size: 3.4rem;">Kitchen Worktop Suppliers</h2>
      </div>
      </div>
      </div>
      </div>
      
      <div style="background-color: rgb(255, 255, 255); margin-top: -2%;">
      <div class="container">
      <div class="banner-set">
      <div class="row">
      <div class="col-lg-6">
      <div class="banner-set-content">
      <div class="set-content-wrapper">
      <h4><material style="font-weight: 600; font-size: 2.4rem;">Ceramic Kitchen Worktops</material></h4>
      
      <h5>${element.Combination}  </h5>
      
      <p>Planning on remodelling your kitchen and looking for ceramic kitchen worktops suppliers in ${element.Combination}  &nbsp;Glass and Fusion&#39;s premium ceramic worktops would be the perfect fit for your kitchen. Design your dream kitchen with our wide range of ceramic worktops in ${element.Combination}  . At Glass &amp; Fusion we provide top quality, bespoke, made-to-measure kitchen worktops and splashbacks constructed from the finest sourced materials. We couple the highest quality materials with the best workmanship to produce a product that simply cannot be matched.</p>
      
      <p>With our vast collection of range of various colours, styles, sizes and finishes, finding your perfect ceramic worktops in ${element.Combination}  &nbsp;is made simple. Choose from an affordable and spectacular collection that is filled with big brands names including Radianz, Quarella, Silestone, Ceramic forms and many more and have your ideal ceramic worktop delivered straight to your door.</p>
      </div>
      </div>
      </div>
      
      <div class="col-lg-6">
      <div class="banner-set-image banner-border-hover">
      <div class="lazy-overlay bg-3" style="background: rgba(191, 230, 230, 0.36); height: 600px; position: absolute;">&nbsp;</div>
      <a><span class="lazy-load-image-background blur lazy-load-image-loaded" style="color: transparent; display: inline-block;"><img alt="banner" src="assets/images/image2.png" /></span></a>
      
      <div class="banner-content" style="background: rgba(255, 255, 255, 0.55); padding: 4%;">
      <h3 class="banner-title"><a><span style="font-weight: 600; font-size: 2.4rem;">We are here to<br />
      help you decide</span></a></h3>
      
      <h4 class="banner-subtitle" style="color: black;">- Up to 50% cheaper</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Transparent pricing</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Unbeatable prices</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Flexible timing</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Bespoke designs</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Seasonal free offers</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Satisfaction guaranteed</h4>
      <a class="btn btn-outline-primary-2 banner-link" href="/book-an-appointment" style="margin-top: 11%; color: black;">Book FREE Consulation</a></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div class="bg-light-2 bg-light-2-new pt-6 pb-5 mb-6 mb-lg-8">
      <div class="container">
      <div class="row">
      <div class="col-lg-8">
      <h2 class="title" style="color: white; font-weight: 600;">Get FREE Kitchen Worktop Quote Today</h2>
      
      <p class="lead text-primary mb-3">Three easy steps: 1- Choose material &amp; colour, 2- Enter measurements, 3- Enter your details</p>
      
      <p class="lead text-primary mb-3" style="font-size: 2.4rem; font-weight: bold;">02039359199 | 07823345500 | info@glassfusionltd.com</p>
      </div>
      
      <div class="col-lg-4" style="justify-content: left; display: flex;">
      <div class="about-images"><a class="btn btn-sm btn-minwidth btn-outline-primary-2 _custom_pages_view_more" href="/get-a-quote" style="border: 1px solid white;"><span>Start FREE Online Quote Now</span></a></div>
      </div>
      </div>
      </div>
      </div>
      
      <div class="container" style="margin-top: 3%;">
      <div class="instagram-feed-container">
      <div class="row" style="margin-top: 2%; justify-content: center;">
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="Bespoke furniture, Dresser handles, Bespoke furniture for kitchens, Enlarging dining tables, Shortening dining tables, Bespoke Worktops for Kitchen, Vanities and Cabinets for Kitchen, Sipson, Ashford, Langley, Lampton, Privale, in and around London" height="150" src="http://localhost:3000//uploads/sku/boheme-b01-500x500-9qGh.jpeg" style="height: 345px;" width="218" /></div>
      </div>
      
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="Bespoke furniture, Dresser handles, Bespoke furniture for kitchens, Enlarging dining tables, Shortening dining tables, Bespoke Worktops for Kitchen, Vanities and Cabinets for Kitchen, Sipson, Ashford, Langley, Lampton, Privale, in and around London" height="218" src="http://localhost:3000//uploads/sku/iron-corten-500x500-fz8a.jpeg" width="218" /></div>
      </div>
      
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="Bespoke furniture, Dresser handles, Bespoke furniture for kitchens, Enlarging dining tables, Shortening dining tables, Bespoke Worktops for Kitchen, Vanities and Cabinets for Kitchen, Sipson, Ashford, Langley, Lampton, Privale, in and around London" height="218" src="http://localhost:3000//uploads/sku/dekton%20laurent%20sample-rfRr.png" width="218" /></div>
      </div>
      
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="Bespoke furniture, Dresser handles, Bespoke furniture for kitchens, Enlarging dining tables, Shortening dining tables, Bespoke Worktops for Kitchen, Vanities and Cabinets for Kitchen, Sipson, Ashford, Langley, Lampton, Privale, in and around London" height="218" src="http://localhost:3000//uploads/sku/Feroe%20sample-5UYr.png" style="height: 100%;" width="218" /></div>
      </div>
      
      <div style="width: 100%; text-align: center;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2 " href="/search/material=Stone&amp;material_type=Ceramic&amp;effect=all&amp;colour=all&amp;brand=all&amp;price_band=0" style="justify-content: center;"><span>View More Ceramic Colours</span></a></div>
      
      <h4 style="margin-top: 2%; font-weight: 600;">Ceramic Colours Range for Kitchen Worktop</h4>
      </div>
      </div>
      </div>
      
      <div class="container" style="width: 100%; max-width: 100%; padding-left: 0px; padding-right: 0px; background: url(&quot;/assets/images/site/why-us-1.png.jpg&quot;) center center / cover no-repeat fixed; height: auto; min-height: 400px; display: block; justify-content: center; align-items: center; margin-top: 5%;">
      <h3 style="text-align: center; color: white; padding-top: 2%; padding-bottom: 2%; font-weight: 600;">Why Ceramic Kitchen Worktops from Us</h3>
      
      <div class="row col-md-12">
      <div class="col-lg-3 col-md-6 col-sm-12"><img src="/assets/images/site/paint.svg" style="width: 100px; margin-left: auto; margin-right: auto; display: block; height: 100px;" />
      <h4 class="text-center " style="color: white;">Exquisite Craftsmanship</h4>
      
      <p class="text-center ___white" style="color: white;">Our skilled people are trained work on your project taking in consideration application area, material type, functional design, well crafted and beautifully fitted with attention to every detail.</p>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12"><img src="/assets/images/site/open-24-hours.svg" style="width: 100px; margin-left: auto; margin-right: auto; display: block; height: 100px;" />
      <h4 class="text-center " style="color: white;">Flexible Timing</h4>
      
      <p class="text-center ___white" style="color: white;">We can work around your time to allocate templating and fitting that best suits your schedule. You could be given a few options to pick and choose a time slot that works for you.</p>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12"><img src="/assets/images/site/warranty.svg" style="width: 100px; margin-left: auto; margin-right: auto; display: block; height: 100px;" />
      <h4 class="text-center " style="color: white;">Warranty</h4>
      
      <p class="text-center ___white" style="color: white;">All our materials come with a minimum 10 years warranty including our stock. Leaving you enjoy our product with peace of mind.</p>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12"><img src="/assets/images/site/flexibility.svg" style="width: 100px; margin-left: auto; margin-right: auto; display: block; height: 100px;" />
      <h4 class="text-center " style="color: white;">Fast Turnaround</h4>
      
      <p class="text-center ___white" style="color: white;">Fast turnaround time. Stone worktops usually fitted within 5 working days from date of measurements. While site survey only needs 2 days notice.</p>
      </div>
      </div>
      
      <h5 style="text-align: center; color: white; padding-top: 2%; padding-bottom: 2%;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2 " href="https://glassfusionltd.co.uk/search/material=Stone&amp;material_type=Marble&amp;effect=all&amp;colour=all&amp;brand=all&amp;price_band=0" style="color: white;">See colours range</a></h5>
      </div>
      
      <div class="container" style="margin-top: 6%;">
      <div class="row">
      <div class="col-lg-6">
      <div class="brands-text">
      <h2 class="title" style="font-weight: 600;">Glass Splashbacks</h2>
      
      <p style="font-size: 1.4em;">We offer a wide variety of glass splashback designs, including plain, metallic, shimmery, digitally printed, double layer, crackles glass, satin glass and much more.</p>
      </div>
      </div>
      
      <div class="col-lg-6">
      <div class="brands-display">
      <div class="row justify-content-center">
      <div class="col-4 col-sm-3"><a class="brand _custom_b_img" href="/glass-category/plain"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/plain-category.jpg" />Plain</a></div>
      
      <div class="col-4 col-sm-3"><a class="brand _custom_b_img" href="/glass-category/metallic-effect"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/Matellic-effect.jpg" />Metallic Effect</a></div>
      
      <div class="col-4 col-sm-3"><a class="brand _custom_b_img" href="/glass-category/shimmer-effect"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/Shimmer.jpg" />Shimmer Effect</a></div>
      
      <div class="col-4 col-sm-3" id="mobile_margin_top"><a class="brand _custom_b_img" href="/glass-category/special-effect"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/Special-Effect.jpg" />Special Effect</a></div>
      
      <div class="col-4 col-sm-3" style="margin-top: -3%;"><a class="brand _custom_b_img" href="/glass-category/plain-sparkle"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/Plain-&amp;-Sparkle.jpg" />Plain + Sparkle</a></div>
      
      <div class="col-4 col-sm-3" style="margin-top: -3%;"><a class="brand _custom_b_img" href="/glass-category/double-layer"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/Double-Layer.jpg" />Double Layer</a></div>
      
      <div class="col-4 col-sm-3" style="margin-top: -3%;"><a class="brand _custom_b_img" href="/glass-category/crackled-glass"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/gnf/glass-page/cracked-glass-final.jpg" />Crackled Glass</a></div>
      
      <div class="col-4 col-sm-3" style="margin-top: -1%;"><a class="brand _custom_b_img" href="/glass-category/toughened-mirrors" style="text-align: center;"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/Tounged-Mirror.jpg" />Toughened Mirrors</a></div>
      
      <div class="col-4 col-sm-3" style="margin-top: 0%;"><a class="brand _custom_b_img" href="/glass-category/untoughened-mirrors" style="text-align: center;"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/untougned.jpg" />Untoughened Mirrors</a></div>
      
      <div class="col-4 col-sm-3" style="margin-top: -1.8%;"><a class="brand _custom_b_img" href="/glass-category/satin-glass"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/Stain.jpg" />Satin Glass</a></div>
      
      <div class="col-4 col-sm-3" style="margin-top: -1.8%;"><a class="brand _custom_b_img" href="/glass-category/digital-print"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" src="/assets/images/custom_pages/glass-splash-back/digital-print.jpg" />Digital Print</a></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div class="bg-light-2 pt-6 pb-5 mb-6 mb-lg-8">
      <div class="container">
      <div class="row">
      <div class="col-lg-5 mb-3 mb-lg-0">
      <h2 class="title" style="font-weight: 600;">Who We Are</h2>
      
      <p class="lead text-primary mb-3">Everything under one roof: Countertops Installation, Fabrication, Kitchen Top Assembly</p>
      
      <p class="mb-2">Glass and Fusion has over 20 years experience in delivering bespoke kitchen worktops from ceramic, and glass splashbacks for both residential and commercial properties. For an extensive, affordable range of ceramic worktops in ${element.Combination}  , look no further than Glass and Fusion.</p>
      <a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="/about-us"><span>About Us</span></a></div>
      
      <div class="col-lg-6 offset-lg-1">
      <div class="about-images"><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" class="about-img-front" src="/assets/images/custom_pages/glass-splash-back/bottom-right-images.jpg" /><img alt="Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints" class="about-img-back" src="/assets/images/custom_pages/glass-splash-back/bottom-right-image2.jpg" /></div>
      </div>
      </div>
      </div>
      
      <div class="container" style="width: 100%; max-width: 100%; padding-left: 0px; padding-right: 0px; background: url(&quot;/assets/images/site/why-us-1.png.jpg&quot;) center center / cover no-repeat fixed; height: auto; min-height: 275px; display: block; justify-content: center; align-items: center; margin-top: 5%;">
      <h3 style="text-align: center; color: white; padding-top: 3%; font-weight: 600; font-size: 3.3rem;">Get FREE Kitchen Worktop Quote Today</h3>
      
      <h5 style="text-align: center; color: white; padding-top: 1%; padding-bottom: 3%; font-size: 2.3rem;">At Glass and Fusion we offer four types of materials and large range of colours to choose from</h5>
      
      <div class="row col-md-12">
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/granite" style="color: white; font-size: 1.6rem;">See granite range</a></h5>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/marble" style="color: white; font-size: 1.6rem;">See marble range</a></h5>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/quartz" style="color: white; font-size: 1.6rem;">See quartz range</a></h5>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/compact%20worktops" style="color: white; font-size: 1.6rem;">See ceramics range</a></h5>
      </div>
      </div>
      </div>
      
      <div class="container" style="margin-top: 3%;">
      <div class="instagram-feed-container">
      <h2 class="title-lg text-center mb-4">Examples of Our Work</h2>
      
      <div class="row" style="margin-top: 2%;">
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="img" height="218" src="/assets/images/gnf/showcase-projects/1-1.jpg" style="height: 100%;" width="218" /></div>
      </div>
      
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="img" height="218" src="/assets/images/gnf/showcase-projects/4-3.jpg" style="height: 100%;" width="218" /></div>
      </div>
      
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="img" height="218" src="/assets/images/gnf/showcase-projects/11 (1).png" style="height: 100%;" width="218" /></div>
      </div>
      
      <div class="feed-col col-sm-3">
      <div class="instagram-feed"><img alt="img" height="218" src="/assets/images/gnf/showcase-projects/22 (1).png" style="height: 100%;" width="218" /></div>
      </div>
      </div>
      </div>
      </div>
      
      <div class="container" style="width: 100%; max-width: 100%; padding-left: 0px; padding-right: 0px; background: url(&quot;/assets/images/site/why-us-1.png.jpg&quot;) center center / cover no-repeat fixed; height: auto; min-height: 210px; display: block; justify-content: center; align-items: center; margin-top: 5%;">
      <h3 style="text-align: center; color: white; padding-top: 3%; font-weight: 600;">The Kitchen Top Materials we Deal in</h3>
      
      <h5 style="text-align: center; color: white; padding-top: 1%; padding-bottom: 1%;">&nbsp;</h5>
      
      <div class="row col-md-12" style="margin-top: -2%;">
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/granite" style="color: white;">See granite range</a></h5>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/marble" style="color: white;">See marble range</a></h5>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/quartz" style="color: white;">See quartz range</a></h5>
      </div>
      
      <div class="col-lg-3 col-md-6 col-sm-12">
      <h5 class="text-center " style="color: white;"><a class="btn btn-sm btn-minwidth btn-outline-primary-2" href="https://glassfusionltd.co.uk/stone/compact%20worktops" style="color: white;">See ceramics range</a></h5>
      </div>
      </div>
      </div>
      
      <div class="pt-6 pb-6" style="background-color: rgb(255, 255, 255);">
      <div class="container">
      <div class="banner-set">
      <div class="row">
      <div class="col-lg-6">
      <div class="banner-set-content">
      <div class="set-content-wrapper" style="text-align: center;"><a href="/home" style="display: flex; margin-top: 2%; justify-content: center;"><img alt="Footer Logo" class="footer-logo" height="25" src="assets/images/gnf/GnF-Glass-Marble-Stone-London.svg" width="105" /></a>
      
      <div class="cta-wrapper cta-text text-center" style="padding-top: 2rem; padding-bottom: 2rem;">
      <h3 class="cta-title" style="font-size: 2.4rem; font-weight: 600;">Follow Us On Social Media</h3>
      
      <p class="cta-desc">Keep an eye on our promotions and offers through our social media accounts</p>
      
      <div class="social-icons social-icons-colored justify-content-center">
      <div class="social-icons social-icons-colored justify-content-center">&nbsp;</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div class="col-lg-6">
      <div class="banner-set-image banner-border-hover"><a><span class="lazy-load-image-background blur lazy-load-image-loaded" style="color: transparent; display: inline-block;"><img alt="banner" src="/assets/images/image8.png" /></span></a>
      
      <div class="banner-content" style="background: rgba(255, 255, 255, 0.55); padding: 4%;">
      <h3 class="banner-title" style="font-weight: 600;"><a><span style="font-weight: 600; font-size: 2.4rem;">We are here to<br />
      help you decide</span></a></h3>
      
      <h4 class="banner-subtitle" style="color: black;">- Up to 50% cheaper</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Transparent pricing</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Unbeatable prices</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Flexible timing</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Bespoke designs</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Seasonal free offers</h4>
      
      <h4 class="banner-subtitle" style="color: black;">- Satisfaction guaranteed</h4>
      <a class="btn btn-outline-primary-2 banner-link" href="/book-an-appointment" style="margin-top: 11%; color: black; border: 1px solid;">Book FREE Consulation</a></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div class="container __mobile_section" style="margin-top: 6%;">
      <div class="row" style="justify-content: center;">
      <div class="col-lg-10">
      <div style="text-align: center; margin-bottom: 6%; width: 100%;">
      <h1 class="title" style="width: 100%; font-size: 2.4rem; font-weight: 600;">The world&#39;s premium kitchen worktop design materials under one roof</h1>
      
      <h5>Click logo to see colour range</h5>
      </div>
      </div>
      
      <div class="col-lg-8">
      <div class="brands-display">
      <div class="row justify-content-center">
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=CRL%20Quartz&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/0bfdmRKA.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Radinaz&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/4fwtCKcP.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Diresco&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/05EdDgwx.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Classic%20Quartz%20Stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/5k6zmcio.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Cimstone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/ay4U6Hjf.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Dekton&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/dBQVmuFU.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=London%20Quartz%20Stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/dSwtvcxM.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Unistone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/e7kCa1Uf.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href=""><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/E9hSsVz6.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Caesarstone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/ecIuyQl9.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=OKITE&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/ewLUTmic.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Compac&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/F5hsOqgk.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Silestone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/i6hGYMze.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Global%20Quartz&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/i60UJgDl.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Quarella&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/kO0KDehZ.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Horizon%20Stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/KUwm1OAB.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Quartzforms&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/OQwZfz8J.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Cambria&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/prnTtG6N.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href=""><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/Untitled-2.jpg" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Istone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/Untitled-3.jpg" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Technistone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/xAhts1zg.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Picasso%20stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/YCt1PVD9.png" /></a></div>
      
      <div class="col-4 col-sm-3"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Neolith&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/YW8dg5k4.png" /></a></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      
      <div class="container __desktop_section" style="margin-top: 6%;">
      <div class="row" style="justify-content: center;">
      <div class="col-lg-10">
      <div style="text-align: center; margin-bottom: 6%; width: 100%;">
      <h1 class="title" style="width: 100%; font-size: 2.4rem; font-weight: 600;">The world&#39;s premium kitchen worktop design materials under one roof</h1>
      
      <h5>Click logo to see colour range</h5>
      </div>
      </div>
      
      <div class="col-lg-12">
      <div class="brands-display">
      <div class="row justify-content-center">
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=CRL%20Quartz&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/0bfdmRKA.png" /></a></div>
      
      <div class="col-6 col-sm-2" col-6=""><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Radinaz&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/4fwtCKcP.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Diresco&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/05EdDgwx.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Classic%20Quartz%20Stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/5k6zmcio.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Cimstone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/ay4U6Hjf.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Dekton&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/dBQVmuFU.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=London%20Quartz%20Stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/dSwtvcxM.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Unistone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/e7kCa1Uf.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href=""><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/E9hSsVz6.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Caesarstone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/ecIuyQl9.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=OKITE&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/ewLUTmic.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Compac&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/F5hsOqgk.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Silestone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/i6hGYMze.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Global%20Quartz&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/i60UJgDl.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Quarella&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/kO0KDehZ.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Horizon%20Stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/KUwm1OAB.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Quartzforms&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/OQwZfz8J.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Cambria&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/prnTtG6N.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href=""><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/Untitled-2.jpg" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Istone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/Untitled-3.jpg" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Technistone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/xAhts1zg.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Picasso%20stone&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/YCt1PVD9.png" /></a></div>
      
      <div class="col-6 col-sm-2"><a class="brand" href="/search/material=Stone&amp;material_type=all&amp;effect=all&amp;colour=all&amp;brand=Neolith&amp;price_band=0"><img alt="Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes" src="/assets/images/custom_pages/logos/YW8dg5k4.png" /></a></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <style type="text/css">.bg-light-2-new {
         background-color: rgba(201, 174, 148, 1) !important;
         }
         .bg-light-2-new .lead, ._custom_pages_view_more {
         color:white !important;}
         .instagram-feed img {
         height: 345px !important;
         }
      
      .__mobile_section {
      display:none;
      }
      
      
      @media only screen and (max-device-width : 640px) {
      /* Styles */
      #mobile_margin_top {
      margin-top: -3%;
      }
      .__mobile_section {
      display:block;
      }
      .__desktop_section {
      display:none;
      }
      </style>
      `);
   await axios
      .post(`${import.meta.env.VITE_API_URL}/pages`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(`Custom page created`);
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
}

  }

  render() {
       return (<div></div>    );
  }
}

export default CreatePageAuto;
