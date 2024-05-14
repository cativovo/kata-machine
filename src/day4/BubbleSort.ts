export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            const current = arr[j];
            const prev = arr[j - 1];

            if (prev > current) {
                arr[j - 1] = current;
                arr[j] = prev;
            }
        }
    }
}
