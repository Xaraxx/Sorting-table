import React from "react"

const Buttons = ({sortByAge, sortByName, sortBySport}) => {
    return(
    <div className="buttons" id="button-container">
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByAge}>Sort by age</button>
      <button onClick={sortBySport}>Sort by sport</button>
    </div>
    )}

export default Buttons