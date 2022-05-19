import React from "react";

class Form extends React.Component {
    initialState = {
        name: "",
        job: "",
    };

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const { name, job } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label for="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange}
                />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;
