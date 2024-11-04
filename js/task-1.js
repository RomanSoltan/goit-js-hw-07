const itemCategoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategoryEl.length}`);

itemCategoryEl.forEach(item => {
  const firstEl = item.firstElementChild;
  console.log(`Category: ${firstEl.textContent}`);
  const lastEl = item.lastElementChild;
  console.log(`Elements: ${lastEl.children.length}`);
});
