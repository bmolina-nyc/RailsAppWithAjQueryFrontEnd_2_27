class TripsController < ApplicationController
  before_action :require_logged_in

  def index
    @trips = Trip.all
  end


  def create
    @user = current_user
  end


  def show 
    @trip = Trip.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json { render json: @trip}
    end
  end
end


