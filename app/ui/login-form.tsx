import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import styles from '@/app/ui/home.module.css';

export default function LoginForm() {
  return (
    <form className={` ${styles.loginBG} self-center w-9/12`}>
      <div className="flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-10 text-2xl font-bold text-center`}>
         Welcome To Kairoy
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-base font-medium text-gray-900"
              htmlFor="email"
            >
              Email/DID
            </label>
            <div className="relative">
              <input
                className="peer block w-full justify- rounded-md border border-gray-200 py-[9px] text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                // placeholder="Enter your email address or DID"
                required
              />
              {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
            </div>
          </div>
        </div>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className={`${styles.btnBG} flex mt-4 w-full justify-center`}>
      Log in <ArrowRightIcon className="ml-2 h-5 w-5 text-gray-50" />
    </Button>
  );
}
