function Filter(props) {
    const {year,launch,landing} = props.FilterBy;
    return (
        
        <div class="filterpanel">
        <h2>Filters</h2>
        <h5 className="filtertitle">Launch Year</h5>
        
        { 
            
            year.map((year)=>{
                return (
                    <button type="button" className={`filterbtn ${(props.activebtn.launch_year == year) ? 'btnactive' : ''}`  } onClick={() => props.filterClick('launch_year',year)} >{year}</button>
                )
            })   
             
        } 
         

        <h5 className="filtertitle">Successfull Launch </h5>
        <button type="button" className={`filterbtn ${(props.activebtn.launch_success == true) ? 'btnactive' : ''}`  } onClick={() => props.filterClick('launch_success',true)} >TRUE</button> 
        <button type="button" className={`filterbtn ${(props.activebtn.launch_success == false) ? 'btnactive' : ''}`  } onClick={() => props.filterClick('launch_success',false)} >FALSE</button> 

        <h5 className="filtertitle">Successfull Landing</h5>
        <button type="button" className={`filterbtn ${(props.activebtn.land_success == true) ? 'btnactive' : ''}`  } onClick={() => props.filterClick('land_success',true)} >TRUE</button> 
        <button type="button" className={`filterbtn ${(props.activebtn.land_success == false) ? 'btnactive' : ''}`  } onClick={() => props.filterClick('land_success',false)} >FALSE</button> 
         
      </div>
    );
  }
  
  export default Filter;
  