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
    console.log(event);
    var bid_end = this.convertToDateTime(formData.bid_end.date,
      formData.bid_end.time);
    formData.product.bid_end = bid_end;
    var product = new SwoopoClone.Models.Product(formData.product);

    product.save(product.attributes ,{
      success: function () {
        dat.collection.add(product);
        Backbone.history.navigate("#/");
      }
    });
  },

  convertToDateTime: function (date, time) {
    var dateTime = '';
    var dateArry = date.split('/');
    dateArry = [dateArry[2], dateArry[0], dateArry[1]];
    dateTime += dateArry.join('-') + 'T' + time + ':00Z';

    return dateTime;
  }
});