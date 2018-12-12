import React, { Component } from "react";
import { connect } from "dva";
import { Theme } from '../../components/theme';
import { DashCard, Panel, Grid, Label, BreadCrumb,FlexiPagination, FlexiTable, LineChart, Card, CircleLine, PieChart } from "../../components/flexibull";

const linchartlist = [45, 65, 45, 60, 80]

const pageOptions = [
  { value: 10, label: '10 Rows' },
  { value: 20, label: '20 Rows' },
  { value: 50, label: '50 Rows' },
  { value: 100, label: '100 Rows' }
];

const columns = [{
  title: 'Name', dataIndex: 'name', key: 'name'
},{
  title: 'Code', dataIndex: 'code', key: 'code'
}, {
  title: 'State', dataIndex: 'state', key: 'state'
}, {
  title: 'LGA', dataIndex: 'lga', key: 'lga'
}, {
  title: 'Ward', dataIndex: 'ward', key: 'ward'
}, {
  title: 'Setup', dataIndex: 'setup', key: 'setup'
}, {
  title: 'Accreditation Started', dataIndex: 'accreditationStarted', key: 'accreditationStarted'
}, {
  title: 'Accreditaion Ended', dataIndex: 'accreditationEnded', key: 'accreditationEnded'
}, {
  title: 'Voting Started', dataIndex: 'votingStarted', key: 'votingStarted'
}, {
  title: 'Voting Ended', dataIndex: 'votingEnded', key: 'votingEnded'
}, {
  title: 'Results', dataIndex: 'results', key: 'results'
}];


const data = [
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  { name: 'Jack', code: 'ab001', state: 'Gombe', lga: 'Dukku', ward: 'Kashere', setup: 'Started',accreditationStarted: 'Yes', accreditationEnded : 'No', votingStarted: 'Yes', votingEnded: 'No', results: '200' },
  ];

class DashBoard extends Component {
  constructor() {
    super();
    this.state = {
        current: 1,
        userModal: false
    }
}
onChange = (page) => {
    console.log(page);
    this.setState({
        current: page,
    });
}

  render() {
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
        <FlexiTable 
                columns={columns} 
                data={data} 
                >
                  <FlexiPagination
                    total={100}
                    onChange={this.onChange}
                    current={this.state.current}
                    pageCounts={pageOptions}
                  />
                </FlexiTable>
      </Panel>
    );
  }
}

export default connect(({ app, authentication }) => ({ app, authentication }))(DashBoard);
