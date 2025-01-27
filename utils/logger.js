const BOLD = "\x1b[1m";
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

export const logger = {
  success(message) {
    console.log(`${BOLD}${GREEN}✔ ${message}${RESET}`);
  },
  info(message) {
    console.log(`${BOLD}ℹ ${message}${RESET}`);
  },
};

export default logger;
