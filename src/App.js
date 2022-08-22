import { Navbar } from "./components";
import About from "./container/about/About";
import Header from "./container/header/header";
import "./app.scss";
import Works from "./container/works/works";
import NewActivate from "./container/newActivate/newActivate";
import Contact from "./container/contact/contact";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <NewActivate />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
