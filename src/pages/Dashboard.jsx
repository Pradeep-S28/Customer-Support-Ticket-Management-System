import React, { useEffect } from "react";
import { getPosts, getUsers } from "../services/api";

const Dashboard = () => {
  console.log("hi");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();
        const posts = await getPosts();

        console.log("Users:", users);
        console.log("Posts", posts);
      } catch (error) {
        console.log("API Error:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Customer Support Ticket Management System</h1>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
