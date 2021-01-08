import ScrollToTop from "../ScrollToTop";
const Footer = () => {

  return (
    <>
    {/* footer begin */}
    <footer className="style-2">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <img src="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fbrigatinibnapraticaclinica%2Fcustomization%2Ffavicon.png?alt=media&token=409d27c2-9a0a-49e4-8f72-053a0337b435" className="logo-small w-50" alt="" /><br />
                </div>
                <div className="col-md-6">
                    © Copyright 2020 - Takeda - Em caso de dúvidas, acione o suporte técnico. Horário de funcionamento: de segunda à sexta-feira, das 9h às 18h e nos dias de evento das 8h30 às 12h.
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511955949374" target="_blank" rel="noreferrer">
                        <span className="id-color"> (11) 95594-9374</span>
                    </a>
                </div>
                <div className="col-md-3 text-right">
                    <div className="social-icons">
                    <a href="https://www.facebook.com/takedapharmabrasil/" target="_blank" rel="noreferrer"><i className="fa fa-facebook fa-lg" /></a>
                    <a href="https://twitter.com/TakedaPharma" target="_blank" rel="noreferrer"><i className="fa fa-twitter fa-lg" /></a>
                    <a href="https://www.youtube.com/c/Takeda-Pharmaceuticals/videos" target="_blank" rel="noreferrer"><i className="fa fa-youtube fa-lg" /></a>
                    <a href="https://www.linkedin.com/company/takeda-pharmaceuticals/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin fa-lg" /></a>
                    <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511955949374" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp fa-lg" /></a>
                    </div>
                </div>
            </div>
        </div>
        <ScrollToTop/>
    </footer>
    {/* footer close */}
    </>
  );
}

export default Footer;