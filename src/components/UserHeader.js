import React, { useEffect } from "react";

import { connect } from "react-redux";

import { fetchUser } from "../actions";

const UserHeader = ({ userId, fetchUser, user }) => {
  useEffect(() => {
    fetchUser(userId);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div style={{ border: "1px dotted gray" }}>
      <h4>{user.name}</h4>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((u) => u.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
