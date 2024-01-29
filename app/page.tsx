import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
export default function Page() {
  return (
    <>
      <div className="w-[200px] h-[50px] text-blue-500 ml-2 mt-5">tailwindCSS</div>
      <div className={styles.shape}/>
    </>
  );
}
