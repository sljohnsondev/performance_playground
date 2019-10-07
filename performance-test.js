const Benchmark = require('benchmark');
const {
    create_test_array, existing, pathName, replaceExt,sliceExt, regExExt, substrExt
} = require('./test_methods');
const test_array = create_test_array(1200);
const single_val_arr = ["1234567890123456.hdb"];
const test_val = single_val_arr;

const suite = new Benchmark.Suite;

suite
    .add('existing#method', function() {
        existing(test_val)
    })
    .add('pathName#method', function() {
        pathName(test_val)
    })
    .add('replaceExt#method', function() {
        replaceExt(test_val)
    })
    .add('sliceExt#method', function() {
        sliceExt(test_val)
    })
    .add('regExExt#method', function() {
        regExExt(test_val)
    })
    .add('substrExt#method', function() {
        substrExt(test_val)
    })
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target))
    })
    .on('complete', function() {
        console.log('The fastest method is ' + this.filter('fastest').map('name'))
    })
    // run async or not
    .run({ 'async': false });

