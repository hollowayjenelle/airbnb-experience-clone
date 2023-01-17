import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import image1 from './images/image1.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img = {image1}
        rating = "5.0"
        reviewCount = {6}
        country = "USA"
        title = "Life Lessons with Katie Zaferes"
        price = {136}
      />
    </div>
  );
}

export default App;
