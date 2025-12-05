function isSameType(value1, value2) {
  const bothNaN = Number.isNaN(value1) && Number.isNaN(value2);
  const oneNaN = Number.isNaN(value1) || Number.isNaN(value2);

  // If exactly one is NaN → false
  if (oneNaN && !bothNaN) return false;

  // If both are NaN → true
  if (bothNaN) return true;

  // Normal type comparison
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

alert(isSameType(value1, value2));
