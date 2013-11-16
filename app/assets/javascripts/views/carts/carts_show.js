Swindle.Views.CartsShow = Backbone.View.extend({
  events: {
    "click a.remove_from_cart": "remove_from_cart"
  },

  template: JST['carts/show'],

  render: function () {
    var that = this;

    $.ajax({
      url: '/cart',
      success: function (result) {
        console.log(result);
        that.$el.html(that.template({
          carts: result
        }));
      }
    });
    return this;
  },

  remove_from_cart: function (event) {
    var that = this;

    $.ajax({
      url: '/cart',
      type: 'DELETE',
      data: { product_id: $(event.currentTarget).attr('data-id') },
      success: function () {
        that.render();
      }
    });
  }
});