import React, { useState, useEffect } from "react";
import { Text } from "react-native-elements";
import { number, func } from "prop-types";
import useCountDown from "use-countdown";

const getTimeInSeconds = miliseconds => Math.floor(miliseconds / 1000);

export default function CountDown({ startTime, onComplete }) {
  const timeInMs = useCountDown({ initTime: startTime, onComplete });

  return <Text>{`${getTimeInSeconds(timeInMs)} secondes`}</Text>;
}

CountDown.defaultProps = {
  startTime: 0,
  onComplete: Function.prototype
};

CountDown.propTypes = {
  startTime: number,
  onComplete: func
};
