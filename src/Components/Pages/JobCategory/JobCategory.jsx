import { useEffect } from "react";
import { useState } from "react";

const JobCategory = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('JobList.json')
            .then(res => res.json())
            .then(data => setJobs(data.job_categories))
    }, [])

    console.log(jobs);

    return (
        <div className="container mx-auto mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    jobs.map((job, indx) => (
                        <div key={indx} className="w-[340px] mx-auto ring-2 shadow-md shadow-gray-500 rounded-md p-5 space-y-4">
                            <h1 className="text-3xl text-center">{job.name}</h1>
                            <p className="text-gray-500 font-medium text-center">{job.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default JobCategory;