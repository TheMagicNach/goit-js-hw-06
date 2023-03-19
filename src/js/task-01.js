  const categoriesList = document.querySelectorAll('#categories .item');
    

  console.log(`Number of categories: ${categoriesList.length}`);
  categoriesList.forEach(category => {

    const categoryName = category.querySelector('h2');
    const categoryElements = category.querySelectorAll('li');

    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
  })