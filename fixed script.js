function filterMenu(category, btn) {
  const cards = document.querySelectorAll('.food-card');
  const buttons = document.querySelectorAll('.cat-btn');

  // Remove "active" from all buttons
  buttons.forEach(b => b.classList.remove('active'));

  // Add "active" to the clicked button
  btn.classList.add('active');

  // Show/Hide food cards based on category
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });
}

