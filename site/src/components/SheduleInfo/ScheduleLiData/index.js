const ScheduleLiData = ({repo}) => {

  return (
    <>
    <li key={repo.id} data-link="#section-services-tab" className={repo.active}>
        <h3>{repo.day}</h3>
        <h4>{repo.date}</h4>
    </li>
    </>
  );
}

export default ScheduleLiData;