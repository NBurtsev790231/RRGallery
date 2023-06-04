
import './styles/gallery.css';
import white from './img/white.jpg';
import blue from './img/blue.jpg';
import red from './img/red.jpg';
import black from './img/black.jpg';
import orange from './img/orange.jpg';

function App() {
  return (
    <>
    <section className="container">
      <div className='card'>
        <img src={white} alt='rover-white'/>
      </div>
      <div className='card'>
        <img src={blue} alt='rover-blue'/>
      </div>
      <div className='card'>
        <img src={red} alt='rover-red'/>
      </div>
      <div className='card'>
        <img src={black} alt='rover-black'/>
      </div>
      <div className='card'>
        <img src={orange} alt='rover-orange'/>
      </div>
    </section>
    <section className='text'>
      <h1 id='text-box'>Range Rover collection</h1>
    </section>
    </> 
  )
}
/*
let textElement =
document.getElementById('text-box');

textElement.addEventListener('click',function() {
 textElement.textContent='Let yourself rule the dream!';
})
*/
export default App;
