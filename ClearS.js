import React, { useState } from "react";
import Photo from "./photo.webp";

const ClearS = () => {
  const Biodata = [
    { id: 6, Name: "MohdWasif", Age: 21 },
    { id: 4, Name: "Wasifsk", Age: 20 },
    { id: 2, Name: "Wasif", Age: 19 },
    { id: 1, Name: "Sk", Age: 9 },
  ];

  const [value, myvalue] = useState(Biodata);

  const ClearSingle = (id) => {
    const NewArray = value.filter((CurElem) => {
      return CurElem.id !== id;
    });
    myvalue(NewArray);
  };
  const DeleteAll = () => {
    myvalue([]);
  };

  return (
    <div className="main">
      <h1 className="edit1">Clear Single List & All List Item</h1>

      {value.map((CurElem) => {
        return (
          <h1 className="text-center position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill list-group-item list-group-item-info">
            <img src={Photo} alt="" id="image" /> Name: {CurElem.Name} & Age: {CurElem.Age}
            
            <button onClick={() => ClearSingle(CurElem.id)} className="btn-1 btn btn-outline-dark">Clear</button>
          </h1>
        );
      })}
      
        <button onClick={DeleteAll} className="btn-2 btn btn-outline-secondary">Clear all</button>
    
    </div>
  );
};

export default ClearS;
