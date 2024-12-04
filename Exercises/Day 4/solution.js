function createXmasTree(height, ornament) {
  const tree = [];
  for (let i = 0; i < height; i++) {
    // As the tree grows, the spaces shrinks so I took the height minus the iteration and minus 1
    let space = "_".repeat(height - i - 1);
    // The ornaments are prime numbers, for every "level" of the tree the number of ornaments
    // goes from 1,3,5,7 and so on
    let line = `${space}${ornament.repeat(2 * i + 1)}${space}`;
    tree.push(line);
  }

  // The log of the tree consists of two "levels" and the log "#" always goes to the middle
  // To add the spaces its the height of the tree minus in each side
  const log = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  tree.push(log, log);

  return tree.join("\n");
}
