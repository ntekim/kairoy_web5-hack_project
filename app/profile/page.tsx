import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';

export default function Page(){
    return (
        <>
        <div className={`${lusitana.className}`}>
            <h1>My profile</h1>
        </div>
        </>
    )
}