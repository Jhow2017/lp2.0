import {useState} from 'react';

import CountFunFacts from '../../CountFunFacts';

const SectionFunFacts = () => {

    const [funFacts] = useState(
        [
            {
                h3: '8800 +',
                span: 'Participantes',
            },
            {
                h3: '2',
                span: 'Tópicos',
            },
            {
                h3: '8',
                span: 'Palestrantes',
            },
            {
                h3: '10',
                span: 'Sorteios',
            }
        ]
    );  

    return(
        <>
        {/* section begin */}
        
        <section id="section-fun-facts" className="text-light" style={{background: 'url(https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fbg%2F3.jpg?alt=media&token=df422c50-077e-4910-ad4f-610e03f499b7) center top / cover fixed'}}>
            <div className="container">
                <div className="row">
                    {funFacts.map(funFactsInfo =>
                        <CountFunFacts funFactsInfo={funFactsInfo} />
                    )}
                </div>
            </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionFunFacts;