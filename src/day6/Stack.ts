interface Node<T> {
    value: T;
    prev?: Node<T>;
}

export default class Stack<T> {
    head?: Node<T>;
    length = 0;

    push(item: T): void {
        this.length++;
        const node: Node<T> = {
            value: item,
        };
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = head.prev;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
