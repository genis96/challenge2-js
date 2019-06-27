/* Quiz: Laugh - Directions
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!

Your Code:
 */
var laugh = function(laugh) {
  var ha = '';
  for (var i = 0; i < laugh; i++) {
    ha += 'ha'; 
  }
  return ha + '!';
}

laugh(3);
// console.log(laugh(3));