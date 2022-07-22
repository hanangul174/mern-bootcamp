import Navbar from './componet/navbar';
import About from './componet/about';
import Home from './componet/home';
import Product from './componet/product';
import Brand from './componet/brand';
const location=window.location.pathname;
// let Componet;

// function App() {
//     switch(location){
//       case "/":
//       Componet=Home;
//       break;

//       case "/about":
//       Componet=About;
//       break;

//       case "/product":
//       Componet=product
//       break;
      
//       case "/Brand":
//       Componet=Brand
//       break;
//       default:
//         break;
//     }
let componet;
function  App(){
  switch (location){
          case "/":
      componet=<Home/>
      break;

      case "/about":
      componet=<About/>;
      break;

      case "/product":
      componet= <Product/>
      break;
      
      case "/Brand":
      componet=<Brand/>
      break;
      default:
        break;
  }

  return (
    <>
      <Navbar/>
      {componet}
    </>
  );
}

export default App;
