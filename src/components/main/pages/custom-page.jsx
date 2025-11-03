import React, { Component } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import parse from 'html-react-parser';

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import { useNavigate } from "react-router";

class CustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      seo_url: window.location.href.split("pages/")[1],
      order: "",
      menu_name: "",
      image: "",
      markup: "",
      isLoaded: false,
      title: "",
      meta: "",
      tags: "",
    };
  }
  componentDidMount() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = `setTimeout(function(){$('.social-icons').eq(0).html('<div class="social-icons social-icons-colored justify-content-center"><a href="https://facebook.com/glassandfusion" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a><a href="https://www.instagram.com/glassandfusion/" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a><a href="https://www.houzz.co.uk/photos/users/glassandfusionltd/" class="social-icon social-youtube" title="Houze" target="_blank"><i class="icon-houzz"></i></a><a href="https://www.pinterest.co.uk/glassandfusion/" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a><a href="https://twitter.com/glassandfusion" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a></div>')}, 10000);`;
    this.instance.appendChild(s);
    axios
      .get(`${import.meta.env.VITE_API_URL}/single-page/${this.state.seo_url}`)
      .then((res) => {
        console.log("res: ", res);
        console.log(import.meta.env.VITE_API_URL, "Api url", this.state.seo_url);
        if (res.status == 204) {
          this.props.history.push("/page/404");
        }
        this.setState(
          {
            seo_url: res.data.seo_url,
            order: res.data.order,
            status: res.data.status,
            menu_name: res.data.menu_name,
            image: res.data.image,
            markup: res.data.markup,
            isLoaded: true,
            title: res.data.page_title,
            tags: res.data.page_meta,
            meta: res.data.page_description,
          }
          // () => {
          //   if (res.data.seo_url == "glass-splashbacks-london") {
          //     this.setState({
          //       title: "Glass Splashbacks Suppliers in London",
          //       tags: ``,
          //       meta: `Glass & Fusion provides a variety of glass splashbacks in London that includes double layer, plain, metallic, digital and other endless designs for your kitchens, Southhall, Heston, Greenford, Perivale, Ealing
          //     Meta Tags: Kitchen glass splashbacks, Kitchen splashback designs, Plain glass, Metallic effect, Toughened mirror, shimmer effect, Double layer, glass splashback, Untoughened mirrors, digital prints`,
          //     });
          //   }
          //   if (res.data.seo_url == "stone-splashbacks-london") {
          //     this.setState({
          //       title: "Stone Splashback Suppliers in London",
          //       tags: `Stone splashbacks, Stone splashbacks for kitchens, Stone splashbacks for bathrooms, Quartz splashbacks, Granite splashbacks, Tough stones, Natural material`,
          //       meta: `London based Glass & Fusion have a huge range of stone splashbacks for your kitchens and bathrooms. These splashbacks are made up of natural and tough stones with endless and reliable life, Hanwell, Dormer’s Well, Lampton, Woodlands, Brentford`,
          //     });
          //   }
          //   if (res.data.seo_url == "quartz-worktops-london") {
          //     this.setState({
          //       title: "Quartz Worktops Suppliers in London",
          //       tags: `Quartz worktops, Quartz worktops adhesive, Quartz worktops for kitchens, Quartz worktops for bathrooms, Clear and colourless quartz, Deep shade quartz, Rich shade quartz, London, Hayes,
          //   Image Alt text: Please use the same meta tags as above along with the respective title of each image. `,
          //       meta: `Glass & Fusion provides best quality quartz worktops in London for your kitchens and bathrooms. The variety includes all clean, deep and rich shades and various colours quartz for the clients, Wembley, Horsenden, Northolt, Ickenham, Hillingdon`,
          //     });
          //   }
          //   if (res.data.seo_url == "porcelain-splashbacks-london") {
          //     this.setState({
          //       title: "Porcelain Splashbacks in London",
          //       tags: `Porcelain splashacks, Porcelain splashbacks for kitchens, Ceramic kind splashbacks, Splashback colour schemes, Porcelain designs and patterns
          //   Image Alt text: Please use the same meta tags as above along with the respective title of each image. `,
          //       meta: `Glass & Fusion provides a variety of splashback ranges to prevent your kitchen from all kinds of splashes and spills. All colour schemes of your choice, patterns and designs are available at our stores to choose from. We cover Cowley, Yiewsley, Harlington, Longford, Sipson, in and around London`,
          //     });
          //   }
          //   if (res.data.seo_url == "granite-worktops-london") {
          //     this.setState({
          //       title: "Granite Worktop Suppliers in London",
          //       tags: `Granite worktops, Granite worktops adhesive, Granite worktops for kitchens, Granite worktops for bathrooms, rare granite, durable granite, hard wearing stone, London, Hayes, `,
          //       meta: `London based Glass & Fusion have a huge range of granite splashbacks for your kitchens and bathrooms. These splashbacks are made up of hard- wearing stones which are rare but available at reasonable price, Hounslow, Bedfal, Langley, Wraysbury, Ashford`,
          //     });
          //   }
          //   if (res.data.seo_url == "bespoke-furniture") {
          //     this.setState({
          //       title: "Bespoke Furniture in London",
          //       tags: ``,
          //       meta: `Glass & Fusion excels in a variety of bespoke furniture for your Kitchen which include ranges of dresser handlers, enlarging and shortening dining tables, chairs and all other accessories of your need.
          //   Meta Tags: Bespoke furniture, Dresser handles, Bespoke furniture for kitchens, Enlarging dining tables, Shortening dining tables, Bespoke Worktops for Kitchen, Vanities and Cabinets for Kitchen, Sipson, Ashford, Langley, Lampton, Privale, in and around London`,
          //     });
          //   }
          // }
        );
      });
  }

  render() {
    const {
      seo_url,
      order,
      menu_name,
      image,
      markup,
      title,
      meta,
      tags,
    } = this.state;

    return (
      <div className="main" ref={(el) => (this.instance = el)}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={meta} />
          <meta name="keywords" content={tags} />
        </Helmet>

        {/* <Breadcrumb title={title} adClass="border-0 mb-0" /> */}

        {image !== null && (
          <div className="container">
            {image !== null && <img src={import.meta.env.VITE_API_URL + image} />}

            {/* <h1 className="page-title text-white">
            GNF<span className="text-white">Templating</span>
          </h1> */}
            <h1 className="page-title text-white"></h1>
          </div>
        )}

        <div className="page-content pb-0" style={{ width: "100%" }}>
          {/* <div className="container"> */}
          <p className="col-md-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
            {parse(markup)}
          </p>

          <div className="mb-2"></div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default CustomPage;
