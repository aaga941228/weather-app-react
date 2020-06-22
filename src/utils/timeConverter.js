const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function convertFullToDate(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

export function convertToDate(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const month = months[a.getMonth()];
  const date = a.getDate();
  const time = date + ' ' + month + ' '
  return time;
}

export function convertToTime(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = hour + ':' + min + ':' + sec;
  return time;
}

export function getDate(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  return a.getDate()
}