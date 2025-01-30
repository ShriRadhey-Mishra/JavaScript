// Anything that has been exported can be imported using the import keyword with the following format.
// import { name_of_variable_or_function_exported } from "relative_path_from_where_it_is_exported"
// import { apiKey } from "./util.js";
// console.log(apiKey); // checking if the import worked or not

// Importing the default export. While naming this variable we don't use the curly braces.
// import myLife from "./util.js"
// console.log(myLife);

// Importing multiple items from same file part 1. Here while importing you can give alias to function or variable names
// import { apikey as Key, myName as Name } from "./util.js";
// console.log(Key, Name);

// Importing multiple items from the same file part 2
// import * as util from "./util.js";
// console.log(util.myName, util.apikey);

