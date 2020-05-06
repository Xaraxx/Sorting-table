import React, { useState } from "react"
import Table from "./table.jsx"
import getData, {compareAge, compareName, compareSport} from "./get_data"
import Buttons from "./button" 
import "./styles.css"

const App = () => {
  const [tableData, setTableData] = useState(getData());

  return(
    <div>
      <h1 className="App">Datos</h1>
      <Table tableData={tableData}></Table>
      <Buttons 
        sortByAge={() => {
          setTableData([...tableData.sort(compareAge)])
        }}
        sortByName={() => {
          setTableData([...tableData.sort(compareName)])
        }}
        sortBySport={() => {
          setTableData([...tableData.sort(compareSport)])
        }}
      >
      </Buttons>
    </div>
)
}

export default App
