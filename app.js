var Koa = require('koa');
var jwt = require('koa-jwt');

var app = new Koa();

// Custom 401 handling if you don't want to expose koa-jwt errors to users
// 自定义处理 401 如果你不想暴露 koa-jwt 错误对用户
app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = '受保护的资源，使用授权标头获取访问\n';
    } else {
      throw err;
    }
  });
});

// Unprotected middleware
app.use(function(ctx, next){
  if (ctx.url.match(/^\/public/)) {
    ctx.body = '无保护的\n';
  } else {
    return next();
  }
});

// Middleware below this line is only reached if JWT token is valid
// 中间件下面这条线是只达到如果JWT标记是有效的
app.use(jwt({ secret: 'shared-secret' }));

// Protected middleware
app.use(function(ctx){
  if (ctx.url.match(/^\/api/)) {
    ctx.body = '受保护的\n';
  }
});

app.listen(3001);
