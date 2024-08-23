// Fake database

// Storing as a global var as a quick hack to keep server data in memory
// When tried to use const transactions = new Map(); it would only work on second request?!

if (globalThis.dbTransactions === undefined) {
  globalThis.dbTransactions = new Map();
}

if (globalThis.dbAccounts === undefined) {
  globalThis.dbAccounts = new Map();
}
