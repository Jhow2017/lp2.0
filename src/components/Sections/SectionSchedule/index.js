import React, {useState, useEffect} from 'react';

import Aos from "aos";
import "aos/dist/aos.css";


const SectionSchedule = () => {

    
const data = [
    {
        id : '1',
        day: "Dia 01",
        date: '11/12/2020',
        speakers: [
            {
                hora:'09h00',
                name:'Dr. João luiz',
                picture:'https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fteam%2F1.jpg?alt=media&token=7839d629-7e9e-4798-9767-0d97ac043721',
                profission:'Medico',
                descriptionH3:'Algum Tirulo Aqui',
                descriptionP:'Mini cv, minicv ....'
            },
            {
                hora:'10h00',
                name:'Jhow Gama',
                picture:'https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fteam%2F2.jpg?alt=media&token=e1ff2133-584b-41ee-a19a-a150979f2adc',
                profission:'Medico',
                descriptionH3:'Algum Tirulo Aqui',
                descriptionP:'Mini cv, minicv ....'
            },
            {
                hora:'11h00',
                name:'Cross Dev',
                picture:'https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fteam%2F3.jpg?alt=media&token=32d327d4-d2be-4089-aaad-43cc151e89f6',
                profission:'Medico',
                descriptionH3:'Algum Tirulo Aqui',
                descriptionP:'Mini cv, minicv ....'
            }
        ]
    },
    {
        id : '2',
        day: "Dia 02",
        date: '11/12/2020',
        speakers: [
            {
                hora:'12h00',
                name:'Rosa Gama',
                picture:'https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fteam%2F4.jpg?alt=media&token=d25620ff-1d28-4adc-be81-3acea8236a34',
                profission:'Medico',
                descriptionH3:'Algum Tirulo Aqui',
                descriptionP:'Mini cv, minicv ....'
            },
            {
                hora:'13h00',
                name:'Denise Leonor',
                picture:'https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fteam%2F4.jpg?alt=media&token=d25620ff-1d28-4adc-be81-3acea8236a34',
                profission:'Medico',
                descriptionH3:'Algum Tirulo Aqui',
                descriptionP:'Mini cv, minicv ....'
            }
        ]
    }
  ]

    function Tab(props){
  
      const [visibleTab, setVisibleTab] = React.useState(props.data[0].id)
  
      const listTitles = props.data.map((item) => 
      <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>
            <h3>{item.day}</h3>
            <h4>{item.date}</h4>
        </li>
      )       
  
      const listContent = props.data.map((item) => 
        <div style={visibleTab === item.id ? {} : {display: 'none'}} class="tab-pane active" role="tabpanel" aria-labelledby="nav-home-tab">

            {item.speakers.map(speaker => 
                <div className="tab_single_content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="schedule-listing">
                                <div className="schedule-item">
                                    <div className="sc-time">{speaker.hora}</div>
                                    <div className="sc-pic">
                                        <img src={speaker.picture} className="img-circle" alt="" />
                                    </div>
                                    <div className="sc-name">
                                        <h4>{speaker.name}</h4>
                                        <span>{speaker.profission}</span>
                                    </div>
                                    <div className="sc-info">
                                        <h3>{speaker.descriptionH3}</h3>
                                        <p>{speaker.descriptionP}</p>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      )

      return(
        <div className="de_tab tab_style_4 text-center">
            <ul class="de_nav de_nav_dark">
              {listTitles}
            </ul>
            <div className="de_tab_content text-left">
               {listContent}
            </div>
          </div>
        )
    }

    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <>
        {/* section begin */}
        
        <section id="section-schedule" aria-label="section-services-tab" style={{background: 'url(https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fbg%2F6.jpg?alt=media&token=f694f030-b615-434a-b499-46f12b52ec99) right top / cover no-repeat'}}>
            <div className="wm wm-border light" data-aos="fade-down">agenda</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <h1 data-aos="fade-up">Agenda</h1>
                        <div className="separator"><span><i className="fa fa-square" /></span></div>
                        <div className="spacer-single" />
                    </div>
                    <div className="col-md-12">
                        <Tab data={data}/>
                    </div>
                </div>
            </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionSchedule;