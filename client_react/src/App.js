import React, { lazy } from "react";

import { Navbar, SocialMedia, NavigationDots } from "./components";
import { Suspense } from "react";

import "./App.scss";

const Header = lazy(() => import("./container/Header/Header"));
const About = lazy(() => import("./container/About/About"));
const Work = lazy(() => import("./container/Work/Work"));
const Skills = lazy(() => import("./container/Skills/Skills"));
const Testimonials = lazy(() =>
  import("./container/Testimonials/Testimonials")
);
const Footer = lazy(() => import("./container/Footer/Footer"));

const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <div className="app">
        <SocialMedia />
        <div>
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Testimonials />
          <Footer />
        </div>
        <NavigationDots />
      </div>
    </Suspense>
  );
};

export default App;
