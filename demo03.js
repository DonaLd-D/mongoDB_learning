var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'JavaScript',
        SkillThree:'PHP'
    },
    regeditTime:new Date()
}

var workmate2={
    name:'ShengLei',
    age:30,
    sex:1,
    job:'JAVA后端',
    skill:{
        skillOne:'HTML+CSS',
        SkillTwo:'J2EE',
        SkillThree:'PPT'
    },
    regeditTime:new Date()
}

var workmate3={
    name:'MinJie',
    age:20,
    sex:1,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
}

var db=connect('company')
var workmateArray=[workmate1,workmate2,workmate3]
db.workmate.insert(workmateArray)
print('[SUCCESS]: The data was inserted successfully.');

db.workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})

db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})

db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})

db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})

db.workmate.update({},{$set:{interset:[]}},{multi:true})

db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})

