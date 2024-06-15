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

// ユーザー情報をメールアドレスで取得
export async function getUserByEmail(email: string): Promise<User | null> {
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

// ユーザー情報をIDで取得
export async function getUserById(id: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch User:', error);
    throw new Error('Failed to fetch User');
  }
}

// トークンがデータベースに存在するか確認 (検証用)
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: {
        token,
      },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

// トークンに紐づくメールアドレスを取得 (検証用)
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: {
        email,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

// トークンがデータベースに存在するか確認 (パスワードリセット用)
export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const PasswordResetToken = await prisma.passwordResetToken.findUnique({
      where: {
        token,
      },
    });
    return PasswordResetToken;
  } catch {
    return null;
  }
};

// トークンに紐づくメールアドレスを取得 (パスワードリセット用)
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const PasswordResetToken = await prisma.passwordResetToken.findFirst({
      where: {
        email,
      },
    });

    return PasswordResetToken;
  } catch {
    return null;
  }
};
