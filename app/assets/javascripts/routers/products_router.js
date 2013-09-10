SwoopoClone.Routers.Products = Backbone.Router.extend({
  initialize: function ($rootEl, products) {
    this.$rootEl = $rootEl;
    this.products = products;
  },

  routes: {
    '': 'index',
    'products/new': 'new'
  },

  index: function () {
    var productsIndex = new SwoopoClone.Views.ProductsIndex({
      collection: this.products
    });
    console.log(this.$rootEl);
    this.$rootEl.html(productsIndex.render().$el);
  },

  new: function () {
    var productsNew = new SwoopoClone.Views.ProductsNew({});

    this.$rootEl.html(productsNew.render().$el);
  }
});
