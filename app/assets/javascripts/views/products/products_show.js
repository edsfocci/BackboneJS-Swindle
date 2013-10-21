Swindle.Views.ProductsShow = Backbone.View.extend({
  events: {
    "click button.add_to_cart_button": "add_to_cart"
  },

  template: JST['products/show'],

  render: function () {
    this.$el.html(this.template({
      product: this.model
    }));
    return this;
  },

  add_to_cart: function (event) {
    //
  }
});