class PhoneNumber {
 
  constructor(phoneNumber) {
      this.phoneNumber = new Array(phoneNumber);
  }

  getPhoneNumber() {
      return this.phoneNumber;
  }

  addPhoneNumber(newPhoneNumber) {
      this.phoneNumber.push(newPhoneNumber);
  }
}

module.exports = PhoneNumber;