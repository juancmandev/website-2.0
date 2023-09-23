const monthsEn = [
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

const monthsEs = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octobre',
  'Noviembre',
  'Diciembre',
];

const months = (lang: string, monthIndex: number): string => {
  return lang === 'en' ? monthsEn[monthIndex] : monthsEs[monthIndex];
};

export default months;
