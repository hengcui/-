function cloneNode (map, node) {
  if (!node) return null;
  if (!map.has(node)) {
    map.set(node, new ListNode(node.val));
  }

  return map.get(node);
}

var copyRandomList = function(head) {
  if (!head) return null;
  const map = new Map();

  let old_head = head;
  let new_head = new ListNode(head.val);

  map.set(old_head, new_head);

  while (old_head) {
    new_head.next = cloneNode(map, old_head.next);
    new_head.random = cloneNode(map, old_head.random);

    old_head = old_head.next;
    new_head = new_head.next;
  }

  return map.get(head);
};