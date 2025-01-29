import { LucidePencilLine } from "lucide-react";
import Image from "next/image";
import React from "react";

// type Props = {}

const ProfilePictureEdit = () => {
  const uploadProfilePic = () => {};
  return (
    <div className="relative">
      <Image
        src={"/admin_profile.png"}
        alt={""}
        width={150}
        height={200}
      ></Image>
      <div
        className="bg-[#CC0000] w-8 h-8 rounded-full flex items-center justify-center inset-28  absolute "
        onClick={uploadProfilePic}
      >
        <LucidePencilLine className="text-white cursor-pointer w-4 h-4" />
      </div>
    </div>
  );
};

export default ProfilePictureEdit;
