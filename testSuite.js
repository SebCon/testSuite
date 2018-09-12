const maxValue = Number.MAX_SAFE_INTEGER;
const minValue = Number.MIN_SAFE_INTEGER;

const testArrayString = [
  "",
  " ",
  "hallo",
  "1234",
  "123ab",
  "ba1234",
  "$Pe#BR3hjwyDZeAv",
  "j-7dp9c$TG-byth-MUVw",
  "+4XrMdFed%M#5_h4=Ds+mZv6ww_2@9-QxaD9EeZcR!37$8-c!Fy2yPy?W2!qZswM6Kj8c$3x-#gkwaBTCG=8K4Q5NmyVqVwmgT9A33yd$qK4nn%QEAzSpqxTQ9bBZ7bR",
  "ufqxn#yf&jL2?B?Azc2kja=xMNmra*p#GvzawzzU3bzx7cnbLf=mvUtRV&dCZB*MGxJZsPJ$TV42QAvQ@tAPuu6ZakM&bJP6n3gna?GAd@CCPmvQ%wA2CEUTpfTFwYXX=$fmVZL#JjKM7rCGY=gS@@gyTRD#K-x2NXbWjaPUBD9RYfxakEY443!Dhk_aUp4VFnZbLt9#J*sRANVX9D@_cpGPDPsefgSqfqy!vjs$q$GTJfEAbXtA5hb2kDcfSVkZ",
  "X0vtOYLr9STHEG32cpZVuIl7qYY3iJSf0xvszq9LS4R19KhqhsQ15wIykOb0EmjOstHrxqJbHLDzjGoWD3l0YQLftdfsYS4h43R6KTIS7Au1JmK33Gqa0ZKlYANkneCH8oZnn21yBmMPJ7Pk0CNQFCSvLNIldNt2fjQuHKQ5AIN8mtXb0L31mkeUK0h82Mgf097rrnsvyWJXgB7JvgH0enTCcTbUIyMM3WKza5l7s16N7Qtsa900za5eywNGpPJN",
];

const testArrayBool = [true, false];

const testArrayInt = [10, -10, 0, maxValue, minValue];

const testArrayFloat = [
  0.1,
  -0.1,
  0.000001,
  -0.000001,
  Math.E,
  Math.exp(-1),
  Math.SQRT1_2,
  1.2246467991473533e-15,
  0.0314E+2,
  -0.0314E+2
];

const testArrayNonsens = [NaN, null, undefined, {}, function() {}];

const testMapping = [
  { parameter: "string", testArray: testArrayString },
  { parameter: "boolean", testArray: testArrayBool },
  { parameter: "integer", testArray: testArrayInt },
  { parameter: "float", testArray: testArrayFloat },
  { parameter: "nonsens", testArray: testArrayNonsens },
];

let outputMapping = testMapping;

export class testSuite {
  isValidAdditional(additionals) {
    return true;
  }

  createAddional(name, testArr) {
    return { parameter: name, testArray: testArr };
  }

  clearMapping() {
    outputMapping = testMapping;
  }

  getTestText(elem, dat, result) {
    return (
      "parameter " +
      elem.parameter +
      " (" +
      dat +
      ") should return " +
      result
    );
  }

  testOnlyList(list) {
      if (list && list.length > 0) {
        return testMapping.filter(dat => list.indexOf(dat.parameter) >= 0);
      }

      return [];
  }

  getMappingList(additionals) {
    if (additionals && this.isValidAdditional(additionals)) {
      outputMapping.concat(additionals);
    }
    return outputMapping;
  }
}
