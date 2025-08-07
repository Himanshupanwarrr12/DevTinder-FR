import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { showConnections } from "../features/connectionsSlice";
import ProfileCard from "../components/ProfileCard";

const Connections = () => {
  const dispatch = useDispatch();

  const fetchedConnections = async () => {
    try {
      const res = await axios.get(baseUrl + "/user/request/connections", {
        withCredentials: true,
      });
      //   console.log(res?.data?.connectionReqData)
      dispatch(showConnections(res?.data?.connectionReqData));
    } catch (error) {
      console.log("Error:" + error);
    }
  };

  useEffect(() => {
    fetchedConnections();
  }, []);

  const connections = useSelector((store) => store.connections);
  if(!connections) return
  
  return (
    connections && (
      <div className="flex flex-col items-center mt-4 space-y-6">
        <h1 className="text-white font-bold text-2xl" >Connections</h1>
        {connections.length > 0 ? (
          connections.map((connection) =>  <ProfileCard key={connection._id} user={connection} />)
        ) : (
          <p className="text-white text-xl text-center ">No connection found</p>
        )}
      </div>
    )
  );
};

export default Connections;
