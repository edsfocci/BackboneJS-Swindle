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

  place_bid: function () {

  }
});
