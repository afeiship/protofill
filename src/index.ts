declare var wx: any;

const Protofill = (): void => {
  console.log('hello');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Protofill;
}

export default Protofill;
