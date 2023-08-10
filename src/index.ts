import './lib';

declare var wx: any;

const Protofill = () => {
  console.log('nothing.');
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = Protofill;
}

export default Protofill;
