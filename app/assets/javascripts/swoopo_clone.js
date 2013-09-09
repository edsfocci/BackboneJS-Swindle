window.SwoopoClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl, productsData) {
    var products = new SwoopoClone.Collections.Products(productsData);

    new SwoopoClone.Routers.Products($rootEl, products);
    Backbone.history.start();
  }
};
