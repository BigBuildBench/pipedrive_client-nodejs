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
import FilterGetItem from './FilterGetItem';

/**
 * The FiltersGetResponseAllOf model module.
 * @module model/FiltersGetResponseAllOf
 * @version 1.0.0
 */
class FiltersGetResponseAllOf {
    /**
     * Constructs a new <code>FiltersGetResponseAllOf</code>.
     * @alias module:model/FiltersGetResponseAllOf
     */
    constructor() { 
        
        FiltersGetResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FiltersGetResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FiltersGetResponseAllOf} obj Optional instance to populate.
     * @return {module:model/FiltersGetResponseAllOf} The populated <code>FiltersGetResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FiltersGetResponseAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = FilterGetItem.constructFromObject(data['data']);

                delete data['data'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * @member {module:model/FilterGetItem} data
 */
FiltersGetResponseAllOf.prototype['data'] = undefined;






export default FiltersGetResponseAllOf;

