import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const getPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const getTickets = async () => {
  const users = await getUsers();
  const posts = await getPosts();

  //   console.log("HI");

  const priorities = ["Low", "Medium", "High"];
  const status = ["Open", "In Progress", "Resolved"];

  const tickets = posts.map((post, index) => {
    const user = users.find((user) => user.id == post.userId);

    return {
      id: post.id,
      customerName: user?.name || "Unknown User",
      email: user?.email || "no email",
      subject: post.title || "no subject",
      priority: priorities[index % priorities.length],
      status: status[index % status.length],
      createdData: new Date(2026, 4, (index % 31) + 1)
        .toISOString()
        .split("T")[0],
    };
  });
  return tickets;
};
