import { LayoutProps } from './Layout.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>
					{children}
				</div>
			</div>

		</>
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