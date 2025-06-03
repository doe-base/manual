const searchInput = document.getElementById('searchInput');
const linkList = document.getElementById('linkList');
const listItems = linkList.getElementsByTagName('li');

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase();

  for (let li of listItems) {
    const text = li.textContent.toLowerCase();
    li.style.display = text.includes(filter) ? 'block' : 'none';
  }
});
