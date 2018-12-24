import React, { Component } from "react";
import { connect } from "dva";
import { Theme } from '../../components/theme';
import { DashCard, Panel, Grid, Label, BreadCrumb, FlexiPagination, FlexiTable, LineChart, SimpleSelect, CircleLine, PieChart, Loader } from "../../components/flexibull";

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
        type: "pu/getPuByStates",
        data: {
          state: this.state.currentState.value,
          page: page,
          limit: this.state.limit
        }
      })
    }
  }
  filterByLga(lga){
    this.setState({currentLga: lga.value})
    this.props.dispatch({
      type: "pu/getPuByLga",
      data: {
        lga: lga.value,
        page: this.state.currentPage,
        limit: this.state.limit
      }
    })
    this.props.dispatch({
      type: "pu/getWards",
      data: {
        lga: lga.value,
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
      type: "pu/getPuByStates",
      data: {
        state: state.value,
        page: this.state.currentPage,
        limit: this.state.limit
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
    const { states,lgas,wards, pus } = this.props.pu
    const { docs }= pus
    return (
      <Panel padding="20px">
        <BreadCrumb
          color={Theme.PrimaryFontColor}
          list={[]}
        />
        <p>Dashboard</p>
        <Grid pad="15px" default="repeat(3,1fr)" desktop="repeat(2,1fr)">
          <DashCard title="Total Alternative" value="21,345" subValue={<Label color={Theme.PrimaryColor}><i className="icon-angle-up" /> 3.8</Label>}>
            <PieChart
              list={[{ name: "software", color: Theme.PrimaryColor, value: 3000 }, { name: "projects", color: Theme.PrimaryDark, value: 3000 }, { name: "GIS", color: Theme.PrimaryFontColor, value: 2000 }, { name: "Programs", color: Theme.PrimaryRed, value: 4000 }, { name: "finance", color: Theme.PrimaryGrey, value: 4000 }, { name: "Operations", color: Theme.PrimaryOrange, value: 4000 }]}
              size="100px"
              innerRadius={20}
            />
          </DashCard>
          <DashCard title="Testing Title Block" value="34,100" subValue={<Label>0.8</Label>}>
            <LineChart list={linchartlist} />
          </DashCard>
          <DashCard title="Total Centers setup" value="57,847" subValue={<Label color={Theme.PrimaryRed}><i className="icon-angle-down" /> 13.8</Label>}>
            <CircleLine percentage={60} size="100px" rounding={false} color="#a3a1fb"></CircleLine>
          </DashCard>
        </Grid>
        <p></p>
        <Grid pad="15px" default="1fr 1fr 1fr" desktop="repeat(2,1fr)" tablet="1fr" >
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
                    <div>
                      <h2>Ward</h2>
                        <SimpleSelect
                            onChange={this.filterByWard}
                            options={wards || []}
                        />
                    </div>
                </Grid>
                {this.props.loading.global ? <Loader /> : <FlexiTable
          columns={columns}
          data={docs || []}
        >
          <FlexiPagination
            total={pus.total}
            onChange={this.onChange}
            current={this.state.currentPage}
            pageCounts={pageOptions}
          />
        </FlexiTable>}
      </Panel>
    );
  }
}

export default connect(({ app, pu, loading }) => ({ app, pu, loading }))(DashBoard);
