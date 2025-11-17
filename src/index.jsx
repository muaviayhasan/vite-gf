import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Store
import store from "./store";

// Actions
import { getAllProducts, getAllPosts, closeQuickViewModal } from "./actions";

// Layouts
import Layout from "./components/app";
import Index5 from "./components/demoes/index5";

// Pages
import GlassCategories from "./components/main/pages/glass-categories/glass-categories";
import StoneCategory from "./components/main/pages/stone-category/stone-category";
import GlassCategoryProduct from "./components/main/pages/glass-categories/glass-category-products";
import Templating from "./components/main/pages/templating";
import TemplatingNew from "./components/main/pages/templating-new";
import Fabrication from "./components/main/pages/fabrication";
import Installation from "./components/main/pages/installation";
import TermsAndCondition from "./components/main/pages/terms-and-condition";
import FaqNew from "./components/main/pages/faq-new";
import AboutUs from "./components/main/pages/about-us";
import TestimonialsNew from "./components/main/pages/testimonials";
import PrivacyPolicy from "./components/main/pages/privacy-policy";
import ProductCatalogue from "./components/main/pages/product-catalogue/product-catalogue";
import StoneCatalogue from "./components/main/pages/product-catalogue/stone-catalogue";
import PageNotFound from "./components/main/pages/404";
import Contact from "./components/main/pages/contact";
import RequestACallBack from "./components/main/pages/request-a-callback";
import BookAppointment from "./components/main/pages/book-appointment";
import BookHomeVisit from "./components/main/pages/book-home-visit";
import BookShowroomVisit from "./components/main/pages/book-showroom-visit";
import ReqFreeConsult from "./components/main/pages/request-free-consultation";
import EnquireNow from "./components/main/pages/enquire-now";

// Utils
import { initFunctions } from "./utils/utils";
import ProductDetail from "./components/main/product/product";
import GetAQuote from "./components/main/product/get-a-quote";
import GetAQuoteMobile from "./components/main/product/get-a-quote-mobile";
import ThankyouQuote from "./components/main/product/thankyou-quote";
import ThankyouWishlist from "./components/main/product/thankyou-wishlist";
import EmptyShortList from "./components/main/product/empty-shortlist";
import EmptyWishList from "./components/main/product/empty-wishlist";
import NoRecordFound from "./components/main/product/empty-serach";
import Search from "./components/demoes/index5/search";
import SearchProduct from "./components/demoes/index5/searchProduct";
import LandingPage from "./components/demoes/index5/landing-page";

// Blogs
import Blogs from "./components/main/blog/classic";
import Blog1 from "./components/main/blog/blog1";
import Blog2 from "./components/main/blog/blog2";
import Blog3 from "./components/main/blog/blog3";
import Blog4 from "./components/main/blog/blog4";
import Blog5 from "./components/main/blog/blog5";
import Blog6 from "./components/main/blog/blog6";
import Blog7 from "./components/main/blog/blog7";
import Blog8 from "./components/main/blog/blog8";
import Blog9 from "./components/main/blog/blog9";
import Blog10 from "./components/main/blog/blog10";
import Blog11 from "./components/main/blog/blog11";
import Blog12 from "./components/main/blog/blog12";
import Blog13 from "./components/main/blog/blog13";
import Blog14 from "./components/main/blog/blog14";
import Blog15 from "./components/main/blog/blog15";
import Blog16 from "./components/main/blog/blog16";
import Blog17 from "./components/main/blog/blog17";

