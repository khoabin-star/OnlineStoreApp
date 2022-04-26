const PhoneNumber = require('./PhoneNumber.js');
const Email = require('./Email.js');

test('Create empty Email', () => {
  let email = new Email();
  expect(email.getEmail()).toStrictEqual([undefined]);
});
test('Create null Email', () => {
  let email = new Email(null);
  expect(email.getEmail()).toStrictEqual([null]);
})
test('Add one email.', () => {
  let email = new Email('tester');
  expect(email.getEmail()).toStrictEqual(['tester']);
});
test('Add one email and null.', () => {
  let email = new Email('tester');
  email.addEmail(null);
  expect(email.getEmail()).toStrictEqual(['tester', null]);
});
test('Add null and one email.', () => {
  let email = new Email(null);
  email.addEmail('tester');
  expect(email.getEmail()).toStrictEqual([null, 'tester']);
});
test('Add two null.', () => {
  let email = new Email(null);
  email.addEmail(null);
  expect(email.getEmail()).toStrictEqual([null, null]);
});
test('Add two emails.', () => {
  let email = new Email('tester');
  email.addEmail('tester2');
  expect(email.getEmail()).toStrictEqual(['tester', 'tester2']);
});
test('Add two emails and  null 1.', () => {
  let email = new Email('tester');
  email.addEmail('tester2');
  email.addEmail(null);
  expect(email.getEmail()).toStrictEqual(['tester', 'tester2', null]);
});
test('Add two emails and null 2.', () => {
  let email = new Email('tester');
  email.addEmail(null);
  email.addEmail('tester2');
  expect(email.getEmail()).toStrictEqual(['tester', null, 'tester2']);
});
test('Add two emails and null 3.', () => {
  let email = new Email(null);
  email.addEmail('tester');
  email.addEmail('tester2');
  expect(email.getEmail()).toStrictEqual([null, 'tester', 'tester2']);
});
test('Add 3 null.', () => {
  let email = new Email(null);
  email.addEmail(null);
  email.addEmail(null);
  expect(email.getEmail()).toStrictEqual([null, null, null]);
});


test('Create empty Phonenumber', () => {
  let number = new PhoneNumber();
  expect(number.getPhoneNumber()).toStrictEqual([undefined]);
});
test('Create null Phonenumber', () => {
  let number = new PhoneNumber(null);
  expect(number.getPhoneNumber()).toStrictEqual([null]);
})
test('Add one Phonenumber.', () => {
  let number = new PhoneNumber('tester');
  expect(number.getPhoneNumber()).toStrictEqual(['tester']);
});
test('Add one Phonenumber and null.', () => {
  let number = new PhoneNumber('tester');
  number.addPhoneNumber(null);
  expect(number.getPhoneNumber()).toStrictEqual(['tester', null]);
});
test('Add null and one Phonenumber.', () => {
  let number = new PhoneNumber(null);
  number.addPhoneNumber('tester');
  expect(number.getPhoneNumber()).toStrictEqual([null, 'tester']);
});
test('Add two null.', () => {
  let number = new PhoneNumber(null);
  number.addPhoneNumber(null);
  expect(number.getPhoneNumber()).toStrictEqual([null, null]);
});
test('Add two Phonenumber.', () => {
  let number = new PhoneNumber('tester');
  number.addPhoneNumber('tester2');
  expect(number.getPhoneNumber()).toStrictEqual(['tester', 'tester2']);
});
test('Add two Phonenumber and  null 1.', () => {
  let number = new PhoneNumber('tester');
  number.addPhoneNumber('tester2');
  number.addPhoneNumber(null);
  expect(number.getPhoneNumber()).toStrictEqual(['tester', 'tester2', null]);
});
test('Add two Phonenumber and null 2.', () => {
  let number = new PhoneNumber('tester');
  number.addPhoneNumber(null);
  number.addPhoneNumber('tester2');
  expect(number.getPhoneNumber()).toStrictEqual(['tester', null, 'tester2']);
});
test('Add two Phonenumber and null 3.', () => {
  let number = new PhoneNumber(null);
  number.addPhoneNumber('tester');
  number.addPhoneNumber('tester2');
  expect(number.getPhoneNumber()).toStrictEqual([null, 'tester', 'tester2']);
});
test('Add 3 null.', () => {
  let number = new PhoneNumber(null);
  number.addPhoneNumber(null);
  number.addPhoneNumber(null);
  expect(number.getPhoneNumber()).toStrictEqual([null, null, null]);
});