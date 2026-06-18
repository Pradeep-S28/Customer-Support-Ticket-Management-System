import React, { useEffect, useState } from "react";
import { getTickets } from "../services/api";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import TicketTable from "../components/TicketTable";
import TicketForm from "../components/TicketForm";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        //const users = await getUsers();
        // const posts = await getPosts();

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
  // console.log(totalTickets);

  //open tickets
  const openTickets = tickets.filter(
    (ticket) => ticket.status == "open",
  ).length;
  // console.log(openTickets);

  //in progress tickets
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status == "in progress",
  ).length;
  // console.log(inProgressTickets);

  //resolved tickets
  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status == "resolved",
  ).length;
  // console.log(resolvedTickets);

  return (
    <>
      {/* Navbar component */}
      <Navbar />

      <div className="container py-4">
        <h1 className="mb-4">Dashboard</h1>

        {/* Dashboard cards */}
        <DashboardCards
          totalTickets={totalTickets}
          openTickets={openTickets}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
        />

        <TicketForm />

        {/* ticket table */}
        <TicketTable tickets={tickets} />
      </div>
    </>
  );
};

export default Dashboard;
