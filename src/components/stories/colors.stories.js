import React from "react";
import { storiesOf } from "@storybook/react";
import { Theme } from "../theme";
import { StoryHeader, StoryContainer, StoryPanel, StoryH2, StoryH3, StoryBody, StoryBusyBody, StoryColorBox } from "./stories.components";


storiesOf('Components', module)
    .add('Color Guide', () => (
        <StoryContainer>
            <StoryBusyBody />
            <StoryBody>
                <StoryHeader>Color Guide</StoryHeader>

                <StoryPanel>
                    <StoryH2>
                        Brand Colors
        </StoryH2>

            <StoryColorBox color={Theme.PrimaryColor}><strong>PrimaryColor</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryDark}><strong>PrimaryDark</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryLight}><strong>PrimaryLight</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryPale}><strong>PrimaryPale</strong></StoryColorBox>

            <StoryH3>Additional Colors</StoryH3>
            <StoryColorBox color={Theme.PrimaryGrey}><strong>PrimaryGrey</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryGreyDark}><strong>PrimaryGreyDark</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryGreyLight}><strong>PrimaryGreyLight</strong></StoryColorBox>

            <p />

            <StoryColorBox color={Theme.PrimaryRed}><strong>PrimaryRed</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryBlue}><strong>PrimaryBlue</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryOrange}><strong>PrimaryOrange</strong></StoryColorBox>
            <StoryColorBox color={Theme.PrimaryMint}><strong>PrimaryMint</strong></StoryColorBox>

            <p>....</p>

            <StoryH3>Text Colors</StoryH3>
            <StoryColorBox color={Theme.PrimaryFontColor}><strong>PrimaryFontColor</strong></StoryColorBox>

                </StoryPanel>
            </StoryBody>
        </StoryContainer>
    ));   