Swindle.Routers.Carts = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl;
  },

  routes: {
    'cart': 'show'
  },

  show: function () {
    var cartsShow = new Swindle.Views.CartsShow;
    this.$rootEl.html(cartsShow.render().$el);
  }
});