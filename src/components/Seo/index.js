import {Helmet} from "react-helmet";

const Seo = ({inforSeo}) => {
    return(
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{inforSeo?.name}</title>

                <meta 
                    name="description" 
                    content={inforSeo.description_languages?.pt}
                />

                {/* favicon */}
                <link 
                    rel="shortcut icon" 
                    href="https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fbrigatinibnapraticaclinica%2Fcustomization%2Ffavicon.png?alt=media&token=409d27c2-9a0a-49e4-8f72-053a0337b435"
                    type="image/x-icon"
                />
            </Helmet>
        </div>
    );
}

export default Seo;