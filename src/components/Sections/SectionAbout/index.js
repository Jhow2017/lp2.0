import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


const SectionAbout = ({theme}) => {

    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <>
        <section id="section-about" className={theme ? "dark-mode" : "light-mode"}>
        {/* <div class="wm wm-border light  fadeInDown text-align">BemVindo</div> */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-right">
                        <h1 className="text-left">A SUA CONEXÃO<br />COM O CONHECIMENTO</h1>
                        <p>
                        Participantes e palestrantes de diversos países para discussões importantes sobre como proporcionar uma vida com mais qualidade e saúde para cada um de seus pacientes.
                        </p>
                        <p>A Takeda é uma empresa biofarmacêutica global focada no paciente, baseada em valores e orientada por P&amp;D. Está empenhada em proporcionar uma saúde melhor e um futuro mais brilhante as pessoas em todo o mundo. A nossa paixão e a busca de tratamentos inovadores estão profundamente enraizadas em mais de 230 anos de história notável no Japão.</p>
                        <div className="spacer10" />
                        {/* <a href="#" class="btn-custom font-weight-bold text-white sm-mb-30">About Us</a> */}
                    </div>
                    <div className="col-lg-6 mb-sm-30 text-center">
                        <div className="de-images">
                            <img className="di-small " data-aos="fade-up" src="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fmisc%2F2.jpg?alt=media&token=f5211450-9748-4e81-85e3-b14c75993cbe" alt="" />
                            <img className="di-small-2" data-aos="fade-right" src="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fmisc%2F3.jpg?alt=media&token=6f121ae6-9712-40df-8231-bc711b185b93" alt="" />
                            <img className="img-fluid" data-aos="fade-left" src="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fmisc%2F1.jpg?alt=media&token=2b42559d-471a-4720-a5c0-4a502a2704e1" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default SectionAbout;