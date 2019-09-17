var students = [
    {
        NAME: "Ifeoma",
        LEVEL: 300,
        AGE: 25,
        GRADE: [100],
        TRIBE: "igbo",
        DEPARTMENT: "computer science",
        HEIGHT: "5.7",
        ADDERESS: "no 5 creek close",
        GENDER: "female"
    },
    {
        NAME: "Gift",
        LEVEL: 300,
        AGE: 25,
        GRADE:[95],
        TRIBE: "igala",
        DEPARTMENT: "computer science",
        HEIGHT: "4.0",
        ADDRESS: "three countainer",
        GENDER: "female"
    },
    {
        NAME: "elyon",
        LEVEL: 300,
        AGE: "24",
        GRADE:[100],
        TRIBE: "igala",
        DEPARTMENT: "computer science",
        HEIGHT: "5.7",
        ADDRESS: "zion hostel",
        GENDER: "female"
    },
    {
        NAME: "Charlse",
        LEVEL: 300,
        AGE: 25,
        GRADE:[95],
        TRIBE: "IGBO",
        DEPARTMENT: "computer science",
        HEIGHT: "5.3",
        ADDRESS: "katako",
        GENDER: "male"
    },
    {
        NAME: "tosin",
        LEVEL:300,
        AGE: 24,
        GRADE:[100],
        TRIBE: "yoruba",
        DEPARTMENT: "computer science",
        HEIGHT: "5.6",
        ADDRESS: "farin gada",
        GENDER: "female"
    },
    {
        NAME: "Victoria",
        LEVEL: 300,
        AGE: 25,
        GRADE: [95],
        TRIBE: "bass",
        DEPARTMENT: "computer science",
        HEIGHT: "5.0",
        ADDRESS: "forestry",
        GENDER: "female"
    },
    {
        NAME: "Mariam",
        LEVEL: 300,
        AGE: 27,
        GRADE:[90],
        TRIBE: "igala",
        DEPARTMENT: "computer science",
        HEIGHT: "5.7",
        ADDRESS: "behind pst",
        GENDER: "female"
    },
    {
        NAME: "Yohanna",
        LEVEL: 300,
        AGE: 25,
        GRADE: [100],
        TRIBE: "Afizere",
        DEPARTMENT: "computer science",
        HEIGHT: "5.7",
        ADDRESS: "anguwa rukuba",
        GENDER: "male"
    },
    {
        NAME: "Nanret",
        LEVEL: 300,
        AGE: 23,
        GRADE:[99],
        TRIBE: "magwalvu",
        DEPARTMENT: "computer science",
        HEIGHT: "4.6",
        ADDRESS: "maza",
        GENDER: "female"
    },
    {
        NAME: "Elizabeth",
        LEVEL: 400,
        AGE: 27,
        GRADE:[100],
        TRIBE: "ibibio",
        DEPARTMENT: "computer science",
        HEIGHT: "4.7",
        ADDRESS: "farin gada",
        GENDER: "female"
    },
    {
        NAME: "Susan",
        LEVEL: 300,
        AGE: 25,
        GRADE:[99],
        TRIBE: "idoma",
        DEPARTMENT: "computer science",
        HEIGHT: 300,
        ADDRESS: "farin gada",
        GENDER: "female"
    },
    {
        NAME: "Martins",
        LEVEL: 300,
        AGE: 25,
        GRADE:[79],
        TRIBE: "kangoro",
        DEPARTMENT: "computer science",
        HEIGHT: "5.8",
        ADDRESS: "odus",
        GENDER: "male"
    },
    {
        NAME: "Paul",
        LEVEL: 400,
        AGE: "29",
        GRADE:[85],
        TRIBE: "igbo",
        DEPARTMENT: "computer science",
        HEIGHT: "6.7",
        ADDRESS: "odus",
        GENDER: "male" 
    },
    {
        NAME: "Joy",
        LEVEL: 300,
        AGE: 23,
        GRADE:[90],
        TRIBE: "benin",
        DEPARTMENT: "computer science",
        HEIGHT: "4.3",
        ADDERESS: "ring road",
        GENDER: "female"
    },
    {
        NAME: "Josephine",
        LEVEL: 300,
        AGE: 23,
        GRADE:[90],
        TRIBE: "eggon",
        DEPARTMENT: "computer science",
        HEIGHT: "5.5",
        ADDRESS: "ring road",
        GENDER: "female"
    },
    {
        NAME: "Peter",
        LEVEL: 300,
        AGE: 23,
        GRADE:[80],
        TRIBE: "igala",
        DEPARTMENT: "computer science",
        HEIGHT: "3.5",
        ADDRESS: "c brigde",
        GENDER: "male"
    },
    {
        NAME: "Uzaifat",
        LEVEL: 300,
        AGE: 25,
        GRADE:[89],
        TRIBE: "mwagavul",
        DEPARTMENT: "computer science",
        HEIGHT: "4.3",
        ADDRESS: "dodo street",
        GENDER: "male"
    },
    {
        NAME: "Deborah",
        LEVEL: 300,
        AGE: 25,
        GRADE:[100],
        TRIBE: "plateau",
        DEPARTMENT: "computer science",
        HEIGHT: "4.5",
        ADDRESS: "ring road",
        GENDER: "female"
    },
    {
        NAME: "Steve",
        LEVEL: 300,
        AGE: 24,
        GRADE:[100],
        TRIBE: "igbo",
        DEPARTMENT: "computer science",
        HEIGHT: "6.5",
        ADDRESS: "katako",
        GENDER: "male"
    },
    {
        NAME: "Tiwa",
        LEVEL: 300,
        AGE: 26,
        GRADE:[70],
        TRIBE: "yoruba",
        DEPARTMENT: "computer science",
        HEIGHT: "5.7",
        ADDRESS: "nasararawa gwom",
        GENDER: "female"
    },
    {
        NAME: "Kevin",
        LEVEL: 300,
        AGE: 23,
        GRADE:[50],
        TRIBE: "shsndam",
        DEPARTMENT: "computer science",
        HEIGHT: "5.0",
        ADDRESS: "maza",
        GENDER: "male"
    },
    {
        NAME: "K Nanbal",
        LEVEL: 300,
        AGE: 25,
        GRADE:[89],
        TRIBE: "mupun",
        DEPARTMENT: "computer science",
        HEIGHT: "5.0",
        ADDRESS: "legislative",
        GENDER: "male"
    }

];
var tr = document.getElementById("table");
students.forEach(student => {
    


var tr = document.createElement('tr');

var td1 =document.createElement('td');
td1.style.backgroundColor= "purple";
td1.style.textAlign = "center";
td1.innerHTML= student.NAME;
var td2 =document.createElement('td');
td2.style.backgroundColor= "pink";
td2.style.textAlign = "center";
td2.innerHTML= student.LEVEL;
var td3 =document.createElement('td');
td3.style.backgroundColor= "purple";
td3.style.textAlign = "center";
td3.innerHTML= student.AGE;
var td4 =document.createElement('td');
td4.style.backgroundColor= "pink";
td4.style.textAlign = "center";
td4.innerHTML= student.GRADE;
var td5 =document.createElement('td');
td5.style.backgroundColor= "purple";
td5.style.textAlign = "center";
td5.innerHTML= student.TRIBE;
var td6 =document.createElement('td');
td6.style.backgroundColor= "pink";
td6.style.textAlign = "center";
td6.innerHTML= student.DEPARTMENT;
var td7 =document.createElement('td');
td7.style.backgroundColor= "purple";
td7.style.textAlign = "center";
td7.innerHTML= student.HEIGHT;
var td8 =document.createElement('td');
td8.style.backgroundColor= "pink";
td8.style.textAlign = "center";
td8.innerHTML= student.ADDRESS;
var td9 =document.createElement('td');
td9.style.backgroundColor= "purple";
td9.style.textAlign = "center";
td9.innerHTML= student.GENDER;


tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
table.appendChild(tr);
});


var NAME = document.getElementById("NAME");
var address = document.getElementById("LEVEL");
var grade = document.getElementById("AGE");
var age = document.getElementById("GRADE");
var gender = document.getElementById("TRIBE");
var level = document.getElementById("DEPARTMENT");
var height = document.getElementById("HEIGHT");
var department = document.getElementById("ADDRESS");
var tribe = document.getElementById("GRADE");

document.getElementById("btn").addEventListener("click",() => {
    console.log(NAME.value,LEVEL.value,AGE.value,GRADE.value,TRIBE.value,DEPARTMENT.value,HEIGHT.value,ADDRESS.value,GENDER.value);
    
})



