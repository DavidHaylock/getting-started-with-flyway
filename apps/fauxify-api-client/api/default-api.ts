/* tslint:disable */
/* eslint-disable */
/**
 * Fauxify API
 * API for managing artists, albums, songs, and analytics.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { AlbumsGet200Response } from '../models';
// @ts-ignore
import type { AlbumsIdGet200Response } from '../models';
// @ts-ignore
import type { AnalyticsPost201Response } from '../models';
// @ts-ignore
import type { Artist } from '../models';
// @ts-ignore
import type { ArtistsGet200Response } from '../models';
// @ts-ignore
import type { ArtistsPost201Response } from '../models';
// @ts-ignore
import type { SongAnalyticsInput } from '../models';
// @ts-ignore
import type { SongsGet200Response } from '../models';
// @ts-ignore
import type { SongsIdGet200Response } from '../models';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get all albums
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        albumsGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/albums`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get album by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        albumsIdGet: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('albumsIdGet', 'id', id)
            const localVarPath = `/albums/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Submit song analytics
         * @param {SongAnalyticsInput} songAnalyticsInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsPost: async (songAnalyticsInput: SongAnalyticsInput, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'songAnalyticsInput' is not null or undefined
            assertParamExists('analyticsPost', 'songAnalyticsInput', songAnalyticsInput)
            const localVarPath = `/analytics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(songAnalyticsInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all artists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        artistsGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/artists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get artist by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        artistsIdGet: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('artistsIdGet', 'id', id)
            const localVarPath = `/artists/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create an artist
         * @param {Artist} artist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        artistsPost: async (artist: Artist, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'artist' is not null or undefined
            assertParamExists('artistsPost', 'artist', artist)
            const localVarPath = `/artists`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(artist, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all songs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        songsGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/songs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get song by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        songsIdGet: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('songsIdGet', 'id', id)
            const localVarPath = `/songs/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get all albums
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async albumsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AlbumsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.albumsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.albumsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get album by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async albumsIdGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AlbumsIdGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.albumsIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.albumsIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Submit song analytics
         * @param {SongAnalyticsInput} songAnalyticsInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsPost(songAnalyticsInput: SongAnalyticsInput, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnalyticsPost201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsPost(songAnalyticsInput, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.analyticsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all artists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async artistsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArtistsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.artistsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.artistsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get artist by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async artistsIdGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArtistsPost201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.artistsIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.artistsIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Create an artist
         * @param {Artist} artist 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async artistsPost(artist: Artist, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ArtistsPost201Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.artistsPost(artist, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.artistsPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all songs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async songsGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SongsGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.songsGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.songsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get song by ID
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async songsIdGet(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SongsIdGet200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.songsIdGet(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DefaultApi.songsIdGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Get all albums
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        albumsGet(options?: RawAxiosRequestConfig): AxiosPromise<AlbumsGet200Response> {
            return localVarFp.albumsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get album by ID
         * @param {DefaultApiAlbumsIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        albumsIdGet(requestParameters: DefaultApiAlbumsIdGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AlbumsIdGet200Response> {
            return localVarFp.albumsIdGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Submit song analytics
         * @param {DefaultApiAnalyticsPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsPost(requestParameters: DefaultApiAnalyticsPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<AnalyticsPost201Response> {
            return localVarFp.analyticsPost(requestParameters.songAnalyticsInput, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all artists
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        artistsGet(options?: RawAxiosRequestConfig): AxiosPromise<ArtistsGet200Response> {
            return localVarFp.artistsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get artist by ID
         * @param {DefaultApiArtistsIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        artistsIdGet(requestParameters: DefaultApiArtistsIdGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<ArtistsPost201Response> {
            return localVarFp.artistsIdGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create an artist
         * @param {DefaultApiArtistsPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        artistsPost(requestParameters: DefaultApiArtistsPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<ArtistsPost201Response> {
            return localVarFp.artistsPost(requestParameters.artist, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all songs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        songsGet(options?: RawAxiosRequestConfig): AxiosPromise<SongsGet200Response> {
            return localVarFp.songsGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get song by ID
         * @param {DefaultApiSongsIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        songsIdGet(requestParameters: DefaultApiSongsIdGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<SongsIdGet200Response> {
            return localVarFp.songsIdGet(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for albumsIdGet operation in DefaultApi.
 * @export
 * @interface DefaultApiAlbumsIdGetRequest
 */
export interface DefaultApiAlbumsIdGetRequest {
    /**
     * 
     * @type {string}
     * @memberof DefaultApiAlbumsIdGet
     */
    readonly id: string
}

/**
 * Request parameters for analyticsPost operation in DefaultApi.
 * @export
 * @interface DefaultApiAnalyticsPostRequest
 */
export interface DefaultApiAnalyticsPostRequest {
    /**
     * 
     * @type {SongAnalyticsInput}
     * @memberof DefaultApiAnalyticsPost
     */
    readonly songAnalyticsInput: SongAnalyticsInput
}

/**
 * Request parameters for artistsIdGet operation in DefaultApi.
 * @export
 * @interface DefaultApiArtistsIdGetRequest
 */
export interface DefaultApiArtistsIdGetRequest {
    /**
     * 
     * @type {string}
     * @memberof DefaultApiArtistsIdGet
     */
    readonly id: string
}

/**
 * Request parameters for artistsPost operation in DefaultApi.
 * @export
 * @interface DefaultApiArtistsPostRequest
 */
export interface DefaultApiArtistsPostRequest {
    /**
     * 
     * @type {Artist}
     * @memberof DefaultApiArtistsPost
     */
    readonly artist: Artist
}

/**
 * Request parameters for songsIdGet operation in DefaultApi.
 * @export
 * @interface DefaultApiSongsIdGetRequest
 */
export interface DefaultApiSongsIdGetRequest {
    /**
     * 
     * @type {string}
     * @memberof DefaultApiSongsIdGet
     */
    readonly id: string
}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Get all albums
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public albumsGet(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).albumsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get album by ID
     * @param {DefaultApiAlbumsIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public albumsIdGet(requestParameters: DefaultApiAlbumsIdGetRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).albumsIdGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Submit song analytics
     * @param {DefaultApiAnalyticsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public analyticsPost(requestParameters: DefaultApiAnalyticsPostRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).analyticsPost(requestParameters.songAnalyticsInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all artists
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public artistsGet(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).artistsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get artist by ID
     * @param {DefaultApiArtistsIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public artistsIdGet(requestParameters: DefaultApiArtistsIdGetRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).artistsIdGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create an artist
     * @param {DefaultApiArtistsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public artistsPost(requestParameters: DefaultApiArtistsPostRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).artistsPost(requestParameters.artist, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all songs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public songsGet(options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).songsGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get song by ID
     * @param {DefaultApiSongsIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public songsIdGet(requestParameters: DefaultApiSongsIdGetRequest, options?: RawAxiosRequestConfig) {
        return DefaultApiFp(this.configuration).songsIdGet(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

