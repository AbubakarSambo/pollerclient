import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { transparentize } from 'polished';
import { Theme } from "../theme";
import { StoryHeader, StoryContainer, StoryPanel, StoryH2, StoryNote, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText } from "./stories.components";
import { H5, H4, H3, H1, H2, P, Label } from "../flexibull";

storiesOf('Components', module)
  .add('Dependencies', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Dependencies</StoryHeader>

        <StoryPanel>
          <StoryH2>
            Component Dependencies
          </StoryH2>
          <StoryNote>
            npm install --save prop-types<br/>
            npm install --save styled-components<br />
            npm install --save polished<br />
            npm install --save react-router-dom <br />
            npm install --save react-resize-detector <br />
            npm install --save react-select<br />
            npm install --save rc-form<br />
            npm install --save rc-table<br />
            npm install --save pluralize<br />
          </StoryNote>
          <P></P>
          <StoryH2>
            Storybook Dependencies
          </StoryH2>
          <StoryNote>
            npm install --save storybook<br />
            npm install --save @sambego/storybook-state<br />
            npm install --save react-syntax-highlighter<br />
          </StoryNote>
            
        </StoryPanel>

       
      </StoryBody>
    </StoryContainer>
  ));   