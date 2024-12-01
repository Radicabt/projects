import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import TopNavbar from "../HomePageComponents/TopNavbar";
import Header from "../HomePageComponents/Header";
import Footer from "../HomePageComponents/Footer";
import Hero from "../components/JobsPage/Hero";
import Filters from "../components/JobsPage/Filters";
import Cards from "../components/JobsPage/Cards";
import { useEffect, useState } from "react";

type JobType = "Full-Time" | "On-Site" | "Hybrid";

type Job = {
  id: number;
  title: string;
  description: string;
  salary: string;
  datePosted: string;
  jobType: JobType[]; 
};

type Filter = {
  title?: string;
  salary?: string;
  date?: string;
};

type JobsData = {
  hero: {
    title: string;
    subtitle: string;
    highlight: string;
  };
  filters: {
    titles: string[];
    salaries: { label: string; value: string }[];
    dates: string[];
  };
  jobs: Job[];
};

const Jobs = () => {
  const [jobData, setJobData] = useState<JobsData | null>(null);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [filters, setFilters] = useState<Filter>({}); 

  useEffect(() => {
    const fetchData = async () => {
      const locale = "en"; 
      const response = await fetch(`/locales/${locale}/jobs.json`);
      const data: JobsData = await response.json();
      setJobData(data);
      setFilteredJobs(data.jobs); 
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (!jobData) return;

    const filtered = jobData.jobs.filter((job) => {
      const matchesTitle = filters.title ? job.title === filters.title : true;
      const matchesSalary = filters.salary
        ? parseInt(job.salary) <= parseInt(filters.salary)
        : true;
      const matchesDate = filters.date ? job.datePosted === filters.date : true;

      return matchesTitle && matchesSalary && matchesDate;
    });

    setFilteredJobs(filtered);
  }, [filters, jobData]); 

  const handleFilterChange = (updatedFilter: Filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...updatedFilter, 
    }));
  };
  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Explore career opportunities." />
      </Head>
      <TopNavbar />
      <Header />
      <main>
        <Hero />
        <Filters
          jobTitles={jobData.filters.titles}
          salaryRanges={jobData.filters.salaries}
          dates={jobData.filters.dates}
          onFilter={handleFilterChange}
        />
        <Cards jobs={filteredJobs} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["common", "jobs"])),
  },
});

export default Jobs;
