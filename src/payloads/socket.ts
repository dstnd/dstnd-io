import * as io from 'io-ts';
import { peerRecord, roomStatsRecord } from '../records';

export const myStatsPayload = io.type({
  kind: io.literal('myStats'),
  content: peerRecord,
});
export type MyStatsPayload = io.TypeOf<typeof myStatsPayload>;

export const roomStatsPayload = io.type({
  kind: io.literal('roomStats'),
  content: roomStatsRecord,
});
export type RoomStatsPayload = io.TypeOf<typeof roomStatsPayload>;

export const connectionOpenedPayload = io.type({
  kind: io.literal('connectionOpened'),
  content: io.type({
    me: peerRecord,
  }),
});
export type ConnectionOpenedPayload = io.TypeOf<typeof connectionOpenedPayload>;

// TODO: Not sure this is still needed
// TODO: @deprecate in favor of roomStatsPayload?
export const peerJoinedRoomPayload = io.type({
  kind: io.literal('peerJoinedRoom'),
  content: io.type({
    roomId: io.string,
    peerId: io.string,
  }),
});
export type PeerJoinedRoomPayload = io.TypeOf<typeof peerJoinedRoomPayload>; 

// This is different b/c the client is like a client request
//  while the others are server responses. 
//  Not sure I need to make a distinction between them (yet).
export const joinRoomRequestPayload = io.type({
  kind: io.literal('joinRoomRequest'),
  content: io.type({
    roomId: io.string,
  }),
});
export type JoinRoomRequestPayload = io.TypeOf<typeof joinRoomRequestPayload>;

export const joinRoomSuccessPayload = io.type({
  kind: io.literal('joinRoomSuccess'),
  content: io.type({
    room: roomStatsRecord,
    me: peerRecord,
  }),
});
export type JoinRoomSuccessPayload = io.TypeOf<typeof joinRoomSuccessPayload>;

export const socketPayload = io.union([
  connectionOpenedPayload,
  myStatsPayload,
  roomStatsPayload,
  peerJoinedRoomPayload,
  joinRoomRequestPayload,
  joinRoomSuccessPayload,
]);
export type SocketPayload = io.TypeOf<typeof socketPayload>;