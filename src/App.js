import './App.css';
import HeaderComponent from './components/HeaderComponent'
import LoaderComponent from './components/LoaderComponent'
import HomeComponent from './components/HomeComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div>
      <HeaderComponent />
      <LoaderComponent />
      <HomeComponent />
      <FooterComponent />

      <a href="#" id="scroll-to-top" className="dmtop global-radius"><i className="fa fa-angle-up" /></a>
    </div>
  );
}

export default App;
