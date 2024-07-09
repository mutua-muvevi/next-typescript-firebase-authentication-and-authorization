import { NextRequest, NextResponse } from "next/server";

export enum ItemAccess {
	PUBLIC = "PUBLIC",
	USER = "USER",
	PRO = "PRO",
	ADMIN = "ADMIN"
}

export type Item = {
	id: string,
	title: string,
	access: ItemAccess
}

const defaultItems : Item[] = [
	{ id: "item-1", title: "Public Item 1", access: ItemAccess.PUBLIC },
	{ id: "item-2", title: "Public Item 2", access: ItemAccess.PUBLIC },

	{ id: "item-3", title: "User Item 1", access: ItemAccess.USER },
	{ id: "item-4", title: "User Item 2", access: ItemAccess.USER },

	{ id: "item-5", title: "Pro Item 1", access: ItemAccess.PRO },
	{ id: "item-6", title: "Pro Item 2", access: ItemAccess.PRO },

	{ id: "item-7", title: "Admin Item 1", access: ItemAccess.ADMIN },
	{ id: "item-8", title: "Admin Item 2", access: ItemAccess.ADMIN },
]

export const GET = async ( request: NextRequest ) => {
	try {
		return NextResponse.json(defaultItems)
	} catch (error) {
		return new NextResponse("Internal Error", { status: 500 })
	}
}