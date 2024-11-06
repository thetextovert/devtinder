const adminAuth=(req,res,next)=>{
    const token="xyz";
    const isAdminAuthenticated=token==="xyz";
    if(!isAdminAuthenticated){
      res.status(401).send("Unauthorised access");  
    }else{
        next();
    }
}

module.exports={
adminAuth 
}