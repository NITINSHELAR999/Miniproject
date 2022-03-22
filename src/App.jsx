import React from 'react';
import './App.css';
import Footer from './component/Footer'
import HomeContainer from './component/HomeContainer'
import HomeCrousel from './component/HomeCrousel'
import Navbar from './component/Navbar'
function App() {
return (
<div className="App">
<Navbar />
<HomeCrousel />
<HomeContainer/>
<Footer/>
</div>
);
}



export default App;