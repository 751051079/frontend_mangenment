import React, { useState, useEffect } from 'react';
import './FlipClock.css';

const FlipClock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: Date) => {
        const year = String(time.getFullYear());
        const month = String(time.getMonth() + 1).padStart(2, '0');
        const day = String(time.getDate()).padStart(2, '0');
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        return { year, month, day, hours, minutes, seconds };
    };

    const { year, month, day, hours, minutes, seconds } = formatTime(time);

    return (
        <div className="flip-clock">
            <FlipUnit unit="year" value={year} />
            <FlipUnit unit="month" value={month} />
            <FlipUnit unit="day" value={day} />
            <FlipUnit unit="hour" value={hours} />
            <FlipUnit unit="minute" value={minutes} />
            <FlipUnit unit="second" value={seconds} />
        </div>
    );
};

interface FlipUnitProps {
    unit: string;
    value: string;
}

const FlipUnit: React.FC<FlipUnitProps> = ({ unit, value }) => {
    const [prevValue, setPrevValue] = useState(value);
    const [flipping, setFlipping] = useState(false);

    useEffect(() => {
        if (value !== prevValue) {
            setFlipping(true);
            setTimeout(() => {
                setFlipping(false);
                setPrevValue(value);
            }, 600); // 动画时间应与CSS中的动画时间匹配
        }
    }, [value, prevValue]);

    return (
        <div className={`flip-unit`}>
            <div className="card">
                <div className={`card-face`}>{prevValue}</div>
                <div className={`card-face ${flipping ? 'back' : ''}`}>{value}</div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default FlipClock;
