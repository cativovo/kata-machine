export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.sqrt(breaks.length);

    let i;
    for (i = jumpAmount; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    i -= jumpAmount;

    for (let j = 0; j <= jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
