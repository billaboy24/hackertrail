import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const url = "http://127.0.0.1:8000/request/";
  const navigate = useNavigate();

  const [posts, setPosts] = useState({
    title: "",
    description: "",
    client_Name: "",
    priority: "",
    target_Date: "",
    product_Area: "",
  });
  function handle(e) {
    const newPost = { ...posts };
    newPost[e.target.id] = e.target.value;
    setPosts(newPost);
    console.log(newPost);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      title: posts.title,
      description: posts.description,
      client_Name: posts.client_Name,
      priority: posts.priority,
      target_Date: posts.target_Date,
      product_Area: posts.product_Area,
    }).then((res) => {
      console.log(res.data);
      navigate("/");
    });
  }
  return (
    <div className="container-sm pt-5 w-50">
      <form onSubmit={(e) => submit(e)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e) => handle(e)}
            value={posts.title}
          />
        </div>
        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            onChange={(e) => handle(e)}
            value={posts.description}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            id="client_Name"
            onChange={(e) => handle(e)}
            value={posts.client_Name}
          >
            <option selected>Client Name</option>
            <option value="Steven">Steven</option>
            <option value="George">George</option>
            <option value="Gerrard">Gerrard</option>
          </select>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            id="priority"
            onChange={(e) => handle(e)}
            value={posts.priority}
          >
            <option selected>Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">
            Target Date
          </label>
          <input
            type="date"
            className="form-control"
            id="target_Date"
            aria-describedby="emailHelp"
            onChange={(e) => handle(e)}
            value={posts.target_Date}
          />
        </div>
        <div className="mb-3 ">
          <select
            className="form-select"
            aria-label="Default select example"
            id="product_Area"
            onChange={(e) => handle(e)}
            value={posts.product_Area}
          >
            <option selected>Product Area</option>
            <option value="Billing">Billing</option>
            <option value="Recruit">Recruit</option>
            <option value="Report">Report</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Request
        </button>
      </form>
    </div>
  );
}
export default Add;
