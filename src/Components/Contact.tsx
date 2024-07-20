import {useRef, useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import { validateForm } from "./Validation";
import toast from "react-hot-toast";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const formRef = useRef<HTMLFormElement>(null);
    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id, value)})
    }
    const handleSubmit=(e :React.FormEvent)=>{
        e.preventDefault();
        setIsLoading(true);
        let valid=true;
        let newFormError:{[key:string]:string}={};
        for(let key in formData){
            const error=validateForm(key, formData[key]);
            if(error.length>0){
                newFormError[key]=error;
                valid=false;
            }
        }
        setFormError(newFormError);
        if(valid){
            const SERVICE_ID = process.env.REACT_APP_SERVICE_ID || '';
            const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY || '';
            const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID || '';
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
            .then(() => {
                setFormData(form);
                toast.success('Email sent sucessfully!', {duration:4000});
                setIsLoading(false);
          }, (error) => {
            toast.error(error.text, {duration:4000});
            setIsLoading(false);
          });
            
        }
        else{
            toast.error('Some error occurred!', {duration:4000});
            setIsLoading(false);
        }
    }

    const btn = useMatches({
        xsm: 'xs',
        sm: "sm",
        md: 'md',
        lg: "lg"
    })
    return <div className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0   my-10  font-mono" id="Contact">
        <h1 className="text-4xl  sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white"><span className="text-primaryColor">05.&nbsp;</span>Contact</h1>
        <div data-aos="flip-left" data-aos-duration="800" className="w-[70%] lg-mx:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm-mx:p-4">
            <div className=" text-3xl flex gap-2 items-center text-white font-semibold sm-mx:text-2xl xs-mx:text-xl">Let's Connect<IconTopologyStar3 className="w-10 text-primaryColor h-10 sm-mx:w-7 sm-mx:h-7" /></div>
            <form ref={formRef} onSubmit={handleSubmit}>
            <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange}  error={formError.name}/>
            <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange}  error={formError.email}/>
            <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange}  error={formError.phone}/>
            <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange}  error={formError.message}/>
            <Button type="submit" disabled={isLoading} fullWidth rightSection={isLoading ? null: <IconArrowRight size={20} />}
                className="!text-bgColor !font-bold " variant="filled" size={btn} radius="lg" color="#64FFDA">{isLoading ? "Sending..." : "Send"}</Button>
            </form>
        </div>
    </div>
}
export default Contact;