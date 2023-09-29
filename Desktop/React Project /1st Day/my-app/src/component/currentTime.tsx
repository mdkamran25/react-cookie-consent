import React, { useEffect, useState } from "react";
import "./currentTime.css";
const CurrentTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="col-6 d-flex align-items-center justify-content-center py-2 m-0">
      <div className="border m-0 timer-body rounded-circle d-flex align-items-center justify-content-center">
        <p className="clock">{date.toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default CurrentTime;
