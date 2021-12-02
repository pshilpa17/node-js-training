const Joi =require('joi');
const loginValidation=(val)=>{
    const schema =Joi.object({
        email:Joi.string().min(6),
        password:Joi.string().min(4)
    })
return schema.validate(val)
}
module.exports=loginValidation;