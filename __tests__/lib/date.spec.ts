import '../../src';

describe('api.date', () => {
  test('api.date format hooks', () => {
    const d = new Date('2020-01-01 12:00:00');
    expect(d.format('date')).toBe('2020-01-01');
    expect(d.format('time')).toBe('12:00:00');
    expect(d.format('datetime')).toBe('2020-01-01 12:00:00');
    expect(d.format('dbdt')).toBe('20200101_120000');
    expect(d.format('month')).toBe('2020-01');
    expect(d.format('YYYY-MM-DD HH:mm:ss')).toBe('2020-01-01 12:00:00');
  });

  test('api.date format customize', () => {
    const d = new Date('2020-01-01 12:00:00');
    expect(d.format('YYYY-MM-DD HH:mm:ss')).toBe('2020-01-01 12:00:00');
  });
});
