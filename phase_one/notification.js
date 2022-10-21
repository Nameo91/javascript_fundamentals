const notifyByEmail = (email) => {
  return `Email sent to : ${email}`; 
}

const notifyByText = (phone_number) => {
  return `Text sent to : ${phone_number}`; 
}  

const notify = (contact, notifyMethod) => {
  return notifyMethod(contact);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));
