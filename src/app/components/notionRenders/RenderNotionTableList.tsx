interface TableData {
	results: Array<{
		id: string;
		properties: {
			[key: string]: {
				title: Array<{
					plain_text: string;
				}>;
			};
		};
	}>;
}

export default function RenderNotionTableList({
	tableData,
}: {
	tableData: TableData;
}) {
	if (!Array.isArray(tableData) || tableData.length === 0) {
		console.error('tableData is not an array or is empty', tableData);
		return null;
	}

	console.log('tableData', tableData);

	console.log('keys', tableData[0]);

	// Fetch the first result's properties to use as headers, if available
	const headers =
		tableData && tableData.length > 0
			? Object.keys(tableData[0].properties)
			: [];
	console.log({ headers });

	if (headers.length === 0) {
		return null;
	}

	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full border-collapse'>
				<thead>
					<tr>
						{headers.map((header, index) => (
							<th key={index} className='border-b px-4 py-4 text-left'>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.map(item => (
						<tr key={item.id}>
							{Object.keys(item.properties).map(key => {
								const property = item.properties[key];

								// Check if the property is null or undefined
								if (property === null || property === undefined) {
									return (
										<td key={key} className='py-2'>
											{' '}
										</td>
									);
								}

								// Handle different property types
								switch (property.type) {
									case 'number':
										return (
											<td key={key} className='py-2'>
												{property.number !== null
													? '€ ' + property.number
													: ' '}
											</td>
										);

									case 'title':
										return (
											<td key={key} className='py-2'>
												{property.title.length > 0
													? property.title[0].plain_text
													: ' '}
											</td>
										);

									case 'multi_select':
										return (
											<td key={key} className='py-2'>
												{property.multi_select.length > 0
													? property.multi_select
															.map(option => option.name)
															.join(', ')
													: ' '}
											</td>
										);

									case 'relation':
										return (
											<td key={key} className='py-2'>
												{property.relation.length > 0
													? property.relation.map(rel => rel.id).join(', ')
													: ' '}
											</td>
										);

									// Add more cases as needed based on property types
									default:
										return (
											<td key={key} className='py-2'>
												{' '}
											</td>
										);
								}
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
