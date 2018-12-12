import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { transparentize } from 'polished';
import { Theme } from "../theme";
import { StoryHeader, StoryTable, StoryContainer, StoryPanel, StoryDiv, StoryH2, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryNote } from "./stories.components";
import { Grid } from "../flexibull"

storiesOf('Components/Layout', module)
  .add('Grid Layout', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Grid Layout</StoryHeader>

        <StoryPanel>
          <StoryH2>
            Default Grid
            </StoryH2>
          <StoryText>
            By default the Grid Components has <strong>6 columns</strong> in full-screen ( less or greater than {Theme.sizes.desktop}) width , <strong>3 Columns</strong> in tablet ( less than {Theme.sizes.tablet}) width and <strong>1 column</strong> in mobile ( less than {Theme.sizes.phone}) width 
            </StoryText>
          <StoryPreview>
            
            <StorySample>
              <Grid pad="10px">
                <StoryDiv bordered>Column 1</StoryDiv>
                <StoryDiv bordered>Column 2</StoryDiv>
                <StoryDiv bordered>Column 3</StoryDiv>
                <StoryDiv bordered>Column 4</StoryDiv>
                <StoryDiv bordered>Column 5</StoryDiv>
                <StoryDiv bordered>Column 6</StoryDiv>
              </Grid>
            </StorySample>
              
            <StoryCode>
              <SyntaxHighlighter language='html'>{`<Grid pad="5px">
<div>Column 1</div>
<div>Column 2</div>
<div>Column 3</div>
<div>Column 4</div>
<div>Column 5</div>
<div>Column 6</div>
</Grid>`}</SyntaxHighlighter>
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
                    <td>autoRow</td>
                    <td>grid-auto-row</td>
                    <td>none</td>
                    <td>controls the general height of the grid columns  <br /><em>autoRow="200px"</em>    <em>autoRow="minmax(200px, auto)"</em></td>
                  </tr>
                  <tr>
                    <td>default</td>
                    <td>Column Distribution</td>
                    <td>"repeat(6, 1fr)"</td>
                    <td>sets column distribution for screens larger than <strong>{Theme.sizes.tablet}</strong><br /><em>default="25% 25% 25% 25%"</em>  <em>default="200px auto"</em>  <em>default="repeat(6, 1fr)"</em></td>
                  </tr>
                  <tr>
                    <td>mobile</td>
                    <td>Column Distribution</td>
                    <td>"100%"</td>
                    <td>sets column distribution for screens less than <strong>{Theme.sizes.phone}</strong><br /><em>default="25% 25% 25% 25%"</em>  <em>default="200px auto"</em>  <em>default="repeat(6, 1fr)"</em></td>
                  </tr>
                  <tr>
                    <td>pad</td>
                    <td>padding value</td>
                    <td>0</td>
                    <td>Sets spacing around columns <br /><em>pad="10px"</em></td>
                  </tr>
                  <tr>
                    <td>padHorizontal</td>
                    <td>padding value</td>
                    <td>0</td>
                    <td>Sets left and right spacing between columns <br /><em>padHorizontal="10px"</em></td>
                  </tr>
                  <tr>
                    <td>padVertical</td>
                    <td>padding value</td>
                    <td>0</td>
                    <td>Sets top and bottom spacing between columns <br /><em>padVertical="10px"</em></td>
                  </tr>
                  <tr>
                    <td>tablet</td>
                    <td>Column Distribution</td>
                    <td>"repeat(3, 1fr)"</td>
                    <td>sets column distribution for screens larger than <strong>{Theme.sizes.phone}</strong> but smaller than <strong>{Theme.sizes.tablet}</strong><br /><em>default="25% 25% 25% 25%"</em>  <em>default="200px auto"</em>  <em>default="repeat(6, 1fr)"</em></td>
                  </tr>
                </tbody>
              </StoryTable>
            </StoryAttributes>
          </StoryPreview>
<p></p>
          <StoryH2>Defining Custom Grid System</StoryH2>
          <StoryText>
            The default behaviour can be overwritten by specifying the <strong>default column template</strong>, <strong>tablet column templat</strong>e and the <strong>mobile column template</strong> </StoryText>
          <StoryPreview>

            <StorySample>
              <Grid pad="5px" default="20% 20% 60%" tablet="40% 60%" mobile="100%">
                <StoryDiv bordered>Column 1</StoryDiv>
                <StoryDiv bordered>Column 2</StoryDiv>
                <StoryDiv bordered>Column 3</StoryDiv>
                <StoryDiv bordered>Column 4</StoryDiv>
                <StoryDiv bordered>Column 5</StoryDiv>
                <StoryDiv bordered>Column 6</StoryDiv>
              </Grid>
            </StorySample>

            <StoryCode>
              <SyntaxHighlighter language='html'>{`<Grid pad="5px" default="20% 20% 60%" tablet="40% 60%" mobile="100%">
<div>Column 1</div>
<div>Column 2</div>
<div>Column 3</div>
<div>Column 4</div>
<div>Column 5</div>
<div>Column 6</div>
</Grid>`}</SyntaxHighlighter>
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