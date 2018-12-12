import React, { Component } from "react";
import "../components/fonts/fontello/css/flexisaf.css"
import '../components/fonts/fontello/css/animation.css';
import '../components/fonts/fonts/fonts.css';
import '../../public/index.css';
import { connect } from 'dva';
import { withRouter } from "dva/router";
import { Theme } from '../components/theme';
import { Container, SideListing, ProfileCard, AppBrand, Layout, SideNavigation } from "../components/flexibull";
import { NavigationList } from '../menu'

const allowedList = NavigationList.filter((item) => {
  return item.name !== 'Candidates'
})
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapseMenu: false
    }

  }
  render() {
    return (
      <React.Fragment>
        {this.props.location.pathname === '/' ? this.props.children :
          <Layout>
            <SideNavigation onClick={() => this.setState({ collapseMenu: !this.state.collapseMenu })} collapse={this.state.collapseMenu}>
              <AppBrand>
                <i className="icon-flexisaf" style={{ fontSize: 30 }} />
              </AppBrand>
              <ProfileCard indicator={Theme.PrimaryRed}></ProfileCard>
              <SideListing
                links={allowedList}
                collapse={this.state.collapseMenu}
                NavLink
              />
            </SideNavigation>
            <Container>
              {this.props.children}
            </Container>
          </Layout>}
      </React.Fragment>
    )
  }
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
