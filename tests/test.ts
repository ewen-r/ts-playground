import { isValid } from "../src";

/* spellchecker: disable */

describe("isValid",
  () => {
    test('isValid(): Valid', () => {
      expect(isValid(
        'SHRO202208017',
        'Robert',
        'Shepherd'
      )).toBe(true);
    });


    test('isValid(): v > 9', () => {
      expect(isValid(
        'SMJO199912296',
        'John',
        'Smith'
      )).toBe(true);
    });


    test('isValid(): ID empty', () => {
      expect(isValid(
        '',
        'John',
        'Smith'
      )).toBe(false);
    });

    test('isValid(): ID too short', () => {
      expect(isValid(
        'SMJO19991226',
        'John',
        'Smith'
      )).toBe(false);
    });

    test('isValid(): ID too long', () => {
      expect(isValid(
        'SMJO199912296666',
        'John',
        'Smith'
      )).toBe(false);
    });

    test('isValid(): ID Bad firstname', () => {
      expect(isValid(
        'XXRO202208017',
        'Robert',
        'Shepherd'
      )).toBe(false);
    });

    test('isValid(): ID Bad lastname', () => {
      expect(isValid(
        'SHXX202208017',
        'Robert',
        'Shepherd'
      )).toBe(false);
    });

    test('isValid(): ID Bad date', () => {
      expect(isValid(
        'SHRO212208017',
        'Robert',
        'Shepherd'
      )).toBe(false);
    });

    test('isValid(): ID Bad checkVal', () => {
      expect(isValid(
        'SHRO202208014',
        'Robert',
        'Shepherd'
      )).toBe(false);
    });



    test('isValid(): firstName empty', () => {
      expect(isValid(
        'SMJO199912296',
        'John',
        ''
      )).toBe(false);
    });

    test('isValid(): firstName too short', () => {
      expect(isValid(
        'SMJO199912296',
        'John',
        'S'
      )).toBe(false);
    });


    test('isValid(): lastname empty', () => {
      expect(isValid(
        'SMJO199912296',
        '',
        'Smith'
      )).toBe(false);
    });

    test('isValid(): lastname too short', () => {
      expect(isValid(
        'SMJO199912296',
        'J',
        'Smith'
      )).toBe(false);
    });


  }
);
