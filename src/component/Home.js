import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import getData from '../collection/getData';
import Block from './Block';
import Filter from './Filter';
import  '../Home.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdata: [],
      loading: true,
      filterBy: { year: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020] },
      params: {}
    };




  }
  componentDidMount() {


    const query = window.location.search.substring(1);

    this.getDataFromAPI(query);
    const urlParams = new URLSearchParams(query);
    const filterSelected = {};
    if (urlParams.get('launch_year')) {
      filterSelected.launch_year = urlParams.get('launch_year');
    }
    if (urlParams.get('launch_success')) {
      filterSelected.launch_success = Boolean(urlParams.get('launch_success'));
    }
    if (urlParams.get('land_success')) {
      filterSelected.land_success = Boolean(urlParams.get('land_success'));
    }
    // (urlParams.get('launch_year') != null) ? filterSelected.launch_year = urlParams.get('launch_year') : '';
    //   (urlParams.get('launch_success') != null) ? filterSelected.launch_success = urlParams.get('launch_success') : '';
    //   (urlParams.get('land_success') != null) ? filterSelected.land_success = urlParams.get('land_success') : '';
    console.log('urlParams', filterSelected);
    //const myParam = urlParams.get('myParam');
    this.setState({ params: filterSelected });
  }


  getDataFromAPI = async (query) => {
    const responce = await getData(query);
    this.setState({ listdata: responce, loading: false });
    // console.log(responce) 
  };

  filterparams = async (type, data) => {



    var params = this.state.params;

    if (params[type] == data) {

      delete params[type];

    }
    else {
      params[type] = data;

    }

    this.setState({ params: params, loading: true });

    var ueryString = '?';
    for (var key in params) {
      ueryString += key + '=' + params[key] + '&';
    }
    const history = createBrowserHistory();
    history.push(ueryString);
    const query = window.location.search.substring(1);

    this.getDataFromAPI(query);


  };

  render() {
    return (

      <div class="content">
        <h3 className="title">SpaceX Launch Programme</h3>
        <div class="sidebar">

          <Filter
            FilterBy={this.state.filterBy}
            filterClick={this.filterparams}
            activebtn={this.state.params} />
        </div>
        <div class="main-content">
          {(this.state.loading) ? 'Loading...'

            :

            (this.state.listdata.length > 0) ? this.state.listdata.map((data) => {
              return (
                <Block
                  data={data} />
              );

            }) : 'No Data Found'}


        </div>
        <div className="footer">Developed by : Mohit Kumar</div>
      </div>
    );

  }
}

export default Home;
