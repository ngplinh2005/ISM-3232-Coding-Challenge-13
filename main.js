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
            listItem.innerHTML = `
                <img src="${url}" alt="${name}" width="50">
                <strong>${name}</strong> - ${company} - $${(price / 100).toFixed(2)}
            `

            productList.appendChild(listItem)
        })
    })


