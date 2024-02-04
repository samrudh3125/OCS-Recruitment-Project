import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import md5 from 'md5';
import { useState } from "react";
   
  export function Signin() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form>
        <CardBody className="flex flex-col gap-4">
          <Input autoComplete="on" onChange={(e)=>setEmail(e.target.value)} label="UserId" size="lg" />
          <Input autoComplete="on" type="password" onChange={(e)=>setPassword(md5(e.target.value))} label="Password" size="lg" />
        </CardBody>
        </form>
        <CardFooter className="pt-0">
          <Button onClick={async() => {
            const response=await axios.post("http://localhost:3000/signin",{
              userId:email,
              password,
            });
            alert(response.data.message);
            navigate("/dashboard?userId="+email);
          }} variant="gradient" fullWidth>
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
    );
  }