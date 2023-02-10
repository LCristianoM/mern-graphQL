import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/Projects";

function ProjectForm() {
  const [project, setProject] = useState({
    name: "",
    description: "",
  });
  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [
      {
        query: GET_PROJECTS,
      },
      "Get_projects",
    ],
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/5">
      {error && <p> {error.message} </p>}
      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 w-full mb-3"
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-4 w-full mb-3"
      ></textarea>
      <button
        className="bg-blue-500 py-1 px-4 rounded-md text-lg mb-3 disabled:bg-zinc-400"
        disabled={!project.name || !project.description || loading}
      >
        Save
      </button>
    </form>
  );
}

export default ProjectForm;
