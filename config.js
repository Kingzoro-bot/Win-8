//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348026312621";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1Rc1UrSXZMdkh6STd2Z3dCWDRPTGE0OUdZeDZlR3N2UnpNUmI4K2tFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk1vUlV5cVlDOWg0UVVld2UxZ005aVdIajlhTE0xbnAvSEhyUkFpMUUyUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SmJrWW9XNGtSUzk0L09HcmxiR0VSMlhiSlhlVlludUlEc1g2bDh1c0hFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzRTg4WHozS0REME9JT2xnTUVjM0lEVGpvQjZ0V3ZTTkJGd0crWmxNMkFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEdjlyRzEydEs5eGdrWk10YXpsS0JRaG0vNm9rMllaa2JaUk40TDE2VkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImgyeXQzMDlGWitGV1l2MC8wTlppeGdaV2xMejRUenY1Mzg3MXhad29CQVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05sd1dkNGJpVVN5anlGajRhWFZ2aFNaZUZzQklMNzBwQWQyMzg2T00zYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1JQMnpYdnpncFVBNXFtMy96bGhTTDE3Rm9UYmhLRGxUcnRIVlFXaUVTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZpV2lxVjE4ZFFYZUVCZ0VJRmZOTkwyVnVzQ1BGVHUrYld3ekV6NFBZK1ozc3JFV0hucy91SFU4L1JRMk0yd0lyelA5ZGV4YisrWE53ejZPZ2QzVEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJpcDN1ZE04bUxFRHZJbjhmRW5ybFJ6a0hqNjVHQUtUcHlWMERYUmlOa09zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2SHQtemNlb1Q3ZVpiWUJINlpEUFdnIiwicGhvbmVJZCI6IjFkNzQxN2NmLWQyZWUtNDM3My04ZjJjLWVmMTg1Y2IyNDRmNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRFRrd1dUUGJxR1dsTWVwN2RGWXdVV0R2dVU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkFWd0YwOXpXWDU0aXl3Vy8yL1VBRUVlUDU4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBIWlo4UFAzIiwibWUiOnsiaWQiOiIyMzQ4MDI2MzEyNjIxOjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuG0rOG0uuG0s+ODoURBUkvsm4MifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEeWgrQUJFSzNXMXJjR0dCVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdKSWFpQlVVYUVWYUkrRTREM0FaQ3lUUFBBaWxuVnJDbzk3dlJUam50WGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlYZE5JL3plb0Z6NXhNNTRvbmxabk02UzIrMHk4NEtmaHY2UnVLdG9MUFJJeVhVZkVQMkl2b0JNUWlKWkYwanpkM2I3SDNESVNjUnllbUJaSU9HdkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpS1REUlpXVDVxRTN6NVhpSHhtM25VbFhyWW5wdzE1RWxhdy96cEthVUNhSjIvMDBvOHFNRmtPZUFvV3hUaVlXR1hpK28rUXMrQUNNZmphZXQvSUZEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjYzMTI2MjE6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUNTR29nVkZHaEZXaVBoT0E5d0dRc2t6endJcFoxYXdxUGU3MFU0NTdWNSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzM3NjE4N30="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
