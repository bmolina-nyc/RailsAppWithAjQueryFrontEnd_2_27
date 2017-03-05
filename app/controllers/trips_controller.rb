class TripsController < ApplicationController
  before_action :require_logged_in

  def index
    @trips = Trip.all
    respond_to do |format|
      format.html {render :index}
      format.json { render json: @trips}
    end
  end


  def create
    raise "testing  the stack flow"
    @user = current_user
  end


  def show 
    @trip = Trip.find(params[:id])
  end
end


