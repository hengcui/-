var canCross = function(stones) {
  const map = new Map;

  for (let stone of stones) {
    map.set(stone, new Set);
  }

  map.get(0).add(0);

  for (let stone of stones) {
    for (let jump of map.get(stone)) {
      const jumpSizes = [jump - 1, jump, jump + 1];

      for (let strike of jumpSizes) {
        if (map.has(stone + strike)) {
          map.get(stone + strike).add(strike);
        }
      }
    }
  }
  // console.log(map)
  return map.get(stones[stones.length - 1]).size > 0;
};