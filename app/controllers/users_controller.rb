class UsersController < ApplicationController
  
  def index
  end

  
  def create
    @user = User.create(user_params)
    if @user.save 
      session[:user_id] = @user.id
      flash[:notice] = "New User Created"
      redirect_to controller: 'trips', action: 'index'
    else
      flash[:error] = "didnt work"
      redirect_to controller: 'welcome', action: 'home'
    end
  end

  def show 
    @post = @user.posts.first
    respond_to do |f|
      f.html { render :show }
      f.json { render json: @user.posts }
    end
  end

 
  private
 
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end



end
 