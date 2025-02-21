// Function to parse and display form data from the URL query string
function displayFormData() {
    // Get the query string from the current URL (everything after the ?)
    const queryString = window.location.search;
  
    // Parse the query string into a more manageable object using URLSearchParams
    const params = new URLSearchParams(queryString);
    
    // Extract individual form field values from the query string using the 'get' method
    const fname = params.get("fname"); // First Name
    const mname = params.get("mname"); // Middle Name (optional)
    const lname = params.get("lname"); // Last Name
    const email = params.get("email"); // Email address
    const phone = params.get("phone"); // Phone number (optional)
    const dateofbirth = params.get("dateofbirth"); // Date of birth
    const StreetAddress = params.get("StreetAddress"); // Street Address
    const City = params.get("City"); // City
    const PostalCode = params.get("PostalCode"); // Postal Code
  
    // Check if all necessary parameters exist in the query string and are not null
    if (fname && lname && email && dateofbirth && StreetAddress && City && PostalCode) {
        // If all required fields are present, display them on the page
        document.getElementById("output").innerHTML = `
            <h2>Submitted Data:</h2>
            <p><strong>First Name:</strong> ${fname}</p>
            <p><strong>Middle Name:</strong> ${mname}</p> <!-- Middle Name may be empty -->
            <p><strong>Last Name:</strong> ${lname}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p> <!-- Phone may be empty -->
            <p><strong>Date of Birth:</strong> ${dateofbirth}</p>
            <p><strong>Street Address:</strong> ${StreetAddress}</p>
            <p><strong>City:</strong> ${City}</p>
            <p><strong>Postal Code:</strong> ${PostalCode}</p>
        `;
    } else {
        // If any necessary data is missing, display a message asking the user to fill out the form
        document.getElementById("output").innerHTML = `
            <p>No data submitted. Please go back and fill out the form.</p>
        `;
    }
  }
  
  // Run the displayFormData function as soon as the page loads
  window.onload = displayFormData;
