import axios from "axios";
import { useEffect } from "react";
import { baseUrl } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../features/feedSlice";
import UserCard from "../components/UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  //getting feed form db
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

  const feed = useSelector((store) => store.feed);

  return (
    feed && (
      <div className="flex flex-col items-center mt-4 space-y-6">
        {feed.length > 0 ? (
          feed.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <p className="text-gray-500 text-lg">No users found</p>
        )}
      </div>
    )
  );
};

export default Feed;
