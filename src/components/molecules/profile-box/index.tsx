import Image from "next/image";

export interface ProfileBoxProps {
  name: string;
  img_src: string;
  className?: string;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({
  name,
  img_src,
  className = "",
}) => {
  return (
    <div
      className={`${"bg-white cursor-pointer border-2 rounded-md flex gap-2 p-2 items-center justify-center"} ${className}`}
    >
      <span className="size-[32px] bg-transparent rounded-full relative">
        <Image
          fill
          alt={name}
          className="w-full h-full rounded-full object-cover"
          src={img_src ?? "/assets/images/tobias.png"}
        />
      </span>
      <span className="font-bold text-sm font-sans">{name}</span>
    </div>
  );
};

export default ProfileBox;
