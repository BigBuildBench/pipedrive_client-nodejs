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
import BaseResponse from './BaseResponse';
import GetOnePipelineAllOf from './GetOnePipelineAllOf';
import PipelineDetails from './PipelineDetails';

/**
 * The GetOnePipeline model module.
 * @module model/GetOnePipeline
 * @version 1.0.0
 */
class GetOnePipeline {
    /**
     * Constructs a new <code>GetOnePipeline</code>.
     * @alias module:model/GetOnePipeline
     * @implements module:model/BaseResponse
     * @implements module:model/GetOnePipelineAllOf
     */
    constructor() { 
        BaseResponse.initialize(this);GetOnePipelineAllOf.initialize(this);
        GetOnePipeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetOnePipeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetOnePipeline} obj Optional instance to populate.
     * @return {module:model/GetOnePipeline} The populated <code>GetOnePipeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetOnePipeline();
            BaseResponse.constructFromObject(data, obj);
            GetOnePipelineAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');

                delete data['success'];
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = PipelineDetails.constructFromObject(data['data']);

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
GetOnePipeline.prototype['success'] = undefined;

/**
 * @member {module:model/PipelineDetails} data
 */
GetOnePipeline.prototype['data'] = undefined;


// Implement BaseResponse interface:
/**
 * If the response is successful or not
 * @member {Boolean} success
 */
BaseResponse.prototype['success'] = undefined;
// Implement GetOnePipelineAllOf interface:
/**
 * @member {module:model/PipelineDetails} data
 */
GetOnePipelineAllOf.prototype['data'] = undefined;




export default GetOnePipeline;

