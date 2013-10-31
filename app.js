var restify = require('restify');
var restifySwagger = require('node-restify-swagger');
var restifyValidation = require('node-restify-validation');

var server = restify.createServer({
    name: 'mirrormirror',
    version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.bodyParser());
server.use(restify.gzipResponse());
server.use(restify.queryParser());
server.use(restifyValidation.validationPlugin({errorsAsArray: false}));
restifySwagger.configure(server);


server.get({
    url: '/log',
    swagger: {
        summary: 'Log',
        nickname: 'log'
    },
    validation: {
        msg: {
            isRequired: true,
        },
    }
}, function(req, res) {
    console.log('[' + new Date() + '] ' + req.params.msg);
    res.json({success: true});
});


restifySwagger.loadRestifyRoutes();


server.listen(process.env.PORT || 7000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
