import React, { Component } from "react";
import { connect } from "dva";
import {findIndexInArray} from '../../utils/utils'
import { Theme } from '../../components/theme';
import { DashCard, Panel, Grid, Label, BreadCrumb, FlexiPagination, FlexiTable, LineChart, SimpleSelect, CircleLine, PieChart, Loader } from "../../components/flexibull";
import {Bar} from 'react-chartjs-2';

const linchartlist = [45, 65, 45, 60, 80]

const pageOptions = [
  { value: 10, label: '10 Rows' },
  { value: 20, label: '20 Rows' },
  { value: 50, label: '50 Rows' },
  { value: 100, label: '100 Rows' }
];

const columns = [{
  title: 'Name', dataIndex: 'name', key: 'name'
}, {
  title: 'Code', dataIndex: 'code', key: 'code'
}, {
  title: 'State', dataIndex: 'state', key: 'state'
}, {
  title: 'LGA', dataIndex: 'lga', key: 'lga'
}, {
  title: 'Ward', dataIndex: 'ward', key: 'ward'
}];




class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      userModal: false,
      limit: 10,
      currentState: '',
      currentLga: '',
      currentWard: ''
    }
    this.filterByState = this.filterByState.bind(this)
    this.filterByLga = this.filterByLga.bind(this)
    this.filterByWard = this.filterByWard.bind(this)
    
  }
  componentDidMount(){
    this.props.dispatch({
      type: "pu/getStates"
    })
  }
  onChange = (page) => {
    this.setState({
      currentPage: page,
    });
    if(this.state.currentWard){
      this.props.dispatch({
        type: "pu/getPuByWard",
        data: {
          ward: this.state.currentWard,
          page: page,
          limit: this.state.limit
        }
      })
    }
    else if(this.state.currentLga){
      this.props.dispatch({
        type: "pu/getPuByLga",
        data: {
          lga: this.state.currentLga,
          page: page,
          limit: this.state.limit
        }
      })
    }
    else{
      this.props.dispatch({
        type: "pu/getPuCount",
        data: {
          state: this.state.currentState.value,
        }
      })
    }
  }
  filterByLga(lga){
    let lgaName = lga.value
    let filtered = this.props.pu.allResults.filter((item) => {
      console.log(item)
      return item.lga === lgaName
    })
    const index = findIndexInArray(this.props.pu.allResults, filtered[0] ,'lga')
    console.log(filtered,index)
    let lgaResults = this.props.pu.allResults[index].wards.map((newItem) => {
      return {
        lga: newItem.ward,
        apc: newItem.apcResultsInWard,
        pdp: newItem.pdpResultsInWard
      }
    })
    this.props.dispatch({
      type: 'pu/save',
      payload: {
        lgaResults
      }
    })
  }
  filterByWard(ward){
    this.setState({currentWard: ward.value})
    this.props.dispatch({
      type: "pu/getPuByWard",
      data: {
        ward: ward.value,
        page: this.state.currentPage,
        limit: this.state.limit
      }
    })
  }
  filterByState(state){
    this.setState({currentState: state, currentLga: '', currentWard:''})
    this.props.dispatch({
      type: "pu/getPuResults",
      data: {
        state: state.value,
      }
    })
    this.props.dispatch({
      type: "pu/getLgas",
      data: {
        state: state.value,
      }
    })
    
  }

  render() {
    const { states,lgas,lgaResults, pus} = this.props.pu
    console.log(lgaResults)
    let labels = lgaResults.map(i => i.lga)
    let apc = lgaResults.map(i => i.apc)
    let pdp = lgaResults.map(i => i.pdp)
    const { docs }= pus

    const data = {
      labels,
      datasets: [
        {
          label: 'APC',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: apc
        },
        {
          label: 'PDP',
          backgroundColor: 'rgb(143,188,143)',
          borderColor: 'rgb(43,188,143)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgb(43,178,143)',
          hoverBorderColor: 'rgb(43,188,143)',
          data: pdp
        }

      ]
    }
    return (
      <Panel padding="20px">
        <BreadCrumb
          color={Theme.PrimaryFontColor}
          list={[]}
        />
        <p>Polling Units</p>
        <p></p>
        <Grid pad="15px" default="1fr 1fr" desktop="repeat(2,1fr)" tablet="1fr" >
                    <div>
                      <h2>State</h2>
                        <SimpleSelect
                            onChange={this.filterByState}
                            options={states || []}
                        />
                    </div>
                    <div>
                      <h2>LGA</h2>
                        <SimpleSelect
                            onChange={this.filterByLga}
                            options={lgas || []}
                        />
                    </div>
                </Grid>
                {this.props.loading.global ? <Loader /> :   <Bar
          data={data}
          width={80}
          height={30}
          options={{
            maintainAspectRatio: true,
            scales: {
              xAxes: [{
                  stacked: false
              }],
              yAxes: [{
                  stacked: false,
                  ticks: {
                    beginAtZero:true
                }
              }]
          }
          }}
        />}
      </Panel>
    );
  }
}

export default connect(({ app, pu, loading }) => ({ app, pu, loading }))(DashBoard);
