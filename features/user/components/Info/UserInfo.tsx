import { User } from '@/types/types';
import Image from 'next/image';

interface UserInfoProps {
  postUser: User;
}

const UserInfo = ({ postUser }: UserInfoProps) => {
  return (
    <div className="mx-auto mb-10 mt-10 flex max-w-[880px] gap-4 px-5">
      <div className="w-[120px] max-md:w-[60px]">
        {postUser.image ? (
          <Image
            className="rounded-full"
            src={postUser.image}
            width={120}
            height={120}
            alt=""
          />
        ) : (
          <Image
            className="rounded-full"
            src="/images/dammy.png"
            width={120}
            height={120}
            alt="dammy"
          />
        )}
      </div>
      <div>
        <h1 className="mb-3 text-xl font-bold max-md:mb-2 max-md:text-base">
          {postUser.name}
        </h1>
        <p className="text-base max-md:text-sm">{postUser.profile}</p>
      </div>
    </div>
  );
};

export default UserInfo;
