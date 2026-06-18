import React, { useEffect, useState } from "react";
import { getTickets } from "../services/api";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import TicketTable from "../components/TicketTable";
import TicketForm from "../components/TicketForm";
import TicketDetails from "../components/TicketDetails";

const Dashboard = () => {
  // total all tickets
  const [tickets, setTickets] = useState([]);

  // for open close form
  const [showForm, setShowForm] = useState(false);

  //for ticket details view
  const [selectedTicket, setSelectedTicket] = useState(null);

  //to edit ticket  data
  const [editTicket, setEditTicket] = useState(null);

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

  // Adding ticket from form submit
  const handleAddTicket = (newTicketData) => {
    const newTicket = {
      id: tickets.length + 1,
      ...newTicketData,
      createdDate: new Date().toISOString().split("T")[0],
    };

    setTickets([newTicket, ...tickets]);
    setShowForm(false);
  };

  // edit the ticket data
  const handleEditClick = (ticket) => {
    setEditTicket(ticket);
    setShowForm(true);
  };

  // take all ticket , matched with current editable ticket , update and save in ticket state
  const handleUpdateTicket = (updatedTicketData) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === editTicket.id
          ? {
              ...ticket,
              ...updatedTicketData,
            }
          : ticket,
      ),
    );

    setEditTicket(null);
    setShowForm(false);
  };

  //closing form in common for add and edit
  const handleCloseForm = () => {
    setShowForm(false);
    setEditTicket(null);
  };

  return (
    <>
      {/* Navbar component */}
      <Navbar onNewTicket={() => setShowForm(true)} />

      {/* Dashboard */}
      <div className="container py-4">
        <h1 className="mb-4">Dashboard</h1>

        {/* Dashboard cards */}
        <DashboardCards
          totalTickets={totalTickets}
          openTickets={openTickets}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
        />

        {showForm && (
          <TicketForm
            onAddTicket={handleAddTicket}
            onUpdateTicket={handleUpdateTicket}
            onClose={handleCloseForm}
            editTicket={editTicket}
          />
        )}

        {selectedTicket && (
          <TicketDetails
            ticket={selectedTicket}
            onClose={() => setSelectedTicket(null)}
          />
        )}

        {/* ticket table */}
        <TicketTable
          tickets={tickets}
          onSelectTicket={setSelectedTicket}
          onEditTicket={handleEditClick}
        />
      </div>
    </>
  );
};

export default Dashboard;
