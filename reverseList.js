/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const head = {
    value: 1, // first value
    next: {
        value: 2, // second value
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null,
                }
            }
        }
    }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   let current=head;
   let prev = null;
   while(current){
       let next =current.next;
       current.next=prevz;
       prev=current;
       current=next;
   }
return prev;

};
console.dir( JSON.stringify(reverseList(head)) );
