var removeSubfolders = function (folder = [""]) {
  folder.sort((a, b) => a.length - b.length);
  const stack = [];
  for (let i = 0; i < folder.length; i++) {
    let flag = true;
    console.log(stack);

    for (let item of stack) {
      console.log(folder[i], item, i);

      if (folder[i].startsWith(item)) {
        console.log(i, folder[i], item);
        if (folder[i][item.length] === "/" || !folder[i][item.length]) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      stack.push(folder[i]);
    }
  }
  return stack;
};

console.log(
  removeSubfolders([
    "/abc/de",
    "/abc/dee",
    "/abc/def",
    "/abc/def/gh",
    "/abc/def/ghi",
    "/abc/def/ghij",
    "/abc/def/ghijk",
    "/abc/dez",
  ])
);
// Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
// Output: ["/a","/c/d","/c/f"]
