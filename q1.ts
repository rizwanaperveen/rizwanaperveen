import inquirer from 'inquirer'
import chalk from 'chalk'
const answer = await inquirer.prompt([{
    name:"age",
    type:"number",
    message:"Enter your Age:"
}]);
console.log("InshaAllah,in " + (60-answer.age) + " years you will be 60 years old.");

 let answers = await inquirer.prompt([{
     name : "age",
     type: "number",
   message: "Enter your Age:"
 }]);
 console.log(chalk.blue("InshAllah,in " + (60 - answers.age) + "years you will be 60 years old."));
