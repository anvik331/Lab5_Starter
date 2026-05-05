// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Test function isPhoneNumber
test('valid phone number with dashes returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses returns true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('empty space is not a phone number returns false', () => {
  expect(isPhoneNumber(' ')).toBe(false);
});

test('too short phone number returns false', () => {
  expect(isPhoneNumber('91')).toBe(false);
});

// Test function isEmail
test('Valid UCSD email returns true', () => {
  expect(isEmail('a8hsu@ucsd.edu')).toBe(true);
});

test('Valid Gmail returns true', () => {
  expect(isEmail('a8hsu@gmail.com')).toBe(true);
});

test('Email without @ returns false', () => {
  expect(isEmail('a8hsuucsd.edu')).toBe(false);
});

test('Email without domain returns false', () => {
  expect(isEmail('a8hsu')).toBe(false);
});

// Test function isStrongPassword
test('Valid password returns true', () => {
  expect(isStrongPassword('Abcde123')).toBe(true);
});

test('Valid password with underscore returns true', () => {
  expect(isStrongPassword('A_good123')).toBe(true);
});

test('Password starting with number returns false', () => {
  expect(isStrongPassword('1Abcde123')).toBe(false);
});

test('Password with special character returns false', () => {
  expect(isStrongPassword('Abcde123!')).toBe(false);
});

// Test function isDate
test('Valid date with one digit month and day returns true', () => {
  expect(isDate('1/1/2026')).toBe(true);
});

test('Valid date with two digit month and day returns true', () => {
  expect(isDate('05/05/2026')).toBe(true);
});

test('Date with dashes returns false', () => {
  expect(isDate('05-05-2026')).toBe(false);
});

test('Date with two digit year returns false', () => {
  expect(isDate('12/25/26')).toBe(false);
});

// Test function isHexColor
test('Valid 3 character hex color with hashtag returns true', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('Valid 6 character hex color without hashtag returns true', () => {
  expect(isHexColor('a3b2c1')).toBe(true);
});

test('Hex color with invalid letters returns false', () => {
  expect(isHexColor('#GGG')).toBe(false);
});

test('Hex color with invalid length returns false', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});