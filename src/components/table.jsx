import React from "react"


const getKeys = (data) => {
  return Object.keys(data[0])
}

const getRowsData = (data) => {
  var keys = getKeys(data);
  return data.map((row, index) => {
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
  }) 
}

const getHeader = (data) => {
  var keys = getKeys(data)
  return keys.map(
   (key, index) => {
     return(<th key={key}>{key.toUpperCase()}</th>)
   })
}


const RenderRow = (props) =>{
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>
      {props.data[key]}</td>
  })
}

const Table = ({tableData}) => { 
  return(
    <div>
      <table className="App">
        <thead>
          <tr>{getHeader(tableData)}</tr>
        </thead>
        <tbody>
          {getRowsData(tableData)}
        </tbody>
      </table>
    </div>
  )
} 

export default Table
