SwoopoClone.Views.ProductsIndex = Backbone.View.extend({
  events: {
    "click button.bid_button": "place_bid"
  },
  
  template: JST['products/index'],

  render: function () {
    var dat = this;

    this.$el.html(this.template({
      products: this.collection
    }));
    return this;
  },

  place_bid: function (event) {
    var dat = this;

    var productId = $(event.currentTarget).attr('data-id');

    var product = this.collection.get(productId);

    var current_bid_price = product.get('bid_price');
    product.set('bid_price', current_bid_price + 1);
    product.save(product.attributes, {
      success: function () {
        dat.render();
      },

      error: function () {
        product.set('bid_price', current_bid_price);
      }
    });
    
  }
});
