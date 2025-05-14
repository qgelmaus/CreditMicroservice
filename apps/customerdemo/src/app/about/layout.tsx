export default function Layout(children: { children: React.ReactNode }) {
	return (
		<div className="bg-white row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
			{" "}
			{children.children}
		</div>
	);
}
