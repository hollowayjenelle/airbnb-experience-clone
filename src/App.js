import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import dataArr from './data'

function App() {
  const cards = dataArr.map(obj => {
    return <Card 
          key={obj.id}
          {...obj}
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
