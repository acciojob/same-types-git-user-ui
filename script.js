function isSameType(value1, value2) {
  // Convert "NaN" string to real NaN
  const v1 = value1 === "NaN" ? NaN : value1;
  const v2 = value2 === "NaN" ? NaN : value2;

  // Check if both are NaN
  if (Number.isNaN(v1) && Number.isNaN(v2)) {
    return true;
  }

  // Otherwise compare types
  return typeof v1 === typeof v2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.") ;
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2)); 