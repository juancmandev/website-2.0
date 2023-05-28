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
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sept',
  'Oct',
  'Nov',
  'Dic',
];

const months = (lang: string, monthIndex: number): string => {
  return lang === 'en' ? monthsEn[monthIndex] : monthsEs[monthIndex];
};

export default months;
