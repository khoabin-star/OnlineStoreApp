class Email {

  constructor(email) {
      this.email = new Array(email);
  }

  getEmail() {
      return this.email;
  }

  addEmail(newEmail) {
      this.email.push(newEmail);
  }
}
module.exports = Email;