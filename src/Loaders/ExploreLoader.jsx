import React from "react";

const ExploreLoader = () => {
const boxes = [
  { id: 1, color: "#8E44AD", height: "320px" },   // dark purple
  { id: 2, color: "#2E86C1", height: "370px" },   // deep blue
  { id: 3, color: "#27AE60", height: "388px" },   // dark green
  { id: 4, color: "#D35400", height: "400px" },   // dark orange
  { id: 5, color: "#C0392B", height: "312px" },   // dark red
  { id: 6, color: "#1ABC9C", height: "400px" },   // strong teal
  { id: 7, color: "#F39C12", height: "305px" },   // rich amber
  { id: 8, color: "#34495E", height: "499px" },   // dark gray-blue
  { id: 9, color: "#7D3C98", height: "356px" },   // rich violet
  { id: 10, color: "#2C3E50", height: "421px" }   // deep navy
];


  return (
    <div className="pin-container pin-container2 w-[90vw] py-4 gap-4 ">
      {boxes.map((elem, index) => {
        return (
          <div
            key={elem.id}
            style={{
              height: `${elem.height}`,
              backgroundColor: `${elem.color}`,
            }}
            className="pin-item mb-4 animate-pulse duration-500 ease-in-out rounded-2xl "
          ></div>
        );
      })}
    </div>
  );
};

export default ExploreLoader;
