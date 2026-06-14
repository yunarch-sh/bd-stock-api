import axios from "axios";
import axiosRetry from "axios-retry";
import https from "https";

// dsebd.org sends an incomplete certificate chain, so we skip TLS verification for it
const insecureAgent = new https.Agent({ rejectUnauthorized: false });

const instance = axios.create({
  httpsAgent: insecureAgent,
});

axiosRetry(instance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

export default instance;
