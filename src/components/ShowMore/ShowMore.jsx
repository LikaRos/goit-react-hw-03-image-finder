import { Component } from 'react';

export class ShowMore extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button className="btn" type="button" onClick={this.handleToggle}>
          {isOpen ? 'Show less' : 'Show more'}
        </button>
      </div>
    );
  }
}
