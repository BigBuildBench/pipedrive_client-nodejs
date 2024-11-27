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
* Enum class InternalFieldType.
* @enum {}
* @readonly
*/
export default class InternalFieldType {
    
        /**
         * value: "boolean"
         * @const
         */
        "boolean" = "boolean";

    
        /**
         * value: "double"
         * @const
         */
        "double" = "double";

    
        /**
         * value: "int"
         * @const
         */
        "int" = "int";

    
        /**
         * value: "json"
         * @const
         */
        "json" = "json";

    
        /**
         * value: "date"
         * @const
         */
        "date" = "date";

    
        /**
         * value: "daterange"
         * @const
         */
        "daterange" = "daterange";

    
        /**
         * value: "time"
         * @const
         */
        "time" = "time";

    
        /**
         * value: "timerange"
         * @const
         */
        "timerange" = "timerange";

    
        /**
         * value: "text"
         * @const
         */
        "text" = "text";

    
        /**
         * value: "varchar"
         * @const
         */
        "varchar" = "varchar";

    
        /**
         * value: "varchar_auto"
         * @const
         */
        "varchar_auto" = "varchar_auto";

    
        /**
         * value: "varchar_options"
         * @const
         */
        "varchar_options" = "varchar_options";

    
        /**
         * value: "address"
         * @const
         */
        "address" = "address";

    
        /**
         * value: "enum"
         * @const
         */
        "enum" = "enum";

    
        /**
         * value: "monetary"
         * @const
         */
        "monetary" = "monetary";

    
        /**
         * value: "phone"
         * @const
         */
        "phone" = "phone";

    
        /**
         * value: "set"
         * @const
         */
        "set" = "set";

    
        /**
         * value: "activity"
         * @const
         */
        "activity" = "activity";

    
        /**
         * value: "deal"
         * @const
         */
        "deal" = "deal";

    
        /**
         * value: "lead"
         * @const
         */
        "lead" = "lead";

    
        /**
         * value: "org"
         * @const
         */
        "org" = "org";

    
        /**
         * value: "people"
         * @const
         */
        "people" = "people";

    
        /**
         * value: "pipeline"
         * @const
         */
        "pipeline" = "pipeline";

    
        /**
         * value: "product"
         * @const
         */
        "product" = "product";

    
        /**
         * value: "project"
         * @const
         */
        "project" = "project";

    
        /**
         * value: "stage"
         * @const
         */
        "stage" = "stage";

    
        /**
         * value: "user"
         * @const
         */
        "user" = "user";

    
        /**
         * value: "billing_frequency"
         * @const
         */
        "billing_frequency" = "billing_frequency";

    
        /**
         * value: "picture"
         * @const
         */
        "picture" = "picture";

    
        /**
         * value: "price_list"
         * @const
         */
        "price_list" = "price_list";

    
        /**
         * value: "projects_board"
         * @const
         */
        "projects_board" = "projects_board";

    
        /**
         * value: "projects_phase"
         * @const
         */
        "projects_phase" = "projects_phase";

    
        /**
         * value: "status"
         * @const
         */
        "status" = "status";

    
        /**
         * value: "visible_to"
         * @const
         */
        "visible_to" = "visible_to";

    

    /**
    * Returns a <code>InternalFieldType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/InternalFieldType} The enum <code>InternalFieldType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }

    /**
    * Initializes the fields of this object.
    * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
    * Only for internal use.
    */
    static initialize(obj) { 
    }
}
