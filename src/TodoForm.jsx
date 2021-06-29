import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  inputChanged(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleClick(e)}>
        <input
          type="text"
          placeholder={this.props.placeholder}
          onChange={(e) => this.inputChanged(e)}
          value={this.state.inputValue}
        />
        <button>{this.props.buttonLabel}</button>
      </form>
    );
  }
}

TodoForm.defaultProps = {
  placeholder: "Buy some milk",
  buttonLabel: "Add"
};

export default TodoForm;
