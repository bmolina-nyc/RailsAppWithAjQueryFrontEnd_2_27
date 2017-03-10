class TripsController < ApplicationController
  before_action :require_logged_in

  def index
    @trips = Trip.all
    respond_to do |format|
      format.html {render :index}
      format.json {render json: @trips}
    end
  end

  def show 
    @user = current_user
    @trip = Trip.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json { render json: @trip}
    end
  end

end


