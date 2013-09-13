SwoopoClone.Views.ProductsNew = Backbone.View.extend({
  events: {
    "click button#product_main_photo_button": "add_photo",
    'submit form': 'submit'
  },

  template: JST['products/new'],

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  add_photo: function () {
    $('#content').append(JST['products/add_photo']);
  },

  submit: function (event) {
    event.preventDefault();
    var dat = this;

    var formData = $(event.currentTarget).serializeJSON();
    var product = new SwoopoClone.Models.Product(formData.product);

    product.save(product.attributes ,{
      success: function () {
        dat.collection.add(product);
        Backbone.history.navigate("#/");
      }
    });
  }
});