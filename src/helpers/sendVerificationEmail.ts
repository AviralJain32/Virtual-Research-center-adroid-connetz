import sgMail from '@sendgrid/mail';
import VerificationEmail from "../../emails/VerificationEmail";
import { render } from '@react-email/components';
import { ApiResponse } from '@/types/ApiResponse';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);



export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        console.log(email)
        await sgMail.send({
            from: 'jain24082004@gmail.com',
            to: email,
            subject: 'Adroid CMT Account Verification code',
            html:await render(VerificationEmail({username,otp:verifyCode})),
          });
          console.log("Your mail have send sucessfully")
        return {success:true,message:"verification email send sucessfully"}
    } catch (emailError) {
        console.log("error sending verification email",emailError)
        return {success:false,message:"failed to send verification email"}
    }
}