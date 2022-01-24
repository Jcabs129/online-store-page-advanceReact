import formatMoney from '../lib/formatMoney';

describe('format Money Function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('£0.01');
    expect(formatMoney(10)).toEqual('£0.10');
    expect(formatMoney(8)).toEqual('£0.08');
    expect(formatMoney(50)).toEqual('£0.50');
  });
  it('leaves off cents when its whole dollars', () => {
    expect(formatMoney(8000)).toEqual('£80');
    expect(formatMoney(100)).toEqual('£1');
    expect(formatMoney(50000000)).toEqual('£500,000');
  });
  it('works with whole and fractional dollars', () => {
    expect(formatMoney(180)).toEqual('£1.80');
    expect(formatMoney(5012)).toEqual('£50.12');
    expect(formatMoney(110)).toEqual('£1.10');
    expect(formatMoney(101)).toEqual('£1.01');
    expect(formatMoney(245234523452435)).toEqual('£2,452,345,234,524.35');
  });
});
