import React from 'react';
import { Form, FormFeedback, FormGroup, Input } from 'reactstrap';

import '../App.css';


class SendMessageForm extends React.Component {
    state = {
        textInput: ''
    }

    handleInput = e => {
        this.setState({
            textInput: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.broadcastMsg(this.state.textInput)
        this.setState({
            textInput: ''
        })
    }

    render() {
        const { textInput } = this.state

        return (
            <Form onSubmit={this.handleSubmit} id="form">
                <FormGroup id="formGroup">
                    <Input
                        type="text"
                        onChange={this.handleInput}
                        value={textInput}
                        maxLength={500}
                        {...(textInput
                            ? textInput.length > 500
                                ? { invalid: true }
                                : { valid: true }
                            : "")}
                    />

                    <FormFeedback
                        {...(textInput
                            ? textInput.length > 500
                                ? { valid: false }
                                : { valid: true }
                            : "")}
                    >
                        {(textInput
                            ? textInput.length > 500
                                ? "Text input cannot be more than 500 characters."
                                : ""
                            : "")}
                    </FormFeedback>

                </FormGroup>
                <Input type="submit" disabled={!textInput} value="Send" id="sendBtn"  />
            </Form>
        )
    }

}

export default SendMessageForm