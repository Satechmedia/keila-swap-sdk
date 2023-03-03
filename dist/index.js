"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ChainId: () => ChainId,
  Currency: () => Currency,
  CurrencyAmount: () => CurrencyAmount,
  ETHER: () => ETHER,
  FACTORY_ADDRESS: () => FACTORY_ADDRESS,
  FACTORY_ADDRESS_MAP: () => FACTORY_ADDRESS_MAP,
  Fetcher: () => Fetcher,
  Fraction: () => Fraction,
  INIT_CODE_HASH: () => INIT_CODE_HASH,
  INIT_CODE_HASH_MAP: () => INIT_CODE_HASH_MAP,
  InsufficientInputAmountError: () => InsufficientInputAmountError,
  InsufficientReservesError: () => InsufficientReservesError,
  JSBI: () => import_jsbi9.default,
  MINIMUM_LIQUIDITY: () => MINIMUM_LIQUIDITY,
  Pair: () => Pair,
  Percent: () => Percent,
  Price: () => Price,
  Rounding: () => Rounding,
  Route: () => Route,
  Router: () => Router,
  Token: () => Token,
  TokenAmount: () => TokenAmount,
  Trade: () => Trade,
  TradeType: () => TradeType,
  WETH: () => WETH,
  currencyEquals: () => currencyEquals,
  inputOutputComparator: () => inputOutputComparator,
  tradeComparator: () => tradeComparator
});
module.exports = __toCommonJS(src_exports);
var import_jsbi9 = __toESM(require("jsbi"));

