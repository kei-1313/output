import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * @param error unknown型にしてどんなエラーでも受け取れるようにする
 * コンソールにエラーを出力
 * 文字列の場合はそのまま、それ以外は文字列に変換してエラーを投げる
 */
export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error));
};
