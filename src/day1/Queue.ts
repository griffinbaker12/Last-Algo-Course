type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue(item: T): void {
        const node = { value: item };

        // works now because we reset the tail as well...
        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            if (this.tail) {
                this.tail.next = node;
            }
            this.tail = node;
        }

        this.length++;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const h = this.head;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = undefined;
        }

        // Optional cleanup
        h.next = undefined;

        return h.value;
    }
    peek(): T | undefined {
        console.log(this.head, this.tail);
        return this.head?.value;
    }
}
