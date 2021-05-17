'use strickt';
module.export=(req,res)=>{
    res.status(404).json({
        status:400,
        message:'not found'
    });
};