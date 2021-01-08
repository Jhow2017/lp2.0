const ThemesTitles = ({temas}) => {

  return (
    <>
   <div className="col-md-6">
        <div className="text">
            <h3>
                <span className="id-color">
                    {temas}
                </span>
            </h3>
        </div>
    </div>
    </>
  );
}

export default ThemesTitles;