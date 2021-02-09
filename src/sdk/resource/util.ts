import { Resource } from './Resource';
import {
  resourceFailureHandledError,
  badEncodingError,
  ResourceFailureHandledError,
  BadEncodingError,
  BadRequestError,
  badRequestError,
} from './errors';
import * as io from 'io-ts';
import { isRight } from 'fp-ts/lib/Either';

export type RequestOf<R extends Resource<any, any, any>> = io.TypeOf<R['requestPayloadCodec']>;
export type OkResponseOf<R extends Resource<any, any, any>> = io.TypeOf<R['responseOkPayloadCodec']>;
export type ErrResponseOf<R extends Resource<any, any, any>> = io.TypeOf<R['responseErrPayloadCodec']>;
export type ResponseOf<R extends Resource<any, any, any>> = OkResponseOf<R> | ErrResponseOf<R>;

export const isPayloadOfCodec = <C extends io.Mixed>(c: C, payload: unknown): payload is io.TypeOf<C> => {
  return isRight(c.decode(payload));
};

export const isResourceFailureHandledError = (e: unknown): e is ResourceFailureHandledError =>
  isPayloadOfCodec(resourceFailureHandledError, e);
export const isBadEncodingError = (e: unknown): e is BadEncodingError => isPayloadOfCodec(badEncodingError, e);
export const isBadRequestError = (e: unknown): e is BadRequestError => isPayloadOfCodec(badRequestError, e);

export const emptyRequest = io.union([io.undefined, io.null, io.void, io.type({})]);
