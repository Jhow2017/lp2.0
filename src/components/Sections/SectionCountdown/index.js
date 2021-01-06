import { useEffect, useState, useCallback} from 'react';
import CountdownAmount from '../../CountdownAmount';
import './SectionCountdown.css';

const SectionCountdown = ({count}) => {
    var countdown = count;
    const d = new Date(countdown);
    const oneDay = 86400000; //24h in miliseconds
    const shortDate = new Date(d.getFullYear(), (d.getMonth()), d.getDate()+1);
    const mn = shortDate.getDate();
    
    const [expiryTimes, setExpiryTimes] = useState(false);
    const [nextDay, setNextDay] = useState(0);
    const [midnight, setMidnight] = useState(null);
    
    //console.log(count, d, midnight, Date.now());

    const labels = {
        days: "Dias",
        hours: "Horas",
        minutes:"Minutos",
        seconds:"Segundos"
    }
    const [state, setState] = useState(
        {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    );

    useEffect(() => {
        if(expiryTimes)return;
        setNextDay(countdown + oneDay);
        console.log(nextDay);//new Date(nextDay)
        const tick = setInterval(setNewTime, 1000); 
        return () => clearInterval(tick) 
    }, [countdown, expiryTimes]);

    useEffect(() => {
      countdown = undefined;
      setMidnight(mn)
      // console.log(new Date(nextDay));
    }, [expiryTimes])

    const setNewTime = useCallback( () => {
        if (countdown) {
            const currentTime = new Date().getTime();
            const distanceToDate =  countdown - currentTime;
            
            let days = Number(Math.floor(distanceToDate / (1000 * 60 * 60 * 24)));
            let hours = Number(Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            let minutes = Number(Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60)));
            let seconds = Number(Math.floor((distanceToDate % (1000 * 60)) / 1000));

            days = days>9 ? days : `0${days}`;
            hours = hours>9 ? hours : `0${hours}`;
            minutes = minutes>9 ? minutes : `0${minutes}`;
            seconds = seconds>9 ? seconds : `0${seconds}`;

            setState({ days, hours, minutes, seconds });
            setExpiryTimes(!( (days>0) || (hours>0) || (minutes>0) || (seconds>0) ));
        }
    });

    return(
        <>
          <section id="section-countdown" aria-label="section" className="gradient-to-right pt60 pb40" style={{backgroundSize: 'cover'}}>
              <div className="container" style={{backgroundSize: 'cover'}}>
                  <div className="row" style={{backgroundSize: 'cover'}}>
                      <div className="col-md-10 offset-md-1" style={{backgroundSize: 'cover', marginBottom: '0px'}}>
                          <div id="defaultCountdown" className="is-countdown" style={{backgroundSize: 'cover'}}>
                            
                            {/* Contador */}
                            {!expiryTimes && (
                              <span className="countdown-row countdown-show4">
                                {Object.keys(state).map(campo => 
                                  <CountdownAmount stateInfo={state[campo]} label={labels[campo]}/>
                                )}
                              </span>
                            )}
                            
                            {/* Começou */}
                            {expiryTimes && (Date.now() < midnight) && (
                            // {expiryTimes && (Date.now() < nextDay) && (
                            // {expiryTimes && ((Date.now() < nextDay) && (Date.now() < midnight)) && (
                              <span className="countdown-row countdown-show4 countdownNew">
                                O EVENTO COMEÇOU <a id="section-register" href="/signin">CLIQUE AQUI</a> PARA SE INSCREVER
                              </span>
                            )}

                            {/* Após Meia noite */}
                            {expiryTimes && (Date.now() > midnight) && (
                              <span className="countdown-row countdown-show4 countdown00">
                                <a href="/signin">ASSISTIR VIDEO ANTERIOR!</a>
                              </span>
                            )}

                            {/* Após 24h */}
                            {/* {expiryTimes && (Date.now() > nextDay) && (
                              <span className="countdown-row countdown-show4 countdown24">
                                Após 24h
                              </span>
                            )} */}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </>
    );
}

export default SectionCountdown;
