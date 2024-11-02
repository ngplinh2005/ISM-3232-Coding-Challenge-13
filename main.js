// Task 2: Fetch Products from the API Using Fetch and Promises

const productList = document.getElementById("productList")

// Fetch data from the API
fetch("https://www.course-api.com/javascript-store-products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json() // Parse the response as JSON
    })