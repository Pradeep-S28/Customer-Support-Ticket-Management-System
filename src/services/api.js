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

  const priorities = ["low", "medium", "high"];
  const status = ["open", "in progress", "resolved"];

  const tickets = posts.map((post, index) => {
    const user = users.find((user) => user.id == post.userId);

    return {
      id: post.id,
      customerName: user?.name.toLowerCase() || "Unknown User",
      email: user?.email.toLowerCase() || "no email",
      subject: post.title.toLowerCase() || "no subject",
      priority: priorities[index % priorities.length],
      status: status[index % status.length],
      createdDate: new Date(2026, 4, (index % 31) + 1)
        .toISOString()
        .split("T")[0],
    };
  });
  return tickets;
};
