
import './App.css';
import { useState } from 'react';

const App = () => {

  const [leng, setLeng] = useState([]);

  const handleSubmit = (e) => {
    if (e.target.checked) {
      setLeng([...leng, e.target.value]);
    }
    else {
      setLeng([...leng.filter((item) => item !== e.target.value)]);
    }

  }
  console.log(leng);


  const checkAll = (e) => {

    if (e.target.checked) {
      setLeng(["html", "css", "javascript"]);
    } else {
      setLeng([]);
    }

  }

  return (
    <div style={{ display: "flex",  justifyContent: "center", marginTop:"15%"}}>

      <table >

        <thead>
          <th>
            <input type="checkbox" name="leng" checked={leng.length === 3 ? true : false} onChange={(e) => checkAll(e)} />
            <label htmlFor="lang"> Fav_language </label>
          </th>
        </thead>


        <tbody>
          <tr style={{ display: "flex", flexDirection: "column" }}>
            <td>
              <input type="checkbox" name="html" value="html" checked={leng.includes("html")} onChange={(e) => handleSubmit(e)} />
              <label htmlFor="html"> HTML </label>
            </td>

            <td>
              <input type="checkbox" name="css" value="css" checked={leng.includes("css")} onChange={(e) => handleSubmit(e)} />
              <label htmlFor="css"> CSS </label>
            </td>

            <td>
              <input type="checkbox" name="javascript" value="javascript" checked={leng.includes("javascript")} onChange={(e) => handleSubmit(e)} />
              <label htmlFor="javascript"> JAVASCRIPT </label>
            </td>

          </tr>

        </tbody>


      </table>

    </div>
  )
}


export default App;
