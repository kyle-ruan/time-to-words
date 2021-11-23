import { convertTimeToWords } from './time-to-words';

describe('Time to words', () => {
  it('should handle hourly clock', () => {
    const timeInWords = convertTimeToWords('2:00');

    expect(timeInWords).toBe("two o'clock");
  });

  it('should handle quarter past hour', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('should handle minutes less than 30', () => {
    const timeInWords = convertTimeToWords('2:27');

    expect(timeInWords).toBe('twenty seven past two');
  });

  it('should handle half hour', () => {
    const timeInWords = convertTimeToWords('2:30');

    expect(timeInWords).toBe('half past two');
  });

  it('should handle minutes greater than 30', () => {
    const timeInWords = convertTimeToWords('2:47');

    expect(timeInWords).toBe('thirteen to three');
  });

  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });
});
