import './ComfyCooking.css';
import affinityMapCard1 from './Imgs/AffinityMapCard1.png';
import affinityMapCard2 from './Imgs/AffinityMapCard2.png';
import affinityMapCard3 from './Imgs/AffinityMapCard3.png';
import affinityMapCard4 from './Imgs/AffinityMapCard4.png';
import alice from './Imgs/Alice.png';
import daniel from './Imgs/Daniel.png';
import hiFi1 from './Imgs/HiFi1.png';
import hiFi2 from './Imgs/HiFi2.png';
import highFidelityDesign from './Imgs/HighFidelityDesign.png';
import link from './Imgs/Link.png';
import overDone1 from './Imgs/OverDone1.png';
import overDone2 from './Imgs/OverDone2.png';
import phone from './Imgs/Phone.png';
import sketching from './Imgs/Sketching.png';
import testing1 from './Imgs/Testing1.png';
import testing2 from './Imgs/Testing2.png';
import thumbnail from './Imgs/Thumbnail.png';
import userFlows from './Imgs/UserFlows.png';
import wireFrames from './Imgs/WireFrames.png';

export default function ComfyCooking() {

    return (
      <div className="container" id="comfyCooking-container" >
        <section className="container" id="title-phone-container" >
          <h1 className="title" id="comfyCooking-title" >Comfy Cooking</h1>
          <img className="img" id="phone-img" src={phone} alt="Phone" />
        </section>
        <section className="container" id="beginning-research-container" >
          <h2 className="title" id="beginning-title" >The Beginning</h2>
          <p className="text" id="beginning-text" >This project was a mobile cooking application. It was designed to not only make selecting, saving and making healthy meals easier but had a focus on building community around cooking at home.</p>
          <h2 className="title" id="research-title" >The Research</h2>
          <p className="text" id="research-text" >The first step was conducting user research surrounding cooking and the usability of a cooking application. Several informational priorities rose to the surface.</p>
        </section>
        <section className="question-container" id="question-container-1" >
          <div className="question-card-container" id="question-card-container-1" >
            <p className="card-question" id="card-question-1" >How much time do you spend looking for recipes to try?</p>
            <div className="card-container-outer" id="card-container-outer-1" >
              <div className="card-container-inner" id="card-container-inner-1" >
                <p className="card-text" id="card-text-1" >“Too much time! Probably between 1 to 2 hours a day.”</p>
              </div>
            </div>
          </div>
          <div className="question-card-container" id="question-card-container-2" >
            <p className="card-question" id="card-question-2" >Where do you save new recipes?</p>
            <div className="card-container-outer" id="card-container-outer-2" >
              <div className="card-container-inner" id="card-container-inner-2" >
                <p className="card-text" id="card-text-3" >“On my phone as a screenshot, but then my phone get’s full and I have to delete them.”</p>
              </div>
            </div>
          </div>
        </section>
        <section className="question-container" id="question-container-3" >
          <div className="question-card-container" id="question-card-container-3" >
            <p className="card-question" id="card-question-3" >Do you enjoy cooking?</p>
            <div className="card-container-outer" id="card-container-outer-3" >
              <div className="card-container-inner" id="card-container-inner-3" >
                <p className="card-text" id="card-text-3" >“Cooking for just yourself is not as much fun as cooking for friends or family”</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container" id="similarities-container" >
          <h2 className="title" id="similarities-title" >Finding the Similarities</h2>
          <p className="text" id="similarities-text" >After all of the research had been conducted it was time to identify the similarities in the results. I built an affinity map in order to locate the commonalities found in the research.</p>
        </section>
        <section className="container" id="affinityMap-main-container-1">
          <div className="affinityMap-container" id="affinityMap-container-1">
            <img className="affinityMap-img" id="affinityMap-img-1" src={affinityMapCard1} alt="Affinity Map" />
            <p className="affinityMap-text" id="affinityMap-text-1" >I built an over arching affinity map and then found isolated similarities to help locate the main items that individuals were looking for in a cooking application.</p>
          </div>
          <div className="affinityMap-container" id="affinityMap-container-2">
            <img className="affinityMap-img" id="affinityMap-img-2" src={affinityMapCard2} alt="Affinity Map" />
            <p className="affinityMap-text" id="affinityMap-text-2" >Several noteworthy highlights were dealing with lonilness in the time of Covid. As well as how long it takes to find recipes to try and safe storage for the recipes.</p>
          </div>
        </section>
        <section className="container" id="affinityMap-main-container-2">
          <div className="affinityMap-container" id="affinityMap-container-3">
            <div className="affinityMap-imgs-container" id="affinityMap-imgs-container-3-4">
              <img className="affinityMap-img" id="affinityMap-img-3" src={affinityMapCard3} alt="Affinity Map" />
              <img className="affinityMap-img" id="affinityMap-img-4" src={affinityMapCard4} alt="Affinity Map" />
            </div>
            <p className="affinityMap-text" id="affinityMap-text-3" >There were several similarities found through the affinity mapping. Some of these commonalities are illistrated in these images.</p>
          </div>
        </section>
        <section className="container" id="persona’s-container">
          <h2 className="title" id="persona’s-title">The Persona’s</h2>
          <div className="container" id="persona’s-img-bubbles-container">
            <img className="img" id="alice-img" src={alice} alt="Alice" />
            <img className="img" id="daniel-img" src={daniel} alt="Daniel" />
          </div>
        </section>
        <section className="container" id="userFlows-container">
          <h2 className="title" id="userFlows-title">User Flows</h2>
          <div className="container" id="userFlows-img-text-container">
            <img className="img" id="userFlows-img" src={userFlows} alt="User Flows" />
            <div className="container" id="userFlows-text-container">
              <p className="userFlows-text" id="userFlows-text-1" >Early Ideas for the Design</p>
              <p className="userFlows-text" id="userFlows-text-2" >The primary function of the application was to make finding and saving healthy recipes easier for users. Because of the focus on community, the second function was to develop a sharing feature for users.</p>
              <p className="userFlows-text" id="userFlows-text-3" >You can see in this user flow that it supports both aspects of the application discussed so far. The three primary flows support recipe finding, a grocery shopping feature, and a social meadia feature.</p>
            </div>
          </div>
        </section>
        <section className="container" id="sketching-container">
          <h2 className="title" id="sketching-title">Sketching</h2>
          <div className="container" id="sketching-img-text-container">
            <img className="img" id="sketching-img" src={sketching} alt="Sketching" />
            <div className="container" id="sketching-text-container">
              <p className="sketching-text" id="sketching-text-1" >Putting Pen to Paper</p>
              <p className="sketching-text" id="sketching-text-2" >I focused on a Mobile first approach as in our modern times statistics show that more people own smartphones than computers. </p>
              <p className="sketching-text" id="sketching-text-3" >Building off of the user flows, the first sketches focused on a recipe search and build feature that would allow users to quickly find new recipes to try and also offer the user the ability to add an existing recipe that they want to save.</p>
              <p className="sketching-text" id="sketching-text-4" >The other priority for the application was a social media aspect for users to develop a community around.</p>
            </div>
          </div>
        </section>
        <section className="container" id="wireFrames-container">
          <h2 className="title" id="wireFrames-title">Wire Frames</h2>
          <div className="container" id="wireFrames-img-text-container">
            <img className="img" id="wireFrames-img" src={wireFrames} alt="Wire Frames" />
            <div className="container" id="wireFrames-text-container">
              <p className="wireFrames-text" id="wireFrames-text-1" >Working on the Structure</p>
              <p className="wireFrames-text" id="wireFrames-text-2" >After the sketches were completed I started designing the wire frames based on the sketches that were made.</p>
            </div>
          </div>
        </section>
        <section className="container" id="testing-container">
          <h2 className="title" id="testing-title">Testing</h2>
          <div className="container" id="testing-img-text-container">
            <div className="container" id="testing-img-container">
              <img className="testing-img" id="testing-img-1" src={testing1} alt="Testing" />
              <img className="testing-img" id="testing-img-2" src={testing2} alt="Testing" />
            </div>
            <div className="container" id="testing-text-container">
              <p className="testing-text" id="testing-text-1" >Trial and Error</p>
              <p className="testing-text" id="testing-text-2" >I created low-fidelity click through prototypes and conducted multiple user reviews from the wireframes.</p>
              <p className="testing-text" id="testing-text-3" >The original design was deviated from in the end. Here is an example of a before and after design.</p>
              <p className="testing-text" id="testing-text-4" >This new design supported intuitive navigation for the user and utilized more white space to help users focus on the content of the page without feeling overwhelmed.</p>
            </div>
          </div>
        </section>
        <section className="container" id="hifi-1-container">
          <h2 className="title" id="hifi-1-title">Step One Towards HiFi</h2>
          <div className="container" id="hifi-1-img-text-container">
            <img className="img" id="hifi-1-img" src={hiFi1} alt="HiFi" />
            <div className="container" id="hifi-1-text-container">
              <p className="hifi-1-text" id="hifi-1-text-1" >Making it Pretty</p>
              <p className="hifi-1-text" id="hifi-1-text-2" >Because this is a cooking application the design was focused on food, community, and love. So I wanted something colorful. </p>
              <p className="hifi-1-text" id="hifi-1-text-3" >A mood board was developed to help focus the color selections and the images that would be used for the high fidelity prototypes.</p>
              <p className="hifi-1-text" id="hifi-1-text-4" >I wanted to make sure that when I added graphics and colors that we kept the feel of the application in focus.</p>
            </div>
          </div>
        </section>
        <section className="container" id="hifi-2-container">
          <h2 className="title" id="hifi-2-title">Step One Towards HiFi</h2>
          <div className="container" id="hifi-2-img-text-container">
            <img className="img" id="hifi-2-img" src={hiFi2} alt="HiFi" />
            <div className="container" id="hifi-2-text-container">
              <p className="hifi-2-text" id="hifi-2-text-1" >Making it Pretty</p>
              <p className="hifi-2-text" id="hifi-2-text-2" >Keeping the color selection and the images in mind I also designed a logo for the application.</p>
            </div>
          </div>
        </section>
        <section className="container" id="overDone-container">
          <h2 className="title" id="overDone-title">Over Done</h2>
          <div className="container" id="overDone-img-text-container">
            <div className="container" id="overDone-img-container">
              <img className="overDone-img" id="overDone-img-1" src={overDone1} alt="Over Done" />
              <img className="overDone-img" id="overDone-img-2" src={overDone2} alt="Over Done" />
            </div>
            <div className="container" id="overDone-text-container">
              <p className="overDone-text" id="overDone-text-1" >If I’d Been Cooking, It’d Be Burnt</p>
              <p className="overDone-text" id="overDone-text-2" >I got very excited with our first attempt, thankfully it did not last long.</p>
              <p className="overDone-text" id="overDone-text-3" >I did enjoy being able to explore the option of images and potential colors that could be used for this application.</p>
              <p className="overDone-text" id="overDone-text-4" >It did ultimatley help in the eventual narrowing down into a more elegent and user friendly design scheme.</p>
            </div>
          </div>
        </section>
        <section className="container" id="hifiDesign-container">
          <div className="container" id="hifiDesign-title-container">
            <h2 className="hifiDesign-text" id="hifiDesign-title">High Fidelity Design</h2>
          </div>
          <div className="container" id="hifiDesign-text-container-1">
            <p className="hifiDesign-text" id="hifiDesign-text-1" >The Finished Product</p>
          </div>
          <div className="container" id="hifiDesign-text-container-2">
            <p className="hifiDesign-text" id="hifiDesign-text-2" >Below are the images for the high fidelty design that the prototype was based on. This design was tested by users and then iterated on so this is an improved upon version of the design.</p>
          </div>
          <div className="container" id="hifiDesign-img-container">
            <img className="img" id="hifiDesign-img" src={highFidelityDesign} alt="HiFi Design" />  
          </div>
        </section>
        <section className="container" id="prototype-container">
          <div className="container" id="prototype-title-container">
            <h2 className="title" id="prototype-title">Prototype</h2>
          </div>
          <div className="container" id="prototype-text-container">
            <p className="text" id="prototype-text" >View the Interactive Prototype</p>
          </div>
          <div className="container" id="prototype-img-container">
              <img className="prototype-img" id="prototype-img-1" src={thumbnail} alt="HiFi Design" />  
              <img className="prototype-img" id="prototype-img-2" src={link} alt="HiFi Design" /> 
          </div>
        </section>
      </div>
    );
}