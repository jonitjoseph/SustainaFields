import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
         <Link href="/">
            <Image width={128} height={32} src="/logo.svg" alt="Logo" />
          </Link>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
