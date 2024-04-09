import { NextResponse } from "next/server";
import prisma from "@/lib/db"

//すべての投稿を取得


//新規投稿を作成
export async function POST(request:Request) {
  const body = await request.json()

  const {title, contents, thumbnail ,userId} = body

  //データベースへ投稿を保存する
  const data = await prisma.post.create({
    data: {
      userId,
      title,
      thumbnail,
      created_at: new Date(),
      updated_at: new Date(),
      PostFormatBases: {
        create: [
          {
            contents
          },
        ],
      },
    }
  })

  return NextResponse.json(data)
}