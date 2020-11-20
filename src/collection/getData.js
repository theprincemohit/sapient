import config from '../config/config';
const getData  = (query) => {
    const headers = []
    // The parameters we are gonna pass to the fetch function
     
    let fetchData = {
        method: 'GET',
         
       
    }
    
    return  fetch(config.API_URL+'&'+query,fetchData)
    .then( res => res.json())
    .then(result =>   result  );
}
export default getData;