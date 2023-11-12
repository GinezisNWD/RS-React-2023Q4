import { getData } from './getData';

describe('getData', () => {
  test('Первая загрузка, 25 элемнетов', async () => {
    const data = await getData();
    expect(data).toEqual([
      'Buzz',
      'Trashy Blonde',
      'Berliner Weisse With Yuzu - B-Sides',
      'Pilsen Lager',
      'Avery Brown Dredge',
      'Electric India',
      'AB:12',
      'Fake Lager',
      'AB:07',
      'Bramling X',
      'Misspent Youth',
      'Arcade Nation',
      'Movember',
      'Alpha Dog',
      'Mixtape 8',
      'Libertine Porter',
      'AB:06',
      'Russian Doll – India Pale Ale',
      'Hello My Name Is Mette-Marit',
      'Rabiator',
      'Vice Bier',
      'Devine Rebel (w/ Mikkeller)',
      'Storm',
      'The End Of History',
      'Bad Pixie',
    ]);
  });
});
