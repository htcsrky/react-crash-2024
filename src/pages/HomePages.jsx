import Hero from "../component/Hero";
import HomeCard from "../component/HomeCard";
import JobsList from "../component/JobsList";
import ViewAllJobs from "../component/ViewAllJobs";

const HomePages = () => {
  return (
    <>
      <Hero
        title="  Become a React Dev"
        subTitle={"    Find the React job that fits your skills and needs"}
      />
      <HomeCard />
      <JobsList isHome="true" />
      <ViewAllJobs />
    </>
  );
};

export default HomePages;
