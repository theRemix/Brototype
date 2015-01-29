module.exports = function ( duuude ) {
  var homie = this;

  homie.prototype = {
    bro : duuude
  }

  // override all methods on homie
  Object.getOwnPropertyNames(homie).forEach(function(property) {
    if( typeof homie[property] == 'function'){
      var original_function = homie[property];

      homie[property] = function () {
        original_function.apply( homie, arguments );
        original_function.apply( homie.prototype.bro, arguments );
      }
    }
  });
}