"use strict";
//Object Types lesson and Arrays Types lesson
var personExplicit = {
    name: "Maximilian",
    age: 30,
};
var personInferred = {
    name: "Maximilian",
    age: 30,
};
var personTuple = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports, Cooking"],
    role: [2, "author"],
};
// .push() still works on Tuples and won't be caught by TS
personTuple.role.push("admin");
// personInferred.role[1] = 10;
console.log(personExplicit.name);
for (var _i = 0, _a = personTuple.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
//let's say we want to store values such as readOnly, Author,
// in the passed we may have had
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
var personWithEnum = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports, Cooking"],
    role: Role.ADMIN,
};
if (personWithEnum.role === Role.ADMIN) {
    console.log("we are admins");
}
