import React, { useState } from "react";
import PropTypes from "prop-types";
import { useActionCable } from "use-action-cable";

const Posts = props => {
    const [posts, setPosts] = useState(props.posts);
    const channelHandlers = {
        received: data => {
            console.log(`[ActionCable] [Posts]`, data);
            setPosts(data);
        }
    };
    useActionCable({ channel: "PostsChannel" }, channelHandlers);
    return (
        <React.Fragment>
            {posts.map(post => {
                return (
                    <div key={post.id} className="card mb-2">
                        <div className="card-body">
                            <h5 className="card-title text-muted">
                                <small className="float-right">
                                    Posted at {post.created_at}
                                </small>
                                {post.username}
                            </h5>
                            <div className="card-text lead mb-2">{post.body}</div>
                            <a className="card0link" href={`/posts/${post.id}/repost`}>
                                Repost ({post.repost_count})
              </a>
                            <a className="card0link" href={`/posts/${post.id}/like`}>
                                Likes ({post.likes_count})
              </a>
                        </div>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

Posts.propTypes = {
    posts: PropTypes.array,
    header_display: PropTypes.string
};

export default Posts;