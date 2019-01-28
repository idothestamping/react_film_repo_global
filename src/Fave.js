import React, { Component } from 'react';

class Fave extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         // isFave: false
    //     }
    // }

	handleClick = (e) => {
        e.stopPropagation();
        this.props.onFaveToggle();
        // this.setState({
        //     isFave: this.state.isFave ? false : true
        // })
        // console.log("handling click?", this.state.isFave);
    }

    render() {
        const queueClass = this.props.isFave ? "remove_from_queue" : "add_to_queue"
      return (
        <div className={`film-row-fave ${queueClass}`} onClick={this.handleClick}>
            <p className="material-icons">{queueClass}</p>
        </div>
      );
    }
  }

export default Fave;


