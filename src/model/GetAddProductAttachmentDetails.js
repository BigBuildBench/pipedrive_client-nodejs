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
import AddProductAttachmentDetails from './AddProductAttachmentDetails';

/**
 * The GetAddProductAttachmentDetails model module.
 * @module model/GetAddProductAttachmentDetails
 * @version 1.0.0
 */
class GetAddProductAttachmentDetails {
    /**
     * Constructs a new <code>GetAddProductAttachmentDetails</code>.
     * @alias module:model/GetAddProductAttachmentDetails
     */
    constructor() { 
        
        GetAddProductAttachmentDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAddProductAttachmentDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAddProductAttachmentDetails} obj Optional instance to populate.
     * @return {module:model/GetAddProductAttachmentDetails} The populated <code>GetAddProductAttachmentDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAddProductAttachmentDetails();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], AddProductAttachmentDetails);

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
GetAddProductAttachmentDetails.prototype['success'] = undefined;

/**
 * The added product object attached to the deal
 * @member {module:model/AddProductAttachmentDetails} data
 */
GetAddProductAttachmentDetails.prototype['data'] = undefined;






export default GetAddProductAttachmentDetails;
