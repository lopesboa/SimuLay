import React, { type ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	return <div>{children}</div>;
}
