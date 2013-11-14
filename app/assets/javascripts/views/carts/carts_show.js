Swindle.Views.CartsShow = Backbone.View.extend({
  events: {
  },

  template: JST['carts/show'],

  render: function () {
    $.ajax({
      url: '/cart',
      success: function (result) {
        console.log(result);
      }
    });

    this.$el.html(this.template({
      product: this.model
    }));
    return this;
  }
});