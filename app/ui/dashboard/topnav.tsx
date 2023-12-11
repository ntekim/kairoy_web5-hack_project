import Image from "next/image";
import styles from '@/app/ui/home.module.css';
import Link from "next/link";

export default function TopNav(){
    return (
        <>
        <div className={`${styles.logoBG} flex h-20 shrink-0 items-end rounded-lg p-2 md:h-30 sticky`}>
            <Link href='/home'>            
                <Image
                    src="/logo.png"
                    width={60}
                    height={60}
                    className="block"
                    alt="logo"
                />
            </Link>
      </div>
        </>
    )
}