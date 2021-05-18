'use strict';

function namechecker() {
    return (req, res, next) => {
        if (req.query.name) {
            next();
        }
        else {
            next('there is no name');
        }
    }
}

module.exports = namechecker;