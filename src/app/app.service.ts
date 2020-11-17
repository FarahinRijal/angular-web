// POPUP DETAILS
import { Injectable } from '@angular/core';

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    Picture: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
}

let employees: Employee[] = [
//     {
//     "ID": 7,
//     "FirstName": "Sandra",
//     "LastName": "Johnson",
//     "Prefix": "Mrs.",
//     "Position": "Controller",
//     "Picture": "images/employees/06.png",
//     "BirthDate": "1974/11/15",
//     "HireDate": "2005/05/11",
//     "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
//     "Address": "4600 N Virginia Rd."
// },
//  {
//     "ID": 10,
//     "FirstName": "Kevin",
//     "LastName": "Carter",
//     "Prefix": "Mr.",
//     "Position": "Shipping Manager",
//     "Picture": "images/employees/07.png",
//     "BirthDate": "1978/01/09",
//     "HireDate": "2009/08/11",
//     "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
//     "Address": "424 N Main St."
// }, {
//     "ID": 11,
//     "FirstName": "Cynthia",
//     "LastName": "Stanwick",
//     "Prefix": "Ms.",
//     "Position": "HR Assistant",
//     "Picture": "images/employees/08.png",
//     "BirthDate": "1985/06/05",
//     "HireDate": "2008/03/24",
//     "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
//     "Address": "2211 Bonita Dr."
// }, 
// {
//     "ID": 30,
//     "FirstName": "Kent",
//     "LastName": "Samuelson",
//     "Prefix": "Dr.",
//     "Position": "Ombudsman",
//     "Picture": "images/employees/02.png",
//     "BirthDate": "1972/09/11",
//     "HireDate": "2009/04/22",
//     "Notes": "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
//     "Address": "12100 Mora Dr"
// }
];

export class Product {
    ID: number;
    Name: string;
    Price: number;
    Current_Inventory: number;
    Backorder: number;
    Manufacturing: number;
    Category: string;
    ImageSrc: string;
}

let products: Product[] = [
//     {
//     ID: 1,
//     Name: "HD Video Player",
//     Price: 330,
//     Current_Inventory: 225,
//     Backorder: 0,
//     Manufacturing: 10,
//     Category: "Video Players",
//     ImageSrc: "images/products/1.png"
// }, {
//     ID: 3,
//     Name: "SuperPlasma 50",
//     Price: 2400,
//     Current_Inventory: 0,
//     Backorder: 0,
//     Manufacturing: 0,
//     Category: "Televisions",
//     ImageSrc: "images/products/3.png"
// }, {
//     ID: 4,
//     Name: "SuperLED 50",
//     Price: 1600,
//     Current_Inventory: 77,
//     Backorder: 0,
//     Manufacturing: 55,
//     Category: "Televisions",
//     ImageSrc: "images/products/4.png"
// }, {
//     ID: 5,
//     Name: "SuperLED 42",
//     Price: 1450,
//     Current_Inventory: 445,
//     Backorder: 0,
//     Manufacturing: 0,
//     Category: "Televisions",
//     ImageSrc: "images/products/5.png"
// }, {
//     ID: 6,
//     Name: "SuperLCD 55",
//     Price: 1350,
//     Current_Inventory: 345,
//     Backorder: 0,
//     Manufacturing: 5,
//     Category: "Televisions",
//     ImageSrc: "images/products/6.png"
// }, {
//     ID: 7,
//     Name: "SuperLCD 42",
//     Price: 1200,
//     Current_Inventory: 210,
//     Backorder: 0,
//     Manufacturing: 20,
//     Category: "Televisions",
//     ImageSrc: "images/products/7.png"
// }, {
//     ID: 8,
//     Name: "SuperPlasma 65",
//     Price: 3500,
//     Current_Inventory: 0,
//     Backorder: 0,
//     Manufacturing: 0,
//     Category: "Televisions",
//     ImageSrc: "images/products/8.png"
// }, {
//     ID: 9,
//     Name: "SuperLCD 70",
//     Price: 4000,
//     Current_Inventory: 95,
//     Backorder: 0,
//     Manufacturing: 5,
//     Category: "Televisions",
//     ImageSrc: "images/products/9.png"
// }, {
//     ID: 10,
//     Name: "DesktopLED 21",
//     Price: 175,
//     Current_Inventory: null,
//     Backorder: 425,
//     Manufacturing: 75,
//     Category: "Monitors",
//     ImageSrc: "images/products/10.png"
// }, {
//     ID: 12,
//     Name: "DesktopLCD 21",
//     Price: 170,
//     Current_Inventory: 210,
//     Backorder: 0,
//     Manufacturing: 60,
//     Category: "Monitors",
//     ImageSrc: "images/products/12.png"
// }, {
//     ID: 13,
//     Name: "DesktopLCD 19",
//     Price: 160,
//     Current_Inventory: 150,
//     Backorder: 0,
//     Manufacturing: 210,
//     Category: "Monitors",
//     ImageSrc: "images/products/13.png"
// }, {
//     ID: 14,
//     Name: "Projector Plus",
//     Price: 550,
//     Current_Inventory: null,
//     Backorder: 55,
//     Manufacturing: 10,
//     Category: "Projectors",
//     ImageSrc: "images/products/14.png"
// }, {
//     ID: 15,
//     Name: "Projector PlusHD",
//     Price: 750,
//     Current_Inventory: 110,
//     Backorder: 0,
//     Manufacturing: 90,
//     Category: "Projectors",
//     ImageSrc: "images/products/15.png"
// }, {
//     ID: 17,
//     Name: "ExcelRemote IR",
//     Price: 150,
//     Current_Inventory: 650,
//     Backorder: 0,
//     Manufacturing: 190,
//     Category: "Automation",
//     ImageSrc: "images/products/17.png"
// }, {
//     ID: 18,
//     Name: "ExcelRemote BT",
//     Price: 180,
//     Current_Inventory: 310,
//     Backorder: 0,
//     Manufacturing: 0,
//     Category: "Automation",
//     ImageSrc: "images/products/18.png"
// }, {
//     ID: 19,
//     Name: "ExcelRemote IP",
//     Price: 200,
//     Current_Inventory: 0,
//     Backorder: 325,
//     Manufacturing: 225,
//     Category: "Automation",
//     ImageSrc: "images/products/19.png"
// }
];

