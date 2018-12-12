import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { State, Store } from "@sambego/storybook-state";
import { Theme } from "../theme";
import "../fonts/fontello/css/flexisaf.css";
import { StoryHeader, StoryContainer, StoryBusyBody, StoryPanel, StoryBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryH2, StoryNote } from "./stories.components";
import { P, PaleButton, SideListing, SideNavigation, AppBrand, Layout, Container, ProfileCard} from "../flexibull";


const store = new Store({
    collapseMenu: false
});

const NavigationList = [
    {
        name: "Dashboard", icon: "icon-envelope-open", sub: [
            { name: "Filter", icon: "icon-filter", navlink: "../" },
            { name: "Code Dev", icon: "icon-code", navlink: "../" },
            { name: "Email", icon: " icon-envelope-open-o", navlink: "#" }
        ]
    },
    { name: "Reports", icon: "icon-chart-pie", navlink: "../" },
    { name: "Setting", icon: "icon-cog", navlink: "#" },
    {
        name: "Notifications", icon: " icon-list", sub: [
            { name: "Notice", icon: "icon-bell-alt", navlink: "#" },
            { name: "Network", icon: "icon-wifi", navlink: "#" },
            { name: "Payment", icon: " icon-credit-card-alt", navlink: "#" }
        ]
    },
];

storiesOf("Components/Navigations", module).add("SideNavigation", () => (
    <StoryContainer>
        <StoryBusyBody />
        <StoryBody>
        <StoryHeader>Navigation Components</StoryHeader>
        <StoryPanel>
            <StoryH2>
                Side Navigation
            </StoryH2>
            <StoryText>
                Navigation menu is an effective and user-friendly way for representing site structure to users.
            </StoryText>
            <StoryPreview>  
                    <State store={store}>
                        {state => [
                <StorySample large>
                                <Layout>
                                <SideNavigation onClick={() => store.set({ collapseMenu: !store.get("collapseMenu") })} collapse={state.collapseMenu} >
                                    <AppBrand>
                                        <i className="icon-flexisaf" style={{ fontSize: 30 }} />
                                    </AppBrand>
                                        <ProfileCard indicator={Theme.PrimaryRed}></ProfileCard>
                                    <SideListing
                                        links={NavigationList}
                                        collapse={state.collapseMenu}
                                    />
                                </SideNavigation> 

                                <Container><P>The Page Content</P></Container>
                    </Layout>
                </StorySample>
                        ]}
                    </State>
                <StoryCode>
                        <SyntaxHighlighter language='html' >{`
const NavigationList = [
    {
        name: "Dashboard", icon: "icon-envelope-open", sub: [
            { name: "Filter", icon: "icon-filter", navlink: "../" },
            { name: "Code Dev", icon: "icon-code", navlink: "../" },
            { name: "Email", icon: " icon-envelope-open-o", navlink: "#" }
        ]
    },
    { name: "Reports", icon: "icon-chart-pie", navlink: "../" },
    { name: "Setting", icon: "icon-cog", navlink: "#" },
    {
        name: "Notifications", icon: " icon-list", sub: [
            { name: "Notice", icon: "icon-bell-alt", navlink: "#" },
            { name: "Network", icon: "icon-wifi", navlink: "#" },
            { name: "Payment", icon: " icon-credit-card-alt", navlink: "#" }
        ]
    },
];


class App extends Component {
  constructor() {
    super();
    this.state = {
      collapseMenu: false
    }
  }

  render() {
  return (
  <Router>
  <Layout>
    <SideNavigation onClick={() => this.setState({ collapseMenu: !this.state.collapseMenu })} collapse={this.state.collapseMenu} >
      <AppBrand>
        <i className="icon-flexisaf" style={{ fontSize: 30 }} />
      </AppBrand>
      <ProfileCard indicator={Theme.PrimaryRed}></ProfileCard>
      <SideListing
        links={NavigationList}
        collapse={this.state.collapseMenu}
        NavLink
      />
    </SideNavigation>

    <Container>
      <Route exact path={"/page1"} component={PageTest} />
      <Route exact path={"/page2"} component={PageTest2} />
    </Container> 
  </Layout>
</Router >
    )};`}</SyntaxHighlighter>
                </StoryCode>
                <StoryAttributes>
                    <P>Attributes</P>
                </StoryAttributes>
                
            </StoryPreview>
        </StoryPanel>


            <StoryPanel>
                <StoryH2>
                    Light-Side Navigation
            </StoryH2>
                <StoryText>
                    If needed this changes the theme of the side Navigation to a lighter version, Colors of the background and text colors can still be set.
            </StoryText>
                <StoryPreview>
                    <State store={store}>
                        {state => [
                            <StorySample large>
                                <Layout>
                                    <SideNavigation onClick={() => store.set({ collapseMenu: !store.get("collapseMenu") })} collapse={state.collapseMenu} light>
                                        <AppBrand>
                                            <i className="icon-flexisaf" style={{ fontSize: 30 }} />
                                        </AppBrand>
                                        <ProfileCard indicator={Theme.PrimaryBlue}></ProfileCard>
                                        <SideListing
                                            links={NavigationList}
                                            collapse={state.collapseMenu}
                                        />
                                    </SideNavigation>

                                    <Container><P>The Page Content</P></Container>
                                </Layout>
                            </StorySample>
                        ]}
                    </State>
                    <StoryCode>
                        <SyntaxHighlighter language='html' >{`<SideNavigation onClick={() => store.set({ collapseMenu: !store.get("collapseMenu") })} collapse={state.collapseMenu} light>`}</SyntaxHighlighter>
                    </StoryCode>
                    <StoryAttributes>
            <P>Attributes</P>
                </StoryAttributes>

                </StoryPreview>

                <p></p>
                <StoryH2>
                    Component Dependencies
          </StoryH2>
                <StoryNote>
                    npm install --save prop-types<br />
                    npm install --save react-router-dom<br />
                    npm install --save styled-components<br />
                    npm install --save polished
            </StoryNote>
            </StoryPanel>
        </StoryBody>
    </StoryContainer>
));
