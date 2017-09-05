import path from 'path';

class RouteConfig {
  static register(app) {
    //set routes on app here
    app.get("/users",function(req, res){
      res.json([
        {"id" : 1, "firstName": "sagar", "lastName": "mattoo", "email": "mattoo.sagar@gmail.com" },
        {"id" : 2, "firstName": "rahul", "lastName": "mattoo", "email": "mattoo.sagar@gmail.com" },
        {"id" : 3, "firstName": "sa", "lastName": "mattoo", "email": "mattoo.sagar@gmail.com" },
        {"id" : 4, "firstName": "sagar", "lastName": "mattoo", "email": "mattoo.sagar@gmail.com" },
        ])
    });
  }
}

export { RouteConfig }
