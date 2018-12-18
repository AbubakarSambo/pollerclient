import React, { Component } from "react";
import { connect } from "dva";
import { Theme } from '../../components/theme';
import PuForm from './Forms/pu.forms';
import { DashCard, Panel, Grid, Label, BreadCrumb, FlexiPagination, FlexiTable, LineChart, Input, Boxed, Button, CircleLine, PieChart } from "../../components/flexibull";

const linchartlist = [45, 65, 45, 60, 80]

const pageOptions = [
  { value: 10, label: '10 Rows' },
  { value: 20, label: '20 Rows' },
  { value: 50, label: '50 Rows' },
  { value: 100, label: '100 Rows' }
];

const columns = [{
  title: 'First Name', dataIndex: 'firstName', key: 'firstName'
}, {
  title: 'Last Name', dataIndex: 'lastName', key: 'lastName'
}, {
  title: 'Phone', dataIndex: 'phone', key: 'phone'
}, {
  title: 'Polling Unit', dataIndex: 'pollingUnit', key: 'pollingUnit'
}];


const data = [
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started', accreditationStarted: 'Yes', accreditationEnded: 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
];

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
      current: 1,
      userModal: false,
      editing: false,
    }
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount(){
    this.props.dispatch({
      type: "supervisor/getSupervisors"
    })
  }
  onChange = (page) => {
    this.setState({
      current: page,
    });
  }
  closeModal() {
    this.setState({
        userModal: !this.state.userModal,
        editing: false
    })
}
  render() {
    return (
      <Panel padding="20px">
        <BreadCrumb
          color={Theme.PrimaryFontColor}
          list={[]}
        />
        <p>Agents</p>
        <Grid pad="15px" default="1.5fr 3fr" desktop="repeat(2,1fr)" tablet="1fr" >
            <div>
                <Input onChange={this.searchUsers} type="search" placeholder="Search Polling units" />
            </div>
            <Boxed align="right">
                <Button iconLeft onClick={() => this.setState({ userModal: true })}><i className="icon-user-add" /> Create Agent</Button>
            </Boxed>
        </Grid>
        {/* <PuForm
                    open={this.state.userModal}
                    close={this.closeModal}
                    editing={this.state.editing}
                    activePu={this.props.pu.activePu}
                /> */}
        <FlexiTable
          columns={columns}
          data={this.props.supervisor.supervisors || data}
        >
          <FlexiPagination
            total={this.props.supervisor.supervisors.length}
            onChange={this.onChange}
            current={this.state.current}
            pageCounts={pageOptions}
          />
        </FlexiTable>
      </Panel>
    );
  }
}

export default connect(({ app, supervisor }) => ({ app, supervisor }))(DashBoard);
