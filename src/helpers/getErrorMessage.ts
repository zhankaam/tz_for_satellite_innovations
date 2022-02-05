import axios from "axios";

const getErrorMessage = (e: unknown): string => {
  if (axios.isAxiosError(e)) {
    const { message, resolution, title } = e.response?.data || {};

    return `${message} ${resolution} ${title}`;
  } else if (e instanceof Error) {
    return e.message;
  } else if (typeof e === "string") {
    return e;
  } else if (typeof e === "boolean") {
    return `Error ${String(e)}`;
  }

  return "Unknown error";
};

export default getErrorMessage;
