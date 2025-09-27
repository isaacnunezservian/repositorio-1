import React, { useEffect, useState } from 'react';
import moment from 'moment';

interface CountdownProps {
    timeTillDate: string;
    timeFormat?: string;
}

interface TimeParts {
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown({ timeTillDate, timeFormat }: CountdownProps) {
    const [time, setTime] = useState<TimeParts>({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        function update() {
            const then = timeFormat
                ? moment(timeTillDate, timeFormat)
                : moment(timeTillDate);
            const now = moment();
            const diff = moment.duration(then.diff(now));

            if (diff.asMilliseconds() <= 0) {
                setTime({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const totalDays = Math.floor(diff.asDays());
            const months = Math.floor(totalDays / 30); // Aproximadamente 30 días por mes
            const days = totalDays % 30;
            const hours = diff.hours();
            const minutes = diff.minutes();
            const seconds = diff.seconds();

            setTime({ months, days, hours, minutes, seconds });
        }

        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, [timeTillDate, timeFormat]);

    const monthsRadius = mapNumber(time.months, 12, 0, 0, 360);
    const daysRadius = mapNumber(time.days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(time.hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(time.minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(time.seconds, 60, 0, 0, 360);

    return (
        <div className="w-full mx-auto p-1 md:p-3 flex flex-col items-center">
            <div className="mb-1 z-40">
                <p className='text-center text-xs md:text-sm text-emerald-100 z-60'>MercadoShops cierra en:</p>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-3 justify-center md:justify-center items-center mx-auto">
                <div className="flex flex-col items-center justify-center p-2 rounded-xl backdrop-blur-sm relative overflow-hidden group hover:border-emerald-300/50 transition-all duration-300">
                    <div className="absolute inset-0   opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <SVGCircle radius={monthsRadius} />
                        <div className="text-sm md:text-base font-bold text-emerald-200 mt-1 drop-shadow-lg">
                            {time.months}
                        </div>
                        <span className="text-emerald-300/80 text-xs font-medium uppercase tracking-wider">
                            Meses
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-xl backdrop-blur-sm relative overflow-hidden group hover:border-emerald-300/50 transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <SVGCircle radius={daysRadius} />
                        <div className="text-sm md:text-base font-bold text-emerald-200 mt-1 drop-shadow-lg">
                            {time.days}
                        </div>
                        <span className="text-emerald-300/80 text-xs font-medium uppercase tracking-wider">
                            Días
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-xl backdrop-blur-sm relative overflow-hidden group hover:border-emerald-300/50 transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <SVGCircle radius={hoursRadius} />
                        <div className="text-sm md:text-base font-bold text-emerald-200 mt-1 drop-shadow-lg">
                            {time.hours}
                        </div>
                        <span className="text-emerald-300/80 text-xs font-medium uppercase tracking-wider">
                            Horas
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-xl backdrop-blur-sm relative overflow-hidden group hover:border-emerald-300/50 transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <SVGCircle radius={minutesRadius} />
                        <div className="text-sm md:text-base font-bold text-emerald-200 mt-1 drop-shadow-lg">
                            {time.minutes}
                        </div>
                        <span className="text-emerald-300/80 text-xs font-medium uppercase tracking-wider">
                            Minutos
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 rounded-xl backdrop-blur-sm relative overflow-hidden group hover:border-emerald-300/50 transition-all duration-300">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <SVGCircle radius={secondsRadius} />
                        <div className="text-sm md:text-base font-bold text-emerald-200 mt-1 drop-shadow-lg">
                            {time.seconds}
                        </div>
                        <span className="text-emerald-300/80 text-xs font-medium uppercase tracking-wider">
                            Segundos
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

const SVGCircle: React.FC<{ radius: number }> = ({ radius }) => (
    <svg className="w-8 h-8 md:w-10 md:h-10 -rotate-90 drop-shadow-lg" viewBox="0 0 100 100" aria-hidden>
        {/* Background circle */}
        <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="rgba(52, 211, 153, 0.1)"
            strokeWidth="3"
        />
        {/* Progress circle */}
        <path
            fill="none"
            stroke="url(#emeraldGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            d={describeArc(50, 50, 48, 0, radius)}
            style={{
                filter: 'drop-shadow(0 0 8px rgba(52, 211, 153, 0.6))'
            }}
        />
        {/* Gradient definition */}
        <defs>
            <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(52, 211, 153)" />
                <stop offset="50%" stopColor="rgb(34, 197, 94)" />
                <stop offset="100%" stopColor="rgb(20, 184, 166)" />
            </linearGradient>
        </defs>
    </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// Map a number from one range to another and clamp to output range
function mapNumber(number: number, in_min: number, in_max: number, out_min: number, out_max: number) {
    // prevent division by zero
    if (in_max === in_min) return out_min;
    const mapped = ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    // clamp
    return Math.max(Math.min(mapped, Math.max(out_min, out_max)), Math.min(out_min, out_max));
}