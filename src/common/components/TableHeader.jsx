import React from 'react';
import Button from '../../common/components/Button';
import { SearchWhiteIcon } from '../svgs/converted';

export default function TableHeader({ tableHeaderText, isShowButton, isShowSearch }) {
	return (
		<div className='table-header d-flex justify-content-between'>
			<h5 className='table-header-text'>{tableHeaderText}</h5>
			<div className='table-header-action'>
				{isShowSearch && (
					<div className='table-header-search'>
						<input className='input-field' type='text' placeholder='Search' />
						<div className='search-icon flex-center'>
							<SearchWhiteIcon />
						</div>
					</div>
				)}
				{isShowButton && <Button btnType='secondary' text='Add' className='btn-sm' />}
			</div>
		</div>
	);
}