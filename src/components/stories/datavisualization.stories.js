import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { transparentize } from 'polished';
import { Theme } from "../theme";
import { StoryHeader, StoryContainer, StoryPanel, StoryTable, StoryH2, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryNote } from "./stories.components";
import { CircleLine, LineChart, PieChart } from "../flexibull"


const linchartlist = [45, 65, 45, 60, 80]

storiesOf('Components/Charts', module)
  .add('Mini Charts', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Simple Chart Visualisation</StoryHeader>

        <StoryPanel>
          <StoryH2>
            Circle Chart
            </StoryH2>
          <StoryText>

          </StoryText>
          <StoryPreview>

            <StorySample>
              <CircleLine percentage={60} />
              <CircleLine size="90px" percentage={75} lineWidth={10} />
              <CircleLine size="80px" percentage={25} color={Theme.PrimaryRed} secondaryColor={transparentize(0.8, Theme.PrimaryBlue)} displayValue="25 People" fontSize="0.8rem" rounding={false} lineWidth={10} />
            </StorySample>

            <StoryCode>
              <SyntaxHighlighter language='html'>{`<CircleLine percentage={60} />
<CircleLine size="90px" percentage={75} lineWidth={10} />
<CircleLine size="80px" 
            percentage={25} 
            color={Theme.PrimaryRed} 
            secondaryColor={transparentize(0.8, Theme.PrimaryBlue)} 
            displayValue="25 People" 
            fontSize="0.8rem" 
            rounding={false} 
            lineWidth={10}/>`}</SyntaxHighlighter>
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
                    <td>color</td>
                    <td>color value</td>
                    <td>{Theme.PrimaryColor}</td>
                    <td>Sets the active bar color of the chart<br /><em>{Theme.PrimaryColor}</em>    <em>rgba(0,0,0,1)</em></td>
                  </tr>
                  <tr>
                    <td>displayValue</td>
                    <td>string</td>
                    <td>Percentage Value</td>
                    <td>The value to be displayed at the centre of the chart, is could be a custom value or the chart percentage value<br /><em>displayValue="25 people"</em>   <em>displayValue="25%"</em>  </td>
                  </tr>
                  <tr>
                    <td>fontSize</td>
                    <td>size value</td>
                    <td>1rem</td>
                    <td>sets the font size of the displayValue</td>
                  </tr>
                  <tr>
                    <td>lineWidth</td>
                    <td>number</td>
                    <td>20</td>
                    <td>sets the line tickness</td>
                  </tr>
                  <tr>
                    <td>percentage</td>
                    <td>number</td>
                    <td>0</td>
                    <td>Set the chart value, takes only numbers between 0 - 100</td>
                  </tr>
                  <tr>
                    <td>rounding</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>rounded linecap on the chart line</td>
                  </tr>
                  <tr>
                    <td>size</td>
                    <td>size value</td>
                    <td>100px</td>
                    <td>the chart has a square aspect ratio, and the size attributes sets the width and height of the component</td>
                  </tr>
                </tbody>
              </StoryTable>
            </StoryAttributes>
          </StoryPreview>
          <p></p>
          <StoryH2>
            Line Chart
            </StoryH2>
          <StoryText></StoryText>

          <StoryPreview>
            <StorySample>
              <LineChart list={linchartlist} size="100px" />
              <LineChart list={linchartlist} color={Theme.PrimaryGrey} size="80px" />
              <LineChart list={linchartlist} color={Theme.PrimaryRed} size="80px" />
            </StorySample>

            <StoryCode>
              <SyntaxHighlighter language='html'>{`<LineChart list={linchartlist} size="100px" />
<LineChart list={linchartlist} color={Theme.PrimaryGrey} size="80px" />
<LineChart list={linchartlist} color={Theme.PrimaryRed} size="80px" />`}</SyntaxHighlighter>
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
                    <td>color</td>
                    <td>color value</td>
                    <td>{Theme.PrimaryColor}</td>
                    <td>Sets the active bar color of the chart<br /><em>{Theme.PrimaryColor}</em>    <em>rgba(0,0,0,1)</em></td>
                  </tr>
                  <tr>
                    <td>list</td>
                    <td>array</td>
                    <td>[]</td>
                    <td>chart data<br /><em>list={[23, 45, 42, 12, 80]}</em></td>
                  </tr>
                  <tr>
                    <td>size</td>
                    <td>size value</td>
                    <td>100px</td>
                    <td>the chart has a square aspect ratio, and the size attributes sets the width and height of the component</td>
                  </tr>
                </tbody>
              </StoryTable>
            </StoryAttributes>
          </StoryPreview>
          <p></p>
          <StoryH2>
            Pie Chart
            </StoryH2>
          <StoryText></StoryText>

          <StoryPreview>
            <StorySample>
              <PieChart
                list={[{ name: "software", color: Theme.PrimaryColor, value: 3000 }, { name: "projects", color: Theme.PrimaryDark, value: 3000 }, { name: "GIS", color: Theme.PrimaryFontColor, value: 2000 }, { name: "Programs", color: Theme.PrimaryRed, value: 4000 }, { name: "finance", color: Theme.PrimaryGrey, value: 4000 }, { name: "Operations", color: Theme.PrimaryOrange, value: 4000 }]}
                size="200px"
                innerRadius={30}
              />
              <PieChart
                list={[{ name: "software", value: 3000 }, { name: "security", value: 3000 },{ name: "Programs", value: 4000 },{ name: "M and E", value: 4000 }]}
                size="100px"
                innerRadius={30}
                color={Theme.PrimaryFontColor}
              />
            </StorySample>

            <StoryCode>
              <SyntaxHighlighter language='html'>{`<LineChart list={linchartlist} size="100px" />
<LineChart list={linchartlist} color={Theme.PrimaryGrey} size="80px" />
<LineChart list={linchartlist} color={Theme.PrimaryRed} size="80px" />`}</SyntaxHighlighter>
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
                    <td>color</td>
                    <td>color value</td>
                    <td>{Theme.PrimaryColor}</td>
                    <td>Sets the active bar color of the chart<br /><em>{Theme.PrimaryColor}</em>    <em>rgba(0,0,0,1)</em></td>
                  </tr>
                  <tr>
                    <td>fontSize</td>
                    <td>size value</td>
                    <td>1rem</td>
                    <td>sets the font size of the displayValue</td>
                  </tr>
                  <tr>
                    <td>innerRadius</td>
                    <td>number</td>
                    <td>20</td>
                    <td>The percentage value for the inner radius of the chart</td>
                  </tr>
                  <tr>
                    <td>list</td>
                    <td>array</td>
                    <td>[]</td>
                    <td>chart data<br /><em>list={[23, 45, 42, 12, 80]}</em></td>
                  </tr>
                  <tr>
                    <td>size</td>
                    <td>size value</td>
                    <td>100px</td>
                    <td>the chart has a square aspect ratio, and the size attributes sets the width and height of the component</td>
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