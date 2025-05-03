import { addMonths, differenceInDays, addDays, differenceInHours, addHours, differenceInMonths } from "date-fns";

export function calculateDifferenceInTime(initialDate: Date, laterDate: Date) {
  let calculateDate = initialDate;
  const months = differenceInMonths(laterDate, calculateDate);
  calculateDate = addMonths(calculateDate, months);
  const days = differenceInDays(laterDate, calculateDate);
  calculateDate = addDays(calculateDate, days);
  const hours = differenceInHours(laterDate, calculateDate);
  calculateDate = addHours(calculateDate, hours);

  return {
    months: String(months).length < 2 ? `0${months}` : `${months}`,
    days: String(days).length < 2 ? `0${days}` : `${days}`,
    hours: String(hours).length < 2 ? `0${hours}` : `${days}`,
  }
}