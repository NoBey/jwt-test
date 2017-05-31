var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar222' }, 'nobey1');
console.log(token) // bar

var decoded = jwt.verify('yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIxMTEiLCJpYXQiOjE0OTUwMDA0Mjl9.Gh9youejwjLLJTxaEzBNRzbExX85GKEeyXxxqKFtscQ', 'nobey1')

// var decoded = jwt.decode(token, {complete: true});


console.log(decoded) // bar


// sign with RSA SHA256
// var cert = fs.readFileSync('private.key');  // get private key
// var token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});

// sign asynchronously
// jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256' }, function(err, token) {
//   console.log(token);
// });
//

// curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIyMjIiLCJpYXQiOjE0OTYyMjM4NzN9.HUD8F3WJPVxPwp1M_wlpyKbjqBCGxbECetXUo-r_H9g" 127.0.0.1:3001
