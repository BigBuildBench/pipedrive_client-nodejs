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
import AddFile from '../model/AddFile';
import CreateRemoteFileAndLinkItToItem from '../model/CreateRemoteFileAndLinkItToItem';
import DeleteFile from '../model/DeleteFile';
import GetAllFiles from '../model/GetAllFiles';
import GetOneFile from '../model/GetOneFile';
import LinkRemoteFileToItem from '../model/LinkRemoteFileToItem';
import UpdateFile from '../model/UpdateFile';

/**
* Files service.
* @module api/FilesApi
* @version 1.0.0
*/
export default class FilesApi {

    /**
    * Constructs a new FilesApi. 
    * @alias module:api/FilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient;
    }



    /**
     * Add file
     * Lets you upload a file and associate it with a deal, person, organization, activity, product or lead. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-file\" target=\"_blank\" rel=\"noopener noreferrer\">adding a file</a>.
     * @param {File} file A single file, supplied in the multipart/form-data encoding and contained within the given boundaries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.dealId The ID of the deal to associate file(s) with
     * @param {Number} opts.personId The ID of the person to associate file(s) with
     * @param {Number} opts.orgId The ID of the organization to associate file(s) with
     * @param {Number} opts.productId The ID of the product to associate file(s) with
     * @param {Number} opts.activityId The ID of the activity to associate file(s) with
     * @param {String} opts.leadId The ID of the lead to associate file(s) with
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AddFile} and HTTP response
     */
    addFileWithHttpInfo(file, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling addFile");
      }







      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': file,
        'deal_id': opts['dealId'],
        'person_id': opts['personId'],
        'org_id': opts['orgId'],
        'product_id': opts['productId'],
        'activity_id': opts['activityId'],
        'lead_id': opts['leadId'],
      };

      let formParamArray = [
        'file',
        'dealId',
        'personId',
        'orgId',
        'productId',
        'activityId',
        'leadId',
      ];

      let contentTypes = ['multipart/form-data', ];
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
      let returnType = AddFile;
      return this.apiClient.callApi(
        '/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add file
     * Lets you upload a file and associate it with a deal, person, organization, activity, product or lead. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-file\" target=\"_blank\" rel=\"noopener noreferrer\">adding a file</a>.
     * @param {File} file A single file, supplied in the multipart/form-data encoding and contained within the given boundaries
     * @param {Object} opts Optional parameters
     * @param {Number} opts.dealId The ID of the deal to associate file(s) with
     * @param {Number} opts.personId The ID of the person to associate file(s) with
     * @param {Number} opts.orgId The ID of the organization to associate file(s) with
     * @param {Number} opts.productId The ID of the product to associate file(s) with
     * @param {Number} opts.activityId The ID of the activity to associate file(s) with
     * @param {String} opts.leadId The ID of the lead to associate file(s) with
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AddFile}
     */
    addFile(file, opts) {
      return this.addFileWithHttpInfo(file, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Create a remote file and link it to an item
     * Creates a new empty file in the remote location (`googledrive`) that will be linked to the item you supply. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-remote-file\" target=\"_blank\" rel=\"noopener noreferrer\">adding a remote file</a>.
     * @param {module:model/String} fileType The file type
     * @param {String} title The title of the file
     * @param {module:model/String} itemType The item type
     * @param {Number} itemId The ID of the item to associate the file with
     * @param {module:model/String} remoteLocation The location type to send the file to. Only `googledrive` is supported at the moment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateRemoteFileAndLinkItToItem} and HTTP response
     */
    addFileAndLinkItWithHttpInfo(fileType, title, itemType, itemId, remoteLocation) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'fileType' is set
      if (fileType === undefined || fileType === null) {
        throw new Error("Missing the required parameter 'fileType' when calling addFileAndLinkIt");
      }

      // verify the required parameter 'title' is set
      if (title === undefined || title === null) {
        throw new Error("Missing the required parameter 'title' when calling addFileAndLinkIt");
      }

      // verify the required parameter 'itemType' is set
      if (itemType === undefined || itemType === null) {
        throw new Error("Missing the required parameter 'itemType' when calling addFileAndLinkIt");
      }

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling addFileAndLinkIt");
      }

      // verify the required parameter 'remoteLocation' is set
      if (remoteLocation === undefined || remoteLocation === null) {
        throw new Error("Missing the required parameter 'remoteLocation' when calling addFileAndLinkIt");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file_type': fileType,
        'title': title,
        'item_type': itemType,
        'item_id': itemId,
        'remote_location': remoteLocation,
      };

      let formParamArray = [
        'fileType',
        'title',
        'itemType',
        'itemId',
        'remoteLocation',
      ];

      let contentTypes = ['application/x-www-form-urlencoded', ];
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
      let returnType = CreateRemoteFileAndLinkItToItem;
      return this.apiClient.callApi(
        '/files/remote', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a remote file and link it to an item
     * Creates a new empty file in the remote location (`googledrive`) that will be linked to the item you supply. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-remote-file\" target=\"_blank\" rel=\"noopener noreferrer\">adding a remote file</a>.
     * @param {module:model/String} fileType The file type
     * @param {String} title The title of the file
     * @param {module:model/String} itemType The item type
     * @param {Number} itemId The ID of the item to associate the file with
     * @param {module:model/String} remoteLocation The location type to send the file to. Only `googledrive` is supported at the moment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateRemoteFileAndLinkItToItem}
     */
    addFileAndLinkIt(fileType, title, itemType, itemId, remoteLocation) {
      return this.addFileAndLinkItWithHttpInfo(fileType, title, itemType, itemId, remoteLocation)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Delete a file
     * Marks a file as deleted. After 30 days, the file will be permanently deleted.
     * @param {Number} id The ID of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteFile} and HTTP response
     */
    deleteFileWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteFile");
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
      let returnType = DeleteFile;
      return this.apiClient.callApi(
        '/files/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a file
     * Marks a file as deleted. After 30 days, the file will be permanently deleted.
     * @param {Number} id The ID of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteFile}
     */
    deleteFile(id) {
      return this.deleteFileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Download one file
     * Initializes a file download.
     * @param {Number} id The ID of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Blob} and HTTP response
     */
    downloadFileWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadFile");
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
      let accepts = ['application/octet-stream', ];
      let returnType = 'Blob';
      return this.apiClient.callApi(
        '/files/{id}/download', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Download one file
     * Initializes a file download.
     * @param {Number} id The ID of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Blob}
     */
    downloadFile(id) {
      return this.downloadFileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get one file
     * Returns data about a specific file.
     * @param {Number} id The ID of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetOneFile} and HTTP response
     */
    getFileWithHttpInfo(id) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFile");
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
      let returnType = GetOneFile;
      return this.apiClient.callApi(
        '/files/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get one file
     * Returns data about a specific file.
     * @param {Number} id The ID of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetOneFile}
     */
    getFile(id) {
      return this.getFileWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Get all files
     * Returns data about all files.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {String} opts.sort The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAllFiles} and HTTP response
     */
    getFilesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;




      let pathParams = {
      };
      let queryParams = {
        'start': opts['start'] === undefined ? opts['start'] : opts['start'],
        'limit': opts['limit'] === undefined ? opts['limit'] : opts['limit'],
        'sort': opts['sort'] === undefined ? opts['sort'] : opts['sort'],
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
      let returnType = GetAllFiles;
      return this.apiClient.callApi(
        '/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all files
     * Returns data about all files.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Pagination start (default to 0)
     * @param {Number} opts.limit Items shown per page
     * @param {String} opts.sort The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAllFiles}
     */
    getFiles(opts) {
      return this.getFilesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Link a remote file to an item
     * Links an existing remote file (`googledrive`) to the item you supply. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-remote-file\" target=\"_blank\" rel=\"noopener noreferrer\">adding a remote file</a>.
     * @param {module:model/String} itemType The item type
     * @param {Number} itemId The ID of the item to associate the file with
     * @param {String} remoteId The remote item ID
     * @param {module:model/String} remoteLocation The location type to send the file to. Only `googledrive` is supported at the moment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LinkRemoteFileToItem} and HTTP response
     */
    linkFileToItemWithHttpInfo(itemType, itemId, remoteId, remoteLocation) {
      const opts = {}
      let postBody = null;

      // verify the required parameter 'itemType' is set
      if (itemType === undefined || itemType === null) {
        throw new Error("Missing the required parameter 'itemType' when calling linkFileToItem");
      }

      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling linkFileToItem");
      }

      // verify the required parameter 'remoteId' is set
      if (remoteId === undefined || remoteId === null) {
        throw new Error("Missing the required parameter 'remoteId' when calling linkFileToItem");
      }

      // verify the required parameter 'remoteLocation' is set
      if (remoteLocation === undefined || remoteLocation === null) {
        throw new Error("Missing the required parameter 'remoteLocation' when calling linkFileToItem");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'item_type': itemType,
        'item_id': itemId,
        'remote_id': remoteId,
        'remote_location': remoteLocation,
      };

      let formParamArray = [
        'itemType',
        'itemId',
        'remoteId',
        'remoteLocation',
      ];

      let contentTypes = ['application/x-www-form-urlencoded', ];
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
      let returnType = LinkRemoteFileToItem;
      return this.apiClient.callApi(
        '/files/remoteLink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Link a remote file to an item
     * Links an existing remote file (`googledrive`) to the item you supply. For more information, see the tutorial for <a href=\"https://pipedrive.readme.io/docs/adding-a-remote-file\" target=\"_blank\" rel=\"noopener noreferrer\">adding a remote file</a>.
     * @param {module:model/String} itemType The item type
     * @param {Number} itemId The ID of the item to associate the file with
     * @param {String} remoteId The remote item ID
     * @param {module:model/String} remoteLocation The location type to send the file to. Only `googledrive` is supported at the moment.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LinkRemoteFileToItem}
     */
    linkFileToItem(itemType, itemId, remoteId, remoteLocation) {
      return this.linkFileToItemWithHttpInfo(itemType, itemId, remoteId, remoteLocation)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


    /**
     * Update file details
     * Updates the properties of a file.
     * @param {Number} id The ID of the file
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The visible name of the file
     * @param {String} opts.description The description of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateFile} and HTTP response
     */
    updateFileWithHttpInfo(id, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateFile");
      }



      let pathParams = {
        'id': id,
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'description': opts['description'],
      };

      let formParamArray = [
        'name',
        'description',
      ];

      let contentTypes = ['application/x-www-form-urlencoded', ];
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
      let returnType = UpdateFile;
      return this.apiClient.callApi(
        '/files/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update file details
     * Updates the properties of a file.
     * @param {Number} id The ID of the file
     * @param {Object} opts Optional parameters
     * @param {String} opts.name The visible name of the file
     * @param {String} opts.description The description of the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateFile}
     */
    updateFile(id, opts) {
      return this.updateFileWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data;
        });
    }


}