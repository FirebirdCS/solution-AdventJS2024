function createFrame(names) {
  var frame = "";
  // Get the longest name
  var longestName = names.reduce((a, b) => (a.length > b.length ? a : b));
  // Based on the longest name, create the top and bottom frame using the length + 3
  // Why +3? It's to ensure the frame fully encloses the longest name
  for (let i = 0; i <= longestName.length + 3; i++) {
    frame += "*";
  }
  const result = [];
  // Add the top frame at the beginning
  result.push(frame);
  for (const name of names) {
    // Calculate the additional space needed based on the longest name
    const padding = longestName.length - name.length;
    // Add the name and then add empty spaces according to the additional space
    const line = `* ${name}${" ".repeat(padding)} *;`;
    result.push(line);
  }
  // Add the bottom frame at the end
  result.push(frame);
  return result.join("\n");
}
