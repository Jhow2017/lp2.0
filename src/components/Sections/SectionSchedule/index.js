import React, {useState} from 'react';

 import ScheduleLiData from '../../SheduleInfo/ScheduleLiData';
 import TabScheduleData from '../../SheduleInfo/TabScheduleData';


const SectionSchedule = () => {

    
const data = [
    {
        id : '1',
        day: "Dia 1",
        date: '11/12/2020',
        speakers: 'Biografia 1'
    },
    {
        id : '2',
        day: "Dia 2",
        date: '11/12/2020',
        speakers: 'Biografia 2'
    },
    {
        id : '3',
        day: "Dia 3",
        date: '11/12/2020',
        speakers: 'Biografia 3'
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
          <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.speakers}</p>
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