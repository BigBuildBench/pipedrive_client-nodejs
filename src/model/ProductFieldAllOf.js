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
 * The ProductFieldAllOf model module.
 * @module model/ProductFieldAllOf
 * @version 1.0.0
 */
class ProductFieldAllOf {
    /**
     * Constructs a new <code>ProductFieldAllOf</code>.
     * @alias module:model/ProductFieldAllOf
     */
    constructor() { 
        
        ProductFieldAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductFieldAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductFieldAllOf} obj Optional instance to populate.
     * @return {module:model/ProductFieldAllOf} The populated <code>ProductFieldAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductFieldAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');

                delete data['key'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('last_updated_by_user_id')) {
                obj['last_updated_by_user_id'] = ApiClient.convertToType(data['last_updated_by_user_id'], 'Number');

                delete data['last_updated_by_user_id'];
            }
            if (data.hasOwnProperty('created_by_user_id')) {
                obj['created_by_user_id'] = ApiClient.convertToType(data['created_by_user_id'], 'Number');

                delete data['created_by_user_id'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('edit_flag')) {
                obj['edit_flag'] = ApiClient.convertToType(data['edit_flag'], 'Boolean');

                delete data['edit_flag'];
            }
            if (data.hasOwnProperty('add_visible_flag')) {
                obj['add_visible_flag'] = ApiClient.convertToType(data['add_visible_flag'], 'Boolean');

                delete data['add_visible_flag'];
            }
            if (data.hasOwnProperty('important_flag')) {
                obj['important_flag'] = ApiClient.convertToType(data['important_flag'], 'Boolean');

                delete data['important_flag'];
            }
            if (data.hasOwnProperty('bulk_edit_allowed')) {
                obj['bulk_edit_allowed'] = ApiClient.convertToType(data['bulk_edit_allowed'], 'Boolean');

                delete data['bulk_edit_allowed'];
            }
            if (data.hasOwnProperty('searchable_flag')) {
                obj['searchable_flag'] = ApiClient.convertToType(data['searchable_flag'], 'Boolean');

                delete data['searchable_flag'];
            }
            if (data.hasOwnProperty('filtering_allowed')) {
                obj['filtering_allowed'] = ApiClient.convertToType(data['filtering_allowed'], 'Boolean');

                delete data['filtering_allowed'];
            }
            if (data.hasOwnProperty('sortable_flag')) {
                obj['sortable_flag'] = ApiClient.convertToType(data['sortable_flag'], 'Boolean');

                delete data['sortable_flag'];
            }
            if (data.hasOwnProperty('mandatory_flag')) {
                obj['mandatory_flag'] = ApiClient.convertToType(data['mandatory_flag'], 'Boolean');

                delete data['mandatory_flag'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the product field
 * @member {Number} id
 */
ProductFieldAllOf.prototype['id'] = undefined;

/**
 * The key of the product field
 * @member {String} key
 */
ProductFieldAllOf.prototype['key'] = undefined;

/**
 * The position (index) of the product field in the detail view
 * @member {Number} order_nr
 */
ProductFieldAllOf.prototype['order_nr'] = undefined;

/**
 * The product field creation time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} add_time
 */
ProductFieldAllOf.prototype['add_time'] = undefined;

/**
 * The product field last update time. Format: YYYY-MM-DD HH:MM:SS
 * @member {String} update_time
 */
ProductFieldAllOf.prototype['update_time'] = undefined;

/**
 * The ID of the last user to update the product field
 * @member {Number} last_updated_by_user_id
 */
ProductFieldAllOf.prototype['last_updated_by_user_id'] = undefined;

/**
 * The ID of the user who created the product field
 * @member {Number} created_by_user_id
 */
ProductFieldAllOf.prototype['created_by_user_id'] = undefined;

/**
 * Whether or not the product field is currently active
 * @member {Boolean} active_flag
 */
ProductFieldAllOf.prototype['active_flag'] = undefined;

/**
 * Whether or not the product field name and metadata is editable
 * @member {Boolean} edit_flag
 */
ProductFieldAllOf.prototype['edit_flag'] = undefined;

/**
 * Whether or not the product field is visible in the Add Product Modal
 * @member {Boolean} add_visible_flag
 */
ProductFieldAllOf.prototype['add_visible_flag'] = undefined;

/**
 * Whether or not the product field is marked as important
 * @member {Boolean} important_flag
 */
ProductFieldAllOf.prototype['important_flag'] = undefined;

/**
 * Whether or not the product field data can be edited
 * @member {Boolean} bulk_edit_allowed
 */
ProductFieldAllOf.prototype['bulk_edit_allowed'] = undefined;

/**
 * Whether or not the product field is searchable
 * @member {Boolean} searchable_flag
 */
ProductFieldAllOf.prototype['searchable_flag'] = undefined;

/**
 * Whether or not the product field value can be used when filtering searches
 * @member {Boolean} filtering_allowed
 */
ProductFieldAllOf.prototype['filtering_allowed'] = undefined;

/**
 * Whether or not the product field is sortable
 * @member {Boolean} sortable_flag
 */
ProductFieldAllOf.prototype['sortable_flag'] = undefined;

/**
 * Whether or not the product field is mandatory when creating products
 * @member {Boolean} mandatory_flag
 */
ProductFieldAllOf.prototype['mandatory_flag'] = undefined;






export default ProductFieldAllOf;