// src/constants.ts
var import_jsbi = __toESM(require("jsbi"));
var ChainId = /* @__PURE__ */ ((ChainId4) => {
  ChainId4[ChainId4["MAINNET"] = 1116] = "MAINNET";
  ChainId4[ChainId4["TESTNET"] = 1115] = "TESTNET";
  return ChainId4;
})(ChainId || {});
var TradeType = /* @__PURE__ */ ((TradeType2) => {
  TradeType2[TradeType2["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType2[TradeType2["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
  return TradeType2;
})(TradeType || {});
var Rounding = /* @__PURE__ */ ((Rounding4) => {
  Rounding4[Rounding4["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding4[Rounding4["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding4[Rounding4["ROUND_UP"] = 2] = "ROUND_UP";
  return Rounding4;
})(Rounding || {});
var FACTORY_ADDRESS = "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A";
var FACTORY_ADDRESS_MAP = {
  [1116 /* MAINNET */]: FACTORY_ADDRESS,
  [1115 /* TESTNET */]: "0xAE1408ab847Ac1bd77E59a2f84e8EBE4172e136B"
};
var INIT_CODE_HASH = "0xd664d9f8cd356022ca88d3c397fac88416d90f611528ce08ff06da9c8ffb5578";
var INIT_CODE_HASH_MAP = {
  [1116 /* MAINNET */]: INIT_CODE_HASH,
  [1115 /* TESTNET */]: "0xd2a51423e68349c1f9c12a21c2eab15d6527f2f5978febfa99de15b91a53613f"
};
var MINIMUM_LIQUIDITY = import_jsbi.default.BigInt(1e3);
var ZERO = import_jsbi.default.BigInt(0);
var ONE = import_jsbi.default.BigInt(1);
var TWO = import_jsbi.default.BigInt(2);
var THREE = import_jsbi.default.BigInt(3);
var FIVE = import_jsbi.default.BigInt(5);
var TEN = import_jsbi.default.BigInt(10);
var _100 = import_jsbi.default.BigInt(100);
var FEES_NUMERATOR = import_jsbi.default.BigInt(9975);
var FEES_DENOMINATOR = import_jsbi.default.BigInt(1e4);
var SOLIDITY_TYPE_MAXIMA = {
  ["uint8" /* uint8 */]: import_jsbi.default.BigInt("0xff"),
  ["uint256" /* uint256 */]: import_jsbi.default.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
};

// src/errors.ts
var CAN_SET_PROTOTYPE = "setPrototypeOf" in Object;
var InsufficientReservesError = class extends Error {
  constructor() {
    super();
    this.isInsufficientReservesError = true;
    this.name = this.constructor.name;
    if (CAN_SET_PROTOTYPE)
      Object.setPrototypeOf(this, new.target.prototype);
  }
};
var InsufficientInputAmountError = class extends Error {
  constructor() {
    super();
    this.isInsufficientInputAmountError = true;
    this.name = this.constructor.name;
    if (CAN_SET_PROTOTYPE)
      Object.setPrototypeOf(this, new.target.prototype);
  }
};

// src/entities/token.ts
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// src/utils.ts
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_tiny_warning = __toESM(require("tiny-warning"));
var import_jsbi2 = __toESM(require("jsbi"));
var import_address = require("@ethersproject/address");
function validateSolidityTypeInstance(value, solidityType) {
  (0, import_tiny_invariant.default)(import_jsbi2.default.greaterThanOrEqual(value, ZERO), `${value} is not a ${solidityType}.`);
  (0, import_tiny_invariant.default)(import_jsbi2.default.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]), `${value} is not a ${solidityType}.`);
}
function validateAndParseAddress(address) {
  try {
    const checksummedAddress = (0, import_address.getAddress)(address);
    (0, import_tiny_warning.default)(address === checksummedAddress, `${address} is not checksummed.`);
    return checksummedAddress;
  } catch (error) {
    (0, import_tiny_invariant.default)(false, `${address} is not a valid address.`);
  }
}
function parseBigintIsh(bigintIsh) {
  return bigintIsh instanceof import_jsbi2.default ? bigintIsh : import_jsbi2.default.BigInt(bigintIsh);
}
function sqrt(y) {
  validateSolidityTypeInstance(y, "uint256" /* uint256 */);
  let z = ZERO;
  let x;
  if (import_jsbi2.default.greaterThan(y, THREE)) {
    z = y;
    x = import_jsbi2.default.add(import_jsbi2.default.divide(y, TWO), ONE);
    while (import_jsbi2.default.lessThan(x, z)) {
      z = x;
      x = import_jsbi2.default.divide(import_jsbi2.default.add(import_jsbi2.default.divide(y, x), x), TWO);
    }
  } else if (import_jsbi2.default.notEqual(y, ZERO)) {
    z = ONE;
  }
  return z;
}
function sortedInsert(items, add, maxSize, comparator) {
  (0, import_tiny_invariant.default)(maxSize > 0, "MAX_SIZE_ZERO");
  (0, import_tiny_invariant.default)(items.length <= maxSize, "ITEMS_SIZE");
  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    const isFull = items.length === maxSize;
    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }
    let lo = 0, hi = items.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

// src/entities/currency.ts
var import_jsbi3 = __toESM(require("jsbi"));
var _Currency = class {
  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  constructor(decimals, symbol, name) {
    validateSolidityTypeInstance(import_jsbi3.default.BigInt(decimals), "uint8" /* uint8 */);
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }
};
var Currency = _Currency;
/**
 * The only instance of the base class `Currency`.
 */
Currency.ETHER = new _Currency(18, "BNB", "BNB");
var ETHER = Currency.ETHER;

// src/entities/token.ts
var Token = class extends Currency {
  constructor(chainId, address, decimals, symbol, name, projectLink) {
    super(decimals, symbol, name);
    this.chainId = chainId;
    this.address = validateAndParseAddress(address);
    this.projectLink = projectLink;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */
  equals(other) {
    if (this === other) {
      return true;
    }
    return this.chainId === other.chainId && this.address === other.address;
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  sortsBefore(other) {
    (0, import_tiny_invariant2.default)(this.chainId === other.chainId, "CHAIN_IDS");
    (0, import_tiny_invariant2.default)(this.address !== other.address, "ADDRESSES");
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
};
function currencyEquals(currencyA, currencyB) {
  if (currencyA instanceof Token && currencyB instanceof Token) {
    return currencyA.equals(currencyB);
  } else if (currencyA instanceof Token) {
    return false;
  } else if (currencyB instanceof Token) {
    return false;
  } else {
    return currencyA === currencyB;
  }
}
var WETH = {
  [1116 /* MAINNET */]: new Token(
    1116 /* MAINNET */,
    "0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f",
    18,
    "WCORE",
    "Wrapped CORE",
    "https://www.coredao.org"
  ),
  [1115 /* TESTNET */]: new Token(
    1115 /* TESTNET */,
    "0x2cd0b3759f76adf762b9db3896ef8e1bfcb73cbc",
    18,
    "TCORE",
    "Wrapped TCORE",
    "https://www.coredao.org"
  )
};

// src/entities/fractions/currencyAmount.ts
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var import_jsbi5 = __toESM(require("jsbi"));
var import_big2 = __toESM(require("big.js"));
var import_toformat2 = __toESM(require("toformat"));

// src/entities/fractions/fraction.ts
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var import_jsbi4 = __toESM(require("jsbi"));
var import_decimal = __toESM(require("decimal.js-light"));
var import_big = __toESM(require("big.js"));
var import_toformat = __toESM(require("toformat"));
var Decimal = (0, import_toformat.default)(import_decimal.default);
var Big = (0, import_toformat.default)(import_big.default);
var toSignificantRounding = {
  [0 /* ROUND_DOWN */]: Decimal.ROUND_DOWN,
  [1 /* ROUND_HALF_UP */]: Decimal.ROUND_HALF_UP,
  [2 /* ROUND_UP */]: Decimal.ROUND_UP
};
var toFixedRounding = {
  [0 /* ROUND_DOWN */]: import_big.RoundingMode.RoundDown,
  [1 /* ROUND_HALF_UP */]: import_big.RoundingMode.RoundHalfUp,
  [2 /* ROUND_UP */]: import_big.RoundingMode.RoundUp
};
var Fraction = class {
  constructor(numerator, denominator = ONE) {
    this.numerator = parseBigintIsh(numerator);
    this.denominator = parseBigintIsh(denominator);
  }
  // performs floor division
  get quotient() {
    return import_jsbi4.default.divide(this.numerator, this.denominator);
  }
  // remainder after floor division
  get remainder() {
    return new Fraction(import_jsbi4.default.remainder(this.numerator, this.denominator), this.denominator);
  }
  invert() {
    return new Fraction(this.denominator, this.numerator);
  }
  add(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    if (import_jsbi4.default.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(import_jsbi4.default.add(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(
      import_jsbi4.default.add(
        import_jsbi4.default.multiply(this.numerator, otherParsed.denominator),
        import_jsbi4.default.multiply(otherParsed.numerator, this.denominator)
      ),
      import_jsbi4.default.multiply(this.denominator, otherParsed.denominator)
    );
  }
  subtract(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    if (import_jsbi4.default.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(import_jsbi4.default.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }
    return new Fraction(
      import_jsbi4.default.subtract(
        import_jsbi4.default.multiply(this.numerator, otherParsed.denominator),
        import_jsbi4.default.multiply(otherParsed.numerator, this.denominator)
      ),
      import_jsbi4.default.multiply(this.denominator, otherParsed.denominator)
    );
  }
  lessThan(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return import_jsbi4.default.lessThan(
      import_jsbi4.default.multiply(this.numerator, otherParsed.denominator),
      import_jsbi4.default.multiply(otherParsed.numerator, this.denominator)
    );
  }
  equalTo(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return import_jsbi4.default.equal(
      import_jsbi4.default.multiply(this.numerator, otherParsed.denominator),
      import_jsbi4.default.multiply(otherParsed.numerator, this.denominator)
    );
  }
  greaterThan(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return import_jsbi4.default.greaterThan(
      import_jsbi4.default.multiply(this.numerator, otherParsed.denominator),
      import_jsbi4.default.multiply(otherParsed.numerator, this.denominator)
    );
  }
  multiply(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(
      import_jsbi4.default.multiply(this.numerator, otherParsed.numerator),
      import_jsbi4.default.multiply(this.denominator, otherParsed.denominator)
    );
  }
  divide(other) {
    const otherParsed = other instanceof Fraction ? other : new Fraction(parseBigintIsh(other));
    return new Fraction(
      import_jsbi4.default.multiply(this.numerator, otherParsed.denominator),
      import_jsbi4.default.multiply(this.denominator, otherParsed.numerator)
    );
  }
  toSignificant(significantDigits, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    (0, import_tiny_invariant3.default)(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`);
    (0, import_tiny_invariant3.default)(significantDigits > 0, `${significantDigits} is not positive.`);
    Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] });
    const quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  }
  toFixed(decimalPlaces, format = { groupSeparator: "" }, rounding = 1 /* ROUND_HALF_UP */) {
    (0, import_tiny_invariant3.default)(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`);
    (0, import_tiny_invariant3.default)(decimalPlaces >= 0, `${decimalPlaces} is negative.`);
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  /**
   * Helper method for converting any super class back to a fraction
   */
  get asFraction() {
    return new Fraction(this.numerator, this.denominator);
  }
};

// src/entities/fractions/currencyAmount.ts
var Big2 = (0, import_toformat2.default)(import_big2.default);
var CurrencyAmount = class extends Fraction {
  // amount _must_ be raw, i.e. in the native representation
  constructor(currency, amount) {
    const parsedAmount = parseBigintIsh(amount);
    validateSolidityTypeInstance(parsedAmount, "uint256" /* uint256 */);
    super(parsedAmount, import_jsbi5.default.exponentiate(TEN, import_jsbi5.default.BigInt(currency.decimals)));
    this.currency = currency;
  }
  /**
   * Helper that calls the constructor with the ETHER currency
   * @param amount ether amount in wei
   */
  static ether(amount) {
    return new CurrencyAmount(ETHER, amount);
  }
  get raw() {
    return this.numerator;
  }
  add(other) {
    (0, import_tiny_invariant4.default)(currencyEquals(this.currency, other.currency), "TOKEN");
    return new CurrencyAmount(this.currency, import_jsbi5.default.add(this.raw, other.raw));
  }
  subtract(other) {
    (0, import_tiny_invariant4.default)(currencyEquals(this.currency, other.currency), "TOKEN");
    return new CurrencyAmount(this.currency, import_jsbi5.default.subtract(this.raw, other.raw));
  }
  toSignificant(significantDigits = 6, format, rounding = 0 /* ROUND_DOWN */) {
    return super.toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = this.currency.decimals, format, rounding = 0 /* ROUND_DOWN */) {
    (0, import_tiny_invariant4.default)(decimalPlaces <= this.currency.decimals, "DECIMALS");
    return super.toFixed(decimalPlaces, format, rounding);
  }
  toExact(format = { groupSeparator: "" }) {
    Big2.DP = this.currency.decimals;
    return new Big2(this.numerator.toString()).div(this.denominator.toString()).toFormat(format);
  }
};

// src/entities/fractions/tokenAmount.ts
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsbi6 = __toESM(require("jsbi"));
var TokenAmount = class extends CurrencyAmount {
  // amount _must_ be raw, i.e. in the native representation
  constructor(token, amount) {
    super(token, amount);
    this.token = token;
  }
  add(other) {
    (0, import_tiny_invariant5.default)(this.token.equals(other.token), "TOKEN");
    return new TokenAmount(this.token, import_jsbi6.default.add(this.raw, other.raw));
  }
  subtract(other) {
    (0, import_tiny_invariant5.default)(this.token.equals(other.token), "TOKEN");
    return new TokenAmount(this.token, import_jsbi6.default.subtract(this.raw, other.raw));
  }
};

// src/entities/fractions/price.ts
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));
var import_jsbi7 = __toESM(require("jsbi"));
var Price = class extends Fraction {
  // denominator and numerator _must_ be raw, i.e. in the native representation
  constructor(baseCurrency, quoteCurrency, denominator, numerator) {
    super(numerator, denominator);
    this.baseCurrency = baseCurrency;
    this.quoteCurrency = quoteCurrency;
    this.scalar = new Fraction(
      import_jsbi7.default.exponentiate(TEN, import_jsbi7.default.BigInt(baseCurrency.decimals)),
      import_jsbi7.default.exponentiate(TEN, import_jsbi7.default.BigInt(quoteCurrency.decimals))
    );
  }
  // used to adjust the raw fraction w/r/t the decimals of the {base,quote}Token
  static fromRoute(route) {
    const prices = [];
    for (const [i, pair] of route.pairs.entries()) {
      prices.push(
        route.path[i].equals(pair.token0) ? new Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.raw, pair.reserve1.raw) : new Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.raw, pair.reserve0.raw)
      );
    }
    return prices.slice(1).reduce((accumulator, currentValue) => accumulator.multiply(currentValue), prices[0]);
  }
  get raw() {
    return new Fraction(this.numerator, this.denominator);
  }
  get adjusted() {
    return super.multiply(this.scalar);
  }
  invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  multiply(other) {
    (0, import_tiny_invariant6.default)(currencyEquals(this.quoteCurrency, other.baseCurrency), "TOKEN");
    const fraction = super.multiply(other);
    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  // performs floor division on overflow
  quote(currencyAmount) {
    (0, import_tiny_invariant6.default)(currencyEquals(currencyAmount.currency, this.baseCurrency), "TOKEN");
    if (this.quoteCurrency instanceof Token) {
      return new TokenAmount(this.quoteCurrency, super.multiply(currencyAmount.raw).quotient);
    }
    return CurrencyAmount.ether(super.multiply(currencyAmount.raw).quotient);
  }
  toSignificant(significantDigits = 6, format, rounding) {
    return this.adjusted.toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 4, format, rounding) {
    return this.adjusted.toFixed(decimalPlaces, format, rounding);
  }
};

// src/entities/pair.ts
var import_tiny_invariant7 = __toESM(require("tiny-invariant"));
var import_jsbi8 = __toESM(require("jsbi"));
var import_solidity = require("@ethersproject/solidity");
var import_address2 = require("@ethersproject/address");
var PAIR_ADDRESS_CACHE = {};
var composeKey = (token0, token1) => `${token0.chainId}-${token0.address}-${token1.address}`;
var Pair = class {
  static getAddress(tokenA, tokenB) {
    const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
    const key = composeKey(token0, token1);
    if ((PAIR_ADDRESS_CACHE == null ? void 0 : PAIR_ADDRESS_CACHE[key]) === void 0) {
      PAIR_ADDRESS_CACHE = {
        ...PAIR_ADDRESS_CACHE,
        [key]: (0, import_address2.getCreate2Address)(
          FACTORY_ADDRESS_MAP[token0.chainId],
          (0, import_solidity.keccak256)(["bytes"], [(0, import_solidity.pack)(["address", "address"], [token0.address, token1.address])]),
          INIT_CODE_HASH_MAP[token0.chainId]
        )
      };
    }
    return PAIR_ADDRESS_CACHE[key];
  }
  constructor(tokenAmountA, tokenAmountB) {
    const tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    this.liquidityToken = new Token(
      tokenAmounts[0].token.chainId,
      Pair.getAddress(tokenAmounts[0].token, tokenAmounts[1].token),
      18,
      "Cake-LP",
      "Pancake LPs"
    );
    this.tokenAmounts = tokenAmounts;
  }
  /**
   * Returns true if the token is either token0 or token1
   * @param token to check
   */
  involvesToken(token) {
    return token.equals(this.token0) || token.equals(this.token1);
  }
  /**
   * Returns the current mid price of the pair in terms of token0, i.e. the ratio of reserve1 to reserve0
   */
  get token0Price() {
    return new Price(this.token0, this.token1, this.tokenAmounts[0].raw, this.tokenAmounts[1].raw);
  }
  /**
   * Returns the current mid price of the pair in terms of token1, i.e. the ratio of reserve0 to reserve1
   */
  get token1Price() {
    return new Price(this.token1, this.token0, this.tokenAmounts[1].raw, this.tokenAmounts[0].raw);
  }
  /**
   * Return the price of the given token in terms of the other token in the pair.
   * @param token token to return price of
   */
  priceOf(token) {
    (0, import_tiny_invariant7.default)(this.involvesToken(token), "TOKEN");
    return token.equals(this.token0) ? this.token0Price : this.token1Price;
  }
  /**
   * Returns the chain ID of the tokens in the pair.
   */
  get chainId() {
    return this.token0.chainId;
  }
  get token0() {
    return this.tokenAmounts[0].token;
  }
  get token1() {
    return this.tokenAmounts[1].token;
  }
  get reserve0() {
    return this.tokenAmounts[0];
  }
  get reserve1() {
    return this.tokenAmounts[1];
  }
  reserveOf(token) {
    (0, import_tiny_invariant7.default)(this.involvesToken(token), "TOKEN");
    return token.equals(this.token0) ? this.reserve0 : this.reserve1;
  }
  getOutputAmount(inputAmount) {
    (0, import_tiny_invariant7.default)(this.involvesToken(inputAmount.token), "TOKEN");
    if (import_jsbi8.default.equal(this.reserve0.raw, ZERO) || import_jsbi8.default.equal(this.reserve1.raw, ZERO)) {
      throw new InsufficientReservesError();
    }
    const inputReserve = this.reserveOf(inputAmount.token);
    const outputReserve = this.reserveOf(inputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    const inputAmountWithFee = import_jsbi8.default.multiply(inputAmount.raw, FEES_NUMERATOR);
    const numerator = import_jsbi8.default.multiply(inputAmountWithFee, outputReserve.raw);
    const denominator = import_jsbi8.default.add(import_jsbi8.default.multiply(inputReserve.raw, FEES_DENOMINATOR), inputAmountWithFee);
    const outputAmount = new TokenAmount(
      inputAmount.token.equals(this.token0) ? this.token1 : this.token0,
      import_jsbi8.default.divide(numerator, denominator)
    );
    if (import_jsbi8.default.equal(outputAmount.raw, ZERO)) {
      throw new InsufficientInputAmountError();
    }
    return [outputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  }
  getInputAmount(outputAmount) {
    (0, import_tiny_invariant7.default)(this.involvesToken(outputAmount.token), "TOKEN");
    if (import_jsbi8.default.equal(this.reserve0.raw, ZERO) || import_jsbi8.default.equal(this.reserve1.raw, ZERO) || import_jsbi8.default.greaterThanOrEqual(outputAmount.raw, this.reserveOf(outputAmount.token).raw)) {
      throw new InsufficientReservesError();
    }
    const outputReserve = this.reserveOf(outputAmount.token);
    const inputReserve = this.reserveOf(outputAmount.token.equals(this.token0) ? this.token1 : this.token0);
    const numerator = import_jsbi8.default.multiply(import_jsbi8.default.multiply(inputReserve.raw, outputAmount.raw), FEES_DENOMINATOR);
    const denominator = import_jsbi8.default.multiply(import_jsbi8.default.subtract(outputReserve.raw, outputAmount.raw), FEES_NUMERATOR);
    const inputAmount = new TokenAmount(
      outputAmount.token.equals(this.token0) ? this.token1 : this.token0,
      import_jsbi8.default.add(import_jsbi8.default.divide(numerator, denominator), ONE)
    );
    return [inputAmount, new Pair(inputReserve.add(inputAmount), outputReserve.subtract(outputAmount))];
  }
  getLiquidityMinted(totalSupply, tokenAmountA, tokenAmountB) {
    (0, import_tiny_invariant7.default)(totalSupply.token.equals(this.liquidityToken), "LIQUIDITY");
    const tokenAmounts = tokenAmountA.token.sortsBefore(tokenAmountB.token) ? [tokenAmountA, tokenAmountB] : [tokenAmountB, tokenAmountA];
    (0, import_tiny_invariant7.default)(tokenAmounts[0].token.equals(this.token0) && tokenAmounts[1].token.equals(this.token1), "TOKEN");
    let liquidity;
    if (import_jsbi8.default.equal(totalSupply.raw, ZERO)) {
      liquidity = import_jsbi8.default.subtract(sqrt(import_jsbi8.default.multiply(tokenAmounts[0].raw, tokenAmounts[1].raw)), MINIMUM_LIQUIDITY);
    } else {
      const amount0 = import_jsbi8.default.divide(import_jsbi8.default.multiply(tokenAmounts[0].raw, totalSupply.raw), this.reserve0.raw);
      const amount1 = import_jsbi8.default.divide(import_jsbi8.default.multiply(tokenAmounts[1].raw, totalSupply.raw), this.reserve1.raw);
      liquidity = import_jsbi8.default.lessThanOrEqual(amount0, amount1) ? amount0 : amount1;
    }
    if (!import_jsbi8.default.greaterThan(liquidity, ZERO)) {
      throw new InsufficientInputAmountError();
    }
    return new TokenAmount(this.liquidityToken, liquidity);
  }
  getLiquidityValue(token, totalSupply, liquidity, feeOn = false, kLast) {
    (0, import_tiny_invariant7.default)(this.involvesToken(token), "TOKEN");
    (0, import_tiny_invariant7.default)(totalSupply.token.equals(this.liquidityToken), "TOTAL_SUPPLY");
    (0, import_tiny_invariant7.default)(liquidity.token.equals(this.liquidityToken), "LIQUIDITY");
    (0, import_tiny_invariant7.default)(import_jsbi8.default.lessThanOrEqual(liquidity.raw, totalSupply.raw), "LIQUIDITY");
    let totalSupplyAdjusted;
    if (!feeOn) {
      totalSupplyAdjusted = totalSupply;
    } else {
      (0, import_tiny_invariant7.default)(!!kLast, "K_LAST");
      const kLastParsed = parseBigintIsh(kLast);
      if (!import_jsbi8.default.equal(kLastParsed, ZERO)) {
        const rootK = sqrt(import_jsbi8.default.multiply(this.reserve0.raw, this.reserve1.raw));
        const rootKLast = sqrt(kLastParsed);
        if (import_jsbi8.default.greaterThan(rootK, rootKLast)) {
          const numerator = import_jsbi8.default.multiply(totalSupply.raw, import_jsbi8.default.subtract(rootK, rootKLast));
          const denominator = import_jsbi8.default.add(import_jsbi8.default.multiply(rootK, FIVE), rootKLast);
          const feeLiquidity = import_jsbi8.default.divide(numerator, denominator);
          totalSupplyAdjusted = totalSupply.add(new TokenAmount(this.liquidityToken, feeLiquidity));
        } else {
          totalSupplyAdjusted = totalSupply;
        }
      } else {
        totalSupplyAdjusted = totalSupply;
      }
    }
    return new TokenAmount(
      token,
      import_jsbi8.default.divide(import_jsbi8.default.multiply(liquidity.raw, this.reserveOf(token).raw), totalSupplyAdjusted.raw)
    );
  }
};

// src/entities/route.ts
var import_tiny_invariant8 = __toESM(require("tiny-invariant"));
var Route = class {
  constructor(pairs, input, output) {
    (0, import_tiny_invariant8.default)(pairs.length > 0, "PAIRS");
    (0, import_tiny_invariant8.default)(
      pairs.every((pair) => pair.chainId === pairs[0].chainId),
      "CHAIN_IDS"
    );
    (0, import_tiny_invariant8.default)(
      input instanceof Token && pairs[0].involvesToken(input) || input === ETHER && pairs[0].involvesToken(WETH[pairs[0].chainId]),
      "INPUT"
    );
    (0, import_tiny_invariant8.default)(
      typeof output === "undefined" || output instanceof Token && pairs[pairs.length - 1].involvesToken(output) || output === ETHER && pairs[pairs.length - 1].involvesToken(WETH[pairs[0].chainId]),
      "OUTPUT"
    );
    const path = [input instanceof Token ? input : WETH[pairs[0].chainId]];
    for (const [i, pair] of pairs.entries()) {
      const currentInput = path[i];
      (0, import_tiny_invariant8.default)(currentInput.equals(pair.token0) || currentInput.equals(pair.token1), "PATH");
      const output2 = currentInput.equals(pair.token0) ? pair.token1 : pair.token0;
      path.push(output2);
    }
    this.pairs = pairs;
    this.path = path;
    this.midPrice = Price.fromRoute(this);
    this.input = input;
    this.output = output != null ? output : path[path.length - 1];
  }
  get chainId() {
    return this.pairs[0].chainId;
  }
};

// src/entities/trade.ts
var import_tiny_invariant9 = __toESM(require("tiny-invariant"));

// src/entities/fractions/percent.ts
var _100_PERCENT = new Fraction(_100);
var Percent = class extends Fraction {
  toSignificant(significantDigits = 5, format, rounding) {
    return this.multiply(_100_PERCENT).toSignificant(significantDigits, format, rounding);
  }
  toFixed(decimalPlaces = 2, format, rounding) {
    return this.multiply(_100_PERCENT).toFixed(decimalPlaces, format, rounding);
  }
};

// src/entities/trade.ts
function computePriceImpact(midPrice, inputAmount, outputAmount) {
  const exactQuote = midPrice.raw.multiply(inputAmount.raw);
  const slippage = exactQuote.subtract(outputAmount.raw).divide(exactQuote);
  return new Percent(slippage.numerator, slippage.denominator);
}
function inputOutputComparator(a, b) {
  (0, import_tiny_invariant9.default)(currencyEquals(a.inputAmount.currency, b.inputAmount.currency), "INPUT_CURRENCY");
  (0, import_tiny_invariant9.default)(currencyEquals(a.outputAmount.currency, b.outputAmount.currency), "OUTPUT_CURRENCY");
  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      return 0;
    }
    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
}
function tradeComparator(a, b) {
  const ioComp = inputOutputComparator(a, b);
  if (ioComp !== 0) {
    return ioComp;
  }
  if (a.priceImpact.lessThan(b.priceImpact)) {
    return -1;
  } else if (a.priceImpact.greaterThan(b.priceImpact)) {
    return 1;
  }
  return a.route.path.length - b.route.path.length;
}
function wrappedAmount(currencyAmount, chainId) {
  if (currencyAmount instanceof TokenAmount)
    return currencyAmount;
  if (currencyAmount.currency === ETHER)
    return new TokenAmount(WETH[chainId], currencyAmount.raw);
  (0, import_tiny_invariant9.default)(false, "CURRENCY");
}
function wrappedCurrency(currency, chainId) {
  if (currency instanceof Token)
    return currency;
  if (currency === ETHER)
    return WETH[chainId];
  (0, import_tiny_invariant9.default)(false, "CURRENCY");
}
var Trade = class {
  /**
   * Constructs an exact in trade with the given amount in and route
   * @param route route of the exact in trade
   * @param amountIn the amount being passed in
   */
  static exactIn(route, amountIn) {
    return new Trade(route, amountIn, 0 /* EXACT_INPUT */);
  }
  /**
   * Constructs an exact out trade with the given amount out and route
   * @param route route of the exact out trade
   * @param amountOut the amount returned by the trade
   */
  static exactOut(route, amountOut) {
    return new Trade(route, amountOut, 1 /* EXACT_OUTPUT */);
  }
  constructor(route, amount, tradeType) {
    const amounts = new Array(route.path.length);
    const nextPairs = new Array(route.pairs.length);
    if (tradeType === 0 /* EXACT_INPUT */) {
      (0, import_tiny_invariant9.default)(currencyEquals(amount.currency, route.input), "INPUT");
      amounts[0] = wrappedAmount(amount, route.chainId);
      for (let i = 0; i < route.path.length - 1; i++) {
        const pair = route.pairs[i];
        const [outputAmount, nextPair] = pair.getOutputAmount(amounts[i]);
        amounts[i + 1] = outputAmount;
        nextPairs[i] = nextPair;
      }
    } else {
      (0, import_tiny_invariant9.default)(currencyEquals(amount.currency, route.output), "OUTPUT");
      amounts[amounts.length - 1] = wrappedAmount(amount, route.chainId);
      for (let i = route.path.length - 1; i > 0; i--) {
        const pair = route.pairs[i - 1];
        const [inputAmount, nextPair] = pair.getInputAmount(amounts[i]);
        amounts[i - 1] = inputAmount;
        nextPairs[i - 1] = nextPair;
      }
    }
    this.route = route;
    this.tradeType = tradeType;
    this.inputAmount = tradeType === 0 /* EXACT_INPUT */ ? amount : route.input === ETHER ? CurrencyAmount.ether(amounts[0].raw) : amounts[0];
    this.outputAmount = tradeType === 1 /* EXACT_OUTPUT */ ? amount : route.output === ETHER ? CurrencyAmount.ether(amounts[amounts.length - 1].raw) : amounts[amounts.length - 1];
    this.executionPrice = new Price(
      this.inputAmount.currency,
      this.outputAmount.currency,
      this.inputAmount.raw,
      this.outputAmount.raw
    );
    this.nextMidPrice = Price.fromRoute(new Route(nextPairs, route.input));
    this.priceImpact = computePriceImpact(route.midPrice, this.inputAmount, this.outputAmount);
  }
  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  minimumAmountOut(slippageTolerance) {
    (0, import_tiny_invariant9.default)(!slippageTolerance.lessThan(ZERO), "SLIPPAGE_TOLERANCE");
    if (this.tradeType === 1 /* EXACT_OUTPUT */) {
      return this.outputAmount;
    } else {
      const slippageAdjustedAmountOut = new Fraction(ONE).add(slippageTolerance).invert().multiply(this.outputAmount.raw).quotient;
      return this.outputAmount instanceof TokenAmount ? new TokenAmount(this.outputAmount.token, slippageAdjustedAmountOut) : CurrencyAmount.ether(slippageAdjustedAmountOut);
    }
  }
  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance tolerance of unfavorable slippage from the execution price of this trade
   */
  maximumAmountIn(slippageTolerance) {
    (0, import_tiny_invariant9.default)(!slippageTolerance.lessThan(ZERO), "SLIPPAGE_TOLERANCE");
    if (this.tradeType === 0 /* EXACT_INPUT */) {
      return this.inputAmount;
    } else {
      const slippageAdjustedAmountIn = new Fraction(ONE).add(slippageTolerance).multiply(this.inputAmount.raw).quotient;
      return this.inputAmount instanceof TokenAmount ? new TokenAmount(this.inputAmount.token, slippageAdjustedAmountIn) : CurrencyAmount.ether(slippageAdjustedAmountIn);
    }
  }
  /**
   * Given a list of pairs, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  static bestTradeExactIn(pairs, currencyAmountIn, currencyOut, { maxNumResults = 3, maxHops = 3 } = {}, currentPairs = [], originalAmountIn = currencyAmountIn, bestTrades = []) {
    (0, import_tiny_invariant9.default)(pairs.length > 0, "PAIRS");
    (0, import_tiny_invariant9.default)(maxHops > 0, "MAX_HOPS");
    (0, import_tiny_invariant9.default)(originalAmountIn === currencyAmountIn || currentPairs.length > 0, "INVALID_RECURSION");
    const chainId = currencyAmountIn instanceof TokenAmount ? currencyAmountIn.token.chainId : currencyOut instanceof Token ? currencyOut.chainId : void 0;
    (0, import_tiny_invariant9.default)(chainId !== void 0, "CHAIN_ID");
    const amountIn = wrappedAmount(currencyAmountIn, chainId);
    const tokenOut = wrappedCurrency(currencyOut, chainId);
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      if (!pair.token0.equals(amountIn.token) && !pair.token1.equals(amountIn.token))
        continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO))
        continue;
      let amountOut;
      try {
        ;
        [amountOut] = pair.getOutputAmount(amountIn);
      } catch (error) {
        if (error.isInsufficientInputAmountError) {
          continue;
        }
        throw error;
      }
      if (amountOut.token.equals(tokenOut)) {
        sortedInsert(
          bestTrades,
          new Trade(
            new Route([...currentPairs, pair], originalAmountIn.currency, currencyOut),
            originalAmountIn,
            0 /* EXACT_INPUT */
          ),
          maxNumResults,
          tradeComparator
        );
      } else if (maxHops > 1 && pairs.length > 1) {
        const pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        Trade.bestTradeExactIn(
          pairsExcludingThisPair,
          amountOut,
          currencyOut,
          {
            maxNumResults,
            maxHops: maxHops - 1
          },
          [...currentPairs, pair],
          originalAmountIn,
          bestTrades
        );
      }
    }
    return bestTrades;
  }
  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pairs, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pairs the pairs to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param currencyAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pair
   * @param currentPairs used in recursion; the current list of pairs
   * @param originalAmountOut used in recursion; the original value of the currencyAmountOut parameter
   * @param bestTrades used in recursion; the current list of best trades
   */
  static bestTradeExactOut(pairs, currencyIn, currencyAmountOut, { maxNumResults = 3, maxHops = 3 } = {}, currentPairs = [], originalAmountOut = currencyAmountOut, bestTrades = []) {
    (0, import_tiny_invariant9.default)(pairs.length > 0, "PAIRS");
    (0, import_tiny_invariant9.default)(maxHops > 0, "MAX_HOPS");
    (0, import_tiny_invariant9.default)(originalAmountOut === currencyAmountOut || currentPairs.length > 0, "INVALID_RECURSION");
    const chainId = currencyAmountOut instanceof TokenAmount ? currencyAmountOut.token.chainId : currencyIn instanceof Token ? currencyIn.chainId : void 0;
    (0, import_tiny_invariant9.default)(chainId !== void 0, "CHAIN_ID");
    const amountOut = wrappedAmount(currencyAmountOut, chainId);
    const tokenIn = wrappedCurrency(currencyIn, chainId);
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i];
      if (!pair.token0.equals(amountOut.token) && !pair.token1.equals(amountOut.token))
        continue;
      if (pair.reserve0.equalTo(ZERO) || pair.reserve1.equalTo(ZERO))
        continue;
      let amountIn;
      try {
        ;
        [amountIn] = pair.getInputAmount(amountOut);
      } catch (error) {
        if (error.isInsufficientReservesError) {
          continue;
        }
        throw error;
      }
      if (amountIn.token.equals(tokenIn)) {
        sortedInsert(
          bestTrades,
          new Trade(
            new Route([pair, ...currentPairs], currencyIn, originalAmountOut.currency),
            originalAmountOut,
            1 /* EXACT_OUTPUT */
          ),
          maxNumResults,
          tradeComparator
        );
      } else if (maxHops > 1 && pairs.length > 1) {
        const pairsExcludingThisPair = pairs.slice(0, i).concat(pairs.slice(i + 1, pairs.length));
        Trade.bestTradeExactOut(
          pairsExcludingThisPair,
          currencyIn,
          amountIn,
          {
            maxNumResults,
            maxHops: maxHops - 1
          },
          [pair, ...currentPairs],
          originalAmountOut,
          bestTrades
        );
      }
    }
    return bestTrades;
  }
};

// src/router.ts
var import_tiny_invariant10 = __toESM(require("tiny-invariant"));
function toHex(currencyAmount) {
  return `0x${currencyAmount.raw.toString(16)}`;
}
var ZERO_HEX = "0x0";
var Router = class {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
  /**
   * Produces the on-chain method name to call and the hex encoded parameters to pass as arguments for a given trade.
   * @param trade to produce call parameters for
   * @param options options for the call parameters
   */
  static swapCallParameters(trade, options) {
    const etherIn = trade.inputAmount.currency === ETHER;
    const etherOut = trade.outputAmount.currency === ETHER;
    (0, import_tiny_invariant10.default)(!(etherIn && etherOut), "ETHER_IN_OUT");
    (0, import_tiny_invariant10.default)(!("ttl" in options) || options.ttl > 0, "TTL");
    const to = validateAndParseAddress(options.recipient);
    const amountIn = toHex(trade.maximumAmountIn(options.allowedSlippage));
    const amountOut = toHex(trade.minimumAmountOut(options.allowedSlippage));
    const path = trade.route.path.map((token) => token.address);
    const deadline = "ttl" in options ? `0x${(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3) + options.ttl).toString(16)}` : `0x${options.deadline.toString(16)}`;
    const useFeeOnTransfer = Boolean(options.feeOnTransfer);
    let methodName;
    let args;
    let value;
    switch (trade.tradeType) {
      case 0 /* EXACT_INPUT */:
        if (etherIn) {
          methodName = useFeeOnTransfer ? "swapExactETHForTokensSupportingFeeOnTransferTokens" : "swapExactETHForTokens";
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = useFeeOnTransfer ? "swapExactTokensForETHSupportingFeeOnTransferTokens" : "swapExactTokensForETH";
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = useFeeOnTransfer ? "swapExactTokensForTokensSupportingFeeOnTransferTokens" : "swapExactTokensForTokens";
          args = [amountIn, amountOut, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
      case 1 /* EXACT_OUTPUT */:
        (0, import_tiny_invariant10.default)(!useFeeOnTransfer, "EXACT_OUT_FOT");
        if (etherIn) {
          methodName = "swapETHForExactTokens";
          args = [amountOut, path, to, deadline];
          value = amountIn;
        } else if (etherOut) {
          methodName = "swapTokensForExactETH";
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        } else {
          methodName = "swapTokensForExactTokens";
          args = [amountOut, amountIn, path, to, deadline];
          value = ZERO_HEX;
        }
        break;
    }
    return {
      methodName,
      args,
      value
    };
  }
};

// src/fetcher.ts
var import_contracts = require("@ethersproject/contracts");
var import_networks = require("@ethersproject/networks");
var import_providers = require("@ethersproject/providers");

// src/abis/IPancakePair.json
var IPancakePair_default = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112"
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112"
      }
    ],
    name: "Sync",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112"
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112"
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "skim",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "swap",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/fetcher.ts
var import_tiny_invariant11 = __toESM(require("tiny-invariant"));

// src/abis/ERC20.json
var ERC20_default = [
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

// src/fetcher.ts
var TOKEN_DECIMALS_CACHE = {
  [1116 /* MAINNET */]: {
    "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A": 9
    // DGD
  }
};
var Fetcher = class {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
  /**
   * Fetch information for a given token on the given chain, using the given ethers provider.
   * @param chainId chain of the token
   * @param address address of the token on the chain
   * @param provider provider used to fetch the token
   * @param symbol optional symbol of the token
   * @param name optional name of the token
   */
  static async fetchTokenData(chainId, address, provider = (0, import_providers.getDefaultProvider)((0, import_networks.getNetwork)(chainId)), symbol, name) {
    var _a;
    const parsedDecimals = typeof ((_a = TOKEN_DECIMALS_CACHE == null ? void 0 : TOKEN_DECIMALS_CACHE[chainId]) == null ? void 0 : _a[address]) === "number" ? TOKEN_DECIMALS_CACHE[chainId][address] : await new import_contracts.Contract(address, ERC20_default, provider).decimals().then((decimals) => {
      TOKEN_DECIMALS_CACHE = {
        ...TOKEN_DECIMALS_CACHE,
        [chainId]: {
          ...TOKEN_DECIMALS_CACHE == null ? void 0 : TOKEN_DECIMALS_CACHE[chainId],
          [address]: decimals
        }
      };
      return decimals;
    });
    return new Token(chainId, address, parsedDecimals, symbol, name);
  }
  /**
   * Fetches information about a pair and constructs a pair from the given two tokens.
   * @param tokenA first token
   * @param tokenB second token
   * @param provider the provider to use to fetch the data
   */
  static async fetchPairData(tokenA, tokenB, provider = (0, import_providers.getDefaultProvider)((0, import_networks.getNetwork)(tokenA.chainId))) {
    (0, import_tiny_invariant11.default)(tokenA.chainId === tokenB.chainId, "CHAIN_ID");
    const address = Pair.getAddress(tokenA, tokenB);
    const [reserves0, reserves1] = await new import_contracts.Contract(address, IPancakePair_default, provider).getReserves();
    const balances = tokenA.sortsBefore(tokenB) ? [reserves0, reserves1] : [reserves1, reserves0];
    return new Pair(new TokenAmount(tokenA, balances[0]), new TokenAmount(tokenB, balances[1]));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ChainId,
  Currency,
  CurrencyAmount,
  ETHER,
  FACTORY_ADDRESS,
  FACTORY_ADDRESS_MAP,
  Fetcher,
  Fraction,
  INIT_CODE_HASH,
  INIT_CODE_HASH_MAP,
  InsufficientInputAmountError,
  InsufficientReservesError,
  JSBI,
  MINIMUM_LIQUIDITY,
  Pair,
  Percent,
  Price,
  Rounding,
  Route,
  Router,
  Token,
  TokenAmount,
  Trade,
  TradeType,
  WETH,
  currencyEquals,
  inputOutputComparator,
  tradeComparator
});
