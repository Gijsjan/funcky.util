(function() {
  module.exports = {

    /*
    Generates an ID that starts with a letter
    
    Example: "aBc12D34"
    
    param Number length of the id
    return String
     */
    generateID: function(length) {
      var chars, text;
      length = (length != null) && length > 0 ? length - 1 : 7;
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      text = chars.charAt(Math.floor(Math.random() * 52));
      while (length--) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return text;
    },
    setResetTimeout: (function() {
      var timer;
      timer = null;
      return function(ms, cb, onResetFn) {
        if (timer != null) {
          if (onResetFn != null) {
            onResetFn();
          }
          clearTimeout(timer);
        }
        return timer = setTimeout((function() {
          timer = null;
          return cb();
        }), ms);
      };
    })()
  };

}).call(this);
