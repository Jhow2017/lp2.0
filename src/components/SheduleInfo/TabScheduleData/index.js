const TabScheduleData = ({repo}) => {
  return (
    <>
    {/* Tab panes */}
    <div key={`repo_${repo.id}`} class="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-home-tab">
        {repo.speakers.map(speaker => 

        <div id="tab1" key={speaker.id} className="tab_single_content">
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

    </>
  );
}

export default TabScheduleData;