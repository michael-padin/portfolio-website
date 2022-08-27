import React, { lazy} from "react";

import { Navbar } from "./components";
import { Suspense } from "react";
import {images} from "./constants"
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
       <Helmet>
        <meta name="description" content="Solution-oriented and problem solver, experience building web applications using MERN stack technologies. Have done numerous projects involving frontend and backend development"/>
        <meta name="keywords" content="fullstack, nodejs, reactjs, develoeper, michaelpadin, JavaScript,"/>
        <meta name="author" content="Michael Padin" />
        <meta itemprop="description" content="Solution-oriented and problem solver, experience building web applications using MERN stack technologies. Have done numerous projects involving frontend and backend development"/>
        <meta itemprop="image" content={images.heroSection}/>
        <meta itemprop="name" content="Michael Padin - Fullstack Developer" />
        <meta property="og:image" content={images.heroSection} />
        <meta property="og:url" content="https://michaelpadin.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Michael Padin - Fullstack Developer" />
        <meta property="og:description" content="Solution-oriented and problem solver, experience building web applications using MERN stack technologies. Have done numerous projects involving frontend and backend development"/>
      </Helmet>
      <Suspense fallback = {<div></div>}>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
      </Suspense>
      </HelmetProvider>
  );
};

export default App;
