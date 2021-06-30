import { useState, useEffect } from "react";

export default function TimeController() {
  function dateToStringSlicer(date, startIndex, endIndex) {
    return date.toString().split(" ").slice(startIndex, endIndex).toString();
  }

  function Clock() {
    const [time, setTime] = useState(getCurrentHour());

    useEffect(() => {
      const timer = setTimeout(() => {
        setTime(getCurrentHour);
      }, 1000);
      return () => clearTimeout(timer);
    });

    function getCurrentHour() {
      return dateToStringSlicer(Date(), 4, 5);
    }

    return time;
  }

  function convertHoursToMinutes() {
    const actualDate = new Date();
    const hours = actualDate.getHours();
    const minutes = actualDate.getMinutes();
    return (hours * 60 + minutes).toString();
  }

  function dateAndDayStringInPtBr() {
    const today = new Date();

    const daysInEnglishToPortuguese = {
      Sun: "Dom",
      Mon: "Seg",
      Tue: "Ter",
      Wed: "Qua",
      Thu: "Qui",
      Fri: "Sex",
      Sat: "Sáb",
    };

    const localeDateString = today.toLocaleDateString("pt-BR");

    const getCurrentDayInPtBr = () => {
      const todayName = dateToStringSlicer(today, 0, 1);
      return daysInEnglishToPortuguese[todayName];
    };

    return `${localeDateString}, ${getCurrentDayInPtBr()}`;
  }

  return {
    Clock,
    convertHoursToMinutes,
    dateAndDayStringInPtBr,
    dateToStringSlicer,
  };
}
