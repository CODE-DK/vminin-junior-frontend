const URL_ALBUMS = "https://jsonplaceholder.typicode.com/albums";

const toggleLoading = () => {
    const loader = document.querySelector(".loader");
    if (loader.hasAttribute("hidden")) {
      loader.removeAttribute("hidden");
    } else {
      loader.setAttribute("hidden", "");
    }
  };

const dataContainer = document.querySelector('.data-container');

const renderAlboms = async () => {
  toggleLoading();
  try {
    const response = await fetch(`${URL_ALBUMS}`);
    const albums = await response.json();
    albums.forEach(album => {
        const li = document.createElement('li');
        li.textContent = album.title;
        dataContainer.append(li);
    });
  } catch (error) {
    dataContainer.innerHTML = "<p>Произошла ошибка в получении данных об альбомах...</p>";
  } finally {
      toggleLoading();
  }
};

renderAlboms();
