const SectionAbout = () => {
    return(
        <>
        <section id="section-about" data-bgimage="url(https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fbg%2F4.jpg?alt=media&token=9bb4614c-4d18-45a3-a977-849155de90fd) top left">
        {/* <div class="wm wm-border light wow fadeInDown text-align">BemVindo</div> */}
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0s">
                    <h1 className="text-left">A SUA CONEXÃO<br />COM O CONHECIMENTO</h1>
                    <p>
                    Participantes e palestrantes de diversos países para discussões importantes sobre como proporcionar uma vida com mais qualidade e saúde para cada um de seus pacientes.
                    </p>
                    <p>A Takeda é uma empresa biofarmacêutica global focada no paciente, baseada em valores e orientada por P&amp;D. Está empenhada em proporcionar uma saúde melhor e um futuro mais brilhante as pessoas em todo o mundo. A nossa paixão e a busca de tratamentos inovadores estão profundamente enraizadas em mais de 230 anos de história notável no Japão.</p>
                    <div className="spacer10" />
                    {/* <a href="#" class="btn-custom font-weight-bold text-white sm-mb-30">About Us</a> */}
                </div>
                <div className="col-lg-6 mb-sm-30 text-center wow fadeInRight">
                    <div className="de-images">
                    <img className="di-small wow fadeIn" src="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fmisc%2F2.jpg?alt=media&token=f5211450-9748-4e81-85e3-b14c75993cbe" alt="" />
                    <img className="di-small-2" src="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fmisc%2F3.jpg?alt=media&token=6f121ae6-9712-40df-8231-bc711b185b93" alt="" />
                    <img className="img-fluid wow fadeInRight" data-wow-delay=".25s" src="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fmisc%2F1.jpg?alt=media&token=2b42559d-471a-4720-a5c0-4a502a2704e1" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default SectionAbout;