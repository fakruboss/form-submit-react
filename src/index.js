import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
    state = { error: null };

    handleError = value => {
        const LEN_ERR = "Length cannot be less than 3";
        const CHAR_ERR = "Name should contain 'F'";
        let ERR_MSG = "";
        if (value.length < 3) {
            ERR_MSG += LEN_ERR + ". ";
        }
        if (value.indexOf("f") === -1) {
            ERR_MSG += CHAR_ERR + ". ";
        }
        return ERR_MSG;
    };

    handleSubmit = event => {
        event.preventDefault();
    };
    handleChange = event => {
        const { value } = event.target;
        this.setState({ error: this.handleError(value) });
    };

    componentDidMount() {
        this.setState({ error: this.handleError("") });
    }

    render() {
        const validName = "Valid Name";
        const {error} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input
                    autoComplete="off"
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                />
                <button disabled={Boolean(error)}>Submit</button>
                {error ? <div style={{color: 'red'}}>{error}</div> : <div style={{color: 'green'}}>{validName}</div> }
            </form>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
