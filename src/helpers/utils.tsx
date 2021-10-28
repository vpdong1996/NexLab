import { message as Message } from "antd";

/** Get first name of the full name
 * 
 * @param fullName 
 * @returns 
 */
export const getFirstName = (fullName: string): string => {
  return fullName.split(" ")[0];
};

/** Random Color Generator
 * 
 * @param stringInput 
 * @returns 
 */
export const randomColorGenerator = (stringInput: string): string => {
  let stringUniqueHash = stringInput.split("").reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `hsl(${stringUniqueHash % 360}, 95%, 35%)`;
};

/** Global notification
 * 
 * @param type 
 * @param msg 
 */
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
