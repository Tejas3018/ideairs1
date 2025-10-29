"use server";
import {auth}from "@/auth";
import {db}from "@/lib/db";

export const getUserByID = async(id:string)=>{
    try{
        const user=await db.user.findUnique({
            where:{id},
            include:{accounts:true},

        });

        return user;

    }catch (error){
        console.error(error);
        return null;
    }
    }

export const getAccountByUserID = async(userId:string)=>{
    try{
        const account=await db.account.findFirst({
            where:{userId}
        });
        return account;
    }catch (error){
        console.error(error);
        return null;
    }
}

export const currentUser = async()=>{
    const user = await auth();
    return user?.user;
}
