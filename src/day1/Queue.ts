type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue2(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.tail = node;
            if (!this.head) {
                this.head = node;
            }
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        const h = this.head;
        this.head = h.next;

        // Optional cleanup
        h.next = undefined;

        if (this.length === 0) return undefined;

        return h.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
