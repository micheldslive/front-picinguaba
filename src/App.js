import { useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HelmetProvider } from "react-helmet-async";
import Preloader from "components/preloader";
import Header from "components/header";
import { Layout } from "assets/styles/main";
import Routers from "routes";
import Footer from "components/footer";

const App = () => {
  const [scroll, setScroll] = useState(false);
  const nodeRef = useRef(null);

  const listenScrollEvent = (e) => {
    const currentScroll = e.scrollHeight - e.scrollTop;
    setScroll(currentScroll < 1400);
  };

  return (
    <Router>
      <Preloader />
      <Header />
      <Layout />
      <TransitionGroup>
        <CSSTransition nodeRef={nodeRef} classNames="fade-enter" timeout={500}>
          <div className="main-container" ref={nodeRef} onScroll={(e) => listenScrollEvent(e.target)} >
            <HelmetProvider>
              <Routers />
            </HelmetProvider>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </Router>
  );
};

export default App;
