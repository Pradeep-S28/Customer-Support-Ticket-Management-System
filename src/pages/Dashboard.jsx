import React, { useEffect } from "react";
import { getPosts, getTickets, getUsers } from "../services/api";

const Dashboard = () => {
  // console.log("hi");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getUsers();
        const posts = await getPosts();

        const tickets = await getTickets();

        // console.log("Users:", users);
        // console.log("Posts", posts);
        console.log("tickets", tickets);
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
