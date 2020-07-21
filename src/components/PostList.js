import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHader from "./UserHeader";

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div
            className="item"
            key={post.id}
            style={{
              border: "1px solid purple",
              padding: "10px",
              margin: "25px",
            }}
          >
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
              <UserHader userId={post.userId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
