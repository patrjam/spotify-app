export const sortName = (sortedRows, isDesc) => {
  const value = isDesc ? -1 : 1;
  return sortedRows.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1 * value;
    }
    if (nameA > nameB) {
      return 1 * value;
    }

    return 0;
  });
};
