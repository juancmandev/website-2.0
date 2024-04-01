/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase';
import type { RecordService } from 'pocketbase';

export enum Collections {
  Microblogs = 'microblogs',
  Tags = 'tags',
  Users = 'users',
}

// Alias types for improved usability
export type IsoDateString = string;
export type RecordIdString = string;
export type HTMLString = string;

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString;
  created: IsoDateString;
  updated: IsoDateString;
  collectionId: string;
  collectionName: Collections;
  expand?: T;
};

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type MicroblogsRecord = {
  content?: string;
  published: IsoDateString;
  tags?: RecordIdString[];
};

export type TagsRecord = {
  name?: string;
};

export type UsersRecord = {
  avatar?: string;
  name?: string;
};

// Response types include system fields and match responses from the PocketBase API
export type MicroblogsResponse<Texpand = unknown> = Required<MicroblogsRecord> &
  BaseSystemFields<Texpand>;
export type TagsResponse<Texpand = unknown> = Required<TagsRecord> &
  BaseSystemFields<Texpand>;
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> &
  AuthSystemFields<Texpand>;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  microblogs: MicroblogsRecord;
  tags: TagsRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  microblogs: MicroblogsResponse;
  tags: TagsResponse;
  users: UsersResponse;
};

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'microblogs'): RecordService<MicroblogsResponse>;
  collection(idOrName: 'tags'): RecordService<TagsResponse>;
  collection(idOrName: 'users'): RecordService<UsersResponse>;
};
