import { useNavigate } from "react-router-dom";

function PorjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-800 w-full rounded-lg shadow-black p-4 mb-2 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => navigate(`/projects/${project._id}`)}
    >
      <h1> {project.name} </h1>
      <h3> {project.description} </h3>
    </div>
  );
}

export default PorjectCard;
