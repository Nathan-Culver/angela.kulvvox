import './Nav.css';
import Logo from './Imgs/Logo.png';

export default function Nav(props) {

  const switchHome = () => {
    props.setHome(true)
    props.setPortfolio(false)
    props.setContact(false)
    props.setComfyCooking(false)
    props.setQualityBikes(false)

  }

  const switchPortfolio = () => {
    props.setPortfolio(true)
    props.setHome(false)
    props.setContact(false)
    props.setComfyCooking(false)
    props.setQualityBikes(false)
  }

  const switchContact = () => {
    props.setHome(true)
    props.setContact(true)
    props.setPortfolio(false)
    props.setComfyCooking(false)
    props.setQualityBikes(false)
  }



  return (
    <nav className="Nav" id="nav-container" >
        <div className="container" id="name-logo-container" >
            <div className="title" id="name-title" onClick={switchHome}>Angela Foley</div>
            <img className="logo" id="logo-img" src={Logo} alt='logo-img' onClick={switchHome} />
        </div>
        <div className="container" id="portfolio-contact-container">
            <button className="btn" id="portfolio-btn" onClick={switchPortfolio}>Portfolio</button>
            <button className="btn" id="contact-btn" onClick={switchContact}>Contact</button>
        </div>
    </nav>
  );
}