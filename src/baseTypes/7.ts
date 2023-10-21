/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Sunday = "sunday",
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
}

function isWeekend(dayOfWeek: DayOfWeek): boolean {
  if (dayOfWeek === DayOfWeek.Saturday || dayOfWeek === DayOfWeek.Sunday)
    return false;
  return true;
}
