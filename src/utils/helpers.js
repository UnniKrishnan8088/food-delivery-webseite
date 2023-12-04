export const truncate = (string, len) =>
  string.length < len ? string : string.substring(0, len) + "...";

// if (string.length < len) return string;
// else return string.substring(0, len) + "...";
