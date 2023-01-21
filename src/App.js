import { Companies, CTA, NavBar } from "./components/index";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

import {
  Blog,
  FeatureFst,
  FeatureSec,
  Footer,
  Header,
  WhatIsGPT,
} from "./container/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="secondary-app">
        <Header />
        <Companies />
        <WhatIsGPT />
        <FeatureFst />
        <FeatureSec />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
