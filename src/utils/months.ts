const monthsEn = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
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
