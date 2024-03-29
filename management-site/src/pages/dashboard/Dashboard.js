import ProjectList from "../../component/ProjectList";
import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
// styles
import "./Dashboard.css";
import ProjectFilter from "./ProjectFilter";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };
  const projects = documents
    ? documents.filter((doc) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            doc.assignedUsersList.forEach((u) => {
              if (user.uid === u.id) {
                assignedToMe = true;
              }
            });
            return assignedToMe;
          case "development":
          case "design":
          case "marketing":
          case "sales":
            console.log(doc.category, currentFilter);
            return doc.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFilter
          changeFilter={changeFilter}
          currentFilter={currentFilter}
        />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
}
