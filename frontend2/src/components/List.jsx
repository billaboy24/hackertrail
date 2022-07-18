import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function List() {
  const [datas, setData] = useState([]);
  const navigate = useNavigate();
  const url = "http://127.0.0.1:8000/request/";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function remove(id) {
    console.log(id);
    axios
      .delete(url + id)
      .then((res) => {
        console.log(res.data);
        const afterDelete = datas.filter((item) => item.id !== id);
        setData(afterDelete);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="container-sm p-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Client</th>
            <th scope="col">Priority</th>
            <th scope="col">Date</th>
            <th scope="col">Area</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={data.id}>
              <th scope="row">{index + 1}</th>
              <td>{data.title}</td>

              <td>{data.description}</td>
              <td>{data.client_Name}</td>
              <td>{data.priority}</td>
              <td>{data.target_Date}</td>
              <td>{data.product_Area}</td>

              <td className="action-btn">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/update/" + data.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => remove(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default List;
