import React from 'react';
import { createForm, formShape, createFormField } from 'rc-form';
import { Grid, SimpleSelect, Input, ModalComponent, CheckboxComp, PaleButton, Button } from '../../../components/flexibull';
import { connect } from "dva";
import styled from 'styled-components';

const Label = styled.label`
margin-left: 20px;
margin-top: 2px;
display: block;
`

const options = [
    { value: 'SUPER_ADMIN', label: 'Super Admin' },
    { value: 'NECO_ADMIN', label: 'Neco Admin' },
    { value: 'CENTRE_ADMIN', label: 'Center Admin' }
];

const stateOptions = [
    { value: 'bauchi', label: 'Bauchi' },
    { value: 'gombe', label: 'Gombe' },
    { value: 'abuja', label: 'Abuja' },
    { value: 'yola', label: 'Yola' },
];

export class UserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: 'female',
            createAnother: false,
        }
        this.changeGender = this.changeGender.bind(this)
        this.toggleMultiple = this.toggleMultiple.bind(this)
    }
    static propTypes = {
        form: formShape,
    };
    changeGender(gender) {
        this.setState({ gender })
    }

    submit = () => {
        this.props.form.validateFields((error, value) => {
            if (!error) {
                if (this.props.editing) {
                    let data = {
                        ...value,
                        type: value.type.value,
                        gender: this.state.gender,

                    }
                    this.props.dispatch({
                        type: "user/updateUser", data
                    });
                    this.props.form.resetFields()
                    this.props.close()
                }
                else {
                    this.props.dispatch({
                        type: "pu/savePu", data: value
                    });
                    if (this.state.createAnother) {
                        this.props.form.resetFields()
                    }
                    else {
                        this.props.form.resetFields()
                        this.props.close()
                    }
                }
            }
        });
        // this.props.form.resetFields()
    }
    toggleMultiple() {
        this.setState({ createAnother: !this.state.createAnother })
    }

    render() {
        let errors;
        const { getFieldProps, getFieldError } = this.props.form;
        const { editing, pu } = this.props
        const { activePu } = pu
        return (
            <div>
                <ModalComponent
                    title="User Details"
                    {...this.props}
                    footer={<div><CheckboxComp checked={this.state.createAnother} onChange={this.toggleMultiple} /> <label>Create Multiple</label><PaleButton onClick={this.props.close}>Cancel</PaleButton> <Button id='saveedit' onClick={this.submit}>{this.props.editing ? 'Edit' : 'Save'}</Button></div>}
                >
                    <Input error={(errors = getFieldError('name')) ? errors.join(',') : null} type="text" required label="Name" forminput
                        disabled={editing}
                        {...getFieldProps('name', {
                            initialValue: editing ? activePu.username : '',
                            rules: [{ required: true }],
                        })}
                        placeholder="name"
                    />
                    <Grid default="1fr 1fr" tablet="1fr">
                        <Input error={(errors = getFieldError('code')) ? errors.join(',') : null} type="text" required label="Code" forminput
                            {...getFieldProps('code', {
                                initialValue: editing ? activePu.firstName : '',
                                rules: [{ required: true }],
                            })}
                            placeholder="Code"
                        />
                        <Input error={(errors = getFieldError('state')) ? errors.join(',') : null} type="text" required label="State" forminput
                            {...getFieldProps('state', {
                                initialValue: editing ? activePu.lastName : '',
                                rules: [{ required: true }],
                            })}
                            placeholder="State"
                        />
                    </Grid>
                    <Grid default="1fr 1fr" tablet="1fr">
                        <Input error={(errors = getFieldError('lga')) ? errors.join(',') : null} type="text" label="LGA" forminput
                            {...getFieldProps('lga', {
                                initialValue: editing ? activePu.middleName : '',
                                rules: [],
                            })}
                            placeholder="LGA"
                        />
                        <Input error={(errors = getFieldError('ward')) ? errors.join(',') : null} type="text" required label="Ward" forminput
                            {...getFieldProps('ward', {
                                initialValue: editing ? activePu.email : '',
                                rules: [{ required: true }],
                            })}
                            placeholder="ward"
                        />
                    </Grid>
                </ModalComponent>
            </div >
        );
    }
}

// export default createForm()(UserForm);
export default connect(({ app, pu }) => ({ app, pu }))(createForm({
    mapPropsToFields(props) {
        const { pu } = props
        const { activePu } = pu
        return {
            activePu: createFormField(activePu),
        };
    }
})(UserForm));
