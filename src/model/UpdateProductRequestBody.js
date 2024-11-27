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
import AddProductRequestBodyAllOf from './AddProductRequestBodyAllOf';
import BillingFrequency1 from './BillingFrequency1';
import NameObject from './NameObject';
import NewDealProductAllOf1 from './NewDealProductAllOf1';
import ProductRequest from './ProductRequest';
import VisibleTo from './VisibleTo';

/**
 * The UpdateProductRequestBody model module.
 * @module model/UpdateProductRequestBody
 * @version 1.0.0
 */
class UpdateProductRequestBody {
    /**
     * Constructs a new <code>UpdateProductRequestBody</code>.
     * @alias module:model/UpdateProductRequestBody
     * @implements module:model/NameObject
     * @implements module:model/ProductRequest
     * @implements module:model/AddProductRequestBodyAllOf
     * @implements module:model/NewDealProductAllOf1
     */
    constructor() { 
        NameObject.initialize(this);ProductRequest.initialize(this);AddProductRequestBodyAllOf.initialize(this);NewDealProductAllOf1.initialize(this);
        UpdateProductRequestBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateProductRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateProductRequestBody} obj Optional instance to populate.
     * @return {module:model/UpdateProductRequestBody} The populated <code>UpdateProductRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProductRequestBody();
            NameObject.constructFromObject(data, obj);
            ProductRequest.constructFromObject(data, obj);
            AddProductRequestBodyAllOf.constructFromObject(data, obj);
            NewDealProductAllOf1.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');

                delete data['code'];
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');

                delete data['description'];
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');

                delete data['unit'];
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');

                delete data['tax'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('selectable')) {
                obj['selectable'] = ApiClient.convertToType(data['selectable'], 'Boolean');

                delete data['selectable'];
            }
            if (data.hasOwnProperty('visible_to')) {
                obj['visible_to'] = ApiClient.convertToType(data['visible_to'], VisibleTo);

                delete data['visible_to'];
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');

                delete data['owner_id'];
            }
            if (data.hasOwnProperty('prices')) {
                obj['prices'] = ApiClient.convertToType(data['prices'], [Object]);

                delete data['prices'];
            }
            if (data.hasOwnProperty('billing_frequency')) {
                obj['billing_frequency'] = BillingFrequency1.constructFromObject(data['billing_frequency']);

                delete data['billing_frequency'];
            }
            if (data.hasOwnProperty('billing_frequency_cycles')) {
                obj['billing_frequency_cycles'] = ApiClient.convertToType(data['billing_frequency_cycles'], 'Number');

                delete data['billing_frequency_cycles'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The name of the product
 * @member {String} name
 */
UpdateProductRequestBody.prototype['name'] = undefined;

/**
 * The product code
 * @member {String} code
 */
UpdateProductRequestBody.prototype['code'] = undefined;

/**
 * The product description
 * @member {String} description
 */
UpdateProductRequestBody.prototype['description'] = undefined;

/**
 * The unit in which this product is sold
 * @member {String} unit
 */
UpdateProductRequestBody.prototype['unit'] = undefined;

/**
 * The tax percentage
 * @member {Number} tax
 * @default 0
 */
UpdateProductRequestBody.prototype['tax'] = 0;

/**
 * Whether this product will be made active or not
 * @member {Boolean} active_flag
 * @default true
 */
UpdateProductRequestBody.prototype['active_flag'] = true;

/**
 * Whether this product can be selected in deals or not
 * @member {Boolean} selectable
 * @default true
 */
UpdateProductRequestBody.prototype['selectable'] = true;

/**
 * The visibility of the product. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width: 40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width: 40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
UpdateProductRequestBody.prototype['visible_to'] = undefined;

/**
 * The ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used
 * @member {Number} owner_id
 */
UpdateProductRequestBody.prototype['owner_id'] = undefined;

/**
 * An array of objects, each containing: `currency` (string), `price` (number), `cost` (number, optional), `overhead_cost` (number, optional), `notes` (string, optional). Note that there can only be one price per product per currency. When `prices` is omitted altogether, a default price of 0 and a default currency based on the company's currency will be assigned.
 * @member {Array.<Object>} prices
 */
UpdateProductRequestBody.prototype['prices'] = undefined;

/**
 * @member {module:model/BillingFrequency1} billing_frequency
 */
UpdateProductRequestBody.prototype['billing_frequency'] = undefined;

/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
UpdateProductRequestBody.prototype['billing_frequency_cycles'] = undefined;


// Implement NameObject interface:
/**
 * The name of the product
 * @member {String} name
 */
NameObject.prototype['name'] = undefined;
// Implement ProductRequest interface:
/**
 * The product code
 * @member {String} code
 */
ProductRequest.prototype['code'] = undefined;
/**
 * The product description
 * @member {String} description
 */
ProductRequest.prototype['description'] = undefined;
/**
 * The unit in which this product is sold
 * @member {String} unit
 */
ProductRequest.prototype['unit'] = undefined;
/**
 * The tax percentage
 * @member {Number} tax
 * @default 0
 */
ProductRequest.prototype['tax'] = 0;
/**
 * Whether this product will be made active or not
 * @member {Boolean} active_flag
 * @default true
 */
ProductRequest.prototype['active_flag'] = true;
/**
 * Whether this product can be selected in deals or not
 * @member {Boolean} selectable
 * @default true
 */
ProductRequest.prototype['selectable'] = true;
/**
 * The visibility of the product. If omitted, the visibility will be set to the default visibility setting of this item type for the authorized user. Read more about visibility groups <a href=\"https://support.pipedrive.com/en/article/visibility-groups\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<h4>Essential / Advanced plan</h4><table><tr><th style=\"width: 40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner &amp; followers</td><tr><td>`3`</td><td>Entire company</td></tr></table><h4>Professional / Enterprise plan</h4><table><tr><th style=\"width: 40px\">Value</th><th>Description</th></tr><tr><td>`1`</td><td>Owner only</td><tr><td>`3`</td><td>Owner's visibility group</td></tr><tr><td>`5`</td><td>Owner's visibility group and sub-groups</td></tr><tr><td>`7`</td><td>Entire company</td></tr></table>
 * @member {module:model/VisibleTo} visible_to
 */
ProductRequest.prototype['visible_to'] = undefined;
/**
 * The ID of the user who will be marked as the owner of this product. When omitted, the authorized user ID will be used
 * @member {Number} owner_id
 */
ProductRequest.prototype['owner_id'] = undefined;
/**
 * An array of objects, each containing: `currency` (string), `price` (number), `cost` (number, optional), `overhead_cost` (number, optional), `notes` (string, optional). Note that there can only be one price per product per currency. When `prices` is omitted altogether, a default price of 0 and a default currency based on the company's currency will be assigned.
 * @member {Array.<Object>} prices
 */
ProductRequest.prototype['prices'] = undefined;
// Implement AddProductRequestBodyAllOf interface:
/**
 * @member {module:model/BillingFrequency1} billing_frequency
 */
AddProductRequestBodyAllOf.prototype['billing_frequency'] = undefined;
// Implement NewDealProductAllOf1 interface:
/**
 * Only available in Advanced and above plans  The number of times the billing frequency repeats for a product in a deal  When `billing_frequency` is set to `one-time`, this field must be `null`  For all the other values of `billing_frequency`, `null` represents a product billed indefinitely  Must be a positive integer less or equal to 312 
 * @member {Number} billing_frequency_cycles
 */
NewDealProductAllOf1.prototype['billing_frequency_cycles'] = undefined;




export default UpdateProductRequestBody;
