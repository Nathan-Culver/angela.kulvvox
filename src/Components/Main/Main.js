import ImgsCard from './ImgsCard/ImgsCard.js'
import IntroCard from './IntroCard/IntroCard.js'
import './Main.css';

export default function Main(props) {
  return (
    <main className="container" id="main-container" >
        <IntroCard 
          contact={props.contact}
        />
        <ImgsCard />
    </main>
  );
}