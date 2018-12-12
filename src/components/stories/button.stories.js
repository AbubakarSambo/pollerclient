import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import "../fonts/fontello/css/flexisaf.css";
import { StoryHeader, StoryContainer, StoryBusyBody, StoryPanel, StoryBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryH2, StoryNote } from "./stories.components";
import { Button, PaleButton } from "../flexibull";

storiesOf("Components", module).add("Buttons", () => (
    <StoryContainer>
        <StoryBusyBody />
        <StoryBody>
        <StoryHeader>Button Components</StoryHeader>
        <StoryPanel>
            <StoryH2>
                Buttons
            </StoryH2>
            <StoryText>
                Button components can contain an Icon. This is done placing an Icon component within the Button and setting the icon attribute.
    The Icons can also be placed on either side of the text but you will need to specify the side attributes.
            </StoryText>
            <StoryPreview>
                <StorySample>
                        <Button>Default Button</Button> <Button disabled>Default Button</Button> <Button progress>Default Button</Button><p/>
                        <Button rounded>Default Button</Button> <Button rounded disabled>Default Button</Button> <Button rounded progress>Default Button</Button><p/>
                        <PaleButton rounded>Default Button</PaleButton> <PaleButton rounded disabled>Default Button</PaleButton> <PaleButton rounded progress>Default Button</PaleButton>
                </StorySample>
                <StoryCode>
                        <SyntaxHighlighter language='html' >{`<Button>Default Button</Button>
<Button disabled>Default Button</Button>
<Button progress>Default Button</Button>
                        

<Button rounded>Default Button</Button> 
<Button rounded disabled>Default Button</Button> 
<Button rounded progress>Default Button</Button>


<PaleButton rounded>Default Button</PaleButton>
<PaleButton rounded disabled>Default Button</PaleButton> 
<PaleButton rounded progress>Default Button</PaleButton>`}</SyntaxHighlighter>
                </StoryCode>
                <StoryAttributes>
                    xcvbnm,
                </StoryAttributes>
            </StoryPreview>
        </StoryPanel>

            <StoryPanel>
                <StoryH2>
                    Buttons With Icons
            </StoryH2>
                <StoryText>
                    Button components can contain an Icon. This is done placing an Icon component within the Button and setting the icon attribute.
        The Icons can also be placed on either side of the text but you will need to specify the side attributes.
            </StoryText>
                <StoryPreview>
                    <StorySample>
                         <Button icon><i className="icon-calendar" /></Button>  <Button icon disabled><i className="icon-calendar" /></Button>  <PaleButton icon><i className="icon-calendar" /></PaleButton> <PaleButton icon disabled><i className="icon-calendar" /></PaleButton>
                        <p />
                        <Button icon rounded><i className="icon-flexisaf" /></Button> <PaleButton icon rounded><i className="icon-wifi" /></PaleButton>
                        <p />
                        <Button iconLeft><i className="icon-calendar" /> Left icon</Button> <Button iconRight>Right icon <i className="icon-angle-right" /></Button>
                        <p />
                        <PaleButton iconLeft><i className="icon-calendar" /> Left icon</PaleButton> <PaleButton iconRight>Right icon <i className="icon-spin6 animate-spin" /></PaleButton>
                    </StorySample>
                    <StoryCode>
                        <SyntaxHighlighter language='html' >{`<Button icon><i className="icon-calendar" /></Button>
<Button icon disabled><i className="icon-calendar" /></Button>  
<PaleButton icon><i className="icon-calendar" /></PaleButton> 
<PaleButton icon disabled><i className="icon-calendar" /></PaleButton>


<Button icon rounded><i className="icon-flexisaf" /></Button> 
<PaleButton icon rounded><i className="icon-wifi" /></PaleButton>


<Button iconLeft><i className="icon-calendar" /> Left icon</Button> 
<Button iconRight>Right icon <i className="icon-angle-right" /></Button>


<PaleButton iconLeft><i className="icon-calendar" /> Left icon</PaleButton> 
<PaleButton iconRight>Right icon <i className="icon-spin6 animate-spin" /></PaleButton>`}</SyntaxHighlighter>
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
                    npm install --save prop-types<br />
                    npm install --save styled-components<br />
                    npm install --save polished
            </StoryNote>
            </StoryPanel>
        </StoryBody>
    </StoryContainer>
));
