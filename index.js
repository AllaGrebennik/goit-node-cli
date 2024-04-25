import { program } from "commander";
import { listContacts, getContactById, removeContact, addContact } from "./contacts.js";

program
  .option("-a, --action <type>", "choose list | get | add | remove")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts()
        .then(date => console.table(date))
        .catch(error => console.error(error));
      break;

    case "get":
      getContactById(id)
        .then(date => console.table(date))
        .catch(error => console.error(error));
      break;

    case "add":
      addContact(name, email, phone)
        .then(date => console.table(date))
        .catch(error => console.error(error));
      break;

    case "remove":
      removeContact(id)
        .then(date => console.table(date))
        .catch(error => console.error(error));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);