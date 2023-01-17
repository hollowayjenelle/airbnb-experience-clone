import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import dataArr from './data'

function App() {
  const cards = dataArr.map(obj => {
    return <Card 
          img = {obj.coverImg}
          rating = {obj.stats.rating}
          reviewCount = {obj.stats.reviewCount}
          country = {obj.location}
          title = {obj.title}
          price = {obj.price}
    />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
