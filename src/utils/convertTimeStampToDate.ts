export const convertTimeStampToDate = (creationDate: string) => {
  const indexOfT = creationDate.indexOf("T");
  return creationDate.slice(0, indexOfT);
};
