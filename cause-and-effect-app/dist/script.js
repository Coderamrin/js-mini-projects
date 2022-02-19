const mobileMenu = document.querySelector('.mobile-menu');
const sidebarTabs = document.querySelector('.sidebar-tabs');
const allTabs = document.querySelectorAll('.sidebar-tabs a');
const allTabsArray = Array.from(document.querySelectorAll('.sidebar-tabs a'));

//main section tags
const programmersImg = document.getElementById('programmer-img');
const programmersName = document.getElementById('name');
const bio = document.getElementById('bio');
const address = document.getElementById('address');
const contact = document.getElementById('contact');
const education = document.getElementById('education');

const programmers = [
  {
    name: 'Cory Leffler',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus earum consequatur autem! Voluptatum explicabo itaque alias tempore. Molestias,scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining',
    address: '2912 Golden Street Florida',
    contact: 'Phone: 555-999-5555 Email: example@gmail.com',
    education:
      'University of California, Berkeley Bachelor of Science in Computer Science',
    graduated: 'Graduated: May 2020',
    img: './imgs/img1.jfif',
  },
  {
    name: 'Ella Romaguera',
    bio: 'essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    address: 'P.O. Box 217, 6575 Morbi Road',
    contact: 'Phone: 555-555-5555 Email: example@gmail.com',
    education:
      'University of California, Berkeley Bachelor of Science in Computer Science',
    graduated: 'Graduated: May 2020',
    img: './imgs/img2.jfif',
  },
  {
    name: 'Gwen Johnson',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus earum consequatur autem! Voluptatum explicabo itaque alias tempore. Molestias, animi harum? Molestiae, eos odit voluptates tempora non voluptatibus nesciunt consequatur!',
    address: '653-643 Auctor, Avenue Apt. 792 San Francisco',
    contact: 'Phone: 555-555-5555 Email: example@gmail.com',
    education:
      'University of California, Berkeley Bachelor of Science in Computer Science',
    graduated: 'Graduated: May 2020',
    img: './imgs/img3.jfif',
  },
  {
    name: 'Bernadette Stoltenberg',
    bio: 'scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more ',
    address: '123 Main St. Anytown, CA 12345',
    contact: 'Phone: 555-555-5555 Email: example@gmail.com',
    education:
      'University of California, Berkeley Bachelor of Science in Computer Science',
    graduated: 'Graduated: May 2020',
    img: './imgs/img4.jfif',
  },
  {
    name: 'Lowell Anderson',
    bio: 'packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    address: '653-643 Auctor, Ave Apt. 792 San Francisco',
    contact: 'Phone: 555-555-5555 Email: example@gmail.com',
    education:
      'University of California, Berkeley Bachelor of Science in Computer Science',
    graduated: 'Graduated: May 2020',
    img: './imgs/img5.jfif',
  },
];

//menu event listener
mobileMenu.addEventListener('click', () => {
  sidebarTabs.classList.toggle('active');
});

//add active class to the menu
for (let i = 0; i < allTabs.length; i++) {
  allTabs[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');

    current[0].classList.remove('active');
    this.classList.add('active');
  });
}

//add the first programmer to the main section
window.addEventListener('load', (event) => {
  updateMain(programmers[0]);
});

// main section functionalites
allTabsArray.forEach((tab, i) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    updateMain(programmers[i]);
  });
});

function updateMain(data) {
  programmersImg.src = data.img;
  programmersName.innerHTML = data.name;
  bio.innerHTML = data.bio;
  address.innerHTML = data.address;
  contact.innerHTML = data.contact;
  education.innerHTML = data.education;
}
