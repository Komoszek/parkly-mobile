const leadingZero = ( x ) => x > 9 ? x : `0${x}`

export const bookingTimeFormat = ( dateTime ) => {
  const date = new Date(dateTime);
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${y}-${leadingZero(m)}-${leadingZero(d)} ${leadingZero(hours)}:${leadingZero(minutes)}`
}
