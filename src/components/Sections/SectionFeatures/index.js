
import {useState, useEffect} from 'react';
import ThemesTitles from '../../ThemesTitles';

import Aos from "aos";
import "aos/dist/aos.css";




const SectionFeatures = ({theme}) => {
    
    const [themes] = useState(
        [
            "Update in Diagnosis of Responsive and Refractory Gastroesophageal Reflux Disease", 
            "Management of GERD in 202",
            "Tema 03",
            "Tema 04" 
        ]
    );

    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <>
        {/* section begin */}
        <section id="section-features" className={theme ? "dark-mode" : "light-mode"}> 
            <div className="wm wm-border light" data-aos="fade-down">temas</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center animated animate__fadeInUp">
                        <h1 data-aos="fade-up">Temas das aulas</h1>
                        <div className="separator"><span><i className="fa fa-square" /></span></div>
                        <div className="spacer-single" />
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center text-center">
                        {themes.map(temas => (
                            <ThemesTitles temas={temas}/>
                        ))}         
                    </div>
                </div>
            </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionFeatures;