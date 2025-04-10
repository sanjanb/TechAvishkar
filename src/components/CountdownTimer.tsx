
import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string; // ISO date string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Target date passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`;
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="glass-effect p-4 rounded-xl w-20 flex flex-col items-center shadow-md">
        <div className="text-2xl sm:text-3xl font-bold text-hackathon-diamond">
          {formatTime(timeLeft.days)}
        </div>
        <div className="text-xs sm:text-sm text-white/70 mt-1">Days</div>
      </div>

      <div className="glass-effect p-4 rounded-xl w-20 flex flex-col items-center shadow-md">
        <div className="text-2xl sm:text-3xl font-bold text-hackathon-diamond">
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-xs sm:text-sm text-white/70 mt-1">Hours</div>
      </div>

      <div className="glass-effect p-4 rounded-xl w-20 flex flex-col items-center shadow-md">
        <div className="text-2xl sm:text-3xl font-bold text-hackathon-diamond">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-xs sm:text-sm text-white/70 mt-1">Minutes</div>
      </div>

      <div className="glass-effect p-4 rounded-xl w-20 flex flex-col items-center shadow-md">
        <div className="text-2xl sm:text-3xl font-bold text-hackathon-diamond">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs sm:text-sm text-white/70 mt-1">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
