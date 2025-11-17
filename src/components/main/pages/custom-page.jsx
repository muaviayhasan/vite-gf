import React, { Component } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import parse from "html-react-parser";

// import Custom Components
import Breadcrumb from "../../common/breadcrumb";
import { useNavigate } from "react-router";

class CustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seo_url: window.location.href.split("pages/")[1],
      title: "",
      menu_name: "",
      image: "",
      markup: "",
      meta: "",
      tags: "",
      isLoaded: false,
    };
  }

  // Fetch page data from API when component mounts
  componentDidMount() {
    const scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.async = true;
    scriptElement.innerHTML = `setTimeout(function(){$('.social-icons').eq(0).html('<div class="social-icons social-icons-colored justify-content-center"><a href="https://facebook.com/glassandfusion" class="social-icon social-facebook" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a><a href="https://www.instagram.com/glassandfusion/" class="social-icon social-instagram" title="Instagram" target="_blank"><i class="icon-instagram"></i></a><a href="https://www.houzz.co.uk/photos/users/glassandfusionltd/" class="social-icon social-youtube" title="Houzz" target="_blank"><i class="icon-houzz"></i></a><a href="https://www.pinterest.co.uk/glassandfusion/" class="social-icon social-pinterest" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a><a href="https://twitter.com/glassandfusion" class="social-icon social-twitter" title="Twitter" target="_blank"><i class="icon-twitter"></i></a></div>')}, 10000);`;
    this.instance.appendChild(scriptElement);

    axios
      .get(`${import.meta.env.VITE_API_URL}/single-page/${this.state.seo_url}`)
      .then((res) => {
        if (res.status === 204) {
          this.props.history.push("/page/404");
        } else {
          this.setState({
            title: res.data.page_title,
            menu_name: res.data.menu_name,
            image: res.data.image,
            markup: res.data.markup,
            meta: res.data.page_description,
            tags: res.data.page_meta,
            isLoaded: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching page data:", error);
      });
  }

  render() {
    const { title, meta, tags, image, markup } = this.state;

    return (
      <div className="main" ref={(el) => (this.instance = el)}>
        <Helmet>
          <title>{title || "Custom Page"}</title>
          <meta name="description" content={meta || "Custom Page Content"} />
          <meta name="keywords" content={tags || "Custom Page Tags"} />
        </Helmet>

        {/* Breadcrumbs or Page Title */}
        <div className="container">
          {image && (
            <div className="image-container">
              <img
                src={`${import.meta.env.VITE_API_URL}${image}`}
                alt={title || "Custom Page"}
              />
            </div>
          )}
          <h1 className="page-title text-white">{title}</h1>
        </div>

        <div className="page-content pb-0">
          <p className="col-md-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
            {this.state.isLoaded ? parse(markup) : <p>Loading...</p>}
          </p>
        </div>
      </div>
    );
  }
}

export default CustomPage;
