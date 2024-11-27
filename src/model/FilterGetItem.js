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

/**
 * The FilterGetItem model module.
 * @module model/FilterGetItem
 * @version 1.0.0
 */
class FilterGetItem {
    /**
     * Constructs a new <code>FilterGetItem</code>.
     * The filter object
     * @alias module:model/FilterGetItem
     */
    constructor() { 
        
        FilterGetItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FilterGetItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterGetItem} obj Optional instance to populate.
     * @return {module:model/FilterGetItem} The populated <code>FilterGetItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FilterGetItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');

                delete data['type'];
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');

                delete data['user_id'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], 'Number');

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('custom_view_id')) {
                obj['custom_view_id'] = ApiClient.convertToType(data['custom_view_id'], 'Number');

                delete data['custom_view_id'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the filter
 * @member {Number} id
 */
FilterGetItem.prototype['id'] = undefined;

/**
 * The name of the filter
 * @member {String} name
 */
FilterGetItem.prototype['name'] = undefined;

/**
 * The active flag of the filter
 * @member {Boolean} active_flag
 */
FilterGetItem.prototype['active_flag'] = undefined;

/**
 * The type of the item
 * @member {String} type
 */
FilterGetItem.prototype['type'] = undefined;

/**
 * The owner of the filter
 * @member {Number} user_id
 */
FilterGetItem.prototype['user_id'] = undefined;

/**
 * The date and time when the filter was added
 * @member {String} add_time
 */
FilterGetItem.prototype['add_time'] = undefined;

/**
 * The date and time when the filter was updated
 * @member {String} update_time
 */
FilterGetItem.prototype['update_time'] = undefined;

/**
 * The visibility group ID of who can see then filter
 * @member {Number} visible_to
 */
FilterGetItem.prototype['visible_to'] = undefined;

/**
 * Used by Pipedrive webapp
 * @member {Number} custom_view_id
 */
FilterGetItem.prototype['custom_view_id'] = undefined;






export default FilterGetItem;

