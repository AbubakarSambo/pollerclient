import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { transparentize } from 'polished';
import { Theme } from "../theme";
import { StoryHeader, StoryContainer, StoryPanel, StoryTable, StoryH2, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText , StoryNote} from "./stories.components";
import { Button, PaleButton, ModalComponent } from "../flexibull"


const store = new Store({
  defaultModal: false,
  customModal: false,
  fluidModal: false
});

storiesOf('Components/Overlays', module)
  .add('Modals', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Modals</StoryHeader>

        <StoryPanel>
          <StoryH2>
            Simple modal
            </StoryH2>
          <StoryText>

          </StoryText>
          <StoryPreview>

            <StorySample>
              <Button onClick={() => store.set({ defaultModal: !store.get("defaultModal") })}>Try Basic Modal</Button>
              <State store={store}>
                {state => [
                  <ModalComponent
                    key="modal"
                    title="Basic Modal"
                    subTitle="Optional Label"
                    open={state.defaultModal}
                    onClose={() => store.set({ defaultModal: !store.get("defaultModal") })}
                    footer={<div><PaleButton>Default</PaleButton> <Button>Save</Button></div>}
                    expandable
                  >
                    Passive modals notifications should only appear if there is an action the user needs to address immediately. Passive modal notifications are persistent on screen.
                  </ModalComponent>
                ]}
              </State>
            </StorySample>

            <StoryCode>
              <SyntaxHighlighter language='html'>{`<ModalComponent
  title="Basic Modal"
  subTitle="Optional Label"
  open={state.defaultModal}
  onClose={() => store.set({ defaultModal: !store.get("defaultModal") })}
  footer={<div><PaleButton>Default</PaleButton> <Button>Save</Button></div>}
  expandable
>
  Passive modals notifications should only appear if there is an action the user needs to address immediately. Passive modal notifications are persistent on screen.
</ModalComponent>`}</SyntaxHighlighter>
            </StoryCode>
            <StoryAttributes>
              <StoryTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Parameter</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>backDropOpacity</td>
                    <td>number</td>
                    <td>{Theme.PrimaryColor}</td>
                    <td>Sets the Opacity level of the back overlay<br /><em>backDropOpacity={0.4}</em></td>
                  </tr>
                  <tr>
                    <td>backDropColor</td>
                    <td>color property</td>
                    <td>0.8</td>
                    <td>Sets back overlay color<br /><em>backDropColor="{Theme.PrimaryColor}"</em>    <em>backDropColor="rgba(0,0,0,1)"</em></td>
                  </tr>
                  <tr>
                    <td>color</td>
                    <td>color value</td>
                    <td>{Theme.PrimaryDark}</td>
                    <td>Sets modal theme color<br /><em>color="{Theme.PrimaryColor}"</em>    <em>color="rgba(0,0,0,1)"</em></td>
                  </tr>
                  <tr>
                    <td>error</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Sets the modal to an error theme color</td>
                  </tr>
                  <tr>
                    <td>expandable</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>enables and displays a modal expand button, to resize the modal to a 100% screen size </td>
                  </tr>
                  <tr>
                    <td>fluid</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>expands the modal to resize with the screen</td>
                  </tr>
                  <tr>
                    <td>footer</td>
                    <td>object</td>
                    <td></td>
                    <td>Footer content e.g <br /><em>footer={`{<div><PaleButton>Default</PaleButton> <Button>Save</Button></div>}`}</em></td>
                  </tr>
                  <tr>
                    <td>information</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Sets the modal to an information theme color</td>
                  </tr>
                  <tr>
                    <td>onClose</td>
                    <td>function</td>
                    <td>()</td>
                    <td>Function to close the modal<br /><em>onClose={`{()=>this.setState({ modalState: false})}`}</em></td>
                  </tr>
                  <tr>
                    <td>position</td>
                    <td>position property</td>
                    <td>fixed</td>
                    <td>sets the position type of the modal fixed/absolute </td>
                  </tr>
                  <tr>
                    <td>subTitle</td>
                    <td>string</td>
                    <td></td>
                    <td>Sub text appears above the title for extra discription</td>
                  </tr>
                  <tr>
                    <td>title</td>
                    <td>string</td>
                    <td></td>
                    <td>Set modal title</td>
                  </tr>
                  <tr>
                    <td>rounding</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>rounded linecap on the chart line</td>
                  </tr>
                </tbody>
              </StoryTable>
            </StoryAttributes>
          </StoryPreview>
   
          <p></p>
          <StoryH2>
            Component Dependencies
          </StoryH2>
          <StoryNote>
            npm install --save prop-types<br />
            npm install --save styled-components<br />
            npm install --save polished
            </StoryNote>
        </StoryPanel>
      </StoryBody>
    </StoryContainer>
  ));   