const RedesSocial = ({speaker}) => {

  return (
    <>
        <a href={speaker.facebook} target="_blank" rel="noreferrer"><i className="fa fa-facebook fa-lg" /></a>
        <a href={speaker.instagram} target="_blank" rel="noreferrer"><i className="fa fa-instagram fa-lg" /></a>
    </>
  );
}

export default RedesSocial;