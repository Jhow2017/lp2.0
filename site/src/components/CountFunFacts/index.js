
const CountFunFacts = ({funFactsInfo}) => {

    return (
        <>
        <div className="col-md-3 col-xs-6">
            <div className="de_count">
                <i className="icon_id-2 id-color-2" />
                <h3>{funFactsInfo.h3}</h3>
                <span className="text-white">{funFactsInfo.span}</span>
            </div>
        </div>
        </>
    );
}

export default CountFunFacts;