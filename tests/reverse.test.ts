import { reverse, reverse2 } from '../src/index';


describe("reverse",
  () => {
    test('reverse("fizz")', () => {
      expect(reverse('fizz')).toBe('zzif');
    });

    test('reverse("feeb")', () => {
      expect(reverse('feeb')).toBe('beef');
    });

    test('reverse("")', () => {
      expect(reverse('')).toBe('');
    });

    test('reverse("12345")', () => {
      expect(reverse('12345')).toBe('54321');
    });

    test('reverse("  ")', () => {
      expect(reverse('  ')).toBe('  ');
    });
  }
);


describe("reverse2",
  () => {
    test('reverse2("fizz")', () => {
      expect(reverse2('fizz')).toBe('zzif');
    });

    test('reverse2("feeb")', () => {
      expect(reverse2('feeb')).toBe('beef');
    });

    test('reverse2("")', () => {
      expect(reverse2('')).toBe('');
    });

    test('reverse2("12345")', () => {
      expect(reverse2('12345')).toBe('54321');
    });

    test('reverse2("  ")', () => {
      expect(reverse2('  ')).toBe('  ');
    });
  }
);

