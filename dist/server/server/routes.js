"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./controllers/products");
function setRoutes(app) {
    var products = new products_1.default();
    // APIs
    app.route('/api/products').get(products.getAll);
    app.route('/api/products/count').get(products.count);
    app.route('/api/product').post(products.insert);
    app.route('/api/product/:id').get(products.get);
    app.route('/api/product/:id').put(products.update);
    app.route('/api/product/:id').delete(products.delete);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map