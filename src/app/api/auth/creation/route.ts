import {db} from "@/server/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";


export type User = {
  id: string
  email : string
  firstname: string
  lastname: string
  profileImage: string
  createdAt:Date
}

export async function GET() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user ) {
    throw new Error("Algo deu errado...");
  }


  let dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await db.user.create({
      data: {
        id: user.id,
        email: user.email ?? "",
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        profileImage:
          user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });
  }

 

  return NextResponse.redirect(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://casadocanto.store/"
  );
}
