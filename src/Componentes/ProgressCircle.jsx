import React from 'react';
import GaugeChart from 'react-gauge-chart';
import './css/medidor.css'

const ProgressCircle = ({ value }) => {
  return (
    <div>
      <GaugeChart
        id="speedometer-chart"
        nrOfLevels={7}
        arcWidth={0.2}
        percent={value / 100}
      />
    </div>
  );
  };
  export default ProgressCircle;