/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  "DELETE /user/delete/:id": {
    controller: "user",
    action: "deleteUser"
  },
  "PUT /user/update/:id": {
    controller: "user",
    action: "updateUser"
  },
  "POST /user/create": {
    controller: "user",
    action: "createUser"
  },
  "GET /user/show/:id": {
    controller: "user",
    action: "showUser"
  },
  "DELETE /device/delete/:id": {
    controller: "device",
    action: "deleteDevice"
  },
  "PUT /device/update/:id": {
    controller: "device",
    action: "updateDevice"
  },
  "POST /device/create": {
    controller: "device",
    action: "createDevice"
  },
  "GET /device/show/:id": {
    controller: "device",
    action: "showDevice"
  },
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
