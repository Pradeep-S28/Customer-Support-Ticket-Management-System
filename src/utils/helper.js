/*
truncateText used in - TicketTable.jsx for subject column
 */
export const truncateText = (text, maxLength) => {
  if (!text) return "Empty";

  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
