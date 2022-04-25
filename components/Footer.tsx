import Image from 'next/image';
import Dmca from 'public/dmca_logo.png';
import Logo from 'public/logoWhite.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {

  const router = useRouter();
  let footTxt1 = router.locale=='es'?'Términos de servicio':'en-US'?'Term of service':'';
  let footTxt2 = router.locale=='es'?'Política de privacidad':'en-US'?'Privacy & Policy':'';
  let footTxt3 = router.locale=='es'?'Contáctanos':'en-US'?'Contact Us':'';
  let footTxt4 = router.locale=='es'?'Derechos de privacidad de California':'en-US'?'California Privacy Rights':'';
  let footTxt5 = router.locale=='es'?'Política de quejas':'en-US'?'Complaints Policy':'';
  

  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-450 py-2 w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 grid-rows-4 gap-2 text-stone-50 mb-2">
        <Link href={'/terms-of-service'}>
          <a className="text-sm font-semibold">{footTxt1}</a>
        </Link>
        <Link href={'/privacy-policy'}>
          <a className="text-sm font-semibold">{footTxt2}</a>
        </Link>
        <Link href={'/usc2257'}>
          <a className="text-sm font-semibold">USC2257</a>
        </Link>
        <Link href={'/dmca'}>
          <a className="text-sm font-semibold">DMCA</a>
        </Link>
        <Link href={'/contact-us'}>
          <a className="text-sm font-semibold">{footTxt3}</a>
        </Link>
        <Link href={'/california-privacy-right'}>
          <a className="text-sm font-semibold">{footTxt4}</a>
        </Link>
        <Link href={'/complaints-policy'}>
          <a className="text-sm font-semibold">{footTxt5}</a>
        </Link>
      </div>
      <div className="flex items-center justify-center w-[90%] text-sm">
        <div className="h-4 relative aspect-[6/1]">
          <Image src={Logo} layout="fill" alt="logo"></Image>
        </div>
        <span className="font-semibold ml-1 text-stone-50">
          &copy; Copyright {year}
        </span>
      </div>
      <div className="w-16 h-5 sm:w-20 relative">
        <Image src={Dmca} alt="dmca" layout="fill" />
      </div>
    </footer>
  );
};

export default Footer;
