import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <>
      <div className="ml-2 mt-5 h-[50px] w-[200px] text-blue-500">
        tailwindCSS
      </div>
      <div className={styles.shape} />
      <div className="flex items-center justify-center p-6 py-12 md:w-3/5 md:px-28">
      <img
        src="/hero-desktop.png"
        width={1000}
        height={760}
        alt="Screenshots of the dashboard project showing desktop version"
      />
      </div>
    </>
  );
}
