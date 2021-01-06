import './BannerParallax.css';

const BannerParallax = ({imageUrl}) => {
    return(
        <>
        {/* parallax section */}
        <section id="section-hero" className="full-height d-none d-md-block" style={{
            backgroundImage: `url(${imageUrl})`
            }}>
        </section>
        {/* section close */}
        </>
    );
}

export default BannerParallax;