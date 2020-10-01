var FirstUnique = function(nums) {
  this.isUnique = new Map();

  for (let num of nums) {
    if (this.isUnique.has(num)) {
      this.isUnique.set(num, false);
    } else {
      this.isUnique.set(num, true);
    }
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  for (let [key, value] of this.isUnique) {
    if (value) return key;
  }

  return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  if (this.isUnique.has(value)) {
    this.isUnique.set(value, false);
  } else {
    this.isUnique.set(value, true);
  }
};