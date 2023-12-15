export function sortByKeyDesc(array: any[], key: string) {
  array.sort((a: any, b: any) => {
    const keyA = a[key];
    const keyB = b[key];

    if (keyA < keyB) return 1;
    if (keyA > keyB) return -1;

    return 0;
  });
}
