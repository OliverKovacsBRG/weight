// Oliver Kovacs 2021

const assert = require("assert");
const heaviest = require("./index.js");

// generate test data
const data = Array.from({ length: 5 }, (_, n) => {
    n += 1;
    const length = Math.pow(2, n) - 1;
    return Array.from({ length }, (_, out) => {
        return {
            in: Array.from({ length }, _ => 0).map((e, i) => i == out ? 1 : e),
            out
        };
    });
});

// run tests
(test = data => {
    data.forEach(tests => {
        tests.forEach(test => {
            const [ exp, out ] = [ test.out, heaviest(test.in) ];
            try {
                assert(exp === out);
            }
            catch (error) {
                console.error(error);
                console.log(`data: ${test.in}`);
            }
            console.log(`expected: ${exp} output: ${out}`);
        });
    });
})(data);