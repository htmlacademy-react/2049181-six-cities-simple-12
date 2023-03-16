const capitalize = (text:string) => text
  ? text.charAt(0).toUpperCase() + text.slice(1)
  : '';
const ratingToWidth = (rating: number) => Math.round(rating) * 20;
const dateToString = (date: Date) => `${date.toLocaleDateString('en-US', {year: 'numeric'})}-${date.toLocaleDateString('en-US', {month: 'numeric'})}-${date.toLocaleDateString('en-US', {day: '2-digit'})}`;
const humanizeDate = (date: Date) => date.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

export {capitalize, ratingToWidth, dateToString, humanizeDate};
