// import '../types/date-extensions.d.ts';
import sdf from '@jswork/simple-date-format';

if (!Date.prototype.hasOwnProperty('format')) {
  Object.defineProperty(Date.prototype, 'format', {
    value: function (format: string) {
      return sdf(format, this);
    },
  });
}
