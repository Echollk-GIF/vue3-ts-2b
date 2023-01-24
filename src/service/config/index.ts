let BASE_URL = "";

if (import.meta.env.DEV) {
  BASE_URL = "http://codercba.com:8000";
} else if (import.meta.env.PROD) {
  BASE_URL = "http://codercba.com:8000";
} else if (import.meta.env.SSR) {
  BASE_URL = "http://codercba.com:8000";
}

export const TIME_OUT = 10000;
export { BASE_URL };
