var koa = require('koa');
var jwt = require('koa-jwt');

var app = new koa();


app.use(function(ctx, next){
  if (ctx.url.match(/^\/p/)) {
    ctx.body = '请求头 Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIyMjIiLCJpYXQiOjE0OTYyMjM4NzN9.HUD8F3WJPVxPwp1M_wlpyKbjqBCGxbECetXUo-r_H9g\n';
  } else {
    return next();
  }
});


app.use(jwt({
  secret: 'nobey1',
  // key: 'jwtdata'
}));
// curl --header "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIyMjIiLCJpYXQiOjE0OTYyMjM4NzN9.HUD8F3WJPVxPwp1M_wlpyKbjqBCGxbECetXUo-r_H9g" 127.0.0.1:3001
// 请求头 Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIyMjIiLCJpYXQiOjE0OTYyMjM4NzN9.HUD8F3WJPVxPwp1M_wlpyKbjqBCGxbECetXUo-r_H9g

// Protected middleware
app.use((ctx, next) => {
  // content of the token will be available on this.state.user
  ctx.body = ctx.state
});


app.listen(3001);
