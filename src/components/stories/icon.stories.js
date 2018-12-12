import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { State, Store } from "@sambego/storybook-state";
import { Icon, HamburgerClose } from "../flexibull";
import { StoryHeader, StoryContainer, StoryPanel, StoryH2, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryIcon, StoryNote } from "./stories.components";

const IconData = require("../fonts/config.json");

const store = new Store({
  switchIcon: false
});

setInterval(()=>{
  store.set({ switchIcon: !store.get("switchIcon") })
},2000)

storiesOf('Components/Iconography', module)
  .add('Fontello', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Iconography</StoryHeader>

        <StoryPanel>
          <StoryH2>
            Fontello
            </StoryH2>
          <StoryText>

          </StoryText>
          <StoryPreview>
            
            <StorySample>
              {IconData.glyphs.map(item => (
                <StoryIcon>
                  <Icon name={item.css} />
                  <span>{item.css}</span>
                </StoryIcon>
              ))}
            </StorySample>
              
            <StoryCode>
              <SyntaxHighlighter language='html'>{`${IconData.glyphs.map(item => `<Icon name={${item.css}} />
`)}`}</SyntaxHighlighter>
            </StoryCode>
            <StoryAttributes>

            </StoryAttributes>
          </StoryPreview>
        </StoryPanel>
      </StoryBody>
    </StoryContainer>
  )).add('Animated Icons', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Custom Animated Icons</StoryHeader>

        <StoryPanel>
          <StoryH2>
            HamburgerClose
            </StoryH2>
          <StoryText>

          </StoryText>
          <StoryPreview>
            <State store={store}>
              {state => [
            <StorySample>
              <HamburgerClose
                open={state.switchIcon}
                fontSize="20px"
              />
            </StorySample>
              ]}
            </State>
            <StoryCode>
              <SyntaxHighlighter language='html'>{`<HamburgerClose
open={state.iconState}
fontSize="20px"
/>`}</SyntaxHighlighter>
            </StoryCode>
            <StoryAttributes>

            </StoryAttributes>
          </StoryPreview>

          <p></p>
          <StoryH2>
            Component Dependencies
          </StoryH2>
          <StoryNote>
            npm install --save prop-types<br />
            npm install --save styled-components
            </StoryNote>
        </StoryPanel>
      </StoryBody>
    </StoryContainer>
  ));   