/**
 * Pipedrive API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseResponse from './BaseResponse';
import ItemSearchAdditionalData from './ItemSearchAdditionalData';
import PersonSearchResponseAllOf from './PersonSearchResponseAllOf';
import PersonSearchResponseAllOfData from './PersonSearchResponseAllOfData';

/**
 * The PersonSearchResponse model module.
 * @module model/PersonSearchResponse
 * @version 1.0.0
 */
class PersonSearchResponse {
    /**
     * Constructs a new <code>PersonSearchResponse</code>.
     * @alias module:model/PersonSearchResponse
     * @implements module:model/BaseResponse
     * @implements module:model/PersonSearchResponseAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);PersonSearchResponseAllOf.initialize(this);
        PersonSearchResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PersonSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonSearchResponse} obj Optional instance to populate.
     * @return {module:model/PersonSearchResponse} The populated <code>PersonSearchResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonSearchResponse();
            BaseResponse.constructFromObject(data, obj);
            PersonSearchResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = PersonSearchResponseAllOfData.constructFromObject(data['data']);

                delete data['data'];
            }
            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ItemSearchAdditionalData.constructFromObject(data['additional_data']);

                delete data['additional_data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * If the response is successful or not
 * @member {Boolean} success
 */
PersonSearchResponse.prototype['success'] = undefined;

/**
 * @member {module:model/PersonSearchResponseAllOfData} data
 */
PersonSearchResponse.prototype['data'] = undefined;

/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
PersonSearchResponse.prototype['additional_data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement PersonSearchResponseAllOf interface:
/**
 * @member {module:model/PersonSearchResponseAllOfData} data
 */
PersonSearchResponseAllOf.prototype['data'] = undefined;
/**
 * @member {module:model/ItemSearchAdditionalData} additional_data
 */
PersonSearchResponseAllOf.prototype['additional_data'] = undefined;




export default PersonSearchResponse;

