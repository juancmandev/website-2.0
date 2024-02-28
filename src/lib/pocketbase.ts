import { TypedPocketBase } from '@/pb/types';
import PocketBase from 'pocketbase';

export function createServerClient() {
  if (!process.env.NEXT_POCKETBASE_API_URL) {
    throw new Error('Pocketbase API url not defined !');
  }

  if (typeof window !== 'undefined') {
    throw new Error(
      'This method is only supposed to call from the Server environment'
    );
  }

  const client = new PocketBase(
    process.env.NEXT_POCKETBASE_API_URL
  ) as TypedPocketBase;

  return client;
}
