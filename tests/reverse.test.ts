import { reverse, reverse1, reverse2, reverse3 } from '../src/index';


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


describe("reverse1",
  () => {
    test('reverse1("fizz")', () => {
      expect(reverse1('fizz')).toBe('zzif');
    });

    test('reverse1("feeb")', () => {
      expect(reverse1('feeb')).toBe('beef');
    });

    test('reverse1("")', () => {
      expect(reverse1('')).toBe('');
    });

    test('reverse1("12345")', () => {
      expect(reverse1('12345')).toBe('54321');
    });

    test('reverse1("  ")', () => {
      expect(reverse1('  ')).toBe('  ');
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


describe("reverse3",
  () => {
    test('reverse3("fizz")', () => {
      expect(reverse3('fizz')).toBe('zzif');
    });

    test('reverse3("feeb")', () => {
      expect(reverse3('feeb')).toBe('beef');
    });

    test('reverse3("")', () => {
      expect(reverse3('')).toBe('');
    });

    test('reverse3("12345")', () => {
      expect(reverse3('12345')).toBe('54321');
    });

    test('reverse3("  ")', () => {
      expect(reverse3('  ')).toBe('  ');
    });
  }
);

