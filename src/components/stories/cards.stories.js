import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Theme } from "../theme";
import { StoryHeader, StoryTable, StoryContainer, StoryPanel, StoryDiv, StoryH2, StoryBody, StoryBusyBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryNote } from "./stories.components";
import { Grid, DashCard, Card, PieChart, CircleLine, LineChart, Label } from "../flexibull"

storiesOf('Components/Cards', module)
  .add('Data Cards', () => (
    <StoryContainer>
      <StoryBusyBody />
      <StoryBody>
        <StoryHeader>Cards</StoryHeader>

        <StoryPanel>
          <StoryH2>
            Dashboard Data Cards
            </StoryH2>
          <StoryText>...</StoryText>
          <StoryPreview>
            
            <StorySample style={{backgroundColor: "#eee"}}>
              <Grid pad="15px" default="repeat(3,1fr)" desktop="repeat(2,1fr)">
                <DashCard title="Total Registered Members" value="921,345" subValue={<Label color={Theme.PrimaryRed}><i className="icon-angle-down" /> 13.8</Label>}>
                  <CircleLine percentage={60} size="100px" rounding={false} color="#a3a1fb"></CircleLine>
                </DashCard>
                <DashCard title="Total Alternative" value="21,345" subValue={<Label color={Theme.PrimaryColor}><i className="icon-angle-up" /> 3.8</Label>}>
                  <PieChart
                    list={[{ name: "software", color: Theme.PrimaryColor, value: 3000 }, { name: "projects", color: Theme.PrimaryDark, value: 3000 }, { name: "GIS", color: Theme.PrimaryFontColor, value: 2000 }, { name: "Programs", color: Theme.PrimaryRed, value: 4000 }, { name: "finance", color: Theme.PrimaryGrey, value: 4000 }, { name: "Operations", color: Theme.PrimaryOrange, value: 4000 }]}
                    size="100px"
                    innerRadius={30}
                  />
                </DashCard>
                <DashCard title="Testing Title Block" value="34,100" subValue={<Label>0.8</Label>}>
                  <LineChart list={[45, 65, 45, 60, 80]} />
                </DashCard>
              </Grid>
            </StorySample>
              
            <StoryCode>
              <SyntaxHighlighter language='html'>{`<DashCard 
  title="Total Registered Members"
  value="921,345" 
  subValue={<Label color={Theme.PrimaryRed}><i className="icon-angle-down" /> 13.8</Label>}
>
    <CircleLine 
      percentage={60} 
      size="100px" 
      rounding={false} 
      color="#a3a1fb" 
    />
</DashCard>
<DashCard 
  title="Total Alternative" 
  value="21,345" 
  subValue={<Label color={Theme.PrimaryColor}><i className="icon-angle-up" /> 3.8</Label>}
>
  <PieChart
    list={[{ name: "software", color: Theme.PrimaryColor, value: 3000 }, { name: "projects", color: Theme.PrimaryDark, value: 3000 }, { name: "GIS", color: Theme.PrimaryFontColor, value: 2000 }, { name: "Programs", color: Theme.PrimaryRed, value: 4000 }, { name: "finance", color: Theme.PrimaryGrey, value: 4000 }, { name: "Operations", color: Theme.PrimaryOrange, value: 4000 }]}
    size="100px"
    innerRadius={30}
  />
</DashCard>
<DashCard 
  title="Testing Title Block" 
  value="34,100" 
  subValue={<Label>0.8</Label>}
>
  <LineChart list={[45, 65, 45, 60, 80]} />
</DashCard>`}</SyntaxHighlighter>
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
                    <td>subValue</td>
                    <td>object</td>
                    <td></td>
                    <td>Takes in an HTML object or JSX object that's rendered with the Component</td>
                  </tr>
                  <tr>
                    <td>title</td>
                    <td>String</td>
                    <td></td>
                    <td>Sets the card title</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>string/number</td>
                    <td>0</td>
                    <td>sets the focus value of the card</td>
                  </tr>
                </tbody>
              </StoryTable>
            </StoryAttributes>
          </StoryPreview>
<p></p>
          <StoryH2>Simple Data Cards</StoryH2>
          <StoryText>...</StoryText>
          <StoryPreview>

            <StorySample style={{backgroundColor: "#eee"}}>
              <Grid pad="15px" default="repeat(4,1fr)" desktop="repeat(2,1fr)">
                <Card title="Neco Super Admin" value="34" color={Theme.PrimaryRed} icon="icon-user-outline" />
                <Card title="Neco Admin" value="50" color={Theme.PrimaryBlue} icon="icon-user-outline" />
                <Card title="State Admin" value="36" color={Theme.PrimaryColor} icon="icon-user-outline" />
                <Card title="Centre Admin" value="129" color={Theme.PrimaryGrey} icon="icon-user-outline" />
              </Grid>
            </StorySample>

            <StoryCode>
              <SyntaxHighlighter language='html'>{`<Card title="Neco Super Admin" value="34" color={Theme.PrimaryRed} icon="icon-user-outline" />
<Card title="Neco Admin" value="50" color={Theme.PrimaryBlue} icon="icon-user-outline" />
<Card title="State Admin" value="36" color={Theme.PrimaryColor} icon="icon-user-outline" />
<Card title="Centre Admin" value="129" color={Theme.PrimaryGrey} icon="icon-user-outline" />`}</SyntaxHighlighter>
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
                    <td>color property</td>
                    <td></td>
                    <td>Sets the tone of the card e.g icon color, value color</td>
                  </tr>
                  <tr>
                    <td>title</td>
                    <td>String</td>
                    <td></td>
                    <td>Sets the card title</td>
                  </tr>
                  <tr>
                    <td>value</td>
                    <td>string/number</td>
                    <td>0</td>
                    <td>sets the focus value of the card</td>
                  </tr>
                  <tr>
                    <td>icon</td>
                    <td>string</td>
                    <td></td>
                    <td>gives the card a descriptive identity, use any icon name available in the project fontello record</td>
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
            npm install --save polished<br />
            npm install --save styled-components
            </StoryNote>
        </StoryPanel>
      </StoryBody>
    </StoryContainer>
  ));   