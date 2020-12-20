import Header from '../../components/Header';
import BannerParallax from '../../components/BannerParallax';
import BannerMobile from '../../components/BannerMobile';
import SectionCountdown from '../../components/Sections/SectionCountdown';
import SectionAbout from '../../components/Sections/SectionAbout';
import SectionFeatures from '../../components/Sections/SectionFeatures';
import SectionSpeakers from '../../components/Sections/SectionSpeakers';
import SectionSchedule from '../../components/Sections/SectionSchedule';
import SectionFunFacts from '../../components/Sections/SectionFunFacts';
import SectionRegister from '../../components/Sections/SectionRegister';
import Footer from '../../components/Footer';
import FooterBottom from '../../components/Sections/FooterBottom';

import {useState, useEffect} from 'react';

import api from '../../services/api';

const Home = () => {

  const [info, setInfo] = useState({});
  const [countdown, setCountdown] = useState();

  useEffect(() => {
    api
      .get(`/event/public-info?key=novalp`)
      .then((res) => {
        setInfo(res.data.customization);
    })
    .catch((err) => {
      console.log(err);
    })

 }, []);

  useEffect(() => {
    api.get(`/event/public-info?key=novalp`)
    .then((res) => {
        const cont = new Date(`${res.data.eventdate}T${res.data.eventhour}`).getTime()
        setCountdown(cont);
        console.log(cont);
        //setCountdown(Date.now()+10000);
        // console.log(countdown);
        // setCountdown(1608231101568);
    }).catch((err) => {
        // console.log(err);
    })
  }, []);

  return (

    <div>
        <div id="wrapper">
        
            <Header logoUrl={info.logo} />

            <div id="content" className="no-bottom no-top">

                <BannerParallax imageUrl={info.banner}/>

                <BannerMobile/>

                <SectionCountdown count={countdown}/>

                <SectionAbout/>
                
                <SectionFeatures/>

                <SectionSpeakers/>

                <SectionSchedule/>

                <SectionFunFacts/>

                <SectionRegister/>

                <Footer/>

            </div>
        </div>

        <FooterBottom/>

    </div>
  
  );
}

export default Home;