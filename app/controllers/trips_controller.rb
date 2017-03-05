class TripsController < ApplicationController
  before_action :require_logged_in

  def index
    @trips = Trip.all
    render json: @trips.to_json
  end


end
