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
import LeadSearchItemItem from './LeadSearchItemItem';

/**
 * The LeadSearchItem model module.
 * @module model/LeadSearchItem
 * @version 1.0.0
 */
class LeadSearchItem {
    /**
     * Constructs a new <code>LeadSearchItem</code>.
     * @alias module:model/LeadSearchItem
     */
    constructor() { 
        
        LeadSearchItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadSearchItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LeadSearchItem} obj Optional instance to populate.
     * @return {module:model/LeadSearchItem} The populated <code>LeadSearchItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadSearchItem();

            if (data.hasOwnProperty('result_score')) {
                obj['result_score'] = ApiClient.convertToType(data['result_score'], 'Number');

                delete data['result_score'];
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = LeadSearchItemItem.constructFromObject(data['item']);

                delete data['item'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Search result relevancy
 * @member {Number} result_score
 */
LeadSearchItem.prototype['result_score'] = undefined;

/**
 * @member {module:model/LeadSearchItemItem} item
 */
LeadSearchItem.prototype['item'] = undefined;






export default LeadSearchItem;

