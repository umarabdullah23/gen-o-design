import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { GenOLogoSidebarIcon, LogoutIcon, PharmacogeneticResultsSidebarIcon } from '../svgs/converted';
import SvgCommonProgress from '../svgs/converted/common-progress';

export default function Sidebar({ children, childrenClassName = '' }) {
	const handleClick = (path) => () => {};
	const navigate = useNavigate();

	const sidebarData = [
		{
			name: 'Pharmacogenetic Results',
			path: '/dashboard',
			Icon: PharmacogeneticResultsSidebarIcon,
		},
		{
			name: 'Pharmacogenetic Results',
			path: '/dashboard',
			Icon: PharmacogeneticResultsSidebarIcon,
		},
	];

	const logoutData = {
		name: 'Logout',
		path: '/logout',
		Icon: LogoutIcon,
	};

	const location = useLocation();

	const SidebarItem = ({ item }) => {
		const { Icon, path, name } = item;
		return (
			<li
				key={path}
				className={
					location.pathname?.includes(path) || location.pathname?.includes(item?.sidebarActivePath)
						? `${name?.toLowerCase()} active`
						: name?.toLowerCase()
				}
				onClick={handleClick(path)}>
				<div className='sidebar-item-icon flex-center'>
					<Icon />
				</div>
				<p>{name}</p>
			</li>
		);
	};

	return (
		<div className='sidebar-container'>
			<div className='sidebar'>
				<ul className='list-style-none sidebar-items d-flex flex-column'>
					<div className='sidebar-upper-items d-flex flex-column'>
						<li className='sidebar-logo d-flex'>
							<div className='logo'>
								<GenOLogoSidebarIcon />
							</div>
							<p>Gen-O</p>
						</li>
						<div className='sidebar-items-main d-flex flex-column'>
							{sidebarData?.map((item) => {
								return <SidebarItem key={item?.name} item={item} />;
							})}
						</div>
					</div>
					<div className='logout-item'>
						<SidebarItem item={logoutData} />
					</div>
				</ul>
			</div>
			<div className={'sidebar-children ' + childrenClassName}>{children}</div>
		</div>
	);
}