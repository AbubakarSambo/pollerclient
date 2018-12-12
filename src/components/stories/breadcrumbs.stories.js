import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { StoryHeader, StoryContainer, StoryPanel, StoryTable, StoryH2, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryNote } from "./stories.components";
import { BreadCrumb } from "../flexibull"

storiesOf('Components', module)
  .add('Bread Crumbs', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Bread Crumbs</StoryHeader>

        <StoryPanel>
          <StoryH2>
            Sample
            </StoryH2>
          <StoryText>

          </StoryText>
          <StoryPreview>

            <StorySample>
              <BreadCrumb
                list={[
                  { name: "BreadCrumb 1", link: "../" },
                  { name: "BreadCrumb 2", link: "../" },
                  { name: "BreadCrumb 3", link: "../" },
                  { name: "BreadCrumb 4", link: "../" },
                  { name: "BreadCrumb 5", link: "../" },
                  { name: "BreadCrumb 6", link: "../" },
                  { name: "BreadCrumb 7", link: "../" },
                  { name: "BreadCrumb 8", link: "../" }
                ]}
              />
            </StorySample>

            <StoryCode>
              <SyntaxHighlighter language='html'>{`<BreadCrumb
list={[
    {name: "BreadCrumb 1", link: "../"},
    {name: "BreadCrumb 2", link: "../"},
    {name: "BreadCrumb 3", link: "../"},
    {name: "BreadCrumb 4", link: "../"},
    {name: "BreadCrumb 5", link: "../"},
    {name: "BreadCrumb 6", link: "../"},
    {name: "BreadCrumb 7", link: "../"},
    {name: "BreadCrumb 8", link: "../"}
]}
/>`}</SyntaxHighlighter>
            </StoryCode>
            <StoryAttributes>
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
                    <td>color value</td>
                    <td>sets color theme for the breadcrumb <br /><em>color="#63CD92"</em></td>
                  </tr>
                  <tr>
                    <td>display</td>
                    <td>display property</td>
                    <td>sets the css display property of the wrapper component</td>
                  </tr>
                  <tr>
                    <td>list</td>
                    <td>array</td>
                    <td>takes in an array list with attributes <strong>name</strong> and <strong>link</strong></td>
                  </tr>
                  <tr>
                    <td>max</td>
                    <td>number</td>
                    <td>maximum nuber of links to be displayed, the remaining is collapsed into a dropdown</td>
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
            npm install --save react-resize-detector<br />
            npm install --save styled-components<br />
            npm install --save polished
            </StoryNote>
        </StoryPanel>
      </StoryBody>
    </StoryContainer>
  ));   