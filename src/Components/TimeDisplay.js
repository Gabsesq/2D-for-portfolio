// src/Components/TimeDisplay.js
import React from 'react';
import chargeImage from '../assets/charge.jpg'; // Adjust the path according to your project structure
import '../Time.css'; // Ensure this path is correct

class TimeDisplay extends React.Component {
  state = {
    curTime: ""
  };

  componentDidMount() {
    this.getTime();
    this.intervalId = setInterval(this.getTime, 1000); // Update the time every second
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval when the component unmounts
  }

  getTime = () => {
    const today = new Date();
    const curTime = today.getHours() + ':' + String(today.getMinutes()).padStart(2, '0') + ':' + String(today.getSeconds()).padStart(2, '0');
    this.setState({ curTime });
  };

  render() {
    return (
      <div className="time-display">
        <img src={chargeImage} alt="Charge" className="charge-icon" /> {/* Display the image */}
        {this.state.curTime}
      </div>
    );
  }
}

export default TimeDisplay;

