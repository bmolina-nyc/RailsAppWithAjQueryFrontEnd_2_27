class UsersController < ApplicationController
  
  def create
    @user = User.create(user_params)
    return redirect_to controller: 'welcome', unless @user.save
    session[:user_id] = @user.id
    # turn this into the index/controller page of the trips website redirect_to controller: 'welcome', action: 'home'
  end

 
  private
 
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
 