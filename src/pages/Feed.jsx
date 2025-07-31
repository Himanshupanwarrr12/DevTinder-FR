import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feedSlice";
import UserCard from "../components/UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log(feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(baseUrl + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);

  return (
    feed && (
      <div>
        {Array.isArray(feed) && feed.length > 0 ? (
          feed.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No users to display</p>
        )}
      </div>
    )
  );
};

export default Feed;
