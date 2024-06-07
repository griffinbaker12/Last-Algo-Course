export default function bs_list(haystack: number[], needle: number): boolean {
    let min = 0;
    let max = haystack.length;

    while (min < max) {
        const mid = Math.floor((min + max) / 2);
        const value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value < needle) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }

    return false;
}
