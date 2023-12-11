import Image from "next/image";
import styles from '@/app/ui/home.module.css';

export default function SplashScreen() {
    return (
        <>
            <div className={`${styles.loginSplashBG} h-full `}>
                <Image
                    src="/logo.png"
                    width={60}
                    height={60}
                    className="block py-60"
                    alt="logo"
                />
            </div>
        </>
    )
}