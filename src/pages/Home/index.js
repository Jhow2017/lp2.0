import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Seo from "../../components/Seo";
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

import{ init } from 'emailjs-com';
init("user_Oq3mwW4sZhoNfy7lMrOEk");

import LoadingScreen from '../../components/LoadingScreen';

import FooterBottom from '../../components/Sections/FooterBottom';

import api from '../../services/api';

const Home = () => {

  /*Dark*/
  const [darkMode, setDarkMode] = useState(getInitialMode());

  const themeToggler = () =>{
      setDarkMode(prevMode => !prevMode);
  }

    useEffect(()=> {
        localStorage.setItem('dark', JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode(){
        const isReturningUser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPreferDark = getPrefColorScheme();

        // Se o modo foi salvo -> Dark / Light
        if(isReturningUser){
            return savedMode;
            // Se o esquema de cores preferido for Dark -> Dark
        }
        else if (userPreferDark){
            return true;
            // caso contrário -> Light
        }
        else {
           return false; 
        }
    }

    function getPrefColorScheme(){
        if(!window.matchMedia) return ;
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    /*FIM DARKMODE*/

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [])

  const { eventKey } = useParams();

  const [info, setInfo] = useState({});
  const [countdown, setCountdown] = useState();
  const [infoPassword, SetInfoPassword] = useState();

  const [seoInfo, SetSeoInfo] = useState({});

  useEffect(() => {
    api
      .get(`/event/public-info?key=${eventKey}`)
      .then((res) => {

        // Pegando Seo
        SetSeoInfo(res?.data);
        // console.log(res?.data);

        // Pegando o banner/Logo
        setInfo(res?.data?.customization);

        // Pegando o contador
        const cont = new Date(
          `${res?.data.eventdate}T${res.data?.eventhour}`
        ).getTime();
        setCountdown(cont);
        console.log(cont);

        // Pegando a senha
        SetInfoPassword(res?.data?.password);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Seo inforSeo={seoInfo}/>
    {loading === false ? (
      <div>
        <div id="wrapper">
          <Header logoUrl={info?.logo} theme={darkMode} themeToggler={themeToggler} />

          <div id="content" className="no-bottom no-top">
            <BannerParallax imageUrl={info?.banner} />

            <BannerMobile />

            <SectionCountdown count={countdown} />

            <SectionAbout theme={darkMode}/>

            <SectionFeatures theme={darkMode}/>

            <SectionSpeakers />

            <SectionSchedule theme={darkMode}/>

            <SectionFunFacts />

            <SectionRegister password={infoPassword} theme={darkMode}/>

            <Footer />
          </div>
        </div>

        <FooterBottom />
      </div>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
};

export default Home;
