import React, { Component } from 'react';
import Carousel from 'react-owl-carousel2';
import $ from 'jquery';

// Ensure jQuery is available globally
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $;
}

export const events = {
  onTranslate: function (e) {
    if (!e.target) return;
    if (e.target.closest('.owl-quickview')) {
      const owlDots = document.querySelector('#owl-dots');
      if (owlDots) {
        owlDots.querySelector('.active')?.classList.remove('active');
        owlDots.children[e.page.index]?.classList.add('active');
      }
    }
  },
};

class OwlCarousel extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.dotListeners = [];
  }

  componentDidMount() {
    console.log({ window })
    if (!window.jQuery) {
      console.error('jQuery is not available on window');
      return;
    }
    this.initializeCarousel();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.children !== this.props.children ||
      prevProps.adClass !== this.props.adClass ||
      prevProps.carouselOptions !== this.props.carouselOptions
    ) {
      this.cleanupCarousel();
      this.initializeCarousel();
    }
  }

  componentWillUnmount() {
    this.cleanupCarousel();
  }

  initializeCarousel() {
    const { children, adClass = '' } = this.props;
    const hasChildren = Array.isArray(children) ? children.length > 0 : !!children;

    if (hasChildren && adClass && adClass.includes('owl-quickview') && this.carouselRef.current) {
      // Initialize Owl Carousel with jQuery
      try {
        $(this.carouselRef.current).owlCarousel(this.getOptions());
      } catch (error) {
        console.error('Error initializing OwlCarousel:', error);
      }

      const owlDots = document.querySelector('#owl-dots');
      if (owlDots) {
        const dots = document.querySelectorAll('#owl-dots .carousel-dot');
        if (dots.length > 0 && !dots[0].classList.contains('active')) {
          dots[0].classList.add('active');
        }

        this.dotListeners = Array.from(dots).map((dot, index) => {
          const handler = () => {
            if (this.carouselRef.current) {
              $(this.carouselRef.current).trigger('to.owl.carousel', [index]);
            }
          };
          dot.addEventListener('click', handler);
          return { dot, handler };
        });
      } else {
        console.warn('Element #owl-dots not found');
      }
    }
  }

  cleanupCarousel() {
    // Remove dot event listeners
    this.dotListeners.forEach(({ dot, handler }) => {
      dot.removeEventListener('click', handler);
    });
    this.dotListeners = [];

    // Clean up Owl Carousel instance
    if (this.carouselRef.current) {
      try {
        $(this.carouselRef.current).owlCarousel('destroy');
      } catch (error) {
        console.warn('Error destroying OwlCarousel:', error);
      }
    }
  }

  getOptions() {
    const { carouselOptions } = this.props;
    const sliderDefaultOptions = {
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
      dots: true,
      smartSpeed: 400,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        320: { nav: false },
        375: { nav: false },
      },
    };
    return { ...sliderDefaultOptions, ...carouselOptions };
  }

  render() {
    const { adClass = '', children } = this.props;
    const hasChildren = Array.isArray(children) ? children.length > 0 : !!children;

    return hasChildren ? (
      <div ref={this.carouselRef} className={`owl-carousel ${adClass}`}>
        {children}
      </div>
    ) : null;
  }
}

class OwlCarouselWithErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in OwlCarousel:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong with the carousel.</div>;
    }
    return <OwlCarousel {...this.props} />;
  }
}

export default OwlCarouselWithErrorBoundary;