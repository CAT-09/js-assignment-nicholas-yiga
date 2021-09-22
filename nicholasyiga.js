//defining function 'person' and giving 7 parameters
function person(name,gender,age,character,personality,talent,career){
    //identifying objects and there attributes
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.character = character;
    this.personality=personality;
    this.talent=talent;
    this.career=career;
    //defining an object and a method
    this.attitude= function reaction(a){
        //allows the value of the function to be revealed out of the function
        return this.name + '' +'is' + a;
    }
    

}
//declaring 2 variables and and their attributes
let person1 = new person('stacy','female','22','curious','outgoing person','tennis','doctor')
let person2 = new person('Pax','male','25','stubborn',' leader','scoccer','hacker')
//prints the variable and its attributies
console.log(person2);


//defining function 'computer' and giving 7 parameters
function computer(brand,Ram,Memory,Speed,CPU,OS,processor){
    //identifying objects and there attributes
    this.brand = brand;
    this.Ram = Ram;
    this.Memory = Memory;
    this.Speed = Speed;
    this.CPU= CPU;
    this.OS=OS;
    this.processor=processor;
    //defining an object and a method
    this.cost= function price(a){
        //allows the value of the function to be revealed out of the function
        return this.brand + '' +'is' + a;
    }
    

}
//declaring 2 variables and and their attributes
let computer1 = new computer('HP','8GB','22','2TB','8.4GHz','Linux kali','i7')
let computer2 = new computer('Dell','4GB','25','1TB',' 2.4GHz','windows 11','i5')
//prints the variable and its attributies
console.log(computer2.cost(' -shs.1million'));


//defining function 'phone' and giving 7 parameters
function phone(type,producer,version,camera,security,charger,internet){
    //identifying objects and there attributes
    this.type= type;
    this.producer = producer;
    this.version = version;
    this.camera = camera;
    this.security=security;
    this.charger=charger;
    this.internet=internet;
    //defining an object and a method
    this.affordability= function howmuch(a){
        //allows the value of the function to be revealed out of the function
        return this.type +''+ 'is' + a;
    }
    

}
//declaring 2 variables and and their attributes
let phone1 = new phone('Note','Samsung','10plus','64mps','finger-print','c-type','4G')
let phone2 = new phone('iphone ','Apple','13pro-max',' 12Mps','facial-recognition','lightening-type','5G')
//prints the variable and its attributies
console.log(phone2.affordability('-shs.5million'));


function animal(name, color , type, gender) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.gender = gender;
        //below is another method
        this.cry = function(a){
            return this.name + ''+ a ;
        }
    
        
    }
    //new is a constructor
    let animal1 = new animal('elephant', 'grey', 'grey', 'wild','male');
    let animal2 = new animal('cat', 'white', 'domestic','female');
    console.log(animal1.cry('mows'));
    
    function woman(name,height,color,tribe,character,style) {
        this.name = name;
        this.height = height;
        this.color = color;
        this.tribe = tribe;
        this.character = character;
        this.style = style;
        // below is the latest way of writing javascript functions
        // here we discard the "function" keyword and we use arrow key
        this.laugh = (x) => {
            return this.name +  ' ' + 'laughs'  + ''+ x;
    
        }
     
    }
    let woman1 = new woman('sarah','tall', 'light','muganda', 'designer');
    console.log(woman1.laugh('silently'));

    //defining function 'food' and giving 7 parameters
function food(name,type,region,product,nutrient_content,importance,crop_type){
    //identifying objects and there attributes
    this.name = name;
    this.type = type;
    this.region = region;
    this.product = product;
    this.nutrient_content=nutrient_content;
    this.importance=importance;
    this.crop_type=crop_type;
    //defining an object and a method
    this.cost= function price(a){
        //allows the value of the function to be revealed out of the function
        return this.name + ' costs ' + a + 'a kilogram';
    }
    

}
//declaring 2 variables and and their attributes
let food1 = new food('Maize','cashcrop','central and west','maize flour','60%','energy','prop crop')
let food2 = new food('Millet','food crop','25','northern, eastern','millet flour',' 50%','body immunity','seasonal')
//prints the variable and its attributies
console.log(food1.cost('-shs.1000'));

//defining function 'school' and giving 7 parameters
function school(name,category,type,course,age_bracket,co_ciricular,studytime){
    //identifying objects and there attributes
    this.name = name;
    this.category = category;
    this.type = type;
    this.course = course;
    this.age_bracket=age_bracket;
    this.co_ciricular=co_ciricular;
    this.studytime=studytime;
    //defining an object and a method
    this.schoolfees= function tuition(a){
        //allows the value of the function to be revealed out of the function
        return this.name + ' , schoolfees ' +' is ' + a;
    }
    

}
//declaring 2 variables and and their attributes
let school1 = new school('Kabojja preparatory','secondary','high school','12-19','Football','tennis','6 years')
let school2 = new school('Makerere','tertiary','degree and diploma','stubborn',' 18-35','music dance and drama','4 years')
//prints the variable and its attributies
console.log(school1.schoolfees('shs.1million'));



