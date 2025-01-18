import { differenceInSeconds } from "date-fns";

export function calculateDifferenceInTime(innitialDate: Date, laterDate: Date) {
  const totalSeconds = differenceInSeconds(laterDate, innitialDate);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const days = String(Math.floor(totalHours / 24));
  const seconds = String(Math.floor(totalSeconds % 60));
  const minutes = String(Math.floor(totalMinutes % 60));
  const hours = String(Math.floor(totalHours % 24));

  return {
    days, seconds, minutes, hours
  }
}