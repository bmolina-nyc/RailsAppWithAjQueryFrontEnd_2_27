class PostsController < ApplicationController

  # route is currently set to only show your comments on your personal page
  def index
    @posts = current_user.posts
  end

  def create 
    @post = Post.create(post_params)
    @post.user_id = current_user.user_id
    @post.save
  end



  private 

  def post_params
    params.require(:post).permit(:title, :description, :user_id)
  end
end
