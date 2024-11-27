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


import ApiClient from "../ApiClient";
import AddLeadLabelRequest from '../model/AddLeadLabelRequest';
import DeleteLeadIdResponse from '../model/DeleteLeadIdResponse';
import GetLeadLabelsResponse from '../model/GetLeadLabelsResponse';
import LeadNotFoundResponse from '../model/LeadNotFoundResponse';
import UpdateLeadLabelRequest from '../model/UpdateLeadLabelRequest';
import UpsertLeadLabelResponse from '../model/UpsertLeadLabelResponse';

/**
* LeadLabels service.
* @module api/LeadLabelsApi
* @version 1.0.0
*/
export default class LeadLabelsApi {

    /**
    * Constructs a new LeadLabelsApi. 
    * @alias module:api/LeadLabelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add a lead label
     * Creates a lead label.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadLabelRequest} opts.addLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpsertLeadLabelResponse} and HTTP response
     */
    addLeadLabelWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['addLeadLabelRequest'];

      if (opts['name'] === undefined || opts['name'] === null) {
        throw new Error("Missing the required parameter 'name' when calling addLeadLabel");
      }
      if (opts['color'] === undefined || opts['color'] === null) {
        throw new Error("Missing the required parameter 'color' when calling addLeadLabel");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = UpsertLeadLabelResponse;
      return this.apiClient.callApi(
        '/leadLabels', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add a lead label
     * Creates a lead label.
     * @param {Object} opts Optional parameters
     * @param {module:model/AddLeadLabelRequest} opts.addLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpsertLeadLabelResponse}
     */
    addLeadLabel(opts) {
      return this.addLeadLabelWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a lead label
     * Deletes a specific lead label.
     * @param {String} id The ID of the lead label
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteLeadIdResponse} and HTTP response
     */
    deleteLeadLabelWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteLeadLabel");
      }

      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = DeleteLeadIdResponse;
      return this.apiClient.callApi(
        '/leadLabels/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a lead label
     * Deletes a specific lead label.
     * @param {String} id The ID of the lead label
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteLeadIdResponse}
     */
    deleteLeadLabel(id) {
      return this.deleteLeadLabelWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all lead labels
     * Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLeadLabelsResponse} and HTTP response
     */
    getLeadLabelsWithHttpInfo() {
      const opts = {}
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = [];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = GetLeadLabelsResponse;
      return this.apiClient.callApi(
        '/leadLabels', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all lead labels
     * Returns details of all lead labels. This endpoint does not support pagination and all labels are always returned.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLeadLabelsResponse}
     */
    getLeadLabels() {
      return this.getLeadLabelsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update a lead label
     * Updates one or more properties of a lead label. Only properties included in the request will be updated. 
     * @param {String} id The ID of the lead label
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadLabelRequest} opts.updateLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpsertLeadLabelResponse} and HTTP response
     */
    updateLeadLabelWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = opts['updateLeadLabelRequest'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateLeadLabel");
      }


      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let formParamArray = [
      ];

      let contentTypes = ['application/json', ];
      const isURLEncoded = contentTypes.includes('application/x-www-form-urlencoded');
      const isJSON = contentTypes.includes('application/json');

      if (isJSON) {
        postBody = { ...postBody, ...opts };
      } else if (isURLEncoded) {
        for (let key in opts) {
          if (opts.hasOwnProperty(key) && !formParamArray.includes(key)) {
            formParams[key] = opts[key];
          }
        }
      }

      let authNames = ['api_key', 'oauth2', ];
      let accepts = ['application/json', ];
      let returnType = UpsertLeadLabelResponse;
      return this.apiClient.callApi(
        '/leadLabels/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a lead label
     * Updates one or more properties of a lead label. Only properties included in the request will be updated. 
     * @param {String} id The ID of the lead label
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLeadLabelRequest} opts.updateLeadLabelRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpsertLeadLabelResponse}
     */
    updateLeadLabel(id, opts) {
      return this.updateLeadLabelWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}
