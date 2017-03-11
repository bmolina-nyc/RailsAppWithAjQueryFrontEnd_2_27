class PostsController < ApplicationController

  # route is currently set to only show your comments on your personal page
  def index
    @posts = current_user.posts

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @posts.to_json(only)}
    end
  end

    def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @post }
                  
    end
  end

  def create 
    @post = Post.create(post_params)
    @post.user_id = current_user.id
    @post.save

    redirect_to user_path(current_user)
  end



  private 

  def post_params
    params.require(:post).permit(:title, :description, :user_id)
  end
end
