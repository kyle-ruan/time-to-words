import { NUMBER_WORD_MAP } from './utils';

const O_CLOCK = "o'clock";

// expecting numeric time to be in a format like '8:15' or '12:30'
export function convertTimeToWords(numericTime) {
  const [hourStr, minuteStr] = numericTime.split(':');

  const hour = parseInt(hourStr);
  const minute = parseInt(minuteStr);

  if (hour === 0 && minute === 0) {
    return 'midnight';
  }

  if (minute === 0) {
    return `${NUMBER_WORD_MAP[hour]} ${O_CLOCK}`;
  }

  if (minute === 15) {
    return `quarter past ${NUMBER_WORD_MAP[hour]}`;
  }

  if (minute < 30) {
    return `${NUMBER_WORD_MAP[minute]} past ${NUMBER_WORD_MAP[hour]}`;
  }

  if (minute === 30) {
    return `half past ${NUMBER_WORD_MAP[hour]}`;
  }

  if (minute < 60) {
    return `${NUMBER_WORD_MAP[60 - minute]} to ${NUMBER_WORD_MAP[hour + 1]}`;
  }

  if (numericTime === '0:00') {
    return 'midnight';
  }

  throw new Error('Not valid time');
}
