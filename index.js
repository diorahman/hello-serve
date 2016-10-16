const server = require('http').Server;
const serve = (fn) => {
    return server((req, res) => {
        run(req, res, fn);
    });
};

const run = async (req, res, fn) => {
    res.end(await fn(req));
};

const fn = async (req) => {
    return req.url;
};

serve(fn).listen(8000, (err) => {
    if (err) {
        process.exit();
    }
    console.log('> 8000');
});
