
// import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
  // const session =useSession();
  // const { status } = session;

  // onSubmit: async (values) => {
  //   const { email, password } = values;
  //   const res = await signIn("credentials", {
  //     email,
  //     password,
  //     redirect: false,
  //   });
  //   if (res?.error) {
  //     toast.error("Invalid email or password");
  //     if (res?.url) router.replace("/");
  //   } else {
  //     router.push("/");
  //   }
  // }

    return (
        <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
        <section className="flex flex-col gap-3">
          <div className="flex justify-center">
            <Image className="h-12" src="/logo.png" alt="Logo" width={100} height={100}/>
          </div>
          <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-sm md:min-w-[440px] w-full">
            <h1 className="text-center font-bold text-xl mb-6">Sign in With Email</h1>
            <form
            //   onSubmit={(e) => {
            //     e.preventDefault();
            //     handleSignUp();
            //   }}
              className="flex flex-col gap-3"
            >
             
              <input
                placeholder="Enter Your Email"
                type="email"
                name="user-email"
                id="user-email"
                // value={data?.email}
                // onChange={(e) => {
                //   handleData("email", e.target.value);
                // }}
                className="px-3 py-2 rounded-sm border focus:outline-none w-full"
              />
              <input
                placeholder="Enter Your Password"
                type="password"
                name="user-password"
                id="user-password"
                // value={data?.password}
                // onChange={(e) => {
                //   handleData("password", e.target.value);
                // }}
                className="px-3 py-2 rounded-sm border focus:outline-none w-full"
              />
              <button
                // isLoading={isLoading}
                // isDisabled={isLoading}
                type="submit"
                color="primary"
                className='bg-[#3d9469] text-white py-3 rounded-sm'
              >
                Sign Up
              </button>
            </form>
            <div className="flex justify-between">
              <Link href={`/sign-up`}>
                <button className="font-normal text-sm text-blue-700">
                  Already user? <span className='text-[16px] font-bold'>Sign Up</span> 
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
};

export default Login;