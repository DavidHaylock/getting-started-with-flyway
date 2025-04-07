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


// May contain unused imports in some cases
// @ts-ignore
import type { Album } from './album';

/**
 * 
 * @export
 * @interface Artist
 */
export interface Artist {
    /**
     * 
     * @type {string}
     * @memberof Artist
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Artist
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Artist
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof Artist
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof Artist
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {Array<Album>}
     * @memberof Artist
     */
    'albums'?: Array<Album>;
}

