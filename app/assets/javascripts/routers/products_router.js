SwoopoClone.Routers.Products = Backbone.Router.extend({
  initialize: function ($rootEl, products) {
    this.$rootEl = $rootEl;
    this.products = products;
  },

  routes: {
    '': 'index'
  },

  index: function () {
    var productsIndex = new SwoopoClone.Views.ProductsIndex({
      collection: this.products
    });

    this.$rootEl.append(productsIndex.render().$el);
  }
});
