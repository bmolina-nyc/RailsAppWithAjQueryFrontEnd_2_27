class SessionsController < ApplicationController
  
  def new
  end


  # This is going to be created for anybody who already has an account
  def create
    @user = User.find_by(username: params[:user][:username])
    @user = @user.try(:authenticate, params[:user][:password])
    flash[:notice] = "Incorrect Login!"
    return redirect_to(controller: 'welcome', action: 'home') unless @user
    
    session[:user_id] = @user.id
    @user = @user
    flash[:notice] = "Welcome back #{current_user.username}"
    redirect_to controller: 'trips', action: 'index'
  end

  def destroy
    session.delete :user_id
    redirect_to '/'
  end


end


