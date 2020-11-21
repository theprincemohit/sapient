function Block(props) {
  const {mission_name,flight_number,mission_id,launch_year,launch_success,launch_landing,...data} = props.data;
  return (
   
    <div class="grid">  
    <img className="img-thumb" src={props.data.links.mission_patch_small} />
    <h5>{ `${mission_name} # ${flight_number}`}</h5>
    <p>Mission Ids : <ul>
      {
        (mission_id.length > 0) ?
        mission_id.map((missionId)=> {
            return <li key={missionId}>{missionId}</li>
        })
        : <li>No Id Available</li>
      }
        
    </ul></p>
    <p>Launch Year : {launch_year}</p>
    <p>Successfull Launch : {(launch_success != null) ? launch_success.toString(): 'null'}</p>
    <p>Successfull Landing : {
                              (props.data.rocket.first_stage.cores[0].land_success != null) ?
                              props.data.rocket.first_stage.cores[0].land_success.toString()
                              : 'null'}</p>
    </div>
 
    
  );
}

export default Block;
