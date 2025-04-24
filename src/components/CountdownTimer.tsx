import { useState, useEffect } from "react";
import { Clock, Diamond } from "lucide-react";

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

  const [isExpired, setIsExpired] = useState(false);

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
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
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
    <div className="relative">
      {/* Top decorative line */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-hackathon-diamond rounded-full"></div>

      {/* Countdown blocks */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => {
          const value = [
            timeLeft.days,
            timeLeft.hours,
            timeLeft.minutes,
            timeLeft.seconds,
          ][i];
          const isSeconds = label === "Seconds";
          return (
            <div
              key={label}
              className={`glass-effect p-3 md:p-4 rounded-xl w-[70px] md:w-[90px] flex flex-col items-center shadow-md transition-all duration-300 hover:translate-y-[-2px] border border-hackathon-mediumPurple/20 ${
                isSeconds ? "animate-pulse-glow" : "hover:shadow-lg"
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-hackathon-diamond mb-1">
                {formatTime(value)}
              </div>
              <div className="text-xs sm:text-sm text-white/70">{label}</div>
            </div>
          );
        })}
      </div>

      {/* Date Display */}
      <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-sm font-medium bg-hackathon-mediumPurple/20 py-2 px-4 rounded-full mx-auto w-fit">
        <Clock size={16} className="text-hackathon-diamond" />
        <p>
          {new Date(targetDate).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Expired Message */}
      {isExpired && (
        <div className="mt-4 flex items-center justify-center gap-2 text-hackathon-diamond bg-hackathon-diamond/10 py-2 px-4 rounded-full mx-auto w-fit animate-pulse">
          <Diamond size={16} className="text-hackathon-diamond" />
          <p className="font-semibold">Event has started!</p>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
