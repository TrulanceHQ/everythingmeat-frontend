import { useState, useEffect } from 'react';

export const useOTPTimer = (initialTime = 120) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
  }, [timeLeft, isActive]);

  const restart = () => {
    setTimeLeft(initialTime);
    setIsActive(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return {
    timeLeft,
    isActive,
    formattedTime: formatTime(timeLeft),
    restart
  };
};