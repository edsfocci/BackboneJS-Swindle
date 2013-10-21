Swindle.Routers.Products = Backbone.Router.extend({
  initialize: function ($rootEl, products) {
    this.$rootEl = $rootEl;
    this.products = products;
  },

  routes: {
    '': 'index',
    'products/new': 'new',
    'products/:id': 'show'
  },

  index: function () {
    var productsIndex = new Swindle.Views.ProductsIndex({
      collection: this.products
    });
    this.$rootEl.html(productsIndex.render().$el);
  },

  new: function () {
    var productsNew = new Swindle.Views.ProductsNew({
      collection: this.products
    });

    this.$rootEl.html(productsNew.render().$el);
  },

  show: function (id) {
    var product = this.products.get(id);
    var productsShow = new Swindle.Views.ProductsShow({
      model: product
    });

    this.$rootEl.html(productsShow.render().$el);
  }
});
