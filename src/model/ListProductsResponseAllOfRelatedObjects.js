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
import RelatedUserData from './RelatedUserData';

/**
 * The ListProductsResponseAllOfRelatedObjects model module.
 * @module model/ListProductsResponseAllOfRelatedObjects
 * @version 1.0.0
 */
class ListProductsResponseAllOfRelatedObjects {
    /**
     * Constructs a new <code>ListProductsResponseAllOfRelatedObjects</code>.
     * @alias module:model/ListProductsResponseAllOfRelatedObjects
     */
    constructor() { 
        
        ListProductsResponseAllOfRelatedObjects.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListProductsResponseAllOfRelatedObjects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListProductsResponseAllOfRelatedObjects} obj Optional instance to populate.
     * @return {module:model/ListProductsResponseAllOfRelatedObjects} The populated <code>ListProductsResponseAllOfRelatedObjects</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListProductsResponseAllOfRelatedObjects();

            if (data.hasOwnProperty('user')) {
                obj['user'] = RelatedUserData.constructFromObject(data['user']);

                delete data['user'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/RelatedUserData} user
 */
ListProductsResponseAllOfRelatedObjects.prototype['user'] = undefined;






export default ListProductsResponseAllOfRelatedObjects;

