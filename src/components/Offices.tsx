import { useEffect, useState } from "react";
import Office, { type OfficeProps } from "./Office/Office";

const Offices = () => {
  const [spaces, setSpaces] = useState<OfficeProps[] | []>([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/data.json"
    )
      .then((response) => response.json())
      .then((data: OfficeProps[]) => {
        data.forEach((space, i) => {
          space.images = "/assets/office" + ((i % 5) + 1) + ".jpg";
        });
        setSpaces(data);
      })
      .catch((error) => {
        console.error("Error fetching spaces:", error);
      });
  }, []);
  return (
    <section className="section">
      <h2>Our Space Overview</h2>
      <div className="spaces-grid">
        {spaces.map((space) => (
          <Office key={space.id} {...space} />
        ))}
      </div>
    </section>
  );
};
export default Offices;
