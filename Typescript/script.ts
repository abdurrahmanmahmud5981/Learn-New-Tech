//Array example
const arr: (number | string)[] = [1, 2, 3, `4,5`];
console.log(`Array contents: ${arr.join(", ")}`);

// Tuple Example === fixed length array with specific types
const tuple: [number, string, boolean] = [1, "Hello", true];
console.log(`Tuple contents: ${tuple[0]}, ${tuple[1]}, ${tuple[2]}`);

console.log("End of recent edits");

//Enums Example
enum UserRole {
  ADMIN = "Admin",
  USER = "User",
  GUEST = "Guest"   
}