@Injectable()
export class Service {
    getEmployees(): Employee[] {
        return employees;
    }
    getStates() {
        return states;
    }
    getProducts() : Product[] {
        return products;
    }
}


// POPUP EDITING
// import { Injectable } from '@angular/core';

// export class Employee {
//     ID: number;
//     FirstName: string;
//     LastName: string;
//     Prefix: string;
//     Position: string;
//     BirthDate: string;
//     HireDate: string;
//     Notes: string;
//     Address: string;
//     StateID: number;
// }

export class State {
    ID: number;
    Name: string;
}

// let employees: Employee[] = [{
//     "ID": 1,
//     "FirstName": "John",
//     "LastName": "Heart",
//     "Prefix": "Mr.",
//     "Position": "CEO",
//     "BirthDate": "1964/03/16",
//     "HireDate": "1995/01/15",
//     "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
//     "Address": "351 S Hill St.",
//     "StateID": 5
// }, {
//     "ID": 2,
//     "FirstName": "Olivia",
//     "LastName": "Peyton",
//     "Prefix": "Mrs.",
//     "Position": "Sales Assistant",
//     "BirthDate": "1981/06/03",
//     "HireDate": "2012/05/14",
//     "Notes": "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
//     "Address": "807 W Paseo Del Mar",
//     "StateID": 5
// }, {
//     "ID": 3,
//     "FirstName": "Robert",
//     "LastName": "Reagan",
//     "Prefix": "Mr.",
//     "Position": "CMO",
//     "BirthDate": "1974/09/07",
//     "HireDate": "2002/11/08",
//     "Notes": "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
//     "Address": "4 Westmoreland Pl.",
//     "StateID": 4
// }, {
//     "ID": 4,
//     "FirstName": "Greta",
//     "LastName": "Sims",
//     "Prefix": "Ms.",
//     "Position": "HR Manager",
//     "BirthDate": "1977/11/22",
//     "HireDate": "1998/04/23",
//     "Notes": "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
//     "Address": "1700 S Grandview Dr.",
//     "StateID": 11
// }, {
//     "ID": 5,
//     "FirstName": "Brett",
//     "LastName": "Wade",
//     "Prefix": "Mr.",
//     "Position": "IT Manager",
//     "BirthDate": "1968/12/01",
//     "HireDate": "2009/03/06",
//     "Notes": "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
//     "Address": "1120 Old Mill Rd.",
//     "StateID": 13
// }, {
//     "ID": 6,
//     "FirstName": "Sandra",
//     "LastName": "Johnson",
//     "Prefix": "Mrs.",
//     "Position": "Controller",
//     "BirthDate": "1974/11/15",
//     "HireDate": "2005/05/11",
//     "Notes": "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
//     "Address": "4600 N Virginia Rd.",
//     "StateID": 44
// }, {
//     "ID": 7,
//     "FirstName": "Kevin",
//     "LastName": "Carter",
//     "Prefix": "Mr.",
//     "Position": "Shipping Manager",
//     "BirthDate": "1978/01/09",
//     "HireDate": "2009/08/11",
//     "Notes": "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
//     "Address": "424 N Main St.",
//     "StateID": 5
// }, {
//     "ID": 8,
//     "FirstName": "Cynthia",
//     "LastName": "Stanwick",
//     "Prefix": "Ms.",
//     "Position": "HR Assistant",
//     "BirthDate": "1985/06/05",
//     "HireDate": "2008/03/24",
//     "Notes": "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
//     "Address": "2211 Bonita Dr.",
//     "StateID": 4
// }, {
//     "ID": 9,
//     "FirstName": "Kent",
//     "LastName": "Samuelson",
//     "Prefix": "Dr.",
//     "Position": "Ombudsman",
//     "BirthDate": "1972/09/11",
//     "HireDate": "2009/04/22",
//     "Notes": "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
//     "Address": "12100 Mora Dr",
//     "StateID": 26
// }, {
//     "ID": 10,
//     "FirstName": "Taylor",
//     "LastName": "Riley",
//     "Prefix": "Mr.",
//     "Position": "Network Admin",
//     "BirthDate": "1982/08/14",
//     "HireDate": "2012/04/14",
//     "Notes": "If you are like the rest of us at DevAV, then you've probably reached out for help from Taylor. He does a great job as a member of our IT department.",
//     "Address": "7776 Torreyson Dr",
//     "StateID": 5
// }, {
//     "ID": 11,
//     "FirstName": "Sam",
//     "LastName": "Hill",
//     "Prefix": "Mr.",
//     "Position": "Sales Assistant",
//     "BirthDate": "1984/02/17",
//     "HireDate": "2012/02/01",
//     "Notes": "Sammy is proud to be a member of the DevAV team. He joined the team in 2012 and has been in the sales department from the beginning.\r\n\r\nHe has just picked up golf so you can find him on the links every weekend.",
//     "Address": "645 Prospect Crescent",
//     "StateID": 11
// }, {
//     "ID": 12,
//     "FirstName": "Kelly",
//     "LastName": "Rodriguez",
//     "Prefix": "Ms.",
//     "Position": "Support Assistant",
//     "BirthDate": "1988/05/11",
//     "HireDate": "2012/10/13",
//     "Notes": "Kelly loves people and that's why she joined DevAV's support department. One of the funniest people in the company, she does stand-up on the weekends at the Laugh Factory.",
//     "Address": "1601 W Mountain St.",
//     "StateID": 5
// }, {
//     "ID": 13,
//     "FirstName": "Natalie",
//     "LastName": "Maguirre",
//     "Prefix": "Mrs.",
//     "Position": "Trainer",
//     "BirthDate": "1977/10/07",
//     "HireDate": "2008/06/19",
//     "Notes": "Natalie travels the US and teaches our partners how to explain the benefits of our products to customers.\r\n\r\nShe is a proud wife and mom and volunteers her time at the elementary school.",
//     "Address": "6400 E Bixby Hill Rd",
//     "StateID": 29
// }, {
//     "ID": 14,
//     "FirstName": "Walter",
//     "LastName": "Hobbs",
//     "Prefix": "Mr.",
//     "Position": "Programmer",
//     "BirthDate": "1984/12/24",
//     "HireDate": "2011/02/17",
//     "Notes": "Walter has been developing apps and websites for DevAV since 2011. His passion is software and if you ever walk by his desk, you'll know why.\r\n\r\nWally once worked 72 hours straight - writing code and fixing bugs.",
//     "Address": "10385 Shadow Oak Dr",
//     "StateID": 13
// }];

