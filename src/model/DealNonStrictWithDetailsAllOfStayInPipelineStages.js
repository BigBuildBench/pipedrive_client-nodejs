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
 * The DealNonStrictWithDetailsAllOfStayInPipelineStages model module.
 * @module model/DealNonStrictWithDetailsAllOfStayInPipelineStages
 * @version 1.0.0
 */
class DealNonStrictWithDetailsAllOfStayInPipelineStages {
    /**
     * Constructs a new <code>DealNonStrictWithDetailsAllOfStayInPipelineStages</code>.
     * The details of the duration of the deal being in each stage of the pipeline
     * @alias module:model/DealNonStrictWithDetailsAllOfStayInPipelineStages
     */
    constructor() { 
        
        DealNonStrictWithDetailsAllOfStayInPipelineStages.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DealNonStrictWithDetailsAllOfStayInPipelineStages</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DealNonStrictWithDetailsAllOfStayInPipelineStages} obj Optional instance to populate.
     * @return {module:model/DealNonStrictWithDetailsAllOfStayInPipelineStages} The populated <code>DealNonStrictWithDetailsAllOfStayInPipelineStages</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DealNonStrictWithDetailsAllOfStayInPipelineStages();

            if (data.hasOwnProperty('times_in_stages')) {
                obj['times_in_stages'] = ApiClient.convertToType(data['times_in_stages'], Object);

                delete data['times_in_stages'];
            }
            if (data.hasOwnProperty('order_of_stages')) {
                obj['order_of_stages'] = ApiClient.convertToType(data['order_of_stages'], ['Number']);

                delete data['order_of_stages'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The number of seconds a deal has been in each stage of the pipeline
 * @member {Object} times_in_stages
 */
DealNonStrictWithDetailsAllOfStayInPipelineStages.prototype['times_in_stages'] = undefined;

/**
 * The order of the deal progression through the pipeline stages
 * @member {Array.<Number>} order_of_stages
 */
DealNonStrictWithDetailsAllOfStayInPipelineStages.prototype['order_of_stages'] = undefined;






export default DealNonStrictWithDetailsAllOfStayInPipelineStages;

