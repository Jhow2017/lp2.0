import CapaParallax from '../../assets/images-event/bg/7b.jpg';

const BannerMobile = () => {
    return(
        <>
        {/* parallax section */}
        <section id="section-hero-mobile" className="d-sm-block d-md-none pt-0 pb-0">
            <img src={CapaParallax} alt="" className="img-fluid" />
        </section>
        {/* section close */}
        </>
    );
}

export default BannerMobile;