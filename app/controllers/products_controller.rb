class ProductsController < ApplicationController
  def create
    product = Product.new(params[:product])

    if product.save
      render json: product
    else
      render json: product.errors, :status => 422
    end
  end
end
