import type React from "react";

interface DynamicTableProps {
	columns: string[];
	data: Array<Record<string, any>>;
}

export const DynamicTable: React.FC<DynamicTableProps> = ({
	columns,
	data,
}) => {
	return (
		<table
			style={{
				width: "100%",
				borderCollapse: "collapse",
				marginTop: "20px",
				tableLayout: "fixed",
			}}
		>
			<thead>
				<tr>
					{columns.map((column) => (
						<th
							key={column}
							style={{
								borderBottom: "2px solid #ddd",
								padding: "12px 8px",
								textAlign: "left",
								fontWeight: "bold",
								backgroundColor: "#f2f2f2",
							}}
						>
							{column}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.length === 0 ? (
					<tr>
						<td
							colSpan={columns.length}
							style={{ textAlign: "center", padding: "20px" }}
						>
							Ingen data tilgængelig.
						</td>
					</tr>
				) : (
					data.map((row, rowIndex) => (
						<tr
							key={rowIndex}
							style={{
								backgroundColor: rowIndex % 2 === 0 ? "#ffffff" : "#f9f9f9",
							}}
						>
							{columns.map((column) => (
								<td
									key={column}
									style={{
										borderBottom: "1px solid #eee",
										padding: "10px 8px",
									}}
								>
									{row[column]}
								</td>
							))}
						</tr>
					))
				)}
			</tbody>
		</table>
	);
};
