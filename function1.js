//membuat fungsi contact
const dataPath = "./data/contacts.json";

const fs = require("fs");

if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const saveContact = (name, email, mobile) => {
  const contact = { name, email, mobile };

  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  //cek duplikat
  const duplicate = contacts.find(function (contact) {
    return contact.name === name;
  });
  if (duplicate) {
    console.log(`name ${name} already exist`);
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Terimakasih");
};

//menampilkan list kontak yang ada di JSON
const tampil = (name) => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  //mencari nama kontak yang sudah terdaftar di JSON
  const duplicate = contacts.find(function (contact) {
    return contact.name === name;
  });

  if (duplicate) {
    console.log(`
    Nama : ${duplicate.name}
    Email : ${duplicate.email}
    Mobile : ${duplicate.mobile}`);
  } else {
    console.log("Ada");
  }
};

//untuk menghapus kontak di data JSON
const del = (name) => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);
  const fil = contacts.filter(function (contact) {
    return contact.name !== name;
  });

  console.log(fil);
  fs.writeFileSync("data/contacts.json", JSON.stringify(fil));
  console.log("ok");
};

//mengupdate kontak
const update = (name, email, mobile, update) => {
  const file = fs.readFileSync("data/contacts.json", "utf8");
  const contacts = JSON.parse(file);

  try {
    const updt = contacts.findIndex((data) => {
      return data.name === update;
    });

    if (name != undefined) contacts[updt].name = name;
    if (name != undefined) contacts[updt].email = email;
    if (name != undefined) contacts[updt].phone = mobile;

    console.log(`update data yang namanya : ${update}`);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  } catch (e) {
    console.log("data tidak ditemukan");
    return false;
  }
};

module.exports = { saveContact, tampil, del, update };
