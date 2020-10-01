var findSmallestRegion = function(regions, region1, region2) {
  const parents = new Map();

  for (let [parentReg, ...childRegs] of regions) {
    for (let childReg of childRegs) {
      parents.set(childReg, parentReg);
    }
  }

  const ancesters = new Set();
  ancesters.add(region1);
  
  while (parents.has(region1)) {
    const parent = parents.get(region1);
    region1 = parent;
    ancesters.add(parent);
  }

  while (parents.has(region2)) {
    const parent = parents.get(region2);
    if (ancesters.has(parent)) return parent;

    region2 = parent;
  }

  return null;
};