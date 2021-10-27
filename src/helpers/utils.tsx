export const getFirstName = (fullName: string): string => {
  return fullName.split(" ")[0];
};

export const randomColorGenerator = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
