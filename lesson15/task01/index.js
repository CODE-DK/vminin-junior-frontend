const USERS = "https://jsonplaceholder.typicode.com/users";

const toggleLoading = () => {
  const loader = document.querySelector(".loader");
  if (loader.hasAttribute("hidden")) {
    loader.removeAttribute("hidden");
  } else {
    loader.setAttribute("hidden", "");
  }
};

// --- задание 1

// const loadUsers = () => {
//   toggleLoading();
//   fetch(USERS, { method: "GET" })
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach(user => {
//         const ahref = document.createElement("a");
//         ahref.href = "#";
//         ahref.textContent = user.name;

//         const li = document.createElement("li");
//         li.append(ahref);

//         const users = document.querySelector(".users");
//         users.append(li);
//       });
//     })
//     .catch((error) => console.error("error", error))
//     .finally(() => toggleLoading());
// };

// loadUsers();

// --- задание 2

// const getUsersByIds = (ids) => {
//   toggleLoading();

//   const requests = ids.map((id) => fetch(`${USERS}/${id}`));

//   Promise.all(requests)
//     .then((responses) =>
//       Promise.all(responses.map((response) => response.json())),
//     )
//     .then((users) =>
//       users.forEach((user) => {
//         const ahref = document.createElement("a");
//         ahref.href = "#";
//         ahref.textContent = `${user.id}: ${user.name}`;

//         const li = document.createElement("li");
//         li.append(ahref);

//         const users = document.querySelector(".users");
//         users.append(li);
//       }),
//     )
//     .catch((error) => console.error(error))
//     .finally(() => toggleLoading());
// };

// getUsersByIds([5, 6, 2, 1]);

// --- задание 3

const URL_PHOTOS = "https://jsonplaceholder.typicode.com/photos";

const getFastestLoadedPhoto = (ids) => {
  toggleLoading();
  const requests = ids.map((id) => fetch(`${URL_PHOTOS}/${id}`));
  Promise.race(requests)
    .then((response) => response.json())
    .then((photo) => {
      const h3 = document.createElement('h3');
      h3.classList.add('photo-item__title');
      h3.textContent = photo.title;

      const img = document.createElement('img');
      img.classList.add('photo-item__image');
      img.src = photo.url;
      
      const li = document.createElement('li');
      li.classList.add('photo-item');
      li.append(img);
      li.append(h3);

      const dataContainer = document.querySelector(".data-container");
      dataContainer.append(li);
    })
    .catch((error) => console.error(error))
    .finally(() => toggleLoading());
};

getFastestLoadedPhoto([60, 12, 55]);
