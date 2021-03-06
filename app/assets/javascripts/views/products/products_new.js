Swindle.Views.ProductsNew = Backbone.View.extend({
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
    var that = this;

    var formData = $(event.currentTarget).serializeJSON();

    formData.product.bid_price = 0;

    var fixed_price = Math.round(formData.product.fixed_price * 100)
    formData.product.fixed_price = fixed_price;

    console.log(formData.product)

    // Future capability
    // var bid_end = this.convertToDateTime(formData.bid_end.date,
    //   formData.bid_end.time);
    // formData.product.bid_end = bid_end;
    var product = new Swindle.Models.Product(formData.product);

    product.save(product.attributes ,{
      success: function () {
        that.collection.add(product);
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