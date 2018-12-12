import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { transparentize } from 'polished';
import { Theme } from "../theme";
import { StoryHeader, StoryContainer, StoryPanel, StoryH2, StoryTable, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryNote } from "./stories.components";
import { H5, H4, H3, H1, H2, P, Label } from "../flexibull";

storiesOf('Components/Typography', module)
  .add('Typography', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Typography</StoryHeader>

        <StoryPanel>
            <StoryH2>
                Typography
            </StoryH2>
            <StoryText>
                
            </StoryText>
            <StoryPreview>
                <StorySample>
                        <P><strong>Primary Font:</strong> {Theme.PrimaryFont} <br/>
              <strong>1rem</strong> = {Theme.PrimaryFontSize}<br/>
              <strong>Line-height:</strong> {Theme.PrimaryLineHeight}</P>
              <P margin="20px 0 0 0" color={transparentize(0.3,Theme.PrimaryFontColor)}>BODY TEXT</P>
            <P margin="0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                software like Aldus PageMaker including versions of Lorem Ipsum.</P>

                <P margin="20px 0 0 0" color={transparentize(0.3,Theme.PrimaryFontColor)}>H1</P>
            <H1 margin="0">{Theme.PrimaryFontFamily} Light 3rem = 45px, letter-spacing 0.7</H1>

              <P margin="20px 0 0 0" color={transparentize(0.3, Theme.PrimaryFontColor)}>H2</P>
            <H2 margin="0">{Theme.PrimaryFontFamily} SemiBold 2rem = 30px, letter-spacing 0.5</H2>

              <P margin="20px 0 0 0" color={transparentize(0.3, Theme.PrimaryFontColor)}>H3</P>
            <H3 margin="0">{Theme.PrimaryFontFamily} SemiBold 1.6rem = 24px, letter-spacing 0.4</H3>

              <P margin="20px 0 0 0" color={transparentize(0.3, Theme.PrimaryFontColor)}>H4</P>
            <H4 margin="0">{Theme.PrimaryFontFamily} Light 1.6rem = 24px, letter-spacing 0.4</H4>

              <P margin="20px 0 0 0" color={transparentize(0.3, Theme.PrimaryFontColor)}>H5</P>
            <H5 margin="0">{Theme.PrimaryFontFamily} SemiBold 1.2rem = 18px</H5>

              <P margin="20px 0 0 0" color={transparentize(0.3, Theme.PrimaryFontColor)}>LABEL</P>
              <Label margin="0">{Theme.PrimaryFontFamily} Light 0.8rem = 12.8px, letter-spacing 0.45</Label>
            <P margin="20px 0">...</P>
                </StorySample>
                <StoryCode>
              <SyntaxHighlighter language='jsx'>{`<Label>Label</Label>
<P>Paragraph</P>
<H1>Header 1</H1>
<H2>Header 1</H2>
<H3>Header 1</H3>
<H4>Header 1</H4>
<H5>Header 1</H5>`}</SyntaxHighlighter>
                </StoryCode>
                <StoryAttributes>
              <p>All typography elements have the following attributes to overide their default behaviours</p>
              <StoryTable>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Parameter</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>color</td>
                    <td>color property</td>
                    <td>Controls the font color<br /><code><em>{`color="#222222"  color="rgb(0,0,0)"`}</em></code></td>
                  </tr>
                  <tr>
                    <td>margin</td>
                    <td>margin property</td>
                    <td>Controls the margin space around the element<br /><code><em>{`margin="10px"  margin="10px 10px"`}</em></code></td>
                  </tr>
                  <tr>
                    <td>size</td>
                    <td>Font sizes type</td>
                    <td>Takes in one of the font size type above and overides the default font size<br /><code><em>{`size="small" size="standard" size="medium" size="large" size="xlarge"`}</em></code></td>
                  </tr>
                </tbody>
              </StoryTable>
                </StoryAttributes>
            </StoryPreview>
        </StoryPanel>

        <StoryPanel>
            <StoryH2>
                Font Sizing
            </StoryH2>
            <StoryText>
                How to use various sizing standards
            </StoryText>
            <StoryPreview>
                <StorySample>
              <P size="small">Font Size <strong>small</strong> 0.8rem = 12px</P>
              <P size="standard">Font Size <strong>standard</strong> 1rem = 15px</P>
              <P size="medium">Font Size <strong>medium</strong> 1.2rem = 18px</P>
              <P size="large">Font Size <strong>large</strong> 1.6rem = 24px</P>
              <P size="xlarge">Font Size <strong>xlarge</strong> 2rem = 30px</P>
                </StorySample>
                <StoryCode>
              <SyntaxHighlighter language='jsx'>{`<P size="small">Font Size <strong>small</strong> 0.8rem = 12px</P>
<P size="standard">Font Size <strong>standard</strong> 1rem = 15px</P>
<P size="medium">Font Size <strong>medium</strong> 1.2rem = 18px</P>
<P size="large">Font Size <strong>large</strong> 1.6rem = 24px</P>
<P size="xlarge">Font Size <strong>xlarge</strong> 2rem = 30px</P>`}</SyntaxHighlighter>
                </StoryCode>
                <StoryAttributes>
                    xcvbnm,
                </StoryAttributes>
            </StoryPreview>

          <p></p>
          <StoryH2>
            Component Dependencies
          </StoryH2>
          <StoryNote>
            npm install --save styled-components
            </StoryNote>
        </StoryPanel>

       
      </StoryBody>
    </StoryContainer>
  ));   