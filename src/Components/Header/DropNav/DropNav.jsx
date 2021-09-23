import "./DropNav";
import { useHistory } from "react-router";

export default function DropNav({ setActiveSubject, setActiveConcept }) {
  const history = useHistory();
  const subjects = ["trig"];
  function handleSubClick(subject, concept) {
    setActiveSubject(subject);
    history.push("/learn");
  }
  const mappedSubjects = subjects.map((sub) => (
    <h2 onClick={() => handleSubClick(sub)}>{sub}</h2>
  ));
  return <div>{mappedSubjects}</div>;
}
