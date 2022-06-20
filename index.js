const employee = {
    name: "Dakshata",
    streetAddress: "Midvale"
};

function updateEmployeeWithKeyAndValue(emp,key,value){
    let employee = {...emp};
    employee[key] = value;
    return employee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(emp,key,value){
    emp[key] = value;
    return emp;
}
function deleteFromEmployeeByKey(emp,key){
    let e = {...emp};
    delete e[key]
    return e;
}
function destructivelyDeleteFromEmployeeByKey(emp,key){
    delete emp[key];
    return emp;
}