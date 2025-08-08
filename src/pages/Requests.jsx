import axios from "axios";
import { baseUrl } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showRequests,removeRequest } from "../features/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();

  const fetchedRequests = async () => {
    try {
      const res = await axios.get(baseUrl + "/user/request/received", {
        withCredentials: true,
      });
      dispatch(showRequests(res?.data));
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  const reviewRequest = async (status, _id) => {
    try {
       await axios.post(
        baseUrl + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id))
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  useEffect(() => {
    fetchedRequests();
  }, []);

  const requests = useSelector((store) => store.requests);
  if (!requests) return null;
  if (requests.length === 0)
    return (
      <p className="text-red-600 text-2xl text-center">No requests found</p>
    );

  return (
    <div className="flex flex-col gap-5 py-4">
      <h1 className="text-white text-3xl text-center font-bold">Requests</h1>
      {requests.map((requestObj) => {
        const {  firstName, about, photoUrl } = requestObj.fromUserId;

        return (
          <div
            key={requestObj._id}
            className="flex items-center gap-4 p-4 border border-gray-600 rounded-lg bg-gray-900 shadow-md w-full max-w-md mx-auto"
          >
            <div className="flex-shrink-0">
              <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-gray-500 flex items-center justify-center">
                <img
                  src={photoUrl || "https://via.placeholder.com/50"}
                  alt={firstName}
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/50")
                  }
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-white font-semibold truncate">{firstName}</h2>

              <div className="max-h-[3rem] overflow-hidden mt-1">
                <p className="text-gray-300 text-sm break-words line-clamp-2">
                  {about || "No bio available"}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded transition"
                onClick={() => reviewRequest("rejected", requestObj._id)}
              >
                Reject
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 rounded transition"
                onClick={() => reviewRequest("accepted", requestObj._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Requests;
