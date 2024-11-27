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
import BaseResponseWithStatus from './BaseResponseWithStatus';
import BaseWebhook from './BaseWebhook';
import WebhookAllOf from './WebhookAllOf';

/**
 * The Webhook model module.
 * @module model/Webhook
 * @version 1.0.0
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:model/Webhook
     * @implements module:model/BaseResponseWithStatus
     * @implements module:model/WebhookAllOf
     */
    constructor() { 
        BaseResponseWithStatus.initialize(this);WebhookAllOf.initialize(this);
        Webhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();
            BaseResponseWithStatus.constructFromObject(data, obj);
            WebhookAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');

                delete data['status'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = BaseWebhook.constructFromObject(data['data']);

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
 * If the response is successful or not
 * @member {Boolean} success
 */
Webhook.prototype['success'] = undefined;

/**
 * The status of the response
 * @member {String} status
 */
Webhook.prototype['status'] = undefined;

/**
 * @member {module:model/BaseWebhook} data
 */
Webhook.prototype['data'] = undefined;


// Implement BaseResponseWithStatus interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponseWithStatus.prototype['success'] = undefined;
/**
 * The status of the response
 * @member {String} status
 */
BaseResponseWithStatus.prototype['status'] = undefined;
// Implement WebhookAllOf interface:
/**
 * @member {module:model/BaseWebhook} data
 */
WebhookAllOf.prototype['data'] = undefined;




export default Webhook;

