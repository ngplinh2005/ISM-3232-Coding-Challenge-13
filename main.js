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

    // Task 3: Display Product Details Dynamically

    .then(products => {
        products.forEach(product => {
            const { fields: { company, name, price, image: { url } } } = product

            const listItem = document.createElement("li")
            listItem.textContent = `${name} - ${company} - $${(price / 100).toFixed(2)}`
    
            productList.appendChild(listItem)
        })
    })

    // Task 4: Handle Errors Gracefully

    .catch(error => {
        productList.textContent = "Failed to load products. Please try again later."
        console.error("There was a problem with the fetch operation:", error)
    })



