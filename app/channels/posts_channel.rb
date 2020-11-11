class PostsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'PostsChannel'
  end
end
