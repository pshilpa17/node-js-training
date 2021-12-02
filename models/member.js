//Data Source is members.json
const members = require('../datastore/members.json')
const fs=require('fs');


//add empty Members
let Members={}

Members.getAll = () => {
    return members
}
Members.getMemberById= (id) =>{
    return members.filter(member=>member.id === parseInt(id));
}
Members.addNew = (memberObj)=>{
    members.push(memberObj);
    fs.writeFile('/member.json',members,function(err){
        if(err){
            return false
            console.log(err)
        }
        else{
            return true
        }
    })
}
//export the module
module.exports = Members;

