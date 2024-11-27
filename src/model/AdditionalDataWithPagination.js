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
import AdditionalData from './AdditionalData';

/**
 * The AdditionalDataWithPagination model module.
 * @module model/AdditionalDataWithPagination
 * @version 1.0.0
 */
class AdditionalDataWithPagination {
    /**
     * Constructs a new <code>AdditionalDataWithPagination</code>.
     * @alias module:model/AdditionalDataWithPagination
     */
    constructor() { 
        
        AdditionalDataWithPagination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalDataWithPagination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalDataWithPagination} obj Optional instance to populate.
     * @return {module:model/AdditionalDataWithPagination} The populated <code>AdditionalDataWithPagination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalDataWithPagination();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = ApiClient.convertToType(data['pagination'], AdditionalData);

                delete data['pagination'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The pagination details of the list
 * @member {module:model/AdditionalData} pagination
 */
AdditionalDataWithPagination.prototype['pagination'] = undefined;






export default AdditionalDataWithPagination;

