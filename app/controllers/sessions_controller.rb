class SessionsController < ApplicationController
  
  def new
  end


  # This is going to be created for anybody who is already a user of the page
  def create
    @user = User.find_by(username: params[:username])
    @user = user.try(:authenticate, params[:username][:password])
    return redirect_to(controller: 'sessions', action: 'new') unless user
    session[:user_id] = user.id
    @user = user
    redirect_to controller: 'trips', action: 'home'
  end

  def destroy
    session.delete :user_id
    redirect_to '/'
  end

end


