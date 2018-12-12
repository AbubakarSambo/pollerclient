import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import "../fonts/fontello/css/flexisaf.css";
import { StoryHeader, StoryContainer, StoryBusyBody, StoryPanel, StoryBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryH2, StoryNote, StoryTable } from "./stories.components";
import { Input, Grid, SimpleSelect } from "../flexibull";
import {Theme} from "../theme";

storiesOf("Components/Forms", module).add("Forms Elements", () => (
    <StoryContainer>
        <StoryBusyBody />
        <StoryBody>
        <StoryHeader>Form Components</StoryHeader>
        <StoryPanel>
            <StoryH2>
                Inputs
            </StoryH2>
            <StoryText>... </StoryText>
            <StoryPreview>
                <StorySample>
                    <Grid default="repeat(3, 1fr)" pad="20px">
                            <Input />
                            <Input type="text" />
                            <Input type="search" />
                            <Input type="number" label="Numbers" required forminput/>
                            <Input type="phone" label="Phone Number" required forminput/>
                            <Input type="password" label="Password" forminput/>
                    </Grid>
                </StorySample>
                <StoryCode>
                    <SyntaxHighlighter language='html' >{`<Input />
<Input type="text" />
<Input type="search" />
<Input type="number" label="Numbers" required forminput/>
<Input type="phone" label="Phone Number" required forminput/>
<Input type="password" label="Password" forminput/>`}</SyntaxHighlighter>
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
                                    <td>forminput</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>styles the input as a part of a form, adding required padding for labels and error messages </td>
                                </tr>
                                <tr>
                                    <td>error</td>
                                    <td>string</td>
                                    <td></td>
                                    <td>takes and displays error message from form validations</td>
                                </tr>
                                <tr>
                                    <td>label</td>
                                    <td>string</td>
                                    <td></td>
                                    <td>sets the input label</td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>string</td>
                                    <td></td>
                                    <td>Sets the input placeholder text</td>
                                </tr>
                                <tr>
                                    <td>required</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>styles the input with a "<strong>*</strong>" indicating require fields</td>
                                </tr>
                                <tr>
                                    <td>type</td>
                                    <td>Input type</td>
                                    <td>text</td>
                                    <td>Choose from one of the input types <strong>text</strong>, <strong>password</strong>, <strong>number</strong>, <strong>phone</strong>, <strong>search</strong></td>
                                </tr>
                            </tbody>
                        </StoryTable>
                </StoryAttributes>
            </StoryPreview>
        </StoryPanel>

            <StoryPanel>
                <StoryH2>
                    Selects
            </StoryH2>
                <StoryText>...</StoryText>
                <StoryPreview>
                    <StorySample>
                        <Grid default="repeat(3, 1fr)" pad="20px">
                        <SimpleSelect
                            options={[
                                { value: 'Neco_Super_Admin', label: 'Neco Super Admin' },
                                { value: 'Neco_Admin', label: 'Neco Admin' },
                                { value: 'State_Admin', label: 'State Admin' },
                                { value: 'Centre_Admin', label: 'Centre Admin' }
                            ]}
                            type="select"
                            forminput
                        />
                            <SimpleSelect
                                options={[
                                    { value: 'Neco_Super_Admin', label: 'Neco Super Admin' },
                                    { value: 'Neco_Admin', label: 'Neco Admin' },
                                    { value: 'State_Admin', label: 'State Admin' },
                                    { value: 'Centre_Admin', label: 'Centre Admin' }
                                ]}
                                type="select"
                                label="Something Else"
                                forminput
                                required
                            />
                        </Grid>
                    </StorySample>
                    <StoryCode>
                        <SyntaxHighlighter language='html' >{`<SimpleSelect
  options={[
    { value: 'Neco_Super_Admin', label: 'Neco Super Admin' },
    { value: 'Neco_Admin', label: 'Neco Admin' },
    { value: 'State_Admin', label: 'State Admin' },
    { value: 'Centre_Admin', label: 'Centre Admin' }
  ]}
  type="select"
/>
<SimpleSelect
  options={[
    { value: 'Neco_Super_Admin', label: 'Neco Super Admin' },
    { value: 'Neco_Admin', label: 'Neco Admin' },
    { value: 'State_Admin', label: 'State Admin' },
    { value: 'Centre_Admin', label: 'Centre Admin' }
  ]}
  type="select"
  label="Something Else"
  forminput
  required
/>`}</SyntaxHighlighter>
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
                                    <td>forminput</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>styles the input as a part of a form, adding required padding for labels and error messages </td>
                                </tr>
                                <tr>
                                    <td>error</td>
                                    <td>string</td>
                                    <td></td>
                                    <td>takes and displays error message from form validations</td>
                                </tr>
                                <tr>
                                    <td>label</td>
                                    <td>string</td>
                                    <td></td>
                                    <td>sets the input label</td>
                                </tr>
                                <tr>
                                    <td>required</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>styles the input with a "<strong>*</strong>" indicating require fields</td>
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
