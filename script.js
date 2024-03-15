function validateSyntax() {
    const petInput = document.getElementById('petInput').value; //This line retrieves the value entered in the input field with the ID petInput and stores it in the petInput variable//
    const resultElement = document.getElementById('result'); //This line selects the HTML element with the ID result and stores it in the resultElement variable. This element will be used to display the validation result//
  
    // Shortcut for the the syntax pattern below//
    const syntaxPattern = /^pet_\d{4}\w+$/; //This line defines a regular expression pattern that the input value should match//
  
    // ^ matches the start of the string.
    // pet\_ matches the literal characters "pet_" (the backslash is used to escape the underscore character).
    // (\d is a shorthand for digits 0-9, and {4} specifies that there should be four of them)

    // For the below: This conditional statement checks if the value in petInput matches the syntaxPattern regular expression.

    if (syntaxPattern.test(petInput)) {
      resultElement.textContent = 'Valid Syntax.';
    } else {
      resultElement.textContent = 'Invalid Syntax.';
    }
  }