let states: State[] = [
    // {
//     "ID": 1,
//     "Name": "Alabama"
// }, {
//     "ID": 2,
//     "Name": "Alaska"
// }, {
//     "ID": 3,
//     "Name": "Arizona"
// }, {
//     "ID": 4,
//     "Name": "Arkansas"
// }, {
//     "ID": 5,
//     "Name": "California"
// }, {
//     "ID": 6,
//     "Name": "Colorado"
// }, {
//     "ID": 7,
//     "Name": "Connecticut"
// }, {
//     "ID": 8,
//     "Name": "Delaware"
// }, {
//     "ID": 9,
//     "Name": "District of Columbia"
// }, {
//     "ID": 10,
//     "Name": "Florida"
// }, {
//     "ID": 11,
//     "Name": "Georgia"
// }, {
//     "ID": 12,
//     "Name": "Hawaii"
// }, {
//     "ID": 13,
//     "Name": "Idaho"
// }, {
//     "ID": 14,
//     "Name": "Illinois"
// }, {
//     "ID": 15,
//     "Name": "Indiana"
// }, {
//     "ID": 16,
//     "Name": "Iowa"
// }, {
//     "ID": 17,
//     "Name": "Kansas"
// }, {
//     "ID": 18,
//     "Name": "Kentucky"
// }, {
//     "ID": 19,
//     "Name": "Louisiana"
// }, {
//     "ID": 20,
//     "Name": "Maine"
// }, {
//     "ID": 21,
//     "Name": "Maryland"
// }, {
//     "ID": 22,
//     "Name": "Massachusetts"
// }, {
//     "ID": 23,
//     "Name": "Michigan"
// }, {
//     "ID": 24,
//     "Name": "Minnesota"
// }, {
//     "ID": 25,
//     "Name": "Mississippi"
// }, {
//     "ID": 26,
//     "Name": "Missouri"
// }, {
//     "ID": 27,
//     "Name": "Montana"
// }, {
//     "ID": 28,
//     "Name": "Nebraska"
// }, {
//     "ID": 29,
//     "Name": "Nevada"
// }, {
//     "ID": 30,
//     "Name": "New Hampshire"
// }, {
//     "ID": 31,
//     "Name": "New Jersey"
// }, {
//     "ID": 32,
//     "Name": "New Mexico"
// }, {
//     "ID": 33,
//     "Name": "New York"
// }, {
//     "ID": 34,
//     "Name": "North Carolina"
// }, {
//     "ID": 35,
//     "Name": "Ohio"
// }, {
//     "ID": 36,
//     "Name": "Oklahoma"
// }, {
//     "ID": 37,
//     "Name": "Oregon"
// }, {
//     "ID": 38,
//     "Name": "Pennsylvania"
// }, {
//     "ID": 39,
//     "Name": "Rhode Island"
// }, {
//     "ID": 40,
//     "Name": "South Carolina"
// }, {
//     "ID": 41,
//     "Name": "South Dakota"
// }, {
//     "ID": 42,
//     "Name": "Tennessee"
// }, {
//     "ID": 43,
//     "Name": "Texas"
// }, {
//     "ID": 44,
//     "Name": "Utah"
// }, {
//     "ID": 45,
//     "Name": "Vermont"
// }, {
//     "ID": 46,
//     "Name": "Virginia"
// }, {
//     "ID": 47,
//     "Name": "Washington"
// }, {
//     "ID": 48,
//     "Name": "West Virginia"
// }, {
//     "ID": 49,
//     "Name": "Wisconsin"
// }, {
//     "ID": 50,
//     "Name": "Wyoming"
// }, {
//     "ID": 51,
//     "Name": "North Dakota"
// }
];

// @Injectable()
// export class Service {
//     getEmployees() {
//         return employees;
//     }
//     getStates() {
//         return states;
//     }
// }