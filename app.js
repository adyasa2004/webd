const DATA = [
    {
        "id": 1,
        "type": "Cultural",
        "headline": "India won the international award for the best cultural country",
        "date": "2021-06-01",
        "image": "https://cdn.pixabay.com/photo/2017/03/27/12/45/woman-2178480_1280.jpg",
        "author": "John Doe",
        "content": "India has been awarded the best cultural country award by the International Cultural Organization for its rich and diverse cultural heritage."
      },
      {
        "id": 2,
        "type": "Historical",
        "headline": "Lost texts from Mount Vesuvius eruption deciphered with new AI",
        "date": "2024-05-10",
        "image": "https://cdn.pixabay.com/photo/2014/01/18/10/14/vaulted-cellar-247391_1280.jpg",
        "author": "Jane Smith",
        "content": "New AI techniques are helping researchers read previously illegible texts carbonized after the eruption of Mount Vesuvius in A.D. 79, revealing new historical insights."
      },
      {
        "id": 3,
        "type": "Historical",
        "headline": "Gobekli Tepe reveals new 11,000-year-old finds",
        "date": "2024-05-10",
        "image": "https://cdn.pixabay.com/photo/2023/03/28/18/28/hieroglyph-7883891_1280.jpg",
        "author": "Ali Khan",
        "content": "Recent excavations at Gobekli Tepe have uncovered more ancient artifacts, including statues and carvings, dating back 11,000 years, offering a glimpse into early human civilization."
      },
      {
        "id": 4,
        "type": "Lifestyle",
        "headline": "The London National Gallery celebrates 200 years",
        "date": "2024-05-08",
        "image": "https://cdn.pixabay.com/photo/2017/07/24/08/19/national-gallery-2533907_1280.jpg",
        "author": "Emily Clark",
        "content": "The London National Gallery is celebrating its bicentennial with special exhibitions and events, reflecting on its history and looking towards future innovations in public outreach."
      },
      {
        "id": 5,
        "type": "Lifestyle",
        "headline": "University students use technology to restore historic buildings in Hawaii",
        "date": "2024-05-06",
        "image": "https://cdn.pixabay.com/photo/2020/05/18/22/18/university-5188610_1280.jpg",
        "author": "Michael Lee",
        "content": "Students at the University of Hawaii are employing cutting-edge technology to create digital twins of historic buildings damaged in wildfires, preserving them for future generations."
      },
      {
        "id": 6,
        "type": "Food",
        "headline": "Exploring the culinary heritage of Armenia",
        "date": "2024-05-10",
        "image": "https://cdn.pixabay.com/photo/2018/10/02/12/12/armenia-3718710_1280.jpg",
        "author": "Nina Petrosyan",
        "content": "A deep dive into Armenian cuisine reveals a rich tradition of flavors and techniques, with dishes like khorovats and dolma highlighting the countrys culinary diversity."
      },
      {
        "id": 7,
        "type": "Food",
        "headline": "The rise of sustainable seafood: Benefits and challenges",
        "date": "2024-05-05",
        "image": "https://cdn.pixabay.com/photo/2020/05/31/19/53/light-bulb-5244001_1280.jpg",
        "author": "Carlos Rodriguez",
        "content": "Sustainable seafood is gaining popularity as consumers become more environmentally conscious. This article explores the benefits and challenges of this trend."
      },
      {
        "id": 8,
        "type": "Science",
        "headline": "Mysterious L-shaped structure discovered near Giza Pyramids",
        "date": "2024-05-10",
        "image": "https://cdn.pixabay.com/photo/2019/01/24/21/27/pyramids-3953368_1280.jpg",
        "author": "Laura Thompson",
        "content": "Archaeologists have uncovered a 4,500-year-old L-shaped structure near the Great Pyramid of Giza, shedding new light on ancient Egyptian architecture."
      },
      {
        "id": 9,
        "type": "Science",
        "headline": "New insights into Homo naledi burial practices",
        "date": "2024-05-10",
        "image": "https://cdn.pixabay.com/photo/2017/04/19/14/14/homo-erectus-2242425_1280.jpg",
        "author": "David Brown",
        "content": "Recent studies suggest that Homo naledi, a species of early hominids, might have buried their dead, providing new insights into the evolution of burial practices."
      },
      {
        "id": 10,
        "type": "Science",
        "headline": "AI making 2,000-year-old scrolls readable again",
        "date": "2024-05-02",
        "image": "https://cdn.pixabay.com/photo/2012/10/26/01/19/papyrus-63004_1280.jpg",
        "author": "Sophia Li",
        "content": "Innovative AI technology is helping researchers read ancient scrolls that were previously unreadable, unlocking mysteries from thousands of years ago."
      }
];

// Function to create a product card
function createCard(item) {
    // Create card container
    const card = document.createElement('div');
    card.className = 'card my-5 py-4';
    card.style.width = '25rem';

    // Create and append card image
    const img = document.createElement('img');
    img.src = item.image;
    img.className = 'card-img-top';
    img.alt = item.title;
    card.appendChild(img);

    // Create and append card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    // Create and append card title
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = item.type;
    cardBody.appendChild(cardTitle);

    // Create and append card price
    const cardPrice = document.createElement('p');
    cardPrice.className = 'lead';
    cardPrice.textContent = `${item.headline}`;
    cardBody.appendChild(cardPrice);
    
    
    

    // Create and append 'Buy Now' button
    const readButton = document.createElement('a');
    
    readButton.className = 'btn btn-outline-primary';
    readButton.textContent = 'Read Now';
    cardBody.appendChild(readButton);
    
    // Append card body to card
    card.appendChild(cardBody);

    return card;
}


// Function to render all product cards
function renderProducts() {
    const productContainer = document.getElementById('product-container');
    DATA.forEach(item => {
        const card = createCard(item);
        productContainer.appendChild(card);
    });
}

// Call the function to render products when the page loads
window.onload = renderProducts;