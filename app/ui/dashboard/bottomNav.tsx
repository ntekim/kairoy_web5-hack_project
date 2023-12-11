import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '../fonts';



export default function BottomNav() {
  return (
    <div className={`${styles.smNavBtm} ${lusitana.className} w-full flex  flex-col px-3 py-4 z-40`}>
      <div className={`flex flex-row justify-between space-x-2 `}>
        <NavLinks />
      </div>
    </div>
  );
}
