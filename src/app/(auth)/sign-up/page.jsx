'use client'
import Image from "next/image";
import Link from "next/link";


const page = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      const res = await fetch('http://localhost:3000/api/auth/sign-up/newUser', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to sign up");
      }
      const data = await res.json();
      console.log('Response data:', data);
      alert("User signed up successfully!");
    } catch (error) {
     
      alert('An error occurred while signing up.');
    }


  }
  return (
    <main className="w-full flex justify-center items-center bg-gray-300 md:p-24 p-10 min-h-screen">
      <section className="flex flex-col gap-3">
        <div className="flex justify-center">
          <Image className="h-12" src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex flex-col gap-3 bg-white md:p-10 p-5 rounded-sm md:min-w-[440px] w-full">
          <h1 className="text-center font-bold text-xl mb-6">Sign Up With Email</h1>
          <form
            onSubmit={handleSignUp}
            className="flex flex-col gap-3"
          >
            <input
              placeholder="Enter Your Name"
              type="text"
              name="name"
              id="user-name"

              className="px-3 py-2 rounded-sm border focus:outline-none w-full"
            />
            <input
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id="email"

              className="px-3 py-2 rounded-sm border focus:outline-none w-full"
            />
            <input
              placeholder="Enter Your Password"
              type="password"
              name="password"
              id="password"

              className="px-3 py-2 rounded-sm border focus:outline-none w-full"
            />
            <button

              type="submit"
              color="primary"
              className='bg-[#3d9469] text-white py-3 rounded-sm'
            >
              Sign Up
            </button>
          </form>
          <div className="flex justify-between">
            <Link href={`/login`}>
              <button className="font-normal text-sm text-blue-700">
                Already user? <span className='text-[16px] font-bold'>Sign in</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;