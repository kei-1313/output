import Image from 'next/image';
import Link from 'next/link';

interface AvatarProps {
  src: string;
  href: string;
  width: number;
  height: number;
  alt: string;
}

const Avatar = ({ src, href, width, height, alt }: AvatarProps) => {
  return (
    <div>
      <Link href={href} className={'rounded-full ' + 'w-' + width.toString}>
        {src ? (
          <Image
            src={src}
            className="rounded-full"
            width={width}
            height={height}
            alt={alt}
          />
        ) : (
          <Image
            src={'/images/dammy.png'}
            className="rounded-full"
            width={width}
            height={height}
            alt={alt}
          />
        )}
      </Link>
    </div>
  );
};

export default Avatar;
