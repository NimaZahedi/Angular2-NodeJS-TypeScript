var express = require('express');

export class Test {
  private routes = express.Router();
  constructor() {
  }

  public init() {

    this.routes.get('/test', function(req, res) {
      res.send({ message: "This is the new Module!!! :) This Is From Test Module And This Route Also Registered By 'TestModule'!" });
    });

    return this.routes;
  }
}
