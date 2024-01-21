import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import axios from "axios";
import _ from "lodash";

const Home = () => {
  const [data, setData] = useState([]);
  const [failed, setFailed] = useState(false);
  const fetchData = async () => {
    setFailed(false);
    try {
      await axios
        .get("https://wizard-world-api.herokuapp.com/houses", { timeout: 5000 })
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {
      setFailed(true);
    }
  };
  useEffect(() => {
    if (data.length == 0 && !failed) {
      fetchData();
    }
  }, [data, failed]);
  return (
    <div className="bg-slate-50 w-full min-h-screen px-4 py-8">
      {failed ? (
        <div className="w-full flex justify-center">
          <button
            onClick={fetchData}
            className="bg-blue-600 px-4 py-3 rounded-md text-white"
          >
            Click to reload
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 md:px-6 md:py-4 lg:px-20 lg:py-14 lg:gap-6">
          {_.map(data, (singleData) => (
            <HomeCard key={singleData.id} data={singleData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
