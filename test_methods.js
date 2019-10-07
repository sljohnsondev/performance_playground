const path = require('path');
module.exports = {
    create_test_array,
    existing,
    pathName,
    replaceExt,
    sliceExt,
    regExExt,
    substrExt
};

function existing(all_files) {
    const final_values = [];
    all_files.forEach(value => {
        final_values.push(value.substr(0,value.length-4));
    });
    return final_values;
}

function pathName(all_files) {
    return all_files.map(file => path.parse(file));
}

function replaceExt(all_files) {
    return all_files.map(file => file.replace('.hdb', ''));
}

function sliceExt(all_files) {
    return all_files.map(file => file.slice(0, -4))
}

function regExExt(all_files) {
    return all_files.map(file => file.replace(/\.[^/.]+$/, ""))
}

function substrExt(all_files) {
    return all_files.map(file => file.substr(0,file.length-4))
}

function create_test_array(arr_size) {
        let test_array = [];
        for (let i = 1; i <= arr_size; i++) {
                test_array.push(`${i+1234567890123456}.hdb`);
        }
        return test_array;
}