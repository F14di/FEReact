export const USER={ 
    details:{
        firstName:'Emad',
        lastName:'Silawi',
        workSite:{
            name:'Nazareth',
            id:1,
            country:{
                name:'Israel',
                id:1
            }
        },
        manager:{name:'Shahar',id:2},
        phone:'058-9999999',
        email:'emad@amdocs.com',
        department:{name:'R&D',id:1},
        lastLogin:'29/08/2019',
    },
    roles:{
        roles:[{
            id:1,
            name:'Manager',
            description:'Description unavailable'
        }]
    },
    img:{
        imgURL:'image unavailable',
    }
}


// const loggedInUser={
// 	userId: 0,
// 	name:""
// };

// const ROLES=[
// 	{id:1,
// 		name:"manager"},
// 	{id:2,
// 	name:"admin"},
// 	{id:3,
// 	name:"user"},
// ]

// const USER={
// 	employeeId:2153,
// 	firstName:"Emad",
// 	lastName:"Silawi",
// 	managerName:"Shahar Grauman",
// 	managerId: 1387,
// 	workSite:"Nazareth",
// 	lastLogin:17/07/2019,
// 	department:"R&D",
// 	email:"e.silawi@gmail.com",
// 	phone:"099999991",
// 	roles:[
// 			{roleID: "1", 
// 			roleName:"Manager"},
// 			{roleID: "2", 
// 			roleName:"Employee"},
// 			],
// };

export const USERS=[
    {
        id : 1,
        employeeNumber: 1144,
        firstName:"Emad",
        lastName:"Silawi",
        roles: ["Employee","Manager","Amin"],
        department:"R&D",
        workSite:"Nazareth",
        deactivated: true
    },{
        id : 2,
        employeeNumber: 233,
        firstName:"Fadi",
        lastName:"Mohammad",
        roles:"Team Leader",
        department:"R&D",
        workSite:"Nazareth",
        deactivated: true
    },{
        id : 3,
        employeeNumber: 362,
        firstName:"Chis",
        lastName:"Issa",
        roles:"Employee",
        department:"QA Automation",
        workSite:"Ra'anana",
        deactivated: false
    },{
        id : 4,
        employeeNumber: 445,
        firstName:"Samer",
        lastName:"Saida",
        roles:"Employee",
        department:"DB Analysis",
        workSite:"Nazareth",
        deactivated: false
    },{
        id : 5,
        employeeNumber: 345,
        firstName:"Shahar",
        lastName:"Grauman",
        roles:"Manager",
        department:"R&D",
        workSite:"Nazareth",
        deactivated: true
    },{
        id : 6,
        employeeNumber: 12,
        firstName:"Ezer",
        lastName:"Biton",
        roles:"CEO",
        department:"Finance",
        workSite:"Ra'anana",
        deactivated: false
    },
    ]
    
    
    // const USERS__d3=[
    //     {
    //         groupBy:"work site",
    //         users:[{     site:"Nazareth",
    //                         numberOfUsers:1000
    //                     },
    //                     {   site:"Ra'anana",
    //                         numberOfUsers:4360
    //                     },
    //                     {    site:"Haifa",
    //                         numberOfUsers:1237
    //                     },
    //                     {
    //                         site:"Beer-Sheva",
    //                         numberOfUsers:1382
    //                     }] 
    //     },
        
    //     {
    //         groupBy:"department",
    //         users:[{     Department:"R&D",
    //                         numberOfUsers:4395
    //                     },
    //                     {   Department:"QA",
    //                         numberOfUsers:1208
    //                     }] 
    //     },
    
    //     {
    //         groupBy:"role",
    //         users:[{     role:"Employee",
    //                         numberOfUsers:7816
    //                     },
    //                     {   role:"Manager",
    //                         numberOfUsers:613
    //                     },
    //                     {    role:"Admin",
    //                         numberOfUsers:42
    //                     }] 
    //     }
    // ]