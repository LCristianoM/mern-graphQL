import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/Projects";
import PorjectCard from "./PorjectCard";

function ProjectList() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="overflow-y-auto h-80 w-full px-5">
      {data.projects.map((project) => (
        <PorjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
