import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { FunctionComponent } from 'react';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} >{children}</Header>
			<Sidebar className={styles.sidebar}
			>{children}</Sidebar>
			<div className={styles.body} >
				{children}
			</div>
			<Footer className={styles.footer} >{children}</Footer>
		</div>

	);
};

// HOC layout
export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
}; 