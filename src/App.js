import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import data from './data';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
          key = {item.id}
          {...item}
        />
    )
  })

  return (
    <>

      <Navbar />

      <Hero />

      <div className='cardScroller'>
        <div className='cardsHolder'>
          {cards}
        </div>
      </div>

    </>
  );
}

export default App;
