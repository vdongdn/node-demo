module.exports = function SortMiddleWare(req, res, next) {
    res.locals._sort = {
        enable: false,
        type: 'default',
        column: 'default'
    };
    if (req.query.hasOwnProperty('_sort')) {
        res.locals._sort.enable = true;
        res.locals._sort.type = req.query.type;
        res.locals._sort.column = req.query.column;
    }
    next();
}