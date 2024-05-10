import { useEffect, useState } from "react";
import JobSingle from "./JobSingle";
import Spinner from "./Spinner";
// eslint-disable-next-line react/prop-types
const JobsList = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const setFetch = async () => {
      const apiUrl= isHome ? 'api/jobs?_limit=3' : 'api/jobs'
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        // const homeData = isHome ? data.slice(0, 3) : data;
        setJobs(data);
      } catch (error) {
        console.log("Errot Fetching Data", error);
      } finally {
        setLoading(false);
      }
    };

    setFetch();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "RecentJobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <Spinner loading={loading}/>
          ) : (
            <>
              {jobs.map((job) => (
                <JobSingle job={job} key={job.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobsList;
