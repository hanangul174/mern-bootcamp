
import './App.css';
import Counter from './counter';
import Header from './header';
import Nav from './comonent/webpage/navbar';

function App() {
  return (
    <div className="app"> 
      <Header></Header>
      <Counter></Counter>
      <Nav></Nav>
      <div> body </div> 
    </div>
  );

}
  

export default App;
