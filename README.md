# ISM-3232-Coding-Challenge-13

Coding Challenge: Product Webpage - Working with Promises and Fetch API

Introduction:
In this challenge, you will build a Product Webpage using JavaScript that displays product information retrieved from an external API. This task will give you hands-on experience with Promises, fetch(), and handling asynchronous operations using .then() and .catch() to load and display data from the JavaScript Store Products API.

Business Case:
Scenario: A business wants to display a list of products on their website. The product details, including company name, product price, product name, and product image, are available through a public API. Your task is to build a webpage that retrieves and displays this information dynamically using the JavaScript Store Products API.

Tasks:
1. Setup Basic HTML Structure for Product Page
Create an HTML page that includes:

A header with the page title ("Product Store").
A container to display the list of products dynamically loaded from the API.

Commit: Setup basic HTML structure for product webpage.

2. Fetch Products from the API Using Fetch and Promises
Create a JavaScript file that makes a fetch() call to the API. Use .then() and .catch() to handle the Promise. If the fetch is successful, extract the product details and display them on the webpage.

API Endpoint:
https://www.course-api.com/javascript-store-products

Commit: Fetch product data and display basic information.

3. Display Product Details Dynamically
Using the API response, display the following product details on the page:

Company Name
Product Price
Product Name
Product Image
Ensure each product is formatted clearly, with images and text aligned neatly.

Commit: Format product information dynamically.

4. Handle Errors Gracefully
Use .catch() to handle errors during the fetch() call. If there is an error, display a friendly message on the webpage (e.g., "Failed to load products. Please try again later.").

Commit: Handle errors with .catch() and display error message.

Hints:

fetch(): Use the fetch() method to make an HTTP request to the API.
Promises: Use .then() to process the response and .catch() to handle errors.
Data Handling: Extract relevant product data from the JSON response and create HTML elements dynamically to display them.

Submission Guidelines:

GitHub Repository: Include your index.html and main.js files in the repository. Ensure your code is well-organized and commented for clarity.
Repository Link: Make sure the repository is public or accessible to your instructors. Share the URL of your repository.

Expected Outcomes:

After completing this challenge, students will:

Understand how to work with Promises and use fetch() to make API calls.
Gain experience with .then() and .catch() for handling asynchronous operations.
Dynamically display data from an API in HTML using JavaScript.
Handle errors gracefully and provide user feedback.
This challenge will teach students how to use Promises, manage API responses, and handle asynchronous data processing efficiently.