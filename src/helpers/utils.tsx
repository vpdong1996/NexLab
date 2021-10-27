import { message as Message } from "antd";

export const getFirstName = (fullName: string): string => {
  return fullName.split(" ")[0];
};

export const randomColorGenerator = (stringInput: string): string => {
  let stringUniqueHash = stringInput.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `hsl(${stringUniqueHash % 360}, 95%, 35%)`;
};

export const messageNotification = (type = "success", msg = "") => {
  switch (type) {
    case "success":
      Message.success(msg);
      break;
    case "error":
      Message.error(msg);
      break;
    case "warning":
      Message.warning(msg);
      break;
    default:
      break;
  }
};
