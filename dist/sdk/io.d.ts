import * as PayloadCodecs from '../payloads';
import { Either } from 'fp-ts/lib/Either';
import { Result } from 'ts-results';
import * as ioTs from 'io-ts';
import { ErrHttpResponsePayloadOfType, HttpGenericErrorCodec, GenericOkHttpResponsePayload } from './http';
export declare const toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
export declare type IODeserializationError = {
    type: 'BadEncoding';
    reasons: ioTs.ValidationError[];
};
export declare const isIODeserializationError: (e: unknown) => e is IODeserializationError;
export declare const toGenericHttpErrorResponsePayload: (message?: string | undefined) => ErrHttpResponsePayloadOfType<HttpGenericErrorCodec>;
declare type OKResponseDataType = object | undefined | string | number;
export declare type OkHttpResponsePayloadWithData<TData extends OKResponseDataType> = Omit<GenericOkHttpResponsePayload, 'data'> & {
    data: TData;
};
export declare const toOkHttpResponsePayloadWithData: <TData extends OKResponseDataType>(data: TData) => OkHttpResponsePayloadWithData<TData>;
export declare const io: {
    serialize: <K extends "statsReaderIdentificationPayload" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "iceServerRecord" | "iceServersResponse" | "userIdentificationPayload" | "pingPayload" | "connectionOpenedPayload" | "whoamiRequestPayload" | "iamResponsePayload" | "genericFailureResponsePayload" | "socketPayload" | "registerPeerRequestPayload" | "registerPeerResponsePayload" | "myStatsPayload" | "registerUserResponsePayload" | "gameJoinRequestPayload" | "gameChallengeOfferingRequestPayload" | "gameChallengeAcceptRequestPayload" | "gameChallengeDenyRequestPayload" | "gameDrawOfferingRequestPayload" | "gameDrawAcceptRequestPayload" | "gameDrawDenyRequestPayload" | "gameResignationRequestPayload" | "gameAbortionRequestPayload" | "gameMoveRequestPayload" | "gameRematchOfferingRequestPayload" | "gameRematchAcceptRequestPayload" | "gameRematchDenyRequestPayload" | "gameOfferingCancelRequestPayload" | "gameStatusCheckRequestPayload" | "gameActionRequestPayload" | "joinedGameUpdatedPayload" | "createRoomRequest" | "createRoomResponse" | "publicRoomResponsePayload" | "privateRoomResponsePayload" | "publicRoomsResponsePayload" | "roomResponsePayload" | "joinedRoomUpdatedPayload" | "joinedRoomAndGameUpdatedPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "leaveRoomRequestPayload" | "peerJoinedRoomPayload" | "verifyLichessUserResponsePayload" | "verifyTwitchUserResponsePayload" | "roomsStatsPayload" | "peersStatsPayload" | "statsSocketPayload" | "baseCreateChallengeRequest" | "createPublicChallengeRequest" | "createPrivateChallengeRequest" | "createChallengeRequest" | "createChallengeResponse" | "removeChallengeRequest" | "acceptChallengeRequest" | "quickPairingRequest" | "quickPairingMatchedResponse" | "quickPairingPendingResponse" | "quickPairingResponse" | "challengeAcceptedPayload" | "broadcastChatMessagePayload" | "externalVendor" | "userCheckInternalAccountRequestPayload" | "userCheckExternalAccountRequestPayload" | "userCheckRequestPayload" | "userCheckVerificationFailedResponsePayload" | "userCheckInexitentUserResponsePayloadData" | "userCheckExistentUserResponsePayloadData" | "userCheckResponsePayload" | "verifyEmailRequestPayload" | "verifyEmailResponsePayload" | "createUserAccountRequestPayload" | "createUserAccountResponsePayload" | "guestAuthenticationRequestPayload" | "guestAuthenticationResponsePayload" | "vendorsAuthenticationRedirectUrlResponsePayload" | "verifyUserRequestPayload", TCodec extends typeof PayloadCodecs[K], TRecord extends ioTs.TypeOf<TCodec>>(_: TCodec, record: TRecord) => TRecord;
    deserialize: <K_1 extends "statsReaderIdentificationPayload" | "webrtcInvitationPayload" | "webrtcNegotationPayload" | "webrtcRefusalPayload" | "signalingPayload" | "iceServerRecord" | "iceServersResponse" | "userIdentificationPayload" | "pingPayload" | "connectionOpenedPayload" | "whoamiRequestPayload" | "iamResponsePayload" | "genericFailureResponsePayload" | "socketPayload" | "registerPeerRequestPayload" | "registerPeerResponsePayload" | "myStatsPayload" | "registerUserResponsePayload" | "gameJoinRequestPayload" | "gameChallengeOfferingRequestPayload" | "gameChallengeAcceptRequestPayload" | "gameChallengeDenyRequestPayload" | "gameDrawOfferingRequestPayload" | "gameDrawAcceptRequestPayload" | "gameDrawDenyRequestPayload" | "gameResignationRequestPayload" | "gameAbortionRequestPayload" | "gameMoveRequestPayload" | "gameRematchOfferingRequestPayload" | "gameRematchAcceptRequestPayload" | "gameRematchDenyRequestPayload" | "gameOfferingCancelRequestPayload" | "gameStatusCheckRequestPayload" | "gameActionRequestPayload" | "joinedGameUpdatedPayload" | "createRoomRequest" | "createRoomResponse" | "publicRoomResponsePayload" | "privateRoomResponsePayload" | "publicRoomsResponsePayload" | "roomResponsePayload" | "joinedRoomUpdatedPayload" | "joinedRoomAndGameUpdatedPayload" | "joinRoomRequestPayload" | "joinRoomSuccessPayload" | "joinRoomFailurePayload" | "leaveRoomRequestPayload" | "peerJoinedRoomPayload" | "verifyLichessUserResponsePayload" | "verifyTwitchUserResponsePayload" | "roomsStatsPayload" | "peersStatsPayload" | "statsSocketPayload" | "baseCreateChallengeRequest" | "createPublicChallengeRequest" | "createPrivateChallengeRequest" | "createChallengeRequest" | "createChallengeResponse" | "removeChallengeRequest" | "acceptChallengeRequest" | "quickPairingRequest" | "quickPairingMatchedResponse" | "quickPairingPendingResponse" | "quickPairingResponse" | "challengeAcceptedPayload" | "broadcastChatMessagePayload" | "externalVendor" | "userCheckInternalAccountRequestPayload" | "userCheckExternalAccountRequestPayload" | "userCheckRequestPayload" | "userCheckVerificationFailedResponsePayload" | "userCheckInexitentUserResponsePayloadData" | "userCheckExistentUserResponsePayloadData" | "userCheckResponsePayload" | "verifyEmailRequestPayload" | "verifyEmailResponsePayload" | "createUserAccountRequestPayload" | "createUserAccountResponsePayload" | "guestAuthenticationRequestPayload" | "guestAuthenticationResponsePayload" | "vendorsAuthenticationRedirectUrlResponsePayload" | "verifyUserRequestPayload", TCodec_1 extends typeof PayloadCodecs[K_1], TRecord_1 extends ioTs.TypeOf<TCodec_1>>(codec: TCodec_1, serialized: string) => Result<TRecord_1, IODeserializationError>;
    toResult: <T, E>(either: Either<E, T>) => Result<T, E>;
    isIODeserializationError: (e: unknown) => e is IODeserializationError;
    toGenericHttpErrorResponsePayload: (message?: string | undefined) => ErrHttpResponsePayloadOfType<HttpGenericErrorCodec>;
    toOkHttpResponsePayloadWithData: <TData extends OKResponseDataType>(data: TData) => OkHttpResponsePayloadWithData<TData>;
};
export {};
