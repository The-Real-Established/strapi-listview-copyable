import React from 'react';
import { IconButton, Typography } from '@strapi/design-system';
import { Link as Copy } from '@strapi/icons';
import styled from 'styled-components';
// import * as Icons from '@strapi/icons'; // See all Icons

const TypographyMaxWidth = styled(Typography)`
	max-width: 300px;
`;

export const injectCopyActionColumns = (props: any) => {
	const { displayedHeaders, layout } = props;
	// Skip if the content type does not have a component in its schema
	if (Object.values(layout.contentType.attributes).filter((val: any) => val.copyable).length == 0) {
		return {
			displayedHeaders,
			layout
		};
	}

	const injectCopyComponent = (props: any) => {
		const { name: attribute } = props;
		const schema = {
			...props,
			cellFormatter: (data: any) => {
				// return Object.values(Icons).map((Icon) => <Icon />); // See all Icons
				return (
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<TypographyMaxWidth ellipsis textColor="neutral800">
							{data[attribute]}
						</TypographyMaxWidth>
						<IconButton
							onClick={(e: React.MouseEvent) => {
								e.stopPropagation();
								navigator.clipboard.writeText(data[attribute]);
							}}
							label={'Copy Value'}
							noBorder
							icon={<Copy />}
						/>
					</div>
				);
			}
		};

		return schema;
	};

	const atualDispleayedHeaders = displayedHeaders.map((header: any) => {
		if (layout.contentType.attributes[header.name].copyable) {
			return injectCopyComponent(header);
		}
		return header;
	});

	return {
		displayedHeaders: atualDispleayedHeaders,
		layout
	};
};
