// on click on the tab
// sort the items.

/**
 * if clicked on all tab show all the items
 * if clicked on breakfast just show breakfast items
 * repeat this for everyother tabs.
 */

const tabs = document.querySelector('.tabs');
const tabButtons = Array.from(tabs.querySelector('button'));
const items = Array.from(document.querySelectorAll('.item'));

tabs.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    //adds active class to the current tab.
    const current = document.querySelector('.active');
    current.classList.remove('active');
    e.target.classList.add('active');

    //all the tab functionalites.

    if (e.target.classList.contains('all-tab')) {
      items.forEach((item) => {
        item.classList.remove('hide');
        item.classList.add('show');
      });
      return;
    }

    if (e.target.classList.contains('breakfast-tab')) {
      sortItems('breakfast');
      return;
    }

    if (e.target.classList.contains('lunch-tab')) {
      sortItems('lunch');
      return;
    }

    if (e.target.classList.contains('dinner-tab')) {
      sortItems('dinner');
      return;
    }

    if (e.target.classList.contains('snacks-tab')) {
      sortItems('snacks');
      return;
    }
  }
});

function sortItems(itemName) {
  const filterdItems = items.filter((item) =>
    item.classList.contains(itemName)
  );

  items.forEach((item) => {
    item.classList.add('hide');
  });

  filterdItems.forEach((item) => {
    item.classList.toggle('hide');
  });
}
