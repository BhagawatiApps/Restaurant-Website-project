// Sample data for demonstration
const products = [
    {
        img: "/img/cherries.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    {
        img: "/img/sandwich.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    {
        img: "/img/steak.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    {
        img: "/img/wine.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    {
        img: "/img/croissant.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    {
        img: "/img/sandwich.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    {
        img: "/img/salmon.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    {
        img: "/img/popsicle.jpeg",
        title: "The Perfect Sandwich, A Real NYC Classic",
        description: "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
    },
    // Add more products as needed
];

const itemsPerPage = 3; // Number of items to display per page
let currentPage = 1;

const productList = document.querySelector('.product_list');
const paginationButtons = document.querySelector('.pagination');

// Function to render products based on the current page
function renderProducts() {
    productList.innerHTML = ''; // Clear existing products

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        const productBox = document.createElement('div');
        productBox.className = 'box';
        productBox.innerHTML = `
            <img src="${product.img}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        `;
        productList.appendChild(productBox);
    });
}

// Function to set up pagination buttons
function setupPagination() {
    paginationButtons.innerHTML = ''; // Clear existing buttons

    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Previous Button
    const prevButton = document.createElement('button');
    prevButton.innerText = '<<';
    prevButton.setAttribute('aria-label', 'Previous Page');
    prevButton.disabled = currentPage === 1; // Disable if on the first page
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            setupPagination();
        }
    };
    paginationButtons.appendChild(prevButton);

    // Page Buttons
    for (let i = 1; i <= pageCount; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.setAttribute('aria-label', `Page ${i}`);
        pageButton.classList.toggle('active', i === currentPage); // Highlight current page
        pageButton.onclick = () => {
            currentPage = i;
            renderProducts();
            setupPagination();
        };
        paginationButtons.appendChild(pageButton);
    }

    // Next Button
    const nextButton = document.createElement('button');
    nextButton.innerText = '>>';
    nextButton.setAttribute('aria-label', 'Next Page');
    nextButton.disabled = currentPage === pageCount; // Disable if on the last page
    nextButton.onclick = () => {
        if (currentPage < pageCount) {
            currentPage++;
            renderProducts();
            setupPagination();
        }
    };
    paginationButtons.appendChild(nextButton);
}

// Initial Render
renderProducts();
setupPagination();
