import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

import LoadingScreen from '../../components/LoadingScreen';

import FooterBottom from '../../components/Sections/FooterBottom';

import api from '../../services/api';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [])

  const { eventKey } = useParams();

  const [info, setInfo] = useState({});
  const [countdown, setCountdown] = useState();
  const [infoPassword, SetInfoPassword] = useState();

  useEffect(() => {
    api
      .get(`/event/public-info?key=${eventKey}`)
      .then((res) => {
        // Pegando o banner/Logo
        setInfo(res?.data?.customization);

        // Pegando o contador
        const cont = new Date(
          `${res?.data.eventdate}T${res.data?.eventhour}`
        ).getTime();
        setCountdown(cont);

        // Pegando a senha
        SetInfoPassword(res?.data?.password);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    {loading === false ? (
      <div>
        <div id="wrapper">
          <Header logoUrl={info?.logo} />

          <div id="content" className="no-bottom no-top">
            <BannerParallax imageUrl={info?.banner} />

            <BannerMobile />

            <SectionCountdown count={countdown} />

            <SectionAbout />

            <SectionFeatures />

            <SectionSpeakers />

            <SectionSchedule />

            <SectionFunFacts />

            <SectionRegister password={infoPassword} />

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
