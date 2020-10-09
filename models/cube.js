const {
    v4
} = require('uuid');
const fs = require('fs');
const path = require('path');
const dbFilePath = path.join(__dirname, '../', 'config/database.json');


class Cube {

    constructor(name, description, imageUrl, diffLevel) {
        this.id = v4()
        this.name = name || 'no name';
        this.description = description;
        this.imageUrl = imageUrl || 'placeholder';
        this.diffLevel = diffLevel || 0;
    }

    save() {

        const currentCube = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            diffLevel: this.diffLevel
        }
        fs.readFile(dbFilePath, (err, dbData) => {
            if (err) {
                throw err
            }
            const dbArrayCubes = JSON.parse(dbData);

            dbArrayCubes.push(currentCube);
           
            fs.writeFile(dbFilePath, JSON.stringify(dbArrayCubes), error => {
                if (error) {
                    throw new error;
                }
                console.log('New cubucle is successfully stored!');
            })
        })
        
    }
    
      
      
}


module.exports = Cube;