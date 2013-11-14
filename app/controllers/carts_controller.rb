class CartsController < ApplicationController
  def show
    cart = current_user.pending_purchases
    render json: cart
  end

  def create
    cart = Cart.new(params[:cart]);
    cart.update_attributes(user_id: current_user.id)

    cart.save
    render json: cart
  end
end

# cart POST   /cart(.:format)                carts#create
#      GET    /cart(.:format)                carts#show
#      PUT    /cart(.:format)                carts#update
#      DELETE /cart(.:format)                carts#destroy