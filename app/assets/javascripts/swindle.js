window.Swindle = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($rootEl, productsData) {
    var products = new Swindle.Collections.Products(productsData);

    new Swindle.Routers.Products($rootEl, products);
    Backbone.history.start();
  }
};
