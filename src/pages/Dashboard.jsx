import React, { useEffect, useState } from "react";
import { getPosts, getTickets, getUsers } from "../services/api";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const users = await getUsers();
        const posts = await getPosts();

        const ticketData = await getTickets();

        setTickets(ticketData);

        // console.log("Users:", users);
        // console.log("Posts", posts);
        //console.log("tickets", tickets);
      } catch (error) {
        console.log("API Error:", error.message);
      }
    };
    fetchTicketData();
  }, []);

  //find count for dash board cards

  //total tickets
  const totalTickets = tickets.length;
  console.log(totalTickets);

  //open tickets
  const openTickets = tickets.filter(
    (ticket) => ticket.status == "open",
  ).length;
  console.log(openTickets);

  //in progress tickets
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status == "in progress",
  ).length;
  console.log(inProgressTickets);

  //resolved tickets
  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status == "resolved",
  ).length;
  console.log(resolvedTickets);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Dashboard;
