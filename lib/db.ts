import { createClient } from '@libsql/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { PrismaClient, User } from '@prisma/client';

type ClientOptions = {
  url: string;
  authToken: string;
};

// Tursoの情報をセットしてアダプターを作成
const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
} as ClientOptions);

const adapter = new PrismaLibSQL(libsql);

// PrismaClientを作成
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

// prismaのインスタンス化
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// 開発モードだとホットリロードでPrisma Clientが再インスタンス化されるので
// グローバル変数に保存しておく
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

// ユーザー情報を取得
export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch User:', error);
    throw new Error('Failed to fetch User');
  }
}
