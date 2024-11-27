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
 * The SubscriptionInstallmentUpdateRequest model module.
 * @module model/SubscriptionInstallmentUpdateRequest
 * @version 1.0.0
 */
class SubscriptionInstallmentUpdateRequest {
    /**
     * Constructs a new <code>SubscriptionInstallmentUpdateRequest</code>.
     * @alias module:model/SubscriptionInstallmentUpdateRequest
     * @param payments {Array.<Object>} Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with a explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
     */
    constructor(payments) { 
        
        SubscriptionInstallmentUpdateRequest.initialize(this, payments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, payments) { 
        obj['payments'] = payments;
    }

    /**
     * Constructs a <code>SubscriptionInstallmentUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionInstallmentUpdateRequest} obj Optional instance to populate.
     * @return {module:model/SubscriptionInstallmentUpdateRequest} The populated <code>SubscriptionInstallmentUpdateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionInstallmentUpdateRequest();

            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [Object]);

                delete data['payments'];
            }
            if (data.hasOwnProperty('update_deal_value')) {
                obj['update_deal_value'] = ApiClient.convertToType(data['update_deal_value'], 'Boolean');

                delete data['update_deal_value'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * Array of payments. It requires a minimum structure as follows: [{ amount:SUM, description:DESCRIPTION, due_at:PAYMENT_DATE }]. Replace SUM with a payment amount, DESCRIPTION with a explanation string, PAYMENT_DATE with a date (format YYYY-MM-DD).
 * @member {Array.<Object>} payments
 */
SubscriptionInstallmentUpdateRequest.prototype['payments'] = undefined;

/**
 * Indicates that the deal value must be set to installment subscription's total value
 * @member {Boolean} update_deal_value
 */
SubscriptionInstallmentUpdateRequest.prototype['update_deal_value'] = undefined;






export default SubscriptionInstallmentUpdateRequest;

