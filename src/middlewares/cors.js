module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Authentication, X-Session-ID');
    res.header('Cache-Control', 'no-cache');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }

    next();
}
