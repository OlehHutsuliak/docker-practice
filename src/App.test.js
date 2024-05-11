for (let i = 0; i <= 5; i++) {
  test(`Test @${i}`, () => {
    const randomNumber = Math.floor(Math.random() * 10000) / 100;
    expect(typeof randomNumber).toBe('number');
  });
}
