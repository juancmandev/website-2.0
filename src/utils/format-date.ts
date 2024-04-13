const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function formatDate(date: string) {
  const newDate = new Date(date);
  const month = months[newDate.getMonth()];
  const day = newDate.getDate();
  const year = newDate.getFullYear();
  const time = newDate.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${month} ${day}, ${year}, at ${time}`;
}
