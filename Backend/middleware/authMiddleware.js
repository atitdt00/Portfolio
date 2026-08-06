import jwt from 'jsonwebtoken'
import User from '../Models/User.js'

const authMiddleware= async(req, res, next)=>{
    try{
        const authHeader= req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                success: false,
                message: "Access denied.",
            })
        }

        const token = authHeader.split("")[1];

        const decoded= jwt.verify(token, process.env.JWT_SECRET);

        req.user= await User.findById(decoded.id).select("-password");

        next()  
    }catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Invalid or expired token.",
        })
    }
}

export default authMiddleware;