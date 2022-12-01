const readline = require("readline");

const validator = require("validator");

const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = (ask) => {
  return new Promise((resolve) => {
    rl.question(ask, (inputvar) => {
      resolve(inputvar);
    });
  });
};

const savedata = (name, email, phone) => {
  if (!validator.isEmail(email) == true) {
    console.log(" format salah");
    rl.close();
    return false;
  }
  if (!validator.isMobilePhone(phone, "id-ID") == true) {
    console.log("Format Salah");
    rl.close();
    return false;
  }
  const contact = { name, email, phone };
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(`nama : ${name}`);
  console.log(`email : ${email}`);
  console.log("Terima kasih sudah memasukkan data!");

  rl.close();
};

module.exports = { questions, savedata };
