let BASE_URL;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:3000";
} else {
  // get production client domain from the browser location
  // eg ics.mykid.school => ['ics', 'mykid', 'school']
  const clientName = window.location.hostname.split(".")[0];
  BASE_URL = `https://${clientName}.safsms.cloud/`;
}

module.exports = {
  endpoint: `${BASE_URL}`
};
