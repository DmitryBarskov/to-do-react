import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleClick(event) {
    const { inputValue } = this.state;
    const { onSubmit } = this.props;

    event.preventDefault();

    onSubmit(inputValue);
    this.setState({ inputValue: '' });
  }

  inputChanged(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    const { placeholder, buttonLabel } = this.props;
    return (
      <form onSubmit={(e) => this.handleClick(e)}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => this.inputChanged(e)}
          value={inputValue}
        />
        <button type="submit">{buttonLabel}</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  buttonLabel: PropTypes.string,
};

TodoForm.defaultProps = {
  placeholder: 'Buy some milk',
  buttonLabel: 'Add',
};

export default TodoForm;
