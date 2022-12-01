//mengimport function dari file function1.js
const func = require("./function1.js");
const yargs = require("yargs");

//add
yargs.command({
  command: "tambah",
  describe: "add new contact",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "contact email",
      demandOption: false,
      type: "string",
    },

    mobile: {
      describe: "contact mobile phone number",
      demandOption: true,
      type: "string",
    },
  },

  //menerima input yargs dibagikan ke object masing"
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      mobile: argv.mobile,
    };

    //input data ke JSON
    func.saveContact(argv.name, argv.email, argv.mobile);
  },
});
// command tampil list
yargs.command({
  command: "tampil",
  describe: "Contact List",

  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    func.tampil(argv.name);
  },
});

yargs.command({
  command: "delete",
  describe: "Contact List",

  builder: {
    name: {
      describe: "Contact Name",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    func.del(argv.name);
  },
});

//command update
yargs.command({
  command: "update",
  describe: "update contact",
  builder: {
    name: {
      describe: "Contact Name",
      demandOption: false,
      type: "string",
    },
    exname: {
      describe: "Exname",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "contact email",
      demandOption: false,
      type: "string",
    },

    mobile: {
      describe: "contact mobile phone number",
      demandOption: false,
      type: "string",
    },
  },

  //menerima input yargs dibagikan ke object masing"
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      mobile: argv.mobile,
    };

    //input data ke JSON
    func.update(argv.name, argv.email, argv.mobile, argv.exname);
  },
});

yargs.parse();
