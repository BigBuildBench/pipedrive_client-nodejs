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
import BaseStage from './BaseStage';
import StageWithPipelineInfoAllOf from './StageWithPipelineInfoAllOf';

/**
 * The StageWithPipelineInfo model module.
 * @module model/StageWithPipelineInfo
 * @version 1.0.0
 */
class StageWithPipelineInfo {
    /**
     * Constructs a new <code>StageWithPipelineInfo</code>.
     * @alias module:model/StageWithPipelineInfo
     * @implements module:model/BaseStage
     * @implements module:model/StageWithPipelineInfoAllOf
     */
    constructor() { 
        BaseStage.initialize(this);StageWithPipelineInfoAllOf.initialize(this);
        StageWithPipelineInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StageWithPipelineInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StageWithPipelineInfo} obj Optional instance to populate.
     * @return {module:model/StageWithPipelineInfo} The populated <code>StageWithPipelineInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StageWithPipelineInfo();
            BaseStage.constructFromObject(data, obj);
            StageWithPipelineInfoAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');

                delete data['id'];
            }
            if (data.hasOwnProperty('order_nr')) {
                obj['order_nr'] = ApiClient.convertToType(data['order_nr'], 'Number');

                delete data['order_nr'];
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');

                delete data['name'];
            }
            if (data.hasOwnProperty('active_flag')) {
                obj['active_flag'] = ApiClient.convertToType(data['active_flag'], 'Boolean');

                delete data['active_flag'];
            }
            if (data.hasOwnProperty('deal_probability')) {
                obj['deal_probability'] = ApiClient.convertToType(data['deal_probability'], 'Number');

                delete data['deal_probability'];
            }
            if (data.hasOwnProperty('pipeline_id')) {
                obj['pipeline_id'] = ApiClient.convertToType(data['pipeline_id'], 'Number');

                delete data['pipeline_id'];
            }
            if (data.hasOwnProperty('rotten_flag')) {
                obj['rotten_flag'] = ApiClient.convertToType(data['rotten_flag'], 'Boolean');

                delete data['rotten_flag'];
            }
            if (data.hasOwnProperty('rotten_days')) {
                obj['rotten_days'] = ApiClient.convertToType(data['rotten_days'], 'Number');

                delete data['rotten_days'];
            }
            if (data.hasOwnProperty('add_time')) {
                obj['add_time'] = ApiClient.convertToType(data['add_time'], 'String');

                delete data['add_time'];
            }
            if (data.hasOwnProperty('update_time')) {
                obj['update_time'] = ApiClient.convertToType(data['update_time'], 'String');

                delete data['update_time'];
            }
            if (data.hasOwnProperty('pipeline_name')) {
                obj['pipeline_name'] = ApiClient.convertToType(data['pipeline_name'], 'String');

                delete data['pipeline_name'];
            }
            if (data.hasOwnProperty('pipeline_deal_probability')) {
                obj['pipeline_deal_probability'] = ApiClient.convertToType(data['pipeline_deal_probability'], 'Boolean');

                delete data['pipeline_deal_probability'];
            }

            if (Object.keys(data).length > 0) {
                Object.assign(obj, data);
            }

        }
        return obj;
    }


}

/**
 * The ID of the stage
 * @member {Number} id
 */
StageWithPipelineInfo.prototype['id'] = undefined;

/**
 * Defines the order of the stage
 * @member {Number} order_nr
 */
StageWithPipelineInfo.prototype['order_nr'] = undefined;

/**
 * The name of the stage
 * @member {String} name
 */
StageWithPipelineInfo.prototype['name'] = undefined;

/**
 * Whether the stage is active or deleted
 * @member {Boolean} active_flag
 */
StageWithPipelineInfo.prototype['active_flag'] = undefined;

/**
 * The success probability percentage of the deal. Used/shown when the deal weighted values are used.
 * @member {Number} deal_probability
 */
StageWithPipelineInfo.prototype['deal_probability'] = undefined;

/**
 * The ID of the pipeline to add the stage to
 * @member {Number} pipeline_id
 */
StageWithPipelineInfo.prototype['pipeline_id'] = undefined;

/**
 * Whether deals in this stage can become rotten
 * @member {Boolean} rotten_flag
 */
StageWithPipelineInfo.prototype['rotten_flag'] = undefined;

/**
 * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
 * @member {Number} rotten_days
 */
StageWithPipelineInfo.prototype['rotten_days'] = undefined;

/**
 * The stage creation time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
StageWithPipelineInfo.prototype['add_time'] = undefined;

/**
 * The stage update time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
StageWithPipelineInfo.prototype['update_time'] = undefined;

/**
 * The name of the pipeline
 * @member {String} pipeline_name
 */
StageWithPipelineInfo.prototype['pipeline_name'] = undefined;

/**
 * The pipeline deal probability. When `true`, overrides the stage probability.
 * @member {Boolean} pipeline_deal_probability
 */
StageWithPipelineInfo.prototype['pipeline_deal_probability'] = undefined;


// Implement BaseStage interface:
/**
 * The ID of the stage
 * @member {Number} id
 */
BaseStage.prototype['id'] = undefined;
/**
 * Defines the order of the stage
 * @member {Number} order_nr
 */
BaseStage.prototype['order_nr'] = undefined;
/**
 * The name of the stage
 * @member {String} name
 */
BaseStage.prototype['name'] = undefined;
/**
 * Whether the stage is active or deleted
 * @member {Boolean} active_flag
 */
BaseStage.prototype['active_flag'] = undefined;
/**
 * The success probability percentage of the deal. Used/shown when the deal weighted values are used.
 * @member {Number} deal_probability
 */
BaseStage.prototype['deal_probability'] = undefined;
/**
 * The ID of the pipeline to add the stage to
 * @member {Number} pipeline_id
 */
BaseStage.prototype['pipeline_id'] = undefined;
/**
 * Whether deals in this stage can become rotten
 * @member {Boolean} rotten_flag
 */
BaseStage.prototype['rotten_flag'] = undefined;
/**
 * The number of days the deals not updated in this stage would become rotten. Applies only if the `rotten_flag` is set.
 * @member {Number} rotten_days
 */
BaseStage.prototype['rotten_days'] = undefined;
/**
 * The stage creation time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} add_time
 */
BaseStage.prototype['add_time'] = undefined;
/**
 * The stage update time. Format: YYYY-MM-DD HH:MM:SS.
 * @member {String} update_time
 */
BaseStage.prototype['update_time'] = undefined;
// Implement StageWithPipelineInfoAllOf interface:
/**
 * The name of the pipeline
 * @member {String} pipeline_name
 */
StageWithPipelineInfoAllOf.prototype['pipeline_name'] = undefined;
/**
 * The pipeline deal probability. When `true`, overrides the stage probability.
 * @member {Boolean} pipeline_deal_probability
 */
StageWithPipelineInfoAllOf.prototype['pipeline_deal_probability'] = undefined;




export default StageWithPipelineInfo;

