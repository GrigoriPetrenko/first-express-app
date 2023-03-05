const { ValidationError } = require('yup')

module.exports.validationErrorHandler = (err, req, res, next) => {
    // console.error(err);
    // res.status(500).send('Something broke!');
    if(err instanceof ValidationError){
      return res.status(422).send({message:err.errors[0]});
    }
    next(err)
  };
  module.exports.errorHandler  = (err, req, res, next) => {
    if (res.headersSent){
      return
    }

    const status = err.status || 500;

    const message = err.message || "server error";

    res.status(status).send({message});
  };