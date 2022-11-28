const { getProductById } = require("../services/product");


function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            return res.redirect('/user/login');
        }
    }
}

function isOwner() {
    return async (req, res, next) => {
        try {
            const product = await getProductById(req.path.slice(1));
            const isOwner = req.user._id == product.creatorId;
            
            if (isOwner) {
                res.locals.isOwner = true;
                res.locals.title = product.name;
                res.locals.product = product;
                next();
            } else {
                return res.redirect('/');
            }

        } catch (error) {
            res.render('edit', { title: 'qwe', error: error.message });
        }
    }
}
module.exports = {
    isUser,
    isOwner
}