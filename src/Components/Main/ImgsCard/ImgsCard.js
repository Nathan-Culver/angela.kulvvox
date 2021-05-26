import './ImgsCard.css';
import Profile from './Imgs/Profile-Picture.jpg';
import Linkedin from './Imgs/Icon-Linkedin.png';
import Gmail from './Imgs/Icon-Gmail.png';

export default function ImgsCard() {

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };
    
    return (
        <section className="container" id="profile-imgs-container" >
            <img className="img" id="profile-img"  src={Profile} alt="Profile Picture" />
            <div className="container" id="icons-container" >
                <a href="https://www.linkedin.com/in/angela-foley-1180666b/" ><img className="img" id="linkedin-img" src={Linkedin} alt="Linkedin Icon" /></a>
                <Mailto email="twintrouble23@gmail.com" subject="" body="">
                    <img className="img" id="gmail-img"  src={Gmail} alt="Gmail Icon" />
                </Mailto>
            </div>
        </section>
    );
}