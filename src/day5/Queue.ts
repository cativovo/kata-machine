interface Node<T> {
    Value: T;
    Next?: Node<T>;
}

export default class Queue<T> {
    public length = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    enqueue(item: T): void {
        this.length++;
        const node: Node<T> = {
            Value: item,
        };
        if (!this.tail) {
            this.tail = node;
            this.head = this.tail;
            return;
        }

        this.tail.Next = node;
        // move tail "pointer" to make sure it points at last element
        this.tail = this.tail.Next;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;
        this.head = this.head.Next;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.Value;
    }

    peek(): T | undefined {
        return this.head?.Value;
    }
}

