import {useState} from 'react';

 import ScheduleLiData from '../../SheduleInfo/ScheduleLiData';
 import TabScheduleData from '../../SheduleInfo/TabScheduleData';


const SectionSchedule = () => {

    const [infoShedule] = useState([
        {
            id: 1,
            day: 'Dia 1',
            date: '11/12/2020',
            active: 'active',
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
            id: 2,
            day: 'Dia 2',
            date: '12/12/2020',
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
    ]);


    return(
        <>
        {/* section begin */}
        <section id="section-schedule" aria-label="section-services-tab" data-bgimage="url(https://firebasestorage.googleapis.com/v0/b/rstcom20.appspot.com/o/companies%2Fnovalp%2Flp%2Fbg%2F6.jpg?alt=media&token=f694f030-b615-434a-b499-46f12b52ec99) top right no-repeat">
            <div className="wm wm-border light wow fadeInDown ">agenda</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center wow fadeInUp">
                        <h1>Agenda</h1>
                        <div className="separator"><span><i className="fa fa-square" /></span></div>
                        <div className="spacer-single" />
                    </div>
                    <div className="col-md-12">
                        <div className="de_tab tab_style_4 text-center">
                            <ul class="de_nav de_nav_dark">
                                { infoShedule.map(repo => 
                                    <ScheduleLiData repo={repo}/>
                                )}  
                            </ul>
                           
                            <div className="de_tab_content text-left">
                                { infoShedule.map(repo => 
                                    <TabScheduleData repo={repo}/>
                                )}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* section close */}
        </>
    );
}

export default SectionSchedule;