// Admin routes
import { ProtectedRoute } from "./components/dashboard/auth/protected.route";
import AdminDashboard from "./components/dashboard/pages/dashboard";
import AdminLogin from "./components/dashboard/pages/auth/login";
import Dashboard from "./components/pages/dashboard";
import Suppliers from "./components/dashboard/pages/settings/suppliers";
import Customerdetails from "./components/dashboard/pages/settings/customers_details";
import Slabsize from "./components/dashboard/pages/settings/slab-size";
import MaterialThickness from "./components/dashboard/pages/settings/material-thickness";
import ApplicationArea from "./components/dashboard/pages/settings/application-area";
import MaterialColors from "./components/dashboard/pages/settings/material-colors";
import DefineColors from "./components/dashboard/pages/settings/define-colors";
import Colorshades from "./components/dashboard/pages/settings/color-shades";
import Manufacturers from "./components/dashboard/pages/settings/manufacturers";
import CustomQuote from "./components/dashboard/pages/settings/custom-quote";
import Tilesize from "./components/dashboard/pages/settings/tile-size";
import WorktopOptions from "./components/dashboard/pages/settings/worktop-options";
import EdgeDetailOptions from "./components/dashboard/pages/settings/edge-detail-options";
import Finishes from "./components/dashboard/pages/settings/finishes";
import SuitableFor from "./components/dashboard/pages/settings/suitable-for";
import Effects from "./components/dashboard/pages/settings/effects";
import ExtraServices from "./components/dashboard/pages/settings/extra-services";
import Pages from "./components/dashboard/pages/settings/pages";
import CreatePage from "./components/dashboard/pages/settings/pages/create";
import CreatePageAuto from "./components/dashboard/pages/settings/pages/auto_pages";
import EditPage from "./components/dashboard/pages/settings/pages/edit";
import FacbricationOptions from "./components/dashboard/pages/settings/fabrication-options";
import MaterialNames from "./components/dashboard/pages/settings/material-names";
import Glasstype from "./components/dashboard/pages/settings/glass-type";
import Brands from "./components/dashboard/pages/settings/brands";
import Customers from "./components/dashboard/pages/settings/customers";
import Cutouts from "./components/dashboard/pages/settings/quote-parameters/glass/cutouts";
import SurveyFitOptions from "./components/dashboard/pages/settings/quote-parameters/glass/survey-fit-options";
import DesignOptions from "./components/dashboard/pages/settings/quote-parameters/glass/design-options";
import WorktopStone from "./components/dashboard/pages/settings/quote-parameters/stone/worktop-dimension";
import FabricationStone from "./components/dashboard/pages/settings/quote-parameters/stone/fabrication";
import SplashBackStone from "./components/dashboard/pages/settings/quote-parameters/stone/splashback";
import AddSku from "./components/dashboard/pages/settings/add-sku";
import SkuList from "./components/dashboard/pages/settings/sku-list";
import QuoteList from "./components/dashboard/pages/settings/quote-list";
import MaterialTypes from "./components/dashboard/pages/settings/material_types";
import MaterialSubType from "./components/dashboard/pages/settings/material-sub-type";
import EditSku from "./components/dashboard/pages/settings/edit-sku-f";
import EditQuote from "./components/dashboard/pages/settings/edit-quote";
import EditCustomer from "./components/dashboard/pages/settings/edit-customer";
import CustomerQuoteReport from "./components/dashboard/pages/settings/customer-quote-report";
import Wishlist from "./components/frontend/pages/wishlist";
import CustomPage from "./components/main/pages/custom-page";
import QuartzGranite from "./components/main/pages/quartz-granite";
import SpringSaleThankYou from "./components/frontend/pages/spring-sale-thank-you";
import BespokeGlassSplashbacksLondon from "./components/frontend/pages/bespoke_glass_splashbacks_London";
import BespokeGlassSplashbacksLondonThankYouPage from "./components/frontend/pages/bespoke_glass_splashbacks_London_thank_you_page";
import BespokeStoneTopsLondon from "./components/frontend/pages/bespoke_stone_worktops_London";
import BespokeStoneTopsLondonThankYouPage from "./components/frontend/pages/bespoke_stone_worktops_London_thank_you_page";
import QuickQuoteKitchenWorktops from "./components/frontend/pages/quick-quote-kitchen-worktops";
import RequestACallbackThankYouPage from "./components/frontend/pages/request-a-callback-thank-you-page";
import RequestFreeConsultationThankYouPage from "./components/frontend/pages/request-free-consultation-thank-you-page";
import ContactThankYouPage from "./components/frontend/pages/contact-thank-you-page";
import BookHomeVisitThankYouPage from "./components/frontend/pages/book-home-visit-thank-you-page";
import BookShowroomVisitThankYouPage from "./components/frontend/pages/book-showroom-visit-thank-you-page";
import QuickQuoteKitchenWorktopsThankYouPage from "./components/frontend/pages/quick-quote-kitchen-worktops-thank-you-page";
import QuickEnquiryHomepageThankYouPage from "./components/frontend/pages/quick-enquiry-homepage-thank-you-page";
import ScrollToTop from "./components/common/ScrollToTop";
// src/setup-jquery.js
import $ from 'jquery';
import 'owl.carousel';
window.jQuery = window.$ = $;

export class Root extends Component {
  componentDidMount() {
    // Initialize utilities
    import("./utils/utils").then(({ initFunctions }) => initFunctions());
  }

  render() {
    return (
      // Placeholder until store is resolved; actual rendering handled by storePromise
      <div>Loading...</div>
    );
  }
}

// Single createRoot call outside the promise
const root = createRoot(document.getElementById("root"));

// Dispatch initial actions before render
store.dispatch(closeQuickViewModal());
store.dispatch(getAllProducts());
store.dispatch(getAllPosts());
root.render(
  <Provider store={store}>
    <Router basename={'/'}>
      <ScrollToTop>
        <Routes>
          {/* LandingPage */}
          <Route path="/" element={<Index5 />} />
          <Route path="/home" element={<Index5 />} />
          <Route path="/categories" element={<LandingPage />} />

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/sku-list" element={<ProtectedRoute component={SkuList} />} />
          <Route path="/admin/quote-list" element={<ProtectedRoute component={QuoteList} />} />
          <Route path="/admin/edit-sku-f/:id" element={<ProtectedRoute component={EditSku} />} />
          <Route path="/admin/edit-quote/:id" element={<ProtectedRoute component={EditQuote} />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute component={AdminDashboard} />} />
          <Route path="/admin/suppliers" element={<ProtectedRoute component={Suppliers} />} />
          <Route path="/admin/edit-customer" element={<EditCustomer />} />
          <Route path="/admin/customer-quote-report/:id" element={<CustomerQuoteReport />} />
          <Route path="/admin/add-sku" element={<AddSku />} />
          <Route path="/admin/cutouts" element={<ProtectedRoute component={Cutouts} />} />
          <Route path="/admin/splashbacks" element={<ProtectedRoute component={SplashBackStone} />} />
          <Route path="/admin/survey-fit-options" element={<ProtectedRoute component={SurveyFitOptions} />} />
          <Route path="/admin/design-options" element={<ProtectedRoute component={DesignOptions} />} />
          <Route path="/admin/worktop-dimensions" element={<ProtectedRoute component={WorktopStone} />} />
          <Route path="/admin/fabrication" element={<ProtectedRoute component={FabricationStone} />} />
          <Route path="/admin/material-colors" element={<ProtectedRoute component={MaterialColors} />} />
          <Route path="/admin/application-areas" element={<ProtectedRoute component={ApplicationArea} />} />
          <Route path="/admin/material-thickness" element={<ProtectedRoute component={MaterialThickness} />} />
          <Route path="/admin/brands" element={<ProtectedRoute component={Brands} />} />
          <Route path="/admin/worktop-options" element={<ProtectedRoute component={WorktopOptions} />} />
          <Route path="/admin/slab-size" element={<ProtectedRoute component={Slabsize} />} />
          <Route path="/admin/color-shades" element={<Colorshades />} />
          <Route path="/admin/material-types" element={<ProtectedRoute component={MaterialTypes} />} />
          <Route path="/admin/glass-category" element={<ProtectedRoute component={MaterialSubType} />} />
          <Route path="/admin/define-colors" element={<DefineColors />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/material-names" element={<ProtectedRoute component={MaterialNames} />} />
          <Route path="/admin/glass-type" element={<ProtectedRoute component={Glasstype} />} />
          <Route path="/admin/tile-size" element={<ProtectedRoute component={Tilesize} />} />
          <Route path="/admin/edge-detail-options" element={<ProtectedRoute component={EdgeDetailOptions} />} />
          <Route path="/admin/finishes" element={<ProtectedRoute component={Finishes} />} />
          <Route path="/admin/suitable-for" element={<ProtectedRoute component={SuitableFor} />} />
          <Route path="/admin/effects" element={<ProtectedRoute component={Effects} />} />
          <Route path="/admin/extra-services" element={<ExtraServices />} />
          <Route path="/admin/pages" element={<Pages />} />
          <Route path="/admin/create-page" element={<CreatePage />} />
          <Route path="/admin/create-page-auto" element={<CreatePageAuto />} />
          <Route path="/admin/edit-page/:id" element={<EditPage />} />
          <Route path="/admin/fabrication-options" element={<ProtectedRoute component={FacbricationOptions} />} />
          <Route path="/admin/maunfacturers" element={<ProtectedRoute component={Manufacturers} />} />
          <Route path="/admin/custom-quote" element={<ProtectedRoute component={CustomQuote} />} />
          <Route path="/admin/customers-details" element={<Customerdetails title="customers details" />} />

          <Route element={<Layout />}>
            <Route path="/glass-categories" element={<GlassCategories />} />
            <Route path="/stone-worktops" element={<StoneCatalogue />} />
            <Route path="/glass-category/:type" element={<GlassCategoryProduct />} />
            <Route path="/stone/:type" element={<StoneCategory />} />
            <Route path="/templating" element={<TemplatingNew />} />
            <Route path="/pages/:seo_url" element={<CustomPage />} />
            <Route path="/quartz-granite-marble-worktops-london-sale" element={<QuartzGranite />} />
            <Route path="/spring-sale-thank-you" element={<SpringSaleThankYou />} />
            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/terms-and-condition" element={<TermsAndCondition />} />
            <Route path="/faq" element={<FaqNew />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/testimonials" element={<TestimonialsNew />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/product-catalogue" element={<ProductCatalogue />} />
            {/* Contact Pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-a-callback" element={<RequestACallBack />} />
            <Route path="/book-an-appointment" element={<BookAppointment />} />
            <Route path="/book-home-visit" element={<BookHomeVisit />} />
            <Route path="/book-showroom-visit" element={<BookShowroomVisit />} />
            <Route path="/request-free-consultation" element={<ReqFreeConsult />} />
            <Route path="/enquire" element={<EnquireNow />} />
            {/* Blogs */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/popular-types-glass-splashbacks-kitchens" element={<Blog1 />} />
            <Route path="/blog/stone-kitchen-worktops-vs-glass-worktops" element={<Blog2 />} />
            <Route path="/blog/10-things-know-kitchen-glass-splashbacks" element={<Blog3 />} />
            <Route path="/blog/best-tips-tricks-clean-kitchen-glass-splashbacks" element={<Blog4 />} />
            <Route path="/blog/pros-cons-printed-glass-splashbacks" element={<Blog5 />} />
            <Route path="/blog/glass-splashbacks-north-south-east-west-london-supply-installation" element={<Blog6 />} />
            <Route path="/blog/how-to-choose-the-right-glass-splashback-for-your-kitchen" element={<Blog7 />} />
            <Route path="/blog/thinking-of-replacing-your-kitchen-worktop" element={<Blog8 />} />
            <Route path="/blog/things-to-consider-when-choosing-a-material-for-your-kitchen-worktop" element={<Blog9 />} />
            <Route path="/blog/the-ideal-thickness-for-your-quartz-worktop" element={<Blog10 />} />
            <Route path="/blog/kitchen-worktop-looks-that-never-go-out-of-style" element={<Blog11 />} />
            <Route path="/blog/5-kitchen-worktop-materials-that-are-easy-to-maintain" element={<Blog12 />} />
            <Route path="/blog/five-home-remodeling-ideas" element={<Blog13 />} />
            <Route path="/blog/pros-and-cons-of-granite-worktops" element={<Blog14 />} />
            <Route path="/blog/best-qualities-of-marble-worktops" element={<Blog15 />} />
            <Route path="/blog/5-things-to-consider-when-renovating-your-kitchen" element={<Blog16 />} />
            <Route path="/blog/pros-and-cons-of-quartz-worktops" element={<Blog17 />} />
            {/* Other Pages */}
            <Route path="/page/404" element={<PageNotFound />} />
            <Route path="/product-detail/:manufacturer/:brand/:color/:id" element={<ProductDetail />} />
            <Route path="/get-a-quote" element={<GetAQuote />} />
            <Route path="/get-a-quote-mobile" element={<GetAQuoteMobile />} />
            <Route path="/thanks-for-quote" element={<ThankyouQuote />} />
            <Route path="/thanks-for-wishlist" element={<ThankyouWishlist />} />
            <Route path="/empty-short-list" element={<EmptyShortList />} />
            <Route path="/empty-wishlist" element={<EmptyWishList />} />
            <Route path="/no-record-found" element={<NoRecordFound />} />
            <Route path="/search" element={<Search title="Search Result" />} />
            <Route path="/q=:productName" element={<SearchProduct title="Search Result" />} />
            <Route path="/wishlist" element={<Wishlist title="Wishlist" />} />
            <Route path="/bespoke_glass_splashbacks_London" element={<BespokeGlassSplashbacksLondon />} />
            <Route path="/quick-enquiry-glass-splashback-thank-you-page" element={<BespokeGlassSplashbacksLondonThankYouPage />} />
            <Route path="/bespoke_stone_worktops_London" element={<BespokeStoneTopsLondon />} />
            <Route path="/quick-enquiry-stone-worktop-thank-you-page" element={<BespokeStoneTopsLondonThankYouPage />} />
            <Route path="/quick-enquiry-homepage-thank-you-page" element={<QuickEnquiryHomepageThankYouPage />} />
            <Route path="/quick-quote-kitchen-worktops" element={<QuickQuoteKitchenWorktops />} />
            <Route path="/request-a-callback-thank-you-page" element={<RequestACallbackThankYouPage />} />
            <Route path="/request-free-consultation-thank-you-page" element={<RequestFreeConsultationThankYouPage />} />
            <Route path="/contact-thank-you-page" element={<ContactThankYouPage />} />
            <Route path="/book-showroom-visit-thank-you-page" element={<BookShowroomVisitThankYouPage />} />
            <Route path="/quick-quote-thank-you-page" element={<QuickQuoteKitchenWorktopsThankYouPage />} />
            <Route path="/book-home-visit-thank-you-page" element={<BookHomeVisitThankYouPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Router>
  </Provider>
);
