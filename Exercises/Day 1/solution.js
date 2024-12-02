function prepareGifts(gifts) {
  // Set = Collection of unique values
  const newGifts = new Set();
  for (let i = 0; i < gifts.length; i++) {
    if (!newGifts.has(gifts[i])) {
      newGifts.add(gifts[i]);
    }
  }
  // I sort the gifts by converting the set to an array to use the sort method
  const sortedGifts = Array.from(newGifts).sort((a, b) => a - b);
  return sortedGifts;
}
