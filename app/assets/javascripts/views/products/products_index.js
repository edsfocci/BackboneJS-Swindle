SwoopoClone.Views.ProductsIndex = Backbone.View.extend({
  template: JST['products/index'],

  render: function () {
    var dat = this;

    this.$el.html(this.template({
      products: this.collection
    }));
    return this;
  }
});
