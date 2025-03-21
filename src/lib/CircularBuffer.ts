export class CircularBuffer {
    private buffer: Uint32Array ;
    private size: number;
    private pointer: number = 0;
    private isFull: boolean = false;

    constructor(size: number, initialValues: number[]) {
        this.size = size;
        this.buffer = new Uint32Array(size);
        if (initialValues.length > size) {
            throw new Error("Initial values exceed buffer size");
        }
        this.buffer.set(initialValues);
        this.pointer = initialValues.length;
        this.isFull = initialValues.length === size;
    }

    // Add a new value to the buffer
    push(value: number) {
        this.buffer[this.pointer] = value;
        this.pointer = (this.pointer + 1) % this.size;
        if (!this.isFull && this.pointer === 0) {
            this.isFull = true;
        }
    }

    // Get the current buffer as an array
    toArray(): Uint32Array {
        if (!this.isFull) {
            return this.buffer.slice(0, this.pointer);
        }
        return new Uint32Array([
            ...this.buffer.slice(this.pointer),
            ...this.buffer.slice(0, this.pointer),
        ]);
    }
}