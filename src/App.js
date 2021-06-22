import './App.css';
import ironlogo from './assets/images/ironhack-logo.svg';
import menutop from './assets/images/menu-top.svg'
import icon1 from './assets/images/icon1.png'
import icon2 from './assets/images/icon2.png'
import icon3 from './assets/images/icon3.png'
import icon4 from './assets/images/icon4.png'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <div className="App-nav">
         <img src={ironlogo} className="nav-img" alt="Ironhack logo" />
         <img src={menutop} className="nav-img" alt="Menu" />
      </div>
      
      <div class="top-container">
        <h1 className="">Say hello to</h1>
        <h1 className="">ReactJS</h1>
        <p>You will learn how to use  </p>
        <p>the most popular frontend libray,</p>
        <p>and become a super Ninja developer.</p>
        <button className="btn btn-light" > Awesome!</button>
      </div>
        </header>

        <body className="container">
        <div className="row align-items-start">
        <div className= "col">
          <img src={icon1} className="icon" alt="Icon" />
          <h2>Declarative</h2>
          <p className="text-box"> React makes it painless to create interactive UIs.</p>
        </div>
        <div className="col">
        <img src={icon2} className="icon" alt="Icon" />
          <h2>Components</h2>
          <p className="text-box">Build encapsulated components that manage their state.</p>
        </div>
        <div className="col">
        <img src={icon3} className="icon" alt="Icon" />
          <h2>Single-Way</h2>
          <p className="text-box">A set of immutable values are passed to the component's.</p>
        </div>
         <div className="col">
        <img src={icon4} className="icon" alt="Icon" />
        <h2>JSX</h2>
        <p className="text-box">Statically-typed, designed to run on modern browsers.</p>
        </div>
        </div>
  
        </body>
 
    </div>
  );
}

export default App;
