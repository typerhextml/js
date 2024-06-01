import parse from '~/parser';
import type { Text } from '~/document';

test('Parse h1 heading', () => {
  const thml = '=== Heading 1 ===';
  const document = parse(thml);
  const heading = document.contents[0];
  expect(heading.type).toBe('h1');
  expect((heading.contents && (heading.contents[0] as Text))?.text).toBe(
    'Heading 1',
  );
});
