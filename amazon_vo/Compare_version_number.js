var compareVersion = function(version1, version2) {
  if (!version1.length && !version2.length) return 0;

  let v1 = 0, v2 = 0;
  let i = 0, j = 0;

  if (version1.length) {
    while (i < version1.length && version1[i] !== ".") i++;

    v1 = Number(version1.substr(0, i));
    version1 = version1.substr(i + 1);
  }

  if (version2.length) {
    while (j < version2.length && version2[j] !== ".") j++;

    v2 = Number(version2.substr(0, j));
    version2 = version2.substr(j + 1);
  }
  
  if (v1 < v2) {
    return -1;
  } else if (v1 > v2) {
    return 1;
  } else {
    return compareVersion(version1, version2);
  }
};