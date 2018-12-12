import React from "react";
import { storiesOf } from "@storybook/react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { State, Store } from "@sambego/storybook-state";
import "../fonts/fontello/css/flexisaf.css";
import { StoryHeader, StoryContainer, StoryBusyBody, StoryPanel, StoryBody, StoryPreview, StoryCode, StorySample, StoryAttributes, StoryText, StoryH2, StoryNote } from "./stories.components";
import { Button, PaleButton, FlexiTable, FlexiPagination } from "../flexibull";


const pageOptions = [
    { value: 5, label: '5 Rows' },
    { value: 10, label: '10 Rows' },
    { value: 20, label: '20 Rows' },
    { value: 50, label: '50 Rows' }
];

const columns = [{
    title: 'Name', dataIndex: 'name', key: 'name', width: 100,
}, {
    title: 'Age', dataIndex: 'age', key: 'age', width: 100,
}, {
    title: 'Address', dataIndex: 'address', key: 'address',
}, {
    title: 'Actions', dataIndex: '', key: 'operations', render: () => <a>xxxxxx</a>, width: 100
}];


const data = [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
    { name: 'Jack', age: 28, address: 'some where', key: '3' },
    { name: 'Rose', age: 36, address: 'some where', key: '4' },
    { name: 'Jack', age: 28, address: 'some where', key: '5' },
    { name: 'Rose', age: 36, address: 'some where', key: '6' },
    { name: 'Jack', age: 28, address: 'some where', key: '7' },
    { name: 'Last one', age: 36, address: 'some where', key: '24' },
];

const store = new Store({
    current: 1
});

const onChange = (page) => {
    store.set({
        current: page
    })
}
storiesOf("Components", module).add("Tables", () => (
    <StoryContainer>
        <StoryBusyBody />
        <StoryBody>
        <StoryHeader>Table Components</StoryHeader>
        <StoryPanel>
            <StoryH2>
                Tables
            </StoryH2>
            <StoryText>... </StoryText>
            <StoryPreview>
                <StorySample style={{ backgroundColor: "#eee"}}>
                        <FlexiTable
                            columns={columns}
                            data={data}
                        >
                        </FlexiTable>
                </StorySample>
                <StoryCode>
                        <SyntaxHighlighter language='html' >{`
const columns = [{
    title: 'Name', dataIndex: 'name', key: 'name', width: 100,
}, {
    title: 'Age', dataIndex: 'age', key: 'age', width: 100,
}, {
    title: 'Address', dataIndex: 'address', key: 'address',
}, {
    title: 'Actions', dataIndex: '', key: 'operations', render: () => <a>xxxxxx</a>, width: 100
}];


const data = [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
    { name: 'Jack', age: 28, address: 'some where', key: '3' },
    { name: 'Rose', age: 36, address: 'some where', key: '4' },
    { name: 'Jack', age: 28, address: 'some where', key: '5' },
    { name: 'Rose', age: 36, address: 'some where', key: '6' },
    { name: 'Jack', age: 28, address: 'some where', key: '7' },
    { name: 'Last one', age: 36, address: 'some where', key: '24' },
];

<FlexiTable
    columns={columns}
    data={data}
>
</FlexiTable>`}</SyntaxHighlighter>
                </StoryCode>
                <StoryAttributes>
                   https://www.npmjs.com/package/rc-table
                </StoryAttributes>
            </StoryPreview>
        </StoryPanel>

            <StoryPanel>
                <StoryH2>
                    Table with Pagination
            </StoryH2>
                <StoryText>
                    ..... </StoryText>
                <StoryPreview>
                    <StorySample style={{ backgroundColor: "#eee" }}>
                        <State store={store}>
                            {state => [
                        <FlexiTable
                            columns={columns}
                            data={data}
                        >
                            <FlexiPagination
                                total={data.length}
                                onChange={onChange}
                                current={store.get("current")}
                                pageCounts={pageOptions}
                            />
                        </FlexiTable>
                            ]}
                        </State>
                    </StorySample>
                    <StoryCode>
                        <SyntaxHighlighter language='html' >{`
const pageOptions = [
    { value: 5, label: '5 Rows' },
    { value: 10, label: '10 Rows' },
    { value: 20, label: '20 Rows' },
    { value: 50, label: '50 Rows' }
];

class PageComponent extends Component {
    constructor() {
        super();
        this.state = {
            current: 1
        }
    }
    onChange = (page) => {
        this.setState({
            current: page,
        });
    }
    
    render() {
        return (

            <FlexiTable 
            columns={columns} 
            data={data} 
            >
            <FlexiPagination
                total={100}
                onChange={this.onChange}
                current={this.state.current}
            />
            </FlexiTable>`}</SyntaxHighlighter>
                    </StoryCode>
                    <StoryAttributes>
                        xcvbnm,
                </StoryAttributes>
                </StoryPreview>
                <p></p>
                <StoryH2>
                    Pagination with displayed rows selector
            </StoryH2>
                <StoryText>
                    ..... </StoryText>
                <StoryPreview>
                    <StorySample style={{ backgroundColor: "#eee" }}>
                        <State store={store}>
                            {state => [
                                <FlexiTable
                                    columns={columns}
                                    data={data}
                                >
                                    <FlexiPagination
                                        total={data.length}
                                        onChange={onChange}
                                        current={store.get("current")}
                                        pageCounts={pageOptions}
                                        itemsDisplayed
                                    />
                                </FlexiTable>
                            ]}
                        </State>
                    </StorySample>
                    <StoryCode>
                        <SyntaxHighlighter language='html' >{`
const pageOptions = [
    { value: 5, label: '5 Rows' },
    { value: 10, label: '10 Rows' },
    { value: 20, label: '20 Rows' },
    { value: 50, label: '50 Rows' }
];

class PageComponent extends Component {
    constructor() {
        super();
        this.state = {
            current: 1
        }
    }
    onChange = (page) => {
        this.setState({
            current: page,
        });
    }
    
    render() {
        return (

            <FlexiTable 
            columns={columns} 
            data={data} 
            >
            <FlexiPagination
                total={100}
                onChange={this.onChange}
                current={this.state.current}
                pageCounts={pageOptions}
                itemsDisplayed
            />
            </FlexiTable>`}</SyntaxHighlighter>
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
                    npm install --save polished<br />
                    npm install --save rc-table<br/>
                    npm install --save rc-pagination<br />
                    npm install --save rc-select
            </StoryNote>
            </StoryPanel>
        </StoryBody>
    </StoryContainer>
));
