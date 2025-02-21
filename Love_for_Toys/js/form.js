// JavaScript validation function to validate form input fields
function validateForm() {
  // Get form field values using their respective names
  var fname = document.forms["signupForm"]["fname"].value;
  var lname = document.forms["signupForm"]["lname"].value;
  var email = document.forms["signupForm"]["email"].value;
  var phone = document.forms["signupForm"]["phone"].value;
  var dateofbirth = document.forms["signupForm"]["dateofbirth"].value;
  var streetAddress = document.forms["signupForm"]["StreetAddress"].value;
  var city = document.forms["signupForm"]["City"].value;
  var postalCode = document.forms["signupForm"]["PostalCode"].value;

  // Check if required fields are filled out
  // If any of the required fields are empty, display an alert and prevent form submission
  if (fname == "" || lname == "" || email == "" || dateofbirth == "" || streetAddress == "" || city == "" || postalCode == "") {
    alert("Please fill out all required fields.");
    return false; // Prevent form submission
  }

  // Email validation using a basic regular expression (pattern)
  // The pattern checks that the email contains a valid format (e.g., name@example.com)
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false; // Prevent form submission if email is invalid
  }

  // Phone number validation (optional field)
  // If phone number is provided, check if it matches the UK phone number format
  // The regex allows optional '+' sign and checks for 10 to 13 digits
  if (phone != "" && !/^(\+[0-9]{10,13}|0[0-9]{10}|NONE)$/.test(phone)) {
    alert("Please enter a valid UK phone number.");
    return false; // Prevent form submission if phone number is invalid
  }

  // Postal Code validation (optional field)
  // A regular expression pattern that matches UK postal codes (regex provided by uk government)
  var postalCodePattern = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;
  if (!postalCodePattern.test(postalCode)) {
    alert("Please enter a valid UK postal code.");
    return false; // Prevent form submission if postal code is invalid
  }

  // If all validations pass, allow form submission
  return true;
}
