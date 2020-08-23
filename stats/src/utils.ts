export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/");
  const dateNumbers = dateParts.map((x: string) => parseInt(x));
  return new Date(dateNumbers[2], dateNumbers[1] - 1, dateNumbers[0]);
};
