import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://pbs.twimg.com/profile_images/1178631635606151168/yIlrcg4o_400x400.jpg"
          alt="logo"
          width="200"
          height="200"
        />
        <button
          onClick={authenticate}
          className="bg-[#FEC000] rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
          alt="bg"
        />
      </div>
    </div>
  );
}

export default Login;
