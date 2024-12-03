function organizeInventory(inventory) {
  // I use reduce to convert the array into an object
  return inventory.reduce((acc, item) => {
    const { name, quantity, category } = item;
    // Create a category if it doesnt exist yet
    if (!acc[category]) {
      acc[category] = {};
    }
    // Create a toy in the category if it doesnt exist yet
    if (!acc[category][name]) {
      acc[category][name] = 0;
    }
    // Sum the toy quantity to the existing value
    acc[category][name] += quantity;

    return acc;
  }, {});
}
