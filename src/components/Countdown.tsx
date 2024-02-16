import { useState, useEffect } from 'react';

const Countdown = () => {
   
    const [countdown, setCountdown] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const countDownEndDate = 'April 5, 2024 00:00:00';
        const endDate = new Date(countDownEndDate).getTime();

        const interval = setInterval(() => {
            const timeNow = new Date().getTime();
            const timeLeft = endDate - timeNow;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString();
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString();
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)).toString();
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString();

                setCountdown({ days, hours, minutes, seconds });
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="flex items-end justify-center z-10">
                <div className="m-2 sm:m-5">
                    <span className="text-color3bs font-bold text-xl sm:text-5xl">{countdown.days}</span>
                    <p>Días</p>
                </div>
                <div className="m-2 sm:m-5">
                    <span className="text-color3bs font-bold text-xl sm:text-5xl">{countdown.hours}</span>
                    <p>Horas</p>
                </div>
                <div className="m-2 sm:m-5">
                    <span className="text-color3bs font-bold text-xl sm:text-5xl">{countdown.minutes}</span>
                    <p>Minutos</p>
                </div>
                <div className="m-2 sm:m-5">
                    <span className="text-color3bs font-bold text-xl sm:text-5xl">{countdown.seconds}</span>
                    <p>Segundos</p>
                </div>
            </div>
        </>
    )
}

export default Countdown;