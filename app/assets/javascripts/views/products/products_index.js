Swindle.Views.ProductsIndex = Backbone.View.extend({
  events: {
    "click button.add_to_cart_button": "add_to_cart"
  },
  
  template: JST['products/index'],

  render: function () {
    this.$el.html(this.template({
      products: this.collection
    }));
    return this;
  },

  add_to_cart: function (event) {
    var product_id = $(event.currentTarget).attr('data-id');

    var cart = new Swindle.Models.Cart({
      product_id: product_id
    });

    cart.save(cart.attributes, {
      success: function () {
        //
      }
    });
  },

  place_bid: function (event) {
    var that = this;

    var product_id = $(event.currentTarget).attr('data-id');

    var product = this.collection.get(product_id);

    var current_bid_price = product.get('bid_price');
    product.set('bid_price', current_bid_price + 1);
    product.save(product.attributes, {
      success: function () {
        that.render();
      },

      error: function () {
        product.set('bid_price', current_bid_price);
      }
    });
    
  }
});
