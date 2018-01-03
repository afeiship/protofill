(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var USER_AGENT = global.navigator.userAgent;
  var ANDROID_RE = /Android/;
  var ANDROID_STR = 'Android ';
  var SEMICOLON = ';';

  var NxDetectAndroid = nx.declare('nx.DetectAndroid', {
    statics:{
      isAndroid : function () {
        return ANDROID_RE.test(USER_AGENT);
      },
      version: function(){
        var splitUserAgent = USER_AGENT.split(ANDROID_STR);
        if (splitUserAgent.length > 1) {
          return splitUserAgent[1].split(SEMICOLON)[0];
        }
        return null;
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDetectAndroid;
  }

}());
