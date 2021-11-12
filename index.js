// Write your solution in this file!

const employee = {
    name: "Victor",
    streetAddress: "11 LakeWood",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeTwo = {...employee};

    employeeTwo[key] = value;

    return employeeTwo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeThree = {...employee};

    delete employeeThree[key];

    return employeeThree;

}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    
    return employee;
}