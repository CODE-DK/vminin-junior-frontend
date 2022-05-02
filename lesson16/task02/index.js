const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//     .then((responses) => {
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults);
//     })
//     .then((allTasks) => {
//       console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const getTodosByIds = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    const responses = await Promise.all(requests);
    const results = responses.map((response) => response.json());
    const tasks = await Promise.all(results);
    console.log(tasks);
  } catch (error) {
    console.error(error);
  }
};

getTodosByIds([43, 21, 55, 100, 10]);
