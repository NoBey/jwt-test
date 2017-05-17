var Koa = require('koa');
var Koajwt = require('koa-jwt');
var jwt = require('jsonwebtoken')
var bodyParser = require('koa-bodyparser');
const Router = require('koa-trie-router')
var app = new Koa();
let router = new Router()
// Middleware below this line is only reached if JWT token is valid
// unless the URL starts with '/public'
app.use(bodyParser());

router
  .use(function(ctx, next) {
    console.log('* requests')
    next()
  })
  .get(function(ctx, next) {
    console.log('GET requests')
    next()
  })
  .put('/foo', function (ctx) {
    ctx.body = 'PUT /foo requests'
  })
  .post('/bar', function (ctx) {
    ctx.body = 'POST /bar requests'
  })
  .post('/l', function (ctx, res) {
  //TODO validate req.body.username and req.body.password
  //if is invalid, return 401
  if (!(ctx.request.body.username === 'kk' && ctx.request.body.password === 'l')) {

    // ctx.body = 'sss'
  }

  var profile = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    id: 123
  };
  var secret = 'nobey'
  // We are sending the profile inside the token
  // console.log(jwt)
  var token = jwt.sign(profile, secret);

  ctx.body = { token: token, l:ctx.state }
});




app.use(router.middleware())

app.use(Koajwt({ secret: 'shared-secret', key: 'jwtdata' , debug:true, })) //.unless({ path: [/^\/public/] }));


app.listen(3002);
