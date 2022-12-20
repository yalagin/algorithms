/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const head = {
    value: 1, // first value
    next: null
};
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let start = head;
    let currentCounter = 1
    let currentNode = head;
    let startNode =currentNode;
    while(currentCounter<left){
        startNode =currentNode;
        currentNode=currentNode.next;
        currentCounter++
    }
    const newList = reverseListAndAttachToEnd(currentNode,currentCounter,right)
    if(left>1){
        startNode.next = newList;
        return start;
    }else{
        return newList
    }
};

var reverseListAndAttachToEnd = function(head,currentCounter,right){
    let current = head;
    let endTail = head;
    let prev = null;
    while(currentCounter<=right){
        let next = current.next ;
        current.next = prev;
        prev= current;
        current = next;
        currentCounter++;
    }
    endTail.next=current;
    return prev;
}

console.dir( reverseBetween(head,1,1));