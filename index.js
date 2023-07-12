
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


const questions = [
    {
      type: 'input',
      name: 'link',
      message: 'Enter the URL: ',
    },
    {
        type: 'input',
        name: 'name',
        message: "What's the file name? "
    }

  ];

  inquirer.prompt(questions)
  .then(answers => {
    console.log('Your link is :', answers.link);
    console.log('File name is :', answers.name);
    var qr_svg = qr.image(answers.link, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream(answers.name+'.png'));
    fs.writeFile('./URL.txt', answers.link , (err) =>{
        if(err) throw err;
    });

  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
