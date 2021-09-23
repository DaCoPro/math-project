import "./Learn.css";
import { useState } from "react";
import Test from "../../Concepts/Test/Test";
import Trig from "../../Concepts/Trigonometry/Trigonometry";

export default function Learn({ activeSubject }) {
  const [activeConcept, setActiveConcept] = useState(null);
  return (
    <div className="Learn">
      <h1>Let's learn some {activeSubject}!</h1>
      {activeSubject === "trig" ? <Trig /> : null}
    </div>
  );
}
