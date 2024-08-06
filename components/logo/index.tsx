import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

type Props = {
  className?: string;
};

const Logo = ({ className = "text-5xl font-bold" }: Props) => {
  return (
    <div className={orbitron.className}>
      <p className={className}>fdBK</p>
    </div>
  );
};

export default Logo